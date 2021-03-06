/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_007 = {
		version: 6,
		type: 'skirmish',
		size: {width: 11, height: 19},
		maxPlayers: 4,
		name: 'Crossroads',
		'name-es': 'Cruce de caminos',
		'name-ru': 'Перекресток',
		units: [
			{x: 1, y: 3, type: 'commander', ownerId: 0},
			{x: 9, y: 3, type: 'commander', ownerId: 1},
			{x: 1, y: 15, type: 'commander', ownerId: 2},
			{x: 9, y: 15, type: 'commander', ownerId: 3}
		],
		buildings: [
			{x: 3, y: 9, type: 'farm', state: 'destroyed'},
			{x: 7, y: 9, type: 'farm', state: 'destroyed'},
			{x: 5, y: 7, type: 'farm', state: 'destroyed'},
			{x: 5, y: 11, type: 'farm', state: 'destroyed'},
			{x: 1, y: 3, type: 'castle', state: 'normal', ownerId: 0},
			{x: 0, y: 5, type: 'farm', state: 'normal', ownerId: 0},
			{x: 9, y: 3, type: 'castle', state: 'normal', ownerId: 1},
			{x: 10, y: 5, type: 'farm', state: 'normal', ownerId: 1},
			{x: 0, y: 13, type: 'farm', state: 'normal', ownerId: 2},
			{x: 1, y: 15, type: 'castle', state: 'normal', ownerId: 2},
			{x: 9, y: 15, type: 'castle', state: 'normal', ownerId: 3},
			{x: 10, y: 13, type: 'farm', state: 'normal', ownerId: 3}
		],
		terrain: {
			x0y0: 'water-1',
			x0y1: 'water-1',
			x0y2: 'water-1',
			x0y3: 'forest-2',
			x0y4: 'road-1',
			x0y5: 'terra-1',
			x1y0: 'water-1',
			x1y1: 'water-2',
			x1y2: 'water-1',
			x1y3: 'terra-1',
			x1y4: 'road-1',
			x1y5: 'road-1',
			x2y0: 'water-1',
			x2y1: 'water-1',
			x2y2: 'water-1',
			x2y3: 'hill-1',
			x2y4: 'forest-2',
			x2y5: 'road-1',
			x3y0: 'water-3',
			x3y1: 'water-1',
			x3y2: 'forest-2',
			x3y3: 'terra-1',
			x3y4: 'hill-1',
			x3y5: 'road-1',
			x4y0: 'water-1',
			x4y1: 'water-1',
			x4y2: 'forest-1',
			x4y3: 'forest-1',
			x4y4: 'stone-1',
			x4y5: 'stone-1',
			x5y0: 'water-1',
			x5y1: 'water-1',
			x5y2: 'stone-1',
			x5y3: 'stone-1',
			x5y4: 'stone-1',
			x5y5: 'stone-1',
			x6y0: 'water-1',
			x6y1: 'water-1',
			x6y2: 'stone-1',
			x6y3: 'stone-1',
			x6y4: 'stone-1',
			x6y5: 'forest-1',
			x7y0: 'water-1',
			x7y1: 'water-1',
			x7y2: 'forest-1',
			x7y3: 'forest-2',
			x7y4: 'road-1',
			x7y5: 'road-1',
			x8y0: 'water-3',
			x8y1: 'water-1',
			x8y2: 'water-1',
			x8y3: 'terra-1',
			x8y4: 'road-1',
			x8y5: 'stone-1',
			x9y0: 'water-1',
			x9y1: 'water-2',
			x9y2: 'water-1',
			x9y3: 'terra-1',
			x9y4: 'road-1',
			x9y5: 'forest-2',
			x10y0: 'water-3',
			x10y1: 'water-1',
			x10y2: 'water-1',
			x10y3: 'hill-1',
			x10y4: 'road-1',
			x10y5: 'terra-1',
			x0y6: 'stone-1',
			x1y6: 'terra-1',
			x2y6: 'forest-1',
			x3y6: 'road-1',
			x4y6: 'forest-2',
			x5y6: 'stone-1',
			x6y6: 'forest-1',
			x7y6: 'road-1',
			x8y6: 'hill-1',
			x9y6: 'terra-1',
			x10y6: 'hill-1',
			x0y7: 'forest-1',
			x1y7: 'stone-1',
			x2y7: 'terra-1',
			x3y7: 'road-1',
			x4y7: 'terra-1',
			x5y7: 'terra-1',
			x6y7: 'hill-1',
			x7y7: 'road-1',
			x8y7: 'terra-1',
			x9y7: 'stone-1',
			x10y7: 'forest-1',
			x0y8: 'water-1',
			x1y8: 'water-1',
			x2y8: 'forest-2',
			x3y8: 'road-1',
			x4y8: 'road-1',
			x5y8: 'road-1',
			x6y8: 'road-1',
			x7y8: 'road-1',
			x8y8: 'hill-1',
			x9y8: 'water-1',
			x10y8: 'water-1',
			x0y9: 'water-2',
			x1y9: 'water-1',
			x2y9: 'stone-1',
			x3y9: 'terra-1',
			x4y9: 'forest-1',
			x5y9: 'road-1',
			x6y9: 'forest-2',
			x7y9: 'terra-1',
			x8y9: 'stone-1',
			x9y9: 'water-1',
			x10y9: 'water-3',
			x0y10: 'water-1',
			x1y10: 'water-1',
			x2y10: 'forest-1',
			x3y10: 'road-1',
			x4y10: 'road-1',
			x5y10: 'road-1',
			x6y10: 'road-1',
			x7y10: 'road-1',
			x8y10: 'forest-1',
			x9y10: 'water-1',
			x10y10: 'water-1',
			x0y11: 'stone-1',
			x1y11: 'stone-1',
			x2y11: 'terra-1',
			x3y11: 'road-1',
			x4y11: 'terra-1',
			x5y11: 'terra-1',
			x6y11: 'terra-1',
			x7y11: 'road-1',
			x8y11: 'road-1',
			x9y11: 'road-1',
			x10y11: 'stone-1',
			x0y12: 'hill-1',
			x1y12: 'terra-1',
			x2y12: 'forest-1',
			x3y12: 'road-1',
			x4y12: 'hill-1',
			x5y12: 'stone-1',
			x6y12: 'forest-2',
			x7y12: 'hill-1',
			x8y12: 'forest-2',
			x9y12: 'road-1',
			x10y12: 'hill-1',
			x0y13: 'terra-1',
			x1y13: 'hill-1',
			x2y13: 'stone-1',
			x3y13: 'road-1',
			x4y13: 'forest-2',
			x5y13: 'stone-1',
			x6y13: 'forest-1',
			x7y13: 'stone-1',
			x8y13: 'forest-1',
			x9y13: 'road-1',
			x10y13: 'terra-1',
			x0y14: 'road-1',
			x1y14: 'road-1',
			x2y14: 'road-1',
			x3y14: 'road-1',
			x4y14: 'stone-1',
			x5y14: 'stone-1',
			x6y14: 'stone-1',
			x7y14: 'hill-1',
			x8y14: 'terra-1',
			x9y14: 'road-1',
			x10y14: 'road-1',
			x0y15: 'forest-2',
			x1y15: 'terra-1',
			x2y15: 'hill-1',
			x3y15: 'terra-1',
			x4y15: 'forest-1',
			x5y15: 'stone-1',
			x6y15: 'stone-1',
			x7y15: 'forest-2',
			x8y15: 'terra-1',
			x9y15: 'terra-1',
			x10y15: 'forest-1',
			x0y16: 'water-1',
			x1y16: 'water-1',
			x2y16: 'water-1',
			x3y16: 'forest-2',
			x4y16: 'stone-1',
			x5y16: 'stone-1',
			x6y16: 'forest-1',
			x7y16: 'forest-1',
			x8y16: 'water-1',
			x9y16: 'water-1',
			x10y16: 'water-1',
			x0y17: 'water-3',
			x1y17: 'water-1',
			x2y17: 'water-1',
			x3y17: 'water-1',
			x4y17: 'water-1',
			x5y17: 'water-1',
			x6y17: 'water-1',
			x7y17: 'water-1',
			x8y17: 'water-1',
			x9y17: 'water-1',
			x10y17: 'water-2',
			x0y18: 'water-1',
			x1y18: 'water-2',
			x2y18: 'water-1',
			x3y18: 'water-1',
			x4y18: 'water-1',
			x5y18: 'water-1',
			x6y18: 'water-1',
			x7y18: 'water-3',
			x8y18: 'water-1',
			x9y18: 'water-1',
			x10y18: 'water-1'
		}
	};

}(window));