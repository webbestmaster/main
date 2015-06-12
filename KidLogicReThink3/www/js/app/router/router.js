/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window, setTimeout */
	/*global Backbone, APP, $ */

	win.APP = win.APP || {};

	APP.BB = APP.BB || {};

	APP.BB.Router = Backbone.Router.extend({

		routes: {
			'': 'title',
			'about': 'about'
		},

		title: function () {
			new APP.BB.TitleView();
		},

		about: function () {
			new APP.BB.AboutView();
		},

		constructor: function () {

			var router = this,
				originalFunctions = {},
				proto = APP.BB.Router.prototype;

			function getAction() {

				var e = window.event || {},
					newURL = e.newURL || '',
					oldURL = e.oldURL || '',
					popupPart = APP.BB.BaseView.prototype.popupUrl,
					viewAction;

				if ( newURL.indexOf(popupPart) !== -1 ) {
					viewAction = 'showPopup';
				}

				if ( oldURL.indexOf(popupPart) !== -1 ) {
					viewAction = 'hidePopup';
				}

				if ( router.isForce ) {
					return viewAction;
				}

				// other action is here
				return viewAction;

			}

			_.each(this.routes, function (value) {
				originalFunctions[value] = proto[value];
				proto[value] = function () {

					var router = this,
						viewAction = getAction(),
						baseProto = win.APP.BB.BaseView.prototype;

					if ( !viewAction ) {
						return originalFunctions[value].apply(router, arguments);
					}

					switch (viewAction) {
						
						case 'hidePopup':
							baseProto.hidePopup();
							break;
							
						case 'showPopup':
							break;
							
					}

				};

			});

			return Backbone.Router.prototype.constructor.apply(this, arguments);

		}

	});

}(window));