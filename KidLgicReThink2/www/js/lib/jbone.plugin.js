/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	// add deferred to jBone
	Deferred.installInto(jBone);
	console.log(jBone);

	/*

	Example

	 jBone.fn.addClass = function(className) {
	 var i = 0,
	 length = this.length;

	 for (; i < length; i++) {
	 this[i].classList.add(className);
	 }

	 return this;
	 };

	 $(".header").addClass("loaded");


	*/

}(window));