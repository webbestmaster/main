(function (win, doc, docElem, $) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	function Mover(data) {

		this.attr = {};

		this.set('$wrapper', data.wrapper);
		this.set('$container', data.container);

		this.set('onRedraw', data.onRedraw || false);

		this.set('isTouch', 'ontouchstart' in document);

		this.setEventMap();

	}

	Mover.prototype = {
		init: function (data) {

			data = data || {};

			if (data.wrapper) {
				this.set('$wrapper', data.wrapper);
			}

			if (data.container) {
				this.set('$container', data.container);
			}

			// detect vendor prefix for css and js
			this.setPrefix();

			// set styles and other for container
			this.setDefaultContainerState();

			this.bindEventListeners(); // todo: unbind event listeners

			return this;

		},
		get: function (key) {
			return this.attr[key];
		},
		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},
		detectSizes: function () {

			['$wrapper', '$container'].forEach(function (nodeName) {
				var $node = this.get(nodeName);
				this.set(nodeName + '.width', $node.width());
				this.set(nodeName + '.height', $node.height());
			}, this);

		},
		bindEventListeners: function () {

			var $wrapper = this.get('$wrapper'),
				eventMap = this.get('eventMap'),
				isTouch = this.get('isTouch');

			$wrapper.on(eventMap.down, $.proxy( this, 'onDown' )); // todo: remove listeners -> wrapper.off( eventMap.down, this.onDown );
			$wrapper.on(eventMap.move, $.proxy( this, 'onMove' )); // http://api.jquery.com/jquery.proxy/
			$wrapper.on(eventMap.up, $.proxy( this, 'onUp' ));

			if ( !isTouch ) { // fix for PC
				$wrapper.on('mouseleave', $.proxy( this, 'onUp' ));
			}


		},

		onDown: function (e) {

			var events = this.getEvents(e),
				startEventXY = this.getAverageXY(events.events),
				$container = this.get('$container'),
				styleXY = $container.attr('style'),
				pre = this.get('prefix').css,
				startContainerXY = this.getXYZSFromStyle(styleXY);

			$container.css(pre + 'transition', 'none');

			// set start EVENTs position
			this.set('startEventXY', startEventXY);
			// set start container position
			this.set('startContainerXY', startContainerXY);
			this.set('currentContainerXY', startContainerXY);

			this.set('isActive', true);

			this.clearLogMoving();
			this.logMoving(startEventXY);

			this.detectSizes();
			this.detectEdgePositions();

			// detect start zooming
			if (events.length === 2) {
				this.set('pinchIsActive', true);
				this.set('pinchStartEvents', events.events);
			} else {
				this.set('pinchIsActive', false);
			}

		},

		onMove: function (e) {

			if ( !this.get('isActive') ) {
				return false;
			}

			var events = this.getEvents(e),
				currentEventXY = this.getAverageXY(events.events),
				currentContainerXY = this.get('currentContainerXY'),
				edges = this.get('edges'),
				logMoving = this.get('logMoving'),
				lastEventXY = logMoving[logMoving.length - 1],
				pinchData,
				x,
				y,
				dx,
				dy;

			dx = lastEventXY.x - currentEventXY.x;
			x = currentContainerXY.x - dx;

			dy = lastEventXY.y - currentEventXY.y;
			y = currentContainerXY.y - dy;

			if ( x > edges.max.x || x < edges.min.x ) {
				x += dx * 0.4;
			}

			if ( y > edges.max.y || y < edges.min.y ) {
				y += dy * 0.4;
			}

			this.set('currentContainerXY', {
				x: x,
				y: y
			});

			if ( this.get('pinchIsActive') ) { // zooming
				pinchData = this.getPinchData(events.events);
				this.setStyleByXYZS({
					x: x,
					y: y,
					scale: pinchData.scale
				});
			} else { // just moving
				this.setStyleByXYZS({
					x: x,
					y: y
				});
			}

			this.logMoving(currentEventXY);

		},

		onUp: function (e) {

			var events = this.getEvents(e),
				isTouch = this.get('isTouch');

			if ( events.events.length === 0 || !isTouch ) { // if is not touch device - stop moving
				this.set('isActive', false);
				this.sliding();
				this.clearLogMoving();
				return;
			}

			if (events.events.length === 1 && isTouch ) { // 2 fingers -> 1 finger
				this.set('pinchIsActive', false);
				this.redrawMap();
			}

			this.onDown(e);

		},

		redrawMap: function () {

			var onRedraw = this.get('onRedraw');

			if ( !onRedraw ) {
				return false;
			}

			var $container = this.get('$container'),
				style = $container.attr('style'),
				xyzs = this.getXYZSFromStyle(style),
				scale = xyzs.scale;

			onRedraw.fn.call(onRedraw.context, {
				scale: scale
			});

		},

		getPinchData: function (events) {

			var startEvents = this.get('pinchStartEvents'),
				before,
				after;

			before = Math.pow(startEvents[0].x - startEvents[1].x, 2) + Math.pow(startEvents[0].y - startEvents[1].y, 2);
			before = Math.pow(before, 0.5);

			after = Math.pow(events[0].x - events[1].x, 2) + Math.pow(events[0].y - events[1].y, 2);
			after = Math.pow(after, 0.5);

			return {
				scale: (after / before) || 1
			};

		},

		sliding: function () {

			var logMoving = this.get('logMoving');

			if ( logMoving.length <= 1 ) {
				return false;
			}

			var begin = logMoving.shift(),
				end = logMoving.pop(),
				$container = this.get('$container'),
				currentContainerXY = this.get('currentContainerXY'),
				edges = this.get('edges'),
				pre = this.get('prefix').css,
				dx = begin.x - end.x,
				dy = begin.y - end.y,
				dTime = end.timeStamp - begin.timeStamp,
				endX = currentContainerXY.x - dx * 3,
				endY = currentContainerXY.y - dy * 3,
				endTime = Math.min(dTime * 3, 300)  + 'ms';

			// adjust end coordinates
			endX = endX < edges.max.x ? endX : edges.max.x;
			endX = endX > edges.min.x ? endX : edges.min.x;
			endY = endY < edges.max.y ? endY : edges.max.y;
			endY = endY > edges.min.y ? endY : edges.min.y;

			$container.css(pre + 'transition', 'all ' + endTime + ' ease-out');

			this.setStyleByXYZS({
				x: endX,
				y: endY
			});

		},

		setStyleByXYZS: function (xyzs) {

			xyzs.x = Math.round(xyzs.x);
			xyzs.y = Math.round(xyzs.y);
			xyzs.z = Math.round(xyzs.z || 0);
			xyzs.scale = xyzs.scale || 1;

			var pre = this.get('prefix').css,
				$container = this.get('$container');

			$container.css(pre + 'transform', 'translate3d(' + xyzs.x + 'px, ' + xyzs.y + 'px, ' + xyzs.z + 'px) scale(' + xyzs.scale + ')');

		},

		detectEdgePositions: function () {

			var wrapper = {
					width: this.get('$wrapper.width'),
					height: this.get('$wrapper.height')
				},
				container = {
					width: this.get('$container.width'),
					height: this.get('$container.height')
				},
				edgeSize = Math.round( Math.min(wrapper.width, wrapper.height) / 2 ),
				xEdge = container.width / 2 - wrapper.width / 2 + edgeSize,
				yEdge = container.height / 2 - wrapper.height / 2 + edgeSize,
				edges = {
					max: {
						x: xEdge,
						y: yEdge
					},
					min: {
						x: -xEdge,
						y: -yEdge
					}
				};

			this.set('edges', edges);

			return edges;

		},

		getXYZSFromStyle: function (style) {

			var reGetTransform = /^[\s\S]*?translate3d\((\-?\d+)px,\s?(\-?\d+)px,\s?(\-?\d+)px\)[\s\S]*?$/,
				coordinatesArr = style.replace(reGetTransform, '$1_$2_$3').split('_'),
				reGetScale = /^[\s\S]*?scale\((\S+?)\)[\s\S]*?$/,
				scale = parseFloat(style.replace(reGetScale, '$1'));

			return {
				x: parseInt(coordinatesArr[0], 10),
				y: parseInt(coordinatesArr[1], 10),
				z: parseInt(coordinatesArr[2], 10),
				scale: scale
			};

		},

		setEventMap: function () {

			var isTouch = this.get('isTouch'),
				map = {
					down: isTouch ? 'touchstart' : 'mousedown',
					move: isTouch ? 'touchmove' : 'mousemove',
					up: isTouch ? 'touchend' : 'mouseup'
				};

			this.set('eventMap', map);

		},

		getEvents: function (e) {

			e = e.originalEvent;

			var evt = {},
				touches = e.touches,
				events = touches || [e];

			evt.events = [];

			evt.length = events.length;
			evt.type = this.mapEventType[e.type];

			$.each(events, function (index, e) {
				evt.events.push({
					x: e.clientX,
					y: e.clientY
				});
			});

			return evt;

		},
		mapEventType: {
			mousedown: 'down',
			touchstart: 'down',
			mousemove: 'move',
			touchmove: 'move',
			mouseup: 'up',
			touchend: 'up'
		},
		getAverageXY: function (arr) {

			var sumX = 0,
				sumY = 0,
				count = arr.length;

			arr.forEach(function (xy) {
				sumX += xy.x;
				sumY += xy.y;
			});

			return {
				x: Math.round(sumX / count),
				y: Math.round(sumY / count)
			};

		},

		setPrefix: function() {

			var data = {
					js: '',
					css: ''
				},
				tempStyle = doc.createElement('div').style,
				vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];

			// find vendors by css transform property
			vendors.forEach(function (vendor) {
				var transform = vendor + 'ransform';
				if (!tempStyle.hasOwnProperty(transform)) {
					return;
				}

				vendor = vendor.replace(/t$/i, ''); // remove 't' from vendor

				data.js = vendor;

				vendor = vendor.toLocaleLowerCase();
				if (vendor) {
					data.css = '-' + vendor + '-';
				}

			});

			this.set('prefix', data);

		},

		setDefaultContainerState: function () {

			var $container = this.get('$container'),
				width = $container.width(),
				height = $container.height();

			this.setStyleByXYZS({
				x: 0,
				y: 0
			});

			$container.css({
					'position': 'relative',
					'left': '50%',
					'top': '50%',
					'margin-left': '-' + Math.round(width / 2) + 'px',
					'margin-top': '-' + Math.round(height / 2) + 'px'
				});

		},

		logMoving: function (xy) {

			var logMoving = this.get('logMoving');

			if (logMoving.length > 10) {
				logMoving.shift(); // delete first item
			}

			logMoving.push({
				x: xy.x,
				y: xy.y,
				timeStamp: Date.now()
			});

			this.set('logMoving', logMoving);

		},

		clearLogMoving: function () {
			this.set('logMoving', []);
		}

	};

	win.Mover = Mover;

}(window, document, document.documentElement, window.jQuery));