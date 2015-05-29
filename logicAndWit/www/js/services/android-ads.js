/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	/*
	* ad module has depend from APP.info
	* */

	win.APP = win.APP || {};

	var ad = {
		attr: {},
		period: 20e3,
		set: function (key, value) {
			return this.attr[key] = value;
		},
		get: function (key) {
			return this.attr[key];
		},
		showAd: function () {
			typeof Android !== 'undefined' && Android.displayInterstitial();
		},
		init: function () {
			var intervalId = setInterval(this.showAd, this.period);
			this.set('intervalId', intervalId);
		}

	};

	console.log('ANDROID ADS');

	win.APP.ad = ad;

	if (win.APP.info.withAds) {
		ad.init();
	}

}(window));