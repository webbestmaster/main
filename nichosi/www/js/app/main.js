/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, document, setTimeout */
	/*global APP, Backbone, FastClick */

	win.APP = win.APP || {};

	win.APP.bb = win.APP.bb || {};

	function start() {


		win.APP.bb.device = new win.APP.BB.DeviceModel();
		win.APP.bb.user = new win.APP.BB.UserModel();

		win.APP.db.init().then(function () {
			console.log('u are Allow to use');
		},
		function () {
			console.warn('FUUUUUUUUCK!!!!!!');
		});

		win.APP.templateMaster.init();
		win.APP.BB.BaseView.prototype.initStatic();
		win.APP.soundMaster.init();

		//win.APP.soundMaster.playBgSound();

		win.FastClick.attach(win.document.body);

		(function back() {

			if ( win.location.hash ) {
				win.history.back();
				return setTimeout(back, 50);
			}

			win.APP.bb.router = new win.APP.BB.Router();
			Backbone.history.start();

		}());

	}

	win.addEventListener('load', start, false);

}(window));