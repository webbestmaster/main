'use strict';
/*global window */

var section = {

	id: 'people',
	name: 'people #1',
	data: [

		// people
		// 12
		{"name":"","hash":"72b16e","data":[[0.75,0.875,-45],[0.75,0.875,45],[0.75,0.375,45],[0.75,0.375,-45],[0.5,0.625,45],[0.5,0.625,-45],[0.5,0.625,135],[0.5,0.625,-135],[0.5,1.125,-135],[0.5,1.125,135],[0.25,1.375,135],[0.25,1.375,-135],[0.25,0.875,135],[0.25,0.875,-135],[0.5,1.125,45],[0.5,1.125,-45],[0.573223,1.301777,-90],[0.573223,1.301777,180],[0.573223,1.65533,90],[0.573223,1.65533,180],[0.75,1.832107,0],[0.75,1.832107,-90],[0,1.875,45],[0,1.875,-45],[0.875,0,-45],[0.875,0,-135],[0.875,0,135],[0.875,0,45],[0,1.625,-135],[0,1.625,135],[0.25,1.375,-45],[0.25,1.375,45]]},
		{"name":"","hash":"9a833b","data":[[0,0.625,45],[0,0.625,135],[0.5,0.625,135],[0.5,0.625,45],[0.25,0.375,135],[0.25,0.375,45],[0.25,0.375,-135],[0.25,0.375,-45],[0.25,0.875,-45],[0.25,0.875,-135],[0,0.625,-135],[0,0.625,-45],[0.5,0.625,-135],[0.5,0.625,-45],[0.25,0.875,135],[0.25,0.875,45],[0.5,1.125,-135],[0.5,1.125,135],[0.75,1.375,45],[0.75,1.375,135],[1,1.375,180],[1,1.375,90],[0.323223,1.551777,-90],[0.323223,1.551777,180],[0.125,0,-45],[0.125,0,-135],[0.125,0,135],[0.125,0,45],[0.25,1.375,-135],[0.25,1.375,135],[0.5,1.125,-45],[0.5,1.125,45]]},
		{"name":"","hash":"b7bc6f","data":[[0,0.728553,135],[0,0.728553,-135],[0,1.228553,-135],[0,1.228553,135],[0.25,0.978553,-135],[0.25,0.978553,135],[0.25,0.978553,-45],[0.25,0.978553,45],[0.25,1.478553,45],[0.25,1.478553,-45],[0.5,1.228553,-45],[0.5,1.228553,45],[0.5,1.728553,-45],[0.5,1.728553,45],[0.25,1.478553,-135],[0.25,1.478553,135],[0.176777,0.301777,-90],[0.176777,0.301777,180],[0.176777,0.65533,90],[0.176777,0.65533,180],[0,2.228553,135],[0,2.228553,45],[0.5,1.978553,-135],[0.5,1.978553,135],[0.228553,0,-45],[0.228553,0,-135],[0.228553,0,135],[0.228553,0,45],[0.25,1.978553,-45],[0.25,1.978553,45],[0,1.728553,-135],[0,1.728553,135]]},
		{"name":"","hash":"71c596","data":[[0.103553,0.676777,45],[0.103553,0.676777,135],[0.603553,0.676777,135],[0.603553,0.676777,45],[0.353553,0.426777,135],[0.353553,0.426777,45],[0.353553,0.426777,-135],[0.353553,0.426777,-45],[0.176777,0.853553,90],[0.176777,0.853553,0],[0.53033,0.853553,0],[0.53033,0.853553,90],[0.176777,1.207107,0],[0.176777,1.207107,90],[0.176777,0.853553,-90],[0.176777,0.853553,180],[0.53033,0.353553,180],[0.53033,0.353553,90],[0.883883,0.353553,0],[0.883883,0.353553,90],[0,1.28033,45],[0,1.28033,-45],[0.707107,1.426777,135],[0.707107,1.426777,45],[0.353553,0,0],[0.353553,0,-90],[0.353553,0,180],[0.353553,0,90],[0.457107,1.176777,-135],[0.457107,1.176777,135],[0.707107,0.926777,-45],[0.707107,0.926777,45]]},
		{"name":"","hash":"9abfb4","data":[[0.353553,0,180],[0.353553,0,-90],[0,0.353553,-90],[0,0.353553,180],[0.353553,0.353553,-90],[0.353553,0.353553,180],[0.353553,0.353553,0],[0.353553,0.353553,90],[0.353553,0.707107,180],[0.353553,0.707107,90],[0.353553,1.06066,90],[0.353553,1.06066,180],[0,0.707107,90],[0,0.707107,180],[0.353553,0.707107,0],[0.353553,0.707107,-90],[0.707107,0.707107,180],[0.707107,0.707107,90],[1.06066,0.707107,0],[1.06066,0.707107,90],[0.53033,1.414214,-90],[0.53033,1.414214,180],[0.883883,1.487437,-135],[0.883883,1.487437,135],[0.883883,0.353553,0],[0.883883,0.353553,-90],[0.883883,0.353553,180],[0.883883,0.353553,90],[0.883883,1.237437,0],[0.883883,1.237437,90],[0.883883,0.883883,-90],[0.883883,0.883883,180]]},
		{"name":"","hash":"44ea24","data":[[0.5,0.832107,-135],[0.5,0.832107,-45],[0,0.832107,-45],[0,0.832107,-135],[0.25,1.082107,-45],[0.25,1.082107,-135],[0.25,1.082107,45],[0.25,1.082107,135],[0.78033,0.65533,-90],[0.78033,0.65533,180],[0.426777,0.65533,180],[0.426777,0.65533,-90],[0.78033,0.301777,180],[0.78033,0.301777,-90],[0.78033,0.65533,90],[0.78033,0.65533,0],[0.426777,1.15533,-90],[0.426777,1.15533,180],[0.426777,1.508883,90],[0.426777,1.508883,180],[0.073223,1.508883,90],[0.073223,1.508883,0],[0.78033,1.68566,0],[0.78033,1.68566,-90],[1.082107,0,45],[1.082107,0,-45],[1.082107,0,-135],[1.082107,0,135],[0.457107,0.375,45],[0.457107,0.375,135],[0.707107,0.125,-45],[0.707107,0.125,-135]]},
		{"name":"","hash":"4f052f","data":[[0.53033,1.146447,180],[0.53033,1.146447,-90],[0.176777,1.5,-90],[0.176777,1.5,180],[0.53033,1.5,-90],[0.53033,1.5,180],[0.53033,1.5,0],[0.53033,1.5,90],[0.957107,0.926777,-135],[0.957107,0.926777,135],[0.707107,1.176777,135],[0.707107,1.176777,-135],[0.707107,0.676777,135],[0.707107,0.676777,-135],[0.957107,0.926777,45],[0.957107,0.926777,-45],[0.883883,0.25,-90],[0.883883,0.25,180],[0.883883,0.603553,90],[0.883883,0.603553,180],[0,1.676777,-45],[0,1.676777,-135],[0.707107,1.926777,-90],[0.707107,1.926777,180],[0.883883,0,45],[0.883883,0,-45],[0.883883,0,-135],[0.883883,0,135],[0.957107,1.426777,45],[0.957107,1.426777,-45],[0.707107,1.676777,135],[0.707107,1.676777,-135]]},
		// 13
		{"name":"","hash":"ede998","data":[[0,1.676777,-135],[0,1.676777,135],[0,1.176777,135],[0,1.176777,-135],[0.25,1.426777,135],[0.25,1.426777,-135],[0.25,1.426777,45],[0.25,1.426777,-45],[0,0.676777,45],[0,0.676777,-45],[0.25,0.426777,-45],[0.25,0.426777,45],[0.25,0.926777,-45],[0.25,0.926777,45],[0,0.676777,-135],[0,0.676777,135],[0.5,0.426777,-45],[0.5,0.426777,-135],[0.25,0.676777,135],[0.25,0.676777,-135],[0.5,2.176777,135],[0.5,2.176777,45],[0,1.926777,45],[0,1.926777,-45],[0.25,0,-90],[0.25,0,180],[0.25,0,90],[0.25,0,0],[0.25,1.926777,-135],[0.25,1.926777,135],[0.5,1.676777,-45],[0.5,1.676777,45]]},
		{"name":"","hash":"15c8a7","data":[[0.926777,0.926777,135],[0.926777,0.926777,45],[0.426777,0.926777,45],[0.426777,0.926777,135],[0.676777,0.676777,45],[0.676777,0.676777,135],[0.676777,0.676777,-45],[0.676777,0.676777,-135],[0.353553,1.103553,90],[0.353553,1.103553,0],[0.707107,1.103553,0],[0.707107,1.103553,90],[0.353553,1.457107,0],[0.353553,1.457107,90],[0.353553,1.103553,-90],[0.353553,1.103553,180],[0.853553,0,-45],[0.853553,0,-135],[0.603553,0.25,135],[0.603553,0.25,-135],[0.853553,0.25,-90],[0.853553,0.25,180],[0.707107,1.707107,0],[0.707107,1.707107,-90],[0.65533,1.40533,-135],[0.65533,1.40533,135],[0.65533,1.40533,45],[0.65533,1.40533,-45],[0,1.81066,0],[0,1.81066,90],[0,1.457107,-90],[0,1.457107,180]]},
		{"name":"","hash":"72bd1f","data":[[0.53033,0.926777,-135],[0.53033,0.926777,135],[0.53033,0.426777,135],[0.53033,0.426777,-135],[0.78033,0.676777,135],[0.78033,0.676777,-135],[0.78033,0.676777,45],[0.78033,0.676777,-45],[0.353553,0.707107,-90],[0.353553,0.707107,180],[0,0.707107,180],[0,0.707107,-90],[0.353553,0.353553,180],[0.353553,0.353553,-90],[0.353553,0.707107,90],[0.353553,0.707107,0],[0.853553,0.853553,-90],[0.853553,0.853553,180],[0.853553,1.207107,90],[0.853553,1.207107,180],[1.03033,1.383883,-135],[1.03033,1.383883,135],[0.353553,1.56066,-90],[0.353553,1.56066,180],[0.53033,0,-90],[0.53033,0,180],[0.53033,0,90],[0.53033,0,0],[0.28033,1.383883,-135],[0.28033,1.383883,135],[0.53033,1.133883,-45],[0.53033,1.133883,45]]},
		{"name":"","hash":"1cee8e","data":[[0.426777,0.426777,90],[0.426777,0.426777,0],[0.073223,0.78033,0],[0.073223,0.78033,90],[0.073223,0.426777,0],[0.073223,0.426777,90],[0.073223,0.426777,-90],[0.073223,0.426777,180],[0.426777,0.78033,-90],[0.426777,0.78033,180],[0.073223,0.78033,180],[0.073223,0.78033,-90],[0.426777,0.426777,180],[0.426777,0.426777,-90],[0.426777,0.78033,90],[0.426777,0.78033,0],[0.25,0.957107,-45],[0.25,0.957107,-135],[0,1.207107,135],[0,1.207107,-135],[0.5,1.707107,135],[0.5,1.707107,45],[0,1.457107,45],[0,1.457107,-45],[0.25,0,-135],[0.25,0,135],[0.25,0,45],[0.25,0,-45],[0.25,1.457107,-135],[0.25,1.457107,135],[0.5,1.207107,-45],[0.5,1.207107,45]]},
		{"name":"","hash":"a7d4e4","data":[[0.573223,0.676777,135],[0.573223,0.676777,45],[0.073223,0.676777,45],[0.073223,0.676777,135],[0.323223,0.426777,45],[0.323223,0.426777,135],[0.323223,0.426777,-45],[0.323223,0.426777,-135],[0.353553,0.853553,180],[0.353553,0.853553,90],[0.353553,1.207107,90],[0.353553,1.207107,180],[0,0.853553,90],[0,0.853553,180],[0.353553,0.853553,0],[0.353553,0.853553,-90],[0.176777,1.383883,90],[0.176777,1.383883,0],[0.176777,1.03033,-90],[0.176777,1.03033,0],[0.707107,1.707107,0],[0.707107,1.707107,-90],[0,1.56066,45],[0,1.56066,-45],[0.323223,0,-90],[0.323223,0,180],[0.323223,0,90],[0.323223,0,0],[0.78033,1.53033,-45],[0.78033,1.53033,45],[0.53033,1.28033,-135],[0.53033,1.28033,135]]},
		{"name":"","hash":"a11770","data":[[0.383883,0.125,-45],[0.383883,0.125,-135],[0.883883,0.125,-135],[0.883883,0.125,-45],[0.633883,0.375,-135],[0.633883,0.375,-45],[0.633883,0.375,135],[0.633883,0.375,45],[0.707107,0.90533,-90],[0.707107,0.90533,180],[0.353553,0.90533,180],[0.353553,0.90533,-90],[0.707107,0.551777,180],[0.707107,0.551777,-90],[0.707107,0.90533,90],[0.707107,0.90533,0],[0.457107,0.448223,0],[0.457107,0.448223,-90],[0.103553,0.448223,180],[0.103553,0.448223,-90],[0,1.43566,-90],[0,1.43566,180],[0.353553,1.258883,90],[0.353553,1.258883,0],[0.008883,0,-135],[0.008883,0,135],[0.008883,0,45],[0.008883,0,-45],[1.06066,1.258883,-90],[1.06066,1.258883,0],[0.707107,1.258883,180],[0.707107,1.258883,90]]},
		{"name":"","hash":"4bb9e3","data":[[1.06066,0.301777,90],[1.06066,0.301777,0],[0.707107,0.65533,0],[0.707107,0.65533,90],[0.707107,0.301777,0],[0.707107,0.301777,90],[0.707107,0.301777,-90],[0.707107,0.301777,180],[0.707107,1.008883,-90],[0.707107,1.008883,180],[0.353553,1.008883,180],[0.353553,1.008883,-90],[0.707107,0.65533,180],[0.707107,0.65533,-90],[0.707107,1.008883,90],[0.707107,1.008883,0],[0.53033,0.582107,45],[0.53033,0.582107,-45],[0.28033,0.332107,-135],[0.28033,0.332107,-45],[0.707107,1.362437,180],[0.707107,1.362437,90],[0.883883,1.612437,-135],[0.883883,1.612437,135],[0.40533,0,-135],[0.40533,0,135],[0.40533,0,45],[0.40533,0,-45],[0,1.362437,-90],[0,1.362437,180],[0.353553,1.362437,0],[0.353553,1.362437,90]]},
		// 14
		{"name":"","hash":"a0365f","data":[[0.573223,0.676777,135],[0.573223,0.676777,45],[0.073223,0.676777,45],[0.073223,0.676777,135],[0.323223,0.426777,45],[0.323223,0.426777,135],[0.323223,0.426777,-45],[0.323223,0.426777,-135],[0.353553,0.853553,180],[0.353553,0.853553,90],[0.353553,1.207107,90],[0.353553,1.207107,180],[0,0.853553,90],[0,0.853553,180],[0.353553,0.853553,0],[0.353553,0.853553,-90],[0.353553,1.56066,90],[0.353553,1.56066,0],[0.353553,1.207107,-90],[0.353553,1.207107,0],[0.707107,1.707107,0],[0.707107,1.707107,-90],[0.176777,1.737437,45],[0.176777,1.737437,-45],[0.323223,0,-90],[0.323223,0,180],[0.323223,0,90],[0.323223,0,0],[0.78033,1.53033,-45],[0.78033,1.53033,45],[0.53033,1.28033,-135],[0.53033,1.28033,135]]},
		{"name":"","hash":"1094ff","data":[[0.5,0.728553,45],[0.5,0.728553,-45],[0.5,1.228553,-45],[0.5,1.228553,45],[0.25,0.978553,-45],[0.25,0.978553,45],[0.25,0.978553,-135],[0.25,0.978553,135],[0.25,1.478553,-135],[0.25,1.478553,135],[0,1.728553,135],[0,1.728553,-135],[0,1.228553,135],[0,1.228553,-135],[0.25,1.478553,45],[0.25,1.478553,-45],[0.323223,0.65533,90],[0.323223,0.65533,0],[0.323223,0.301777,-90],[0.323223,0.301777,0],[0.676777,1.90533,0],[0.676777,1.90533,-90],[0,1.978553,45],[0,1.978553,-45],[0.271447,0,-135],[0.271447,0,135],[0.271447,0,45],[0.271447,0,-45],[0.75,1.728553,-45],[0.75,1.728553,45],[0.5,1.478553,-135],[0.5,1.478553,135]]},
		{"name":"","hash":"8d2b7d","data":[[0.176777,1.508883,-90],[0.176777,1.508883,180],[0.53033,1.15533,180],[0.53033,1.15533,-90],[0.53033,1.508883,180],[0.53033,1.508883,-90],[0.53033,1.508883,90],[0.53033,1.508883,0],[0.457107,0.978553,-135],[0.457107,0.978553,135],[0.207107,1.228553,135],[0.207107,1.228553,-135],[0.207107,0.728553,135],[0.207107,0.728553,-135],[0.457107,0.978553,45],[0.457107,0.978553,-45],[0.383883,0.301777,-90],[0.383883,0.301777,180],[0.383883,0.65533,90],[0.383883,0.65533,180],[0.957107,1.93566,-135],[0.957107,1.93566,135],[0,1.68566,-45],[0,1.68566,-135],[0.43566,0,-135],[0.43566,0,135],[0.43566,0,45],[0.43566,0,-45],[0.957107,1.68566,-45],[0.957107,1.68566,45],[0.707107,1.43566,-135],[0.707107,1.43566,135]]},
		{"name":"","hash":"32dc67","data":[[0.323223,0.65533,-90],[0.323223,0.65533,180],[0.676777,0.301777,180],[0.676777,0.301777,-90],[0.676777,0.65533,180],[0.676777,0.65533,-90],[0.676777,0.65533,90],[0.676777,0.65533,0],[0.353553,1.082107,-45],[0.353553,1.082107,-135],[0.103553,0.832107,-135],[0.103553,0.832107,-45],[0.603553,0.832107,-135],[0.603553,0.832107,-45],[0.353553,1.082107,135],[0.353553,1.082107,45],[0.176777,1.508883,90],[0.176777,1.508883,0],[0.176777,1.15533,-90],[0.176777,1.15533,0],[0.603553,1.832107,135],[0.603553,1.832107,45],[0,1.68566,45],[0,1.68566,-45],[0.978553,0,-45],[0.978553,0,-135],[0.978553,0,135],[0.978553,0,45],[0.353553,1.582107,-135],[0.353553,1.582107,135],[0.603553,1.332107,-45],[0.603553,1.332107,45]]},
		{"name":"","hash":"3e7186","data":[[0,0.676777,-45],[0,0.676777,-135],[0.5,0.676777,-135],[0.5,0.676777,-45],[0.25,0.926777,-135],[0.25,0.926777,-45],[0.25,0.926777,135],[0.25,0.926777,45],[0.25,0.426777,135],[0.25,0.426777,45],[0.5,0.676777,45],[0.5,0.676777,135],[0,0.676777,45],[0,0.676777,135],[0.25,0.426777,-45],[0.25,0.426777,-135],[0.426777,1,-90],[0.426777,1,180],[0.426777,1.353553,90],[0.426777,1.353553,180],[0,1.676777,135],[0,1.676777,45],[0.603553,1.53033,-135],[0.603553,1.53033,135],[0.25,0,-90],[0.25,0,180],[0.25,0,90],[0.25,0,0],[0.25,1.426777,-45],[0.25,1.426777,45],[0,1.176777,-135],[0,1.176777,135]]},
		{"name":"","hash":"5fced2","data":[[0.426777,0.301777,0],[0.426777,0.301777,-90],[0.78033,0.65533,-90],[0.78033,0.65533,0],[0.426777,0.65533,-90],[0.426777,0.65533,0],[0.426777,0.65533,180],[0.426777,0.65533,90],[0.426777,1.008883,90],[0.426777,1.008883,0],[0.78033,1.008883,0],[0.78033,1.008883,90],[0.426777,1.362437,0],[0.426777,1.362437,90],[0.426777,1.008883,-90],[0.426777,1.008883,180],[0.073223,1.362437,-90],[0.073223,1.362437,180],[0.073223,1.71599,90],[0.073223,1.71599,180],[0.551777,1.737437,-90],[0.551777,1.737437,180],[0,1.892767,135],[0,1.892767,45],[0.125,0,-135],[0.125,0,135],[0.125,0,45],[0.125,0,-45],[0.478553,1.56066,-135],[0.478553,1.56066,135],[0.728553,1.31066,-45],[0.728553,1.31066,45]]},
		// part
		{"name":"","hash":"7cdfd9","data":[[1.06066,0.78033,90],[1.06066,0.78033,0],[0.707107,1.133883,0],[0.707107,1.133883,90],[0.707107,0.78033,0],[0.707107,0.78033,90],[0.707107,0.78033,-90],[0.707107,0.78033,180],[0.353553,0.426777,180],[0.353553,0.426777,90],[0.353553,0.78033,90],[0.353553,0.78033,180],[0,0.426777,90],[0,0.426777,180],[0.353553,0.426777,0],[0.353553,0.426777,-90],[0.707107,1.133883,-90],[0.707107,1.133883,180],[0.707107,1.487437,90],[0.707107,1.487437,180],[1.664214,0.676777,-90],[1.664214,0.676777,180],[0.883883,1.664214,0],[0.883883,1.664214,-90],[0.176777,0,-135],[0.176777,0,135],[0.176777,0,45],[0.176777,0,-45],[1.237437,0.853553,45],[1.237437,0.853553,135],[1.487437,0.603553,-45],[1.487437,0.603553,-135]]},
		{"name":"","hash":"ee431e","data":[[0.353553,0,0],[0.353553,0,-90],[0.707107,0.353553,-90],[0.707107,0.353553,0],[0.353553,0.353553,-90],[0.353553,0.353553,0],[0.353553,0.353553,180],[0.353553,0.353553,90],[0.353553,1.06066,0],[0.353553,1.06066,-90],[0.353553,0.707107,-90],[0.353553,0.707107,0],[0.707107,1.06066,-90],[0.707107,1.06066,0],[0.353553,1.06066,180],[0.353553,1.06066,90],[0,0,-90],[0,0,180],[0,0.353553,90],[0,0.353553,180],[0.426777,0.53033,-45],[0.426777,0.53033,-135],[1.06066,0.707107,180],[1.06066,0.707107,90],[1.008883,0.051777,-135],[1.008883,0.051777,135],[1.008883,0.051777,45],[1.008883,0.051777,-45],[1.06066,0.353553,-90],[1.06066,0.353553,0],[0.707107,0.353553,180],[0.707107,0.353553,90]]},
		{"name":"","hash":"f7a2c9","data":[[1.125,0.75,135],[1.125,0.75,45],[0.625,0.75,45],[0.625,0.75,135],[0.875,0.5,45],[0.875,0.5,135],[0.875,0.5,-45],[0.875,0.5,-135],[0.625,0.25,-135],[0.625,0.25,135],[0.375,0.5,135],[0.375,0.5,-135],[0.375,0,135],[0.375,0,-135],[0.625,0.25,45],[0.625,0.25,-45],[1.051777,0.073223,-90],[1.051777,0.073223,180],[1.051777,0.426777,90],[1.051777,0.426777,180],[1.228553,0.353553,-135],[1.228553,0.353553,135],[0.375,0.5,45],[0.375,0.5,-45],[0,0.375,-135],[0,0.375,135],[0,0.375,45],[0,0.375,-45],[1.728553,0.353553,135],[1.728553,0.353553,45],[1.478553,0.103553,-135],[1.478553,0.103553,-45]]},
		{"name":"","hash":"50d9a0","data":[[1,0.832107,45],[1,0.832107,-45],[1,1.332107,-45],[1,1.332107,45],[0.75,1.082107,-45],[0.75,1.082107,45],[0.75,1.082107,-135],[0.75,1.082107,135],[0.573223,0.301777,180],[0.573223,0.301777,90],[0.573223,0.65533,90],[0.573223,0.65533,180],[0.21967,0.301777,90],[0.21967,0.301777,180],[0.573223,0.301777,0],[0.573223,0.301777,-90],[0.926777,0.65533,90],[0.926777,0.65533,0],[0.926777,0.301777,-90],[0.926777,0.301777,0],[1,1.582107,-135],[1,1.582107,135],[0.5,0.832107,-45],[0.5,0.832107,-135],[0.875,0,-135],[0.875,0,135],[0.875,0,45],[0.875,0,-45],[0.25,1.082107,135],[0.25,1.082107,45],[0,0.832107,-135],[0,0.832107,-45]]},
		// 22
		{"name":"","hash":"e964d8","data":[[0.853553,1.353553,135],[0.853553,1.353553,45],[0.353553,1.353553,45],[0.353553,1.353553,135],[0.603553,1.103553,45],[0.603553,1.103553,135],[0.603553,1.103553,-45],[0.603553,1.103553,-135],[0.073223,1.03033,90],[0.073223,1.03033,0],[0.426777,1.03033,0],[0.426777,1.03033,90],[0.073223,1.383883,0],[0.073223,1.383883,90],[0.073223,1.03033,-90],[0.073223,1.03033,180],[0.426777,0.676777,0],[0.426777,0.676777,-90],[0.073223,0.676777,180],[0.073223,0.676777,-90],[0.707107,0.353553,-45],[0.707107,0.353553,-135],[0,0.5,-135],[0,0.5,135],[0.176777,0,-135],[0.176777,0,135],[0.176777,0,45],[0.176777,0,-45],[0.53033,0.426777,-90],[0.53033,0.426777,0],[0.176777,0.426777,180],[0.176777,0.426777,90]]},
		{"name":"","hash":"ea58c2","data":[[0.625,0.487437,45],[0.625,0.487437,-45],[0.625,0.987437,-45],[0.625,0.987437,45],[0.375,0.737437,-45],[0.375,0.737437,45],[0.375,0.737437,-135],[0.375,0.737437,135],[0.801777,1.414214,-90],[0.801777,1.414214,180],[0.448223,1.414214,180],[0.448223,1.414214,-90],[0.801777,1.06066,180],[0.801777,1.06066,-90],[0.801777,1.414214,90],[0.801777,1.414214,0],[0.801777,0.707107,90],[0.801777,0.707107,0],[0.801777,0.353553,-90],[0.801777,0.353553,0],[0,0.612437,-135],[0,0.612437,-45],[0.375,1.237437,-135],[0.375,1.237437,135],[0.625,0,180],[0.625,0,90],[0.625,0,0],[0.625,0,-90],[0.801777,1.06066,0],[0.801777,1.06066,90],[0.801777,0.707107,-90],[0.801777,0.707107,180]]},
		{"name":"","hash":"2f4367","data":[[0.75,1.25,135],[0.75,1.25,45],[0.25,1.25,45],[0.25,1.25,135],[0.5,1,45],[0.5,1,135],[0.5,1,-45],[0.5,1,-135],[0.75,0.75,45],[0.75,0.75,-45],[1,0.5,-45],[1,0.5,45],[1,1,-45],[1,1,45],[0.75,0.75,-135],[0.75,0.75,135],[0.5,0.5,-45],[0.5,0.5,-135],[0.25,0.75,135],[0.25,0.75,-135],[1,0.5,-135],[1,0.5,135],[0,0.5,-45],[0,0.5,-135],[1,0,-135],[1,0,135],[1,0,45],[1,0,-45],[1,1,-135],[1,1,135],[1.25,0.75,-45],[1.25,0.75,45]]},
		{"name":"","hash":"82ed21","data":[[0.353553,1.008883,180],[0.353553,1.008883,90],[0,0.65533,90],[0,0.65533,180],[0.353553,0.65533,90],[0.353553,0.65533,180],[0.353553,0.65533,0],[0.353553,0.65533,-90],[0.707107,1.008883,0],[0.707107,1.008883,-90],[0.707107,0.65533,-90],[0.707107,0.65533,0],[1.06066,1.008883,-90],[1.06066,1.008883,0],[0.707107,1.008883,180],[0.707107,1.008883,90],[0.353553,0.301777,0],[0.353553,0.301777,-90],[0,0.301777,180],[0,0.301777,-90],[0,0.65533,0],[0,0.65533,-90],[0.78033,0.478553,-45],[0.78033,0.478553,-135],[0.301777,0,-135],[0.301777,0,135],[0.301777,0,45],[0.301777,0,-45],[0.353553,1.008883,-90],[0.353553,1.008883,0],[0,1.008883,180],[0,1.008883,90]]},
		{"name":"","hash":"1fdd5b","data":[[0.176777,1.551777,-90],[0.176777,1.551777,180],[0.53033,1.198223,180],[0.53033,1.198223,-90],[0.53033,1.551777,180],[0.53033,1.551777,-90],[0.53033,1.551777,90],[0.53033,1.551777,0],[0.728553,0.75,-135],[0.728553,0.75,135],[0.478553,1,135],[0.478553,1,-135],[0.478553,0.5,135],[0.478553,0.5,-135],[0.728553,0.75,45],[0.728553,0.75,-45],[0.978553,0.75,180],[0.978553,0.75,90],[1.332107,0.75,0],[1.332107,0.75,90],[0.883883,1.728553,0],[0.883883,1.728553,-90],[0,1.728553,90],[0,1.728553,0],[0.478553,0,135],[0.478553,0,45],[0.478553,0,-45],[0.478553,0,-135],[0.228553,1.25,-135],[0.228553,1.25,135],[0.478553,1,-45],[0.478553,1,45]]},
		{"name":"","hash":"7e3ee2","data":[[0.5,1.18566,135],[0.5,1.18566,45],[0,1.18566,45],[0,1.18566,135],[0.25,0.93566,45],[0.25,0.93566,135],[0.25,0.93566,-45],[0.25,0.93566,-135],[0.5,0.68566,45],[0.5,0.68566,-45],[0.75,0.43566,-45],[0.75,0.43566,45],[0.75,0.93566,-45],[0.75,0.93566,45],[0.5,0.68566,-135],[0.5,0.68566,135],[0.926777,0.65533,90],[0.926777,0.65533,0],[0.926777,0.301777,-90],[0.926777,0.301777,0],[0.926777,1.008883,-90],[0.926777,1.008883,180],[0.25,0.43566,-45],[0.25,0.43566,-135],[0.875,0,-135],[0.875,0,135],[0.875,0,45],[0.875,0,-45],[0.926777,1.008883,0],[0.926777,1.008883,90],[0.926777,0.65533,-90],[0.926777,0.65533,180]]},
		{"name":"","hash":"f2acc4","data":[[0,1,-135],[0,1,135],[0,0.5,135],[0,0.5,-135],[0.25,0.75,135],[0.25,0.75,-135],[0.25,0.75,45],[0.25,0.75,-45],[0.75,0.75,135],[0.75,0.75,45],[1,1,45],[1,1,135],[0.5,1,45],[0.5,1,135],[0.75,0.75,-45],[0.75,0.75,-135],[0.176777,0.426777,180],[0.176777,0.426777,90],[0.53033,0.426777,0],[0.53033,0.426777,90],[1.25,1,-45],[1.25,1,-135],[0.707107,0,-45],[0.707107,0,-135],[0,0,-135],[0,0,135],[0,0,45],[0,0,-45],[0.25,1.25,45],[0.25,1.25,135],[0.5,1,-45],[0.5,1,-135]]},
		{"name":"","hash":"edcace","data":[[0.707107,0.43566,45],[0.707107,0.43566,-45],[0.707107,0.93566,-45],[0.707107,0.93566,45],[0.457107,0.68566,-45],[0.457107,0.68566,45],[0.457107,0.68566,-135],[0.457107,0.68566,135],[0.176777,1.008883,0],[0.176777,1.008883,-90],[0.176777,0.65533,-90],[0.176777,0.65533,0],[0.53033,1.008883,-90],[0.53033,1.008883,0],[0.176777,1.008883,180],[0.176777,1.008883,90],[0.883883,1.008883,90],[0.883883,1.008883,0],[0.883883,0.65533,-90],[0.883883,0.65533,0],[0.332107,0.31066,-45],[0.332107,0.31066,-135],[0,0.93566,45],[0,0.93566,-45],[0.832107,0,-135],[0.832107,0,135],[0.832107,0,45],[0.832107,0,-45],[0.883883,0.65533,180],[0.883883,0.65533,90],[0.883883,0.301777,-90],[0.883883,0.301777,0]]},
		// 23
		{"name":"","hash":"13398e","data":[[0.957107,0.573223,-135],[0.957107,0.573223,135],[0.957107,0.073223,135],[0.957107,0.073223,-135],[1.207107,0.323223,135],[1.207107,0.323223,-135],[1.207107,0.323223,45],[1.207107,0.323223,-45],[0.78033,0,180],[0.78033,0,90],[0.78033,0.353553,90],[0.78033,0.353553,180],[0.426777,0,90],[0.426777,0,180],[0.78033,0,0],[0.78033,0,-90],[0.5,0.323223,45],[0.5,0.323223,-45],[0.25,0.073223,-135],[0.25,0.073223,-45],[1.207107,0.823223,135],[1.207107,0.823223,45],[0.25,0.073223,135],[0.25,0.073223,45],[1.582107,0.448223,-135],[1.582107,0.448223,135],[1.582107,0.448223,45],[1.582107,0.448223,-45],[0.25,0.573223,135],[0.25,0.573223,45],[0,0.323223,-135],[0,0.323223,-45]]},
		{"name":"","hash":"c7ab6c","data":[[0.176777,0.875,-135],[0.176777,0.875,135],[0.176777,0.375,135],[0.176777,0.375,-135],[0.426777,0.625,135],[0.426777,0.625,-135],[0.426777,0.625,45],[0.426777,0.625,-45],[0.353553,1.65533,0],[0.353553,1.65533,-90],[0.353553,1.301777,-90],[0.353553,1.301777,0],[0.707107,1.65533,-90],[0.707107,1.65533,0],[0.353553,1.65533,180],[0.353553,1.65533,90],[0.426777,1.125,135],[0.426777,1.125,45],[0.676777,0.875,-45],[0.676777,0.875,45],[0.353553,1.301777,180],[0.353553,1.301777,90],[0,0.625,-90],[0,0.625,180],[0.051777,0,-135],[0.051777,0,135],[0.051777,0,45],[0.051777,0,-45],[0.883883,1.582107,-45],[0.883883,1.582107,-135],[1.133883,1.832107,45],[1.133883,1.832107,135]]},
		{"name":"","hash":"27f537","data":[[0.25,0.375,45],[0.25,0.375,-45],[0.25,0.875,-45],[0.25,0.875,45],[0,0.625,-45],[0,0.625,45],[0,0.625,-135],[0,0.625,135],[0.5,0.978553,-135],[0.5,0.978553,135],[0.25,1.228553,135],[0.25,1.228553,-135],[0.25,0.728553,135],[0.25,0.728553,-135],[0.5,0.978553,45],[0.5,0.978553,-45],[0.5,1.478553,135],[0.5,1.478553,45],[0.75,1.228553,-45],[0.75,1.228553,45],[0.5,0.478553,-45],[0.5,0.478553,-135],[0,1.478553,135],[0,1.478553,45],[0.375,0,-135],[0.375,0,135],[0.375,0,45],[0.375,0,-45],[0.073223,1.301777,180],[0.073223,1.301777,90],[0.073223,0.948223,-90],[0.073223,0.948223,0]]},
		{"name":"","hash":"5a542a","data":[[0.353553,0.301777,0],[0.353553,0.301777,-90],[0.707107,0.65533,-90],[0.707107,0.65533,0],[0.353553,0.65533,-90],[0.353553,0.65533,0],[0.353553,0.65533,180],[0.353553,0.65533,90],[0.353553,1.008883,90],[0.353553,1.008883,0],[0.707107,1.008883,0],[0.707107,1.008883,90],[0.353553,1.362437,0],[0.353553,1.362437,90],[0.353553,1.008883,-90],[0.353553,1.008883,180],[0,1.008883,-90],[0,1.008883,180],[0,1.362437,90],[0,1.362437,180],[0.853553,1.362437,-90],[0.853553,1.362437,180],[0,0.478553,-90],[0,0.478553,180],[0.051777,0,-135],[0.051777,0,135],[0.051777,0,45],[0.051777,0,-45],[0.676777,1.289214,-135],[0.676777,1.289214,-45],[0.426777,1.539214,135],[0.426777,1.539214,45]]},
		{"name":"","hash":"711bc1","data":[[0.25,0.375,45],[0.25,0.375,-45],[0.25,0.875,-45],[0.25,0.875,45],[0,0.625,-45],[0,0.625,45],[0,0.625,-135],[0,0.625,135],[0.426777,1.65533,0],[0.426777,1.65533,-90],[0.426777,1.301777,-90],[0.426777,1.301777,0],[0.78033,1.65533,-90],[0.78033,1.65533,0],[0.426777,1.65533,180],[0.426777,1.65533,90],[0.073223,1.301777,-90],[0.073223,1.301777,180],[0.073223,1.65533,90],[0.073223,1.65533,180],[0.073223,0.948223,0],[0.073223,0.948223,-90],[0.073223,1.301777,90],[0.073223,1.301777,0],[0.125,0,-135],[0.125,0,135],[0.125,0,45],[0.125,0,-45],[1.207107,1.832107,135],[1.207107,1.832107,45],[0.957107,1.582107,-135],[0.957107,1.582107,-45]]},
		{"name":"","hash":"d94c34","data":[[0.853553,1.082107,-135],[0.853553,1.082107,135],[0.853553,0.582107,135],[0.853553,0.582107,-135],[1.103553,0.832107,135],[1.103553,0.832107,-135],[1.103553,0.832107,45],[1.103553,0.832107,-45],[0.676777,1.15533,-90],[0.676777,1.15533,180],[0.323223,1.15533,180],[0.323223,1.15533,-90],[0.676777,0.801777,180],[0.676777,0.801777,-90],[0.676777,1.15533,90],[0.676777,1.15533,0],[0.25,0.978553,-45],[0.25,0.978553,-135],[0,1.228553,135],[0,1.228553,-135],[1.228553,0.457107,-45],[1.228553,0.457107,-135],[1.03033,1.15533,-90],[1.03033,1.15533,180],[0.978553,0,-135],[0.978553,0,135],[0.978553,0,45],[0.978553,0,-45],[0.603553,0.625,-135],[0.603553,0.625,135],[0.853553,0.375,-45],[0.853553,0.375,45]]},
		{"name":"","hash":"9598b2","data":[[0,0.65533,-90],[0,0.65533,180],[0.353553,0.301777,180],[0.353553,0.301777,-90],[0.353553,0.65533,180],[0.353553,0.65533,-90],[0.353553,0.65533,90],[0.353553,0.65533,0],[0.707107,0.301777,90],[0.707107,0.301777,0],[1.06066,0.301777,0],[1.06066,0.301777,90],[0.707107,0.65533,0],[0.707107,0.65533,90],[0.707107,0.301777,-90],[0.707107,0.301777,180],[1.237437,0.375,-45],[1.237437,0.375,-135],[0.987437,0.625,135],[0.987437,0.625,-135],[0.051777,0.353553,-45],[0.051777,0.353553,-135],[1.237437,0.375,135],[1.237437,0.375,45],[0.40533,0,-135],[0.40533,0,135],[0.40533,0,45],[0.40533,0,-45],[1.487437,0.625,-135],[1.487437,0.625,-45],[1.237437,0.875,135],[1.237437,0.875,45]]}

	]

};

export default section;