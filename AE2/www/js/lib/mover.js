(function (win, doc, $) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	function Mover(data) {

		this.attr = {};

		this.set('$wrapper', data.wrapper);
		this.set('$container', data.container);

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
				startContainerXY = this.getXYFromStyle(styleXY);

			$container.css(pre + 'transition', 'none');

			// set start EVENTs position
			this.set('startEventXY', startEventXY);
			// set start container position
			this.set('startContainerXY', startContainerXY);
			this.set('currentContainerXY', startContainerXY);


			this.set('isActive', true);

			this.clearLogMoving();
			this.logMoving(startEventXY);

		},

		onMove: function (e) {

			var events = this.getEvents(e),
				currentEventXY = this.getAverageXY(events.events),
				isActive = this.get('isActive'),
				startEventXY = this.get('startEventXY'),
				startContainerXY = this.get('startContainerXY'),
				$container = this.get('$container'),
				pre = this.get('prefix').css,
				x,
				y,
				dx,
				dy;

			if ( !isActive ) {
				return false;
			}

			dx = startEventXY.x - currentEventXY.x;
			dy = startEventXY.y - currentEventXY.y;

			x = startContainerXY.x - dx;
			y = startContainerXY.y - dy;

			this.set('currentContainerXY', {
				x: x,
				y: y
			});

			$container.css(pre + 'transform', 'translate3d(' + x + 'px, ' + y + 'px, 0px)');

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

			this.onDown(e);

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
				pre = this.get('prefix').css,
				dx = begin.x - end.x,
				dy = begin.y - end.y,
				dTime = end.timeStamp - begin.timeStamp,
				endX = currentContainerXY.x - dx * 3,
				endY = currentContainerXY.y - dy * 3,
				endTime = Math.min(dTime * 3, 300)  + 'ms';

			$container.css(pre + 'transition', 'all ' + endTime + ' ease-out');

			//setTimeout(function () {
				$container.css(pre + 'transform', 'translate3d(' + endX + 'px, ' + endY + 'px, 0px)');
			//}, 20);

		},

		getXYFromStyle: function (style) {

			var reGetTransform = /^[\s\S]*?translate3d\((\-?\d+)px,\s?(\-?\d+)px,\s?(\-?\d+)px\)[\s\S]*?$/,
				coordinatesArr = style.replace(reGetTransform, '$1_$2_$3').split('_');

			return {
				x: parseInt(coordinatesArr[0], 10),
				y: parseInt(coordinatesArr[1], 10)
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
				pre = this.get('prefix').css;

			$container.css(pre + 'transform', 'translate3d(0px, 0px, 0px)');

		},

		logMoving: function (xy) {

			var logMoving = this.get('logMoving');

			if (logMoving.length > 20) {
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

}(window, document, window.jQuery));