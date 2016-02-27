'use strict';
/*global window */

var section = {

	id: 'dancing humans',
	name: 'dancing humans',
	data: [

		// dancing humans
		// 18
		{"name":"","hash":"f1220b","data":[[0.5,0.707107,0],[0.5,0.707107,-90],[0.853553,1.06066,-90],[0.853553,1.06066,0],[0.5,1.06066,-90],[0.5,1.06066,0],[0.5,1.06066,180],[0.5,1.06066,90],[0,0.353553,0],[0,0.353553,-90],[0,0,-90],[0,0,0],[0.353553,0.353553,-90],[0.353553,0.353553,0],[0,0.353553,180],[0,0.353553,90],[0.323223,0.78033,45],[0.323223,0.78033,-45],[0.073223,0.53033,-135],[0.073223,0.53033,-45],[1.03033,1.414214,180],[1.03033,1.414214,90],[0.323223,1.487437,-135],[0.323223,1.487437,135],[0.353553,0,180],[0.353553,0,90],[0.353553,0,0],[0.353553,0,-90],[0.146447,1.207107,180],[0.146447,1.207107,90],[0.146447,0.853553,-90],[0.146447,0.853553,0]]},
		{"name":"","hash":"05c084","data":[[0.25,0.5,45],[0.25,0.5,-45],[0.25,1,-45],[0.25,1,45],[0,0.75,-45],[0,0.75,45],[0,0.75,-135],[0,0.75,135],[0.396447,1.353553,135],[0.396447,1.353553,45],[0.646447,1.603553,45],[0.646447,1.603553,135],[0.146447,1.603553,45],[0.146447,1.603553,135],[0.396447,1.353553,-45],[0.396447,1.353553,-135],[0.073223,1.426777,90],[0.073223,1.426777,0],[0.073223,1.073223,-90],[0.073223,1.073223,0],[0.25,0,-135],[0.25,0,135],[0,0.25,135],[0,0.25,45],[0.521447,0.978553,-135],[0.521447,0.978553,135],[0.521447,0.978553,45],[0.521447,0.978553,-45],[0.426777,1.78033,-90],[0.426777,1.78033,0],[0.073223,1.78033,180],[0.073223,1.78033,90]]},
		{"name":"","hash":"f9b17f","data":[[0.353553,1.28033,-90],[0.353553,1.28033,180],[0.707107,0.926777,180],[0.707107,0.926777,-90],[0.707107,1.28033,180],[0.707107,1.28033,-90],[0.707107,1.28033,90],[0.707107,1.28033,0],[0.633883,0.75,-135],[0.633883,0.75,135],[0.383883,1,135],[0.383883,1,-135],[0.383883,0.5,135],[0.383883,0.5,-135],[0.633883,0.75,45],[0.633883,0.75,-45],[0.383883,0.5,45],[0.383883,0.5,-45],[0.133883,0.25,-135],[0.133883,0.25,-45],[0.883883,1.707107,-135],[0.883883,1.707107,135],[0,1.633883,-90],[0,1.633883,180],[0.383883,0,-135],[0.383883,0,135],[0.383883,0,45],[0.383883,0,-45],[0.133883,1.25,-135],[0.133883,1.25,135],[0.383883,1,-45],[0.383883,1,45]]},
		{"name":"","hash":"418fe7","data":[[0.853553,0.25,-45],[0.853553,0.25,-135],[1.353553,0.25,-135],[1.353553,0.25,-45],[1.103553,0.5,-135],[1.103553,0.5,-45],[1.103553,0.5,135],[1.103553,0.5,45],[0.853553,0.75,135],[0.853553,0.75,45],[1.103553,1,45],[1.103553,1,135],[0.603553,1,45],[0.603553,1,135],[0.853553,0.75,-45],[0.853553,0.75,-135],[1.353553,1.25,45],[1.353553,1.25,-45],[1.103553,1,-135],[1.103553,1,-45],[0,1.353553,90],[0,1.353553,0],[1.353553,1.5,0],[1.353553,1.5,-90],[1.103553,0,-135],[1.103553,0,135],[1.103553,0,45],[1.103553,0,-45],[0.53033,1.176777,90],[0.53033,1.176777,0],[0.176777,1.176777,180],[0.176777,1.176777,-90]]},
		{"name":"","hash":"bcd0c3","data":[[0,0.426777,-90],[0,0.426777,180],[0.353553,0.073223,180],[0.353553,0.073223,-90],[0.353553,0.426777,180],[0.353553,0.426777,-90],[0.353553,0.426777,90],[0.353553,0.426777,0],[0.707107,0.426777,90],[0.707107,0.426777,0],[1.06066,0.426777,0],[1.06066,0.426777,90],[0.707107,0.78033,0],[0.707107,0.78033,90],[0.707107,0.426777,-90],[0.707107,0.426777,180],[1.237437,0.5,135],[1.237437,0.5,45],[1.487437,0.25,-45],[1.487437,0.25,45],[1.487437,0,90],[1.487437,0,0],[0.53033,1.31066,-90],[0.53033,1.31066,180],[0,0.073223,180],[0,0.073223,90],[0,0.073223,0],[0,0.073223,-90],[0.707107,1.133883,0],[0.707107,1.133883,90],[0.707107,0.78033,-90],[0.707107,0.78033,180]]},
		{"name":"","hash":"1069d5","data":[[1.06066,0.426777,90],[1.06066,0.426777,0],[0.707107,0.78033,0],[0.707107,0.78033,90],[0.707107,0.426777,0],[0.707107,0.426777,90],[0.707107,0.426777,-90],[0.707107,0.426777,180],[0.353553,1.133883,-90],[0.353553,1.133883,180],[0,1.133883,180],[0,1.133883,-90],[0.353553,0.78033,180],[0.353553,0.78033,-90],[0.353553,1.133883,90],[0.353553,1.133883,0],[0.53033,1.56066,45],[0.53033,1.56066,-45],[0.28033,1.31066,-135],[0.28033,1.31066,-45],[1.207107,0.78033,-90],[1.207107,0.78033,180],[0.53033,1.81066,0],[0.53033,1.81066,-90],[0.883883,0,-135],[0.883883,0,135],[0.883883,0,45],[0.883883,0,-45],[1.03033,0.707107,-135],[1.03033,0.707107,-45],[0.78033,0.957107,135],[0.78033,0.957107,45]]},
		{"name":"","hash":"d0498c","data":[[0.301777,0.176777,0],[0.301777,0.176777,-90],[0.65533,0.53033,-90],[0.65533,0.53033,0],[0.301777,0.53033,-90],[0.301777,0.53033,0],[0.301777,0.53033,180],[0.301777,0.53033,90],[0.65533,1.237437,-90],[0.65533,1.237437,180],[0.301777,1.237437,180],[0.301777,1.237437,-90],[0.65533,0.883883,180],[0.65533,0.883883,-90],[0.65533,1.237437,90],[0.65533,1.237437,0],[0.582107,0.707107,-45],[0.582107,0.707107,-135],[0.332107,0.957107,135],[0.332107,0.957107,-135],[0.375,0,45],[0.375,0,-45],[0.478553,1.767767,-90],[0.478553,1.767767,180],[0,1.289214,-135],[0,1.289214,135],[0,1.289214,45],[0,1.289214,-45],[0.301777,1.59099,-90],[0.301777,1.59099,180],[0.65533,1.59099,0],[0.65533,1.59099,90]]},
		// 19
		{"name":"","hash":"83a260","data":[[1.237437,0,0],[1.237437,0,-90],[1.59099,0.353553,-90],[1.59099,0.353553,0],[1.237437,0.353553,-90],[1.237437,0.353553,0],[1.237437,0.353553,180],[1.237437,0.353553,90],[0.883883,0.353553,180],[0.883883,0.353553,90],[0.883883,0.707107,90],[0.883883,0.707107,180],[0.53033,0.353553,90],[0.53033,0.353553,180],[0.883883,0.353553,0],[0.883883,0.353553,-90],[0.53033,0.353553,0],[0.53033,0.353553,-90],[0.176777,0.353553,180],[0.176777,0.353553,-90],[0.81066,1.237437,135],[0.81066,1.237437,45],[0,0.28033,-45],[0,0.28033,-135],[1.59099,0,-90],[1.59099,0,180],[1.59099,0,90],[1.59099,0,0],[0.883883,0.707107,0],[0.883883,0.707107,-90],[0.883883,1.06066,90],[0.883883,1.06066,180]]},
		{"name":"","hash":"3d851d","data":[[1.5,0.75,135],[1.5,0.75,45],[1,0.75,45],[1,0.75,135],[1.25,0.5,45],[1.25,0.5,135],[1.25,0.5,-45],[1.25,0.5,-135],[0.75,1,-45],[0.75,1,-135],[0.5,0.75,-135],[0.5,0.75,-45],[1,0.75,-135],[1,0.75,-45],[0.75,1,135],[0.75,1,45],[0.573223,0.573223,0],[0.573223,0.573223,-90],[0.21967,0.573223,180],[0.21967,0.573223,-90],[0.5,0,45],[0.5,0,-45],[0,0.75,-45],[0,0.75,-135],[1.375,0.125,-135],[1.375,0.125,135],[1.375,0.125,45],[1.375,0.125,-45],[0.75,0.5,-45],[0.75,0.5,45],[0.5,0.25,-135],[0.5,0.25,135]]},
		{"name":"","hash":"7f828c","data":[[0.5,0.78033,180],[0.5,0.78033,90],[0.146447,0.426777,90],[0.146447,0.426777,180],[0.5,0.426777,90],[0.5,0.426777,180],[0.5,0.426777,0],[0.5,0.426777,-90],[0.853553,0.426777,90],[0.853553,0.426777,0],[1.207107,0.426777,0],[1.207107,0.426777,90],[0.853553,0.78033,0],[0.853553,0.78033,90],[0.853553,0.426777,-90],[0.853553,0.426777,180],[0.5,1.03033,45],[0.5,1.03033,-45],[0.25,0.78033,-135],[0.25,0.78033,-45],[0.853553,1.487437,0],[0.853553,1.487437,-90],[0,0.78033,135],[0,0.78033,45],[0.676777,0,-135],[0.676777,0,135],[0.676777,0,45],[0.676777,0,-45],[0.676777,1.31066,180],[0.676777,1.31066,90],[0.676777,0.957107,-90],[0.676777,0.957107,0]]},
		{"name":"","hash":"f72916","data":[[0.573223,1.176777,135],[0.573223,1.176777,45],[0.073223,1.176777,45],[0.073223,1.176777,135],[0.323223,0.926777,45],[0.323223,0.926777,135],[0.323223,0.926777,-45],[0.323223,0.926777,-135],[0.323223,0.426777,45],[0.323223,0.426777,-45],[0.573223,0.176777,-45],[0.573223,0.176777,45],[0.573223,0.676777,-45],[0.573223,0.676777,45],[0.323223,0.426777,-135],[0.323223,0.426777,135],[0.823223,1.426777,45],[0.823223,1.426777,-45],[0.573223,1.176777,-135],[0.573223,1.176777,-45],[0.353553,1.707107,90],[0.353553,1.707107,0],[0.823223,1.676777,-135],[0.823223,1.676777,135],[0.146447,0,180],[0.146447,0,90],[0.146447,0,0],[0.146447,0,-90],[0.353553,1.353553,-90],[0.353553,1.353553,0],[0,1.353553,180],[0,1.353553,90]]},
		{"name":"","hash":"bb2bb5","data":[[0.707107,0.426777,45],[0.707107,0.426777,-45],[0.707107,0.926777,-45],[0.707107,0.926777,45],[0.457107,0.676777,-45],[0.457107,0.676777,45],[0.457107,0.676777,-135],[0.457107,0.676777,135],[0.957107,0.676777,-135],[0.957107,0.676777,135],[0.707107,0.926777,135],[0.707107,0.926777,-135],[0.707107,0.426777,135],[0.707107,0.426777,-135],[0.957107,0.676777,45],[0.957107,0.676777,-45],[0.53033,1,0],[0.53033,1,-90],[0.176777,1,180],[0.176777,1,-90],[0.53033,1.676777,-90],[0.53033,1.676777,180],[0,1.176777,-45],[0,1.176777,-135],[0.707107,0,180],[0.707107,0,90],[0.707107,0,0],[0.707107,0,-90],[0.707107,1.426777,-135],[0.707107,1.426777,135],[0.957107,1.176777,-45],[0.957107,1.176777,45]]},
		{"name":"","hash":"3b7672","data":[[1.353553,0.676777,135],[1.353553,0.676777,45],[0.853553,0.676777,45],[0.853553,0.676777,135],[1.103553,0.426777,45],[1.103553,0.426777,135],[1.103553,0.426777,-45],[1.103553,0.426777,-135],[0.603553,0.853553,180],[0.603553,0.853553,90],[0.603553,1.207107,90],[0.603553,1.207107,180],[0.25,0.853553,90],[0.25,0.853553,180],[0.603553,0.853553,0],[0.603553,0.853553,-90],[1.28033,0.353553,180],[1.28033,0.353553,90],[1.633883,0.353553,0],[1.633883,0.353553,90],[0.957107,1.383883,0],[0.957107,1.383883,-90],[0,0.676777,135],[0,0.676777,45],[1.103553,0,-90],[1.103553,0,180],[1.103553,0,90],[1.103553,0,0],[0.426777,0.5,-90],[0.426777,0.5,180],[0.78033,0.5,0],[0.78033,0.5,90]]},
		{"name":"","hash":"d6dc9e","data":[[0.676777,0.75,135],[0.676777,0.75,45],[0.176777,0.75,45],[0.176777,0.75,135],[0.426777,0.5,45],[0.426777,0.5,135],[0.426777,0.5,-45],[0.426777,0.5,-135],[0.75,1.28033,-90],[0.75,1.28033,180],[0.396447,1.28033,180],[0.396447,1.28033,-90],[0.75,0.926777,180],[0.75,0.926777,-90],[0.75,1.28033,90],[0.75,1.28033,0],[0.396447,0.926777,180],[0.396447,0.926777,90],[0.75,0.926777,0],[0.75,0.926777,90],[0.926777,1.457107,-135],[0.926777,1.457107,135],[0.21967,1.457107,-45],[0.21967,1.457107,-135],[0,0.323223,180],[0,0.323223,90],[0,0.323223,0],[0,0.323223,-90],[0.676777,0.25,-45],[0.676777,0.25,45],[0.426777,0,-135],[0.426777,0,135]]},
		// 20
		{"name":"","hash":"f86f40","data":[[0.883883,0.426777,90],[0.883883,0.426777,0],[0.53033,0.78033,0],[0.53033,0.78033,90],[0.53033,0.426777,0],[0.53033,0.426777,90],[0.53033,0.426777,-90],[0.53033,0.426777,180],[0.53033,1.133883,-90],[0.53033,1.133883,180],[0.176777,1.133883,180],[0.176777,1.133883,-90],[0.53033,0.78033,180],[0.53033,0.78033,-90],[0.53033,1.133883,90],[0.53033,1.133883,0],[0.883883,1.487437,90],[0.883883,1.487437,0],[0.883883,1.133883,-90],[0.883883,1.133883,0],[0.707107,1.664214,45],[0.707107,1.664214,-45],[0,1.487437,90],[0,1.487437,0],[0.707107,0,-135],[0.707107,0,135],[0.707107,0,45],[0.707107,0,-45],[0.176777,0.78033,0],[0.176777,0.78033,90],[0.176777,0.426777,-90],[0.176777,0.426777,180]]},
		{"name":"","hash":"754ba1","data":[[0.707107,0.78033,180],[0.707107,0.78033,90],[0.353553,0.426777,90],[0.353553,0.426777,180],[0.707107,0.426777,90],[0.707107,0.426777,180],[0.707107,0.426777,0],[0.707107,0.426777,-90],[0.707107,1.133883,0],[0.707107,1.133883,-90],[0.707107,0.78033,-90],[0.707107,0.78033,0],[1.06066,1.133883,-90],[1.06066,1.133883,0],[0.707107,1.133883,180],[0.707107,1.133883,90],[0.353553,0.426777,0],[0.353553,0.426777,-90],[0,0.426777,180],[0,0.426777,-90],[1.362437,1.18566,-45],[1.362437,1.18566,-135],[0.53033,1.487437,90],[0.53033,1.487437,0],[0.53033,0,-135],[0.53033,0,135],[0.53033,0,45],[0.53033,0,-45],[0.883883,0.073223,-90],[0.883883,0.073223,180],[1.237437,0.073223,0],[1.237437,0.073223,90]]},
		{"name":"","hash":"dc94b0","data":[[0.676777,0.5,45],[0.676777,0.5,-45],[0.676777,1,-45],[0.676777,1,45],[0.426777,0.75,-45],[0.426777,0.75,45],[0.426777,0.75,-135],[0.426777,0.75,135],[0.926777,1.25,-135],[0.926777,1.25,135],[0.676777,1.5,135],[0.676777,1.5,-135],[0.676777,1,135],[0.676777,1,-135],[0.926777,1.25,45],[0.926777,1.25,-45],[0,0.573223,180],[0,0.573223,90],[0.353553,0.573223,0],[0.353553,0.573223,90],[1.176777,1.25,180],[1.176777,1.25,90],[0.676777,1.75,-90],[0.676777,1.75,180],[0.676777,0,-135],[0.676777,0,135],[0.676777,0,45],[0.676777,0,-45],[0.853553,0.573223,0],[0.853553,0.573223,90],[0.853553,0.21967,-90],[0.853553,0.21967,180]]},
		{"name":"","hash":"fea272","data":[[0.5,0.75,-135],[0.5,0.75,135],[0.5,0.25,135],[0.5,0.25,-135],[0.75,0.5,135],[0.75,0.5,-135],[0.75,0.5,45],[0.75,0.5,-45],[0.75,1,45],[0.75,1,-45],[1,0.75,-45],[1,0.75,45],[1,1.25,-45],[1,1.25,45],[0.75,1,-135],[0.75,1,135],[0.25,1,135],[0.25,1,45],[0.5,0.75,-45],[0.5,0.75,45],[1,1.5,0],[1,1.5,-90],[0,1,-45],[0,1,-135],[0.926777,0.073223,-90],[0.926777,0.073223,180],[0.926777,0.073223,90],[0.926777,0.073223,0],[0.5,0.25,-45],[0.5,0.25,45],[0.25,0,-135],[0.25,0,135]]},
		{"name":"","hash":"6835f6","data":[[0.25,0.676777,-45],[0.25,0.676777,-135],[0.75,0.676777,-135],[0.75,0.676777,-45],[0.5,0.926777,-135],[0.5,0.926777,-45],[0.5,0.926777,135],[0.5,0.926777,45],[0.75,1.176777,45],[0.75,1.176777,-45],[1,0.926777,-45],[1,0.926777,45],[1,1.426777,-45],[1,1.426777,45],[0.75,1.176777,-135],[0.75,1.176777,135],[0.5,0.426777,-135],[0.5,0.426777,135],[0.75,0.676777,45],[0.75,0.676777,135],[0.875,1.801777,-135],[0.875,1.801777,135],[0,0.926777,135],[0,0.926777,45],[0.926777,0.25,-90],[0.926777,0.25,180],[0.926777,0.25,90],[0.926777,0.25,0],[0.323223,0,0],[0.323223,0,-90],[0.323223,0.353553,90],[0.323223,0.353553,180]]},
		{"name":"","hash":"4bb2a5","data":[[0.625,0.25,45],[0.625,0.25,-45],[0.625,0.75,-45],[0.625,0.75,45],[0.375,0.5,-45],[0.375,0.5,45],[0.375,0.5,-135],[0.375,0.5,135],[1.375,0.5,-135],[1.375,0.5,135],[1.125,0.75,135],[1.125,0.75,-135],[1.125,0.25,135],[1.125,0.25,-135],[1.375,0.5,45],[1.375,0.5,-45],[0.875,1,135],[0.875,1,45],[1.125,0.75,-45],[1.125,0.75,45],[0.625,0.25,-135],[0.625,0.25,135],[1.125,0,45],[1.125,0,-45],[0,0.375,-135],[0,0.375,135],[0,0.375,45],[0,0.375,-45],[0.625,0.75,-135],[0.625,0.75,135],[0.875,0.5,-45],[0.875,0.5,45]]},
		// 21
		{"name":"","hash":"748c2f","data":[[0.53033,0.78033,180],[0.53033,0.78033,90],[0.176777,0.426777,90],[0.176777,0.426777,180],[0.53033,0.426777,90],[0.53033,0.426777,180],[0.53033,0.426777,0],[0.53033,0.426777,-90],[0.53033,1.133883,0],[0.53033,1.133883,-90],[0.53033,0.78033,-90],[0.53033,0.78033,0],[0.883883,1.133883,-90],[0.883883,1.133883,0],[0.53033,1.133883,180],[0.53033,1.133883,90],[1.31066,1.31066,45],[1.31066,1.31066,-45],[1.06066,1.06066,-135],[1.06066,1.06066,-45],[1.31066,1.56066,0],[1.31066,1.56066,-90],[0,0.5,135],[0,0.5,45],[0.353553,0,-135],[0.353553,0,135],[0.353553,0,45],[0.353553,0,-45],[0.883883,0.426777,0],[0.883883,0.426777,90],[0.883883,0.073223,-90],[0.883883,0.073223,180]]},
		{"name":"","hash":"4c3c4b","data":[[0.676777,0.375,45],[0.676777,0.375,-45],[0.676777,0.875,-45],[0.676777,0.875,45],[0.426777,0.625,-45],[0.426777,0.625,45],[0.426777,0.625,-135],[0.426777,0.625,135],[0.426777,1.125,-135],[0.426777,1.125,135],[0.176777,1.375,135],[0.176777,1.375,-135],[0.176777,0.875,135],[0.176777,0.875,-135],[0.426777,1.125,45],[0.426777,1.125,-45],[0,0.448223,180],[0,0.448223,90],[0.353553,0.448223,0],[0.353553,0.448223,90],[0.603553,1.551777,180],[0.603553,1.551777,90],[0,1.801777,-90],[0,1.801777,180],[0.551777,0,-135],[0.551777,0,135],[0.551777,0,45],[0.551777,0,-45],[0.853553,0.801777,180],[0.853553,0.801777,90],[0.853553,0.448223,-90],[0.853553,0.448223,0]]},
		{"name":"","hash":"123b43","data":[[0.957107,0.625,135],[0.957107,0.625,45],[0.457107,0.625,45],[0.457107,0.625,135],[0.707107,0.375,45],[0.707107,0.375,135],[0.707107,0.375,-45],[0.707107,0.375,-135],[0.883883,0.801777,180],[0.883883,0.801777,90],[0.883883,1.15533,90],[0.883883,1.15533,180],[0.53033,0.801777,90],[0.53033,0.801777,180],[0.883883,0.801777,0],[0.883883,0.801777,-90],[0.707107,1.332107,90],[0.707107,1.332107,0],[0.707107,0.978553,-90],[0.707107,0.978553,0],[0.53033,1.508883,-90],[0.53033,1.508883,180],[0,1.508883,-90],[0,1.508883,180],[0.582107,0,-135],[0.582107,0,135],[0.582107,0,45],[0.582107,0,-45],[0.353553,1.332107,0],[0.353553,1.332107,90],[0.353553,0.978553,-90],[0.353553,0.978553,180]]}

	]

};

export default section;