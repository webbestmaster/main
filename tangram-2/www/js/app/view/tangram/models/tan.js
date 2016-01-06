import Backbone from './../../../../lib/backbone';
import mediator from './../../../../services/mediator';

var Tan = Backbone.Model.extend({

	styles: {
		fill: '#c00',
		stroke: '#0c0',
		'stroke-width': 0.01
	},

	activeStyles: {
		fill: '#0c0',
		stroke: '#c00',
		'stroke-width': 0.01
	},

	nodeAttributes: {
		'stroke-linejoin': 'round',
		'stroke-alignment': 'center'
	},

	setBy: function (key, deltaValue) {

		var tan = this;

		return tan.set(key, tan.get(key) + deltaValue);

	},

	initialize: function () {

		var tan = this;

		tan.initCoordinates();

		tan.bindEventListeners();

	},

	setLastAccept: function () {
		return this.set('last-accept', Date.now());
	},

	getLastAccept: function () {
		return this.get('last-accept');
	},

	initCoordinates: function () {

		var tan = this,
			scale = tan.get('scale'),
			maxX = -Infinity,
			maxY = -Infinity,
			minX = Infinity,
			minY = Infinity,
			sizeX,
			sizeY,
			halfSizeX,
			halfSizeY,
			rotateOriginX,
			rotateOriginY,
			coordinates = tan.get('coordinates');

		// push init coordinates to real tan coordinates
		tan.set('coordinates', coordinates.map(function (xy) {

			var x = xy.x * scale,
				y = xy.y * scale;

			maxX = x > maxX ? x : maxX;
			maxY = y > maxY ? y : maxY;
			minX = x < minX ? x : minX;
			minY = y < minY ? y : minY;

			return {x: x, y: y};

		}));

		sizeX = maxX - minX;
		sizeY = maxY - minY;

		halfSizeX = sizeX / 2;
		halfSizeY = sizeY / 2;

		rotateOriginX = minX + halfSizeX;
		rotateOriginY = minY + halfSizeY;

		tan.set({
			maxX: maxX,
			maxY: maxY,
			centerX: minX + halfSizeX,
			centerY: minY + halfSizeY,
			minX: minX,
			minY: minY,
			sizeX: sizeX,
			sizeY: sizeY,
			halfSizeX: halfSizeX,
			halfSizeY: halfSizeY,
			dx: 0,
			dy: 0,
			rotate: 0,
			rotateOriginX: rotateOriginX,
			rotateOriginY: rotateOriginY,
			isFlip: false,
			isActive: false
		});

	},

	bindEventListeners: function () {

		var tan = this;

		mediator.installTo(tan);

		tan.on('change:isActive', tan.setStateActiveDeActive);

		tan.subscribe('deviceAction:moving', tan.onMove);

	},

	flip: function () {

		var tan = this;

		tan.set('isFlip', !tan.get('isFlip'));

		tan.reDraw();

	},

	onMove: function (data) {

		var tan = this;
		return tan.get('isActive') && tan.move(data);

	},

	move: function (data) {

		var tan = this,
			dx = data.dx,
			dy = data.dy;

		tan.setBy('dx', data.dx);
		tan.setBy('dy', data.dy);

		tan.reDraw();

	},

	setStateActiveDeActive: function (self, isActive) {

		var tan = this;

		if (isActive) {
			tan.publish('rotater:deActivate');
			tan.setLastAccept();
		}

		tan.drawActiveDeActive(isActive);

		tan.moveToUpDown(isActive)

	},

	drawActiveDeActive: function (isActive) {

		var tan = this;

		tan.setStyles(isActive && tan.activeStyles);

	},

	moveToUpDown: function (isActive) {

		if (!isActive) {
			return;
		}

		var node = this.get('node');

		node.parentElement.appendChild(node);

	},

	getCoordinates: function () {

		var tan = this,
			coordinates = tan.get('coordinates'),
			toRad = Math.PI / 180,
			dx = tan.get('dx'),
			dy = tan.get('dy'),
			rotate = tan.get('rotate'),
			isFlip = tan.get('isFlip'),
			centerX = tan.get('centerX'),
			centerY = tan.get('centerY');

		return coordinates.map(function (xy) {

			var x = isFlip ? (xy.x + 2 * (centerX - xy.x)) : xy.x,
				y = xy.y,
				centeredX = x - centerX,
				centeredY = y - centerY,
				lineSize = Math.sqrt(centeredX * centeredX + centeredY * centeredY),
				centeredAngle = Math.atan2(centeredY, centeredX),
				newAngle = centeredAngle + rotate * (isFlip ? -1 : 1) * toRad,
				newX = Math.cos(newAngle) * lineSize,
				newY = Math.sin(newAngle) * lineSize,
				rotateDeltaX = newX - centeredX,
				rotateDeltaY = newY - centeredY;

			return {
				x: x + dx + rotateDeltaX,
				y: y + dy + rotateDeltaY
			}

		});

	},

	getAlignCoordinates: function () {

		var tan = this,
			getAlignCoordinatesOfLine = tan.getAlignCoordinatesOfLine,
			parts = tan.get('parts'),
			coordinates = tan.getCoordinates(),
			alignCoordinates = [];

		coordinates.forEach(function (xy, index, arr) {
			alignCoordinates = alignCoordinates.concat(getAlignCoordinatesOfLine(xy, arr[index + 1] || arr[0], parts));
		});

		return coordinates.concat(alignCoordinates);

	},

	getAlignCoordinatesOfLine: function getAlignCoordinatesOfLine(xy0, xy1, parts) {

		var centerXY = {
			x: (xy0.x + xy1.x) / 2,
			y: (xy0.y + xy1.y) / 2
		};

		if (parts === 2) {
			return [centerXY];
		}

		// parts === 4
		return [centerXY].concat(getAlignCoordinatesOfLine(xy0, centerXY, 2), getAlignCoordinatesOfLine(centerXY, xy1, 2));

	},

	getAngleBetweenLines: function (xy0, xy1, xy2, xy3) { // (xy0, xy1) - begin and end of first line, (xy2, xy3) - begin and end of second line

		var beginX = xy1.x - xy0.x,
			beginY = xy1.y - xy0.y,
			endX = xy3.x - xy2.x,
			endY = xy3.y - xy2.y;

		return (Math.atan2(endY, endX) - Math.atan2(beginY, beginX)) * 180 / Math.PI;

	},

	//getAngleFromPoint: function (x, y) {
	//
	//	return Math.atan2(y, x) * 180 / Math.PI;
	//
	//},

	getCenterCoordinates: function () {

		var tan = this;

		return {
			x: tan.get('dx') + tan.get('centerX'),
			y: tan.get('dy') + tan.get('centerY')
		}

	},

	/*
	 setCoordinates: function (coordinates) {

	 var tan = this;

	 _.each(coordinates, function (xy, i) {
	 tan.set('x' + i, xy.x);
	 tan.set('y' + i, xy.y);
	 });

	 return tan;

	 },
	 */

	drawTo: function (drawNode) {

		var tan = this,
			tanNode = tan.get('node'),
			polygonCoordinates = tan.getInitialPolygonCoordinates();

		if (!tanNode) {
			tanNode = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
			tan.set('node', tanNode);
			tan.setStyles();
			drawNode.appendChild(tanNode);
		}

		tanNode.setAttribute('points', polygonCoordinates);

	},

	reDraw: function () {

		var tan = this,
			tanNode = tan.get('node'),
			transformation = tan.getTransform().attribute;

		tanNode.setAttribute('transform', transformation);

	},

	getTransform: function () {

		var tan = this,
			rotate = tan.get('rotate'),
			rotateOriginX = tan.get('rotateOriginX'),
			rotateOriginY = tan.get('rotateOriginY'),
			dx = tan.get('dx'),
			flipDx,
			dy = tan.get('dy'),
			isFlip = tan.get('isFlip'),
			translateSrt = 'translate(dx,dy)',
			rotateSrt = 'rotate(angle rotateOriginX rotateOriginY)',
			scaleStr = 'scale(-1,1)',
			attribute = [];

		if (isFlip) {
			flipDx = -2 * tan.get('minX') - dx - tan.get('sizeX');
			attribute.push(scaleStr);
			attribute.push(
				translateSrt
					.replace('dx', flipDx)
					.replace('dy', dy)
			);
		} else {
			attribute.push(
				translateSrt
					.replace('dx', dx)
					.replace('dy', dy)
			);
		}

		attribute.push(
			rotateSrt
				.replace('angle', rotate)
				.replace('rotateOriginX', rotateOriginX)
				.replace('rotateOriginY', rotateOriginY)
		);

		return {
			dx: dx,
			dy: dy,
			rotate: rotate,
			isFlip: isFlip,
			flipDx: flipDx,
			attribute: attribute.join(' ')
		}

	},

	setStyles: function (stylesArg) {

		var tan = this,
			node = tan.get('node'),
			styles = stylesArg || tan.styles,
			nodeAttributes = tan.nodeAttributes,
			styleStr = '',
			attr = document.createAttribute('style');

		Object.keys(styles).forEach(function (key) {
			var value = (key === 'stroke-width') ? styles[key] * tan.get('scale') : styles[key];
			styleStr += key + ':' + value + ';';
		});

		attr.value = styleStr;
		node.setAttributeNode(attr);

		Object.keys(nodeAttributes).forEach(function (key) {
			var attr = document.createAttribute(key);
			attr.value = nodeAttributes[key];
			node.setAttributeNode(attr);
		});

	},

	getInitialPolygonCoordinates: function () {

		var tan = this,
			scale = tan.get('scale');

		return tan.get('coordinates').map(function (xy) {
			return xy.x + ',' + xy.y;
		}).join(' ');

	},

	isIn: function (xy) {

		var tan = this,
			coordinates = tan.getCoordinates(),
			anglesLength = coordinates.length;

		if (anglesLength === 3) {
			return tan.isInTriangle.apply(tan, coordinates.concat([xy]));
		}

		if (anglesLength === 4) {
			return tan.isInFourangle.apply(tan, coordinates.concat([xy]));
		}

	},

	// x0, y0 - point coordinates

	isInTriangle: function (xy1, xy2, xy3, xy0) {

		var a, b, c,
			x1 = xy1.x,
			y1 = xy1.y,
			x2 = xy2.x,
			y2 = xy2.y,
			x3 = xy3.x,
			y3 = xy3.y,
			x0 = xy0.x,
			y0 = xy0.y;

		a = (x1 - x0) * (y2 - y1) - (x2 - x1) * (y1 - y0);
		b = (x2 - x0) * (y3 - y2) - (x3 - x2) * (y2 - y0);
		c = (x3 - x0) * (y1 - y3) - (x1 - x3) * (y3 - y0);

		return (a >= 0 && b >= 0 && c >= 0) || (a <= 0 && b <= 0 && c <= 0);

	},

	isInFourangle: function (xy1, xy2, xy3, xy4, xy0) {

		var tan = this;

		return tan.isInTriangle(xy1, xy2, xy3, xy0) || tan.isInTriangle(xy3, xy4, xy1, xy0);

	},

	getAtoms: function () {

		var tan = this,
			triangles;

		switch (tan.get('type')) {

			case 'triangleBig':

				triangles = tan.getTrianglesForTriangleBig();

				break;

			case 'triangleMedium':

				triangles = tan.getTrianglesForTriangleMedium();

				break;

			case 'triangleSmall':

				triangles = tan.getTrianglesForTriangleSmall();

				break;

			case 'square':

				triangles = tan.getTrianglesForSquare();

				break;

			case 'parallelogram':

				triangles = tan.getTrianglesForParallelogram();

				break;

		}

		return tan.toAtomicTans(triangles);

	},

	toAtomicTans: function (trianglesArr) {

		var tan = this,
			divideTriangle = tan.divideTriangle.bind(tan),
			triangleToAtom = tan.triangleToAtom.bind(tan),
			triangles = [];

		trianglesArr.forEach(function (triangleParent) {
			triangles = triangles.concat(divideTriangle(triangleParent));
		});

		return triangles.map(triangleToAtom);

	},

	triangleToAtom: function (triangle) {

		// get center and angle

		var tan = this,
			scale = tan.get('scale'),
			rightAngle = triangle[0],   // first angle is 90deg - see tan.divideTriangle
			rightAngleX = rightAngle.x,
			rightAngleY = rightAngle.y,
			midCoordinate = tan.getAlignCoordinatesOfLine(triangle[1],  triangle[2], 2)[0],
			midX = midCoordinate.x,
			midY = midCoordinate.y,
			angle = Math.atan2(rightAngleY - midY, rightAngleX - midX) * 180 / Math.PI;

		angle = Math.round(angle / 45) * 45;
		angle = angle || 0; // -0 to 0

		rightAngleX = Math.round( (rightAngleX / scale) * 1e8 ) / 1e8;
		rightAngleY = Math.round( (rightAngleY / scale) * 1e8 ) / 1e8;

		rightAngleX = rightAngleX || 0;
		rightAngleY = rightAngleY || 0;

		return [rightAngleX, rightAngleY, angle];

	},

	divideTriangle: function (triangle) {

		// find max side
		var tan = this,
			getAlignCoordinatesOfLine = tan.getAlignCoordinatesOfLine,
			coordinates = triangle,
			pow = Math.pow.bind(Math),
			midCoordinate,
			paths,
			maxPathIndex,
			maxSizeXY0,
			maxSizeXY1,
			midAngle;

		// find bigger side
		paths = coordinates.map(function (xy, index, arr) {

			var next = arr[index + 1] || arr[0];

			return pow(xy.x - next.x, 2) + pow(xy.y - next.y, 2);

		});

		maxPathIndex = paths.indexOf(Math.max.apply(Math, paths));

		maxSizeXY0 = coordinates[maxPathIndex];
		maxSizeXY1 = coordinates[maxPathIndex + 1] || coordinates[0];

		midCoordinate = getAlignCoordinatesOfLine(maxSizeXY0, maxSizeXY1, 2)[0];

		midAngle = coordinates[maxPathIndex - 1] || coordinates[2];

		// point with right angle (90deg) at first
		return [
			[midCoordinate, midAngle, maxSizeXY0],
			[midCoordinate, midAngle, maxSizeXY1]
		];

	},

	getTrianglesForTriangleBig: function () {

		var tan = this,
			getAlignCoordinatesOfLine = tan.getAlignCoordinatesOfLine,
			coordinates = tan.getCoordinates(),
			midCoordinates = [];

		coordinates.forEach(function (xy, index, arr) {
			midCoordinates = midCoordinates.concat(getAlignCoordinatesOfLine(xy, arr[index + 1] || arr[0], 2));
		});

		return [
			[coordinates[0], midCoordinates[0], midCoordinates[2]], //0
			[coordinates[1], midCoordinates[0], midCoordinates[1]], // 1
			[coordinates[2], midCoordinates[1], midCoordinates[2]], // 2
			midCoordinates // inner
		];

	},

	getTrianglesForTriangleMedium: function () {

		var tan = this;

		return tan.divideTriangle(tan.getCoordinates());

	},

	getTrianglesForTriangleSmall: function () {

		return [this.getCoordinates()];

	},

	getTrianglesForSquare: function () {

		var coordinates = this.getCoordinates();

		return [
			[coordinates[0], coordinates[1], coordinates[2]],
			[coordinates[2], coordinates[3], coordinates[0]]
		];

	},

	getTrianglesForParallelogram: function () {

		var tan = this,
			coordinates = tan.getCoordinates(),
			pow = Math.pow.bind(Math),
			diagonal0Size = pow(coordinates[0].x - coordinates[2].x, 2) + pow(coordinates[0].y - coordinates[2].y, 2),
			diagonal1Size = pow(coordinates[1].x - coordinates[3].x, 2) + pow(coordinates[1].y - coordinates[3].y, 2);

		if (diagonal0Size > diagonal1Size) {
			return [
				[coordinates[2], coordinates[1], coordinates[3]],
				[coordinates[0], coordinates[1], coordinates[3]]
			];
		}

		return [
			[coordinates[3], coordinates[2], coordinates[0]],
			[coordinates[1], coordinates[2], coordinates[0]]
		];

	}

});

export default Tan;