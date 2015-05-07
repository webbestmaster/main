/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_005 = {
		"version": 2,
		"type": "skirmish",
		"size": {"width": 16, "height": 10},
		"name": "The Crossing",
		"name-ru": "Пересечение",
		"maxPlayers": 2,
		"isOpen": true,

		"units": [
			{"x": 1, "y": 1, "type": "commander", "ownerId": 0},
			{"x": 14, "y": 6, "type": "commander", "ownerId": 1}
		],
		"buildings": [
			{"x": 1, "y": 1, "type": "castle", "state": "normal", "ownerId": 0},
			{"x": 3, "y": 1, "type": "farm", "state": "normal"},
			{"x": 4, "y": 8, "type": "castle", "state": "normal"},
			{"x": 2, "y": 4, "type": "farm", "state": "normal"},
			{"x": 6, "y": 6, "type": "farm", "state": "normal"},
			{"x": 8, "y": 5, "type": "farm", "state": "normal"},
			{"x": 8, "y": 2, "type": "farm", "state": "normal"},
			{"x": 10, "y": 0, "type": "castle", "state": "normal"},
			{"x": 13, "y": 3, "type": "farm", "state": "normal"},
			{"x": 12, "y": 6, "type": "farm", "state": "normal"},
			{"x": 14, "y": 6, "type": "castle", "state": "normal", "ownerId": 1}
		],
		"terrain": {
			"x0y0": "forest-1",
			"x0y1": "stone-1",
			"x0y2": "road-1",
			"x0y3": "forest-1",
			"x0y4": "terra-1",
			"x0y5": "terra-1",
			"x1y0": "stone-1",
			"x1y1": "terra-1",
			"x1y2": "road-1",
			"x1y3": "hill-1",
			"x1y4": "stone-1",
			"x1y5": "hill-1",
			"x2y0": "hill-1",
			"x2y1": "terra-1",
			"x2y2": "road-1",
			"x2y3": "forest-1",
			"x2y4": "terra-1",
			"x2y5": "forest-2",
			"x3y0": "forest-2",
			"x3y1": "terra-1",
			"x3y2": "road-1",
			"x3y3": "road-1",
			"x3y4": "road-1",
			"x3y5": "road-1",
			"x4y0": "water-1",
			"x4y1": "water-1",
			"x4y2": "water-1",
			"x4y3": "water-1",
			"x4y4": "water-1",
			"x4y5": "forest-1",
			"x5y0": "water-2",
			"x5y1": "water-1",
			"x5y2": "water-1",
			"x5y3": "water-1",
			"x5y4": "water-1",
			"x5y5": "forest-1",
			"x6y0": "water-1",
			"x6y1": "water-1",
			"x6y2": "forest-1",
			"x6y3": "stone-1",
			"x6y4": "terra-1",
			"x6y5": "terra-1",
			"x7y0": "forest-1",
			"x7y1": "forest-1",
			"x7y2": "terra-1",
			"x7y3": "hill-1",
			"x7y4": "road-1",
			"x7y5": "road-1",
			"x8y0": "forest-2",
			"x8y1": "terra-1",
			"x8y2": "terra-1",
			"x8y3": "terra-1",
			"x8y4": "road-1",
			"x8y5": "terra-1",
			"x9y0": "stone-1",
			"x9y1": "road-1",
			"x9y2": "road-1",
			"x9y3": "road-1",
			"x9y4": "road-1",
			"x9y5": "water-1",
			"x10y0": "terra-1",
			"x10y1": "road-1",
			"x10y2": "hill-1",
			"x10y3": "stone-1",
			"x10y4": "terra-1",
			"x10y5": "water-1",
			"x11y0": "terra-1",
			"x11y1": "road-1",
			"x11y2": "forest-1",
			"x11y3": "terra-1",
			"x11y4": "road-1",
			"x11y5": "road-1",
			"x0y6": "forest-1",
			"x1y6": "terra-1",
			"x2y6": "hill-1",
			"x3y6": "road-1",
			"x4y6": "forest-2",
			"x5y6": "terra-1",
			"x6y6": "terra-1",
			"x7y6": "road-1",
			"x8y6": "hill-1",
			"x9y6": "water-1",
			"x10y6": "water-1",
			"x11y6": "road-1",
			"x0y7": "stone-1",
			"x1y7": "terra-1",
			"x2y7": "stone-1",
			"x3y7": "road-1",
			"x4y7": "hill-1",
			"x5y7": "forest-2",
			"x6y7": "stone-1",
			"x7y7": "road-1",
			"x8y7": "water-1",
			"x9y7": "water-1",
			"x10y7": "water-1",
			"x11y7": "road-1",
			"x0y8": "forest-2",
			"x1y8": "hill-1",
			"x2y8": "terra-1",
			"x3y8": "road-1",
			"x4y8": "terra-1",
			"x5y8": "road-1",
			"x6y8": "road-1",
			"x7y8": "road-1",
			"x8y8": "water-1",
			"x9y8": "water-2",
			"x10y8": "water-1",
			"x11y8": "forest-2",
			"x0y9": "forest-1",
			"x1y9": "forest-1",
			"x2y9": "stone-1",
			"x3y9": "road-1",
			"x4y9": "road-1",
			"x5y9": "road-1",
			"x6y9": "hill-1",
			"x7y9": "stone-1",
			"x8y9": "water-1",
			"x9y9": "water-1",
			"x10y9": "water-1",
			"x11y9": "stone-1",
			"x12y0": "stone-1",
			"x12y1": "road-1",
			"x12y2": "road-1",
			"x12y3": "road-1",
			"x12y4": "road-1",
			"x12y5": "hill-1",
			"x12y6": "terra-1",
			"x12y7": "road-1",
			"x12y8": "terra-1",
			"x12y9": "forest-1",
			"x13y0": "forest-1",
			"x13y1": "hill-1",
			"x13y2": "terra-1",
			"x13y3": "terra-1",
			"x13y4": "terra-1",
			"x13y5": "terra-1",
			"x13y6": "hill-1",
			"x13y7": "road-1",
			"x13y8": "hill-1",
			"x13y9": "stone-1",
			"x14y0": "forest-1",
			"x14y1": "stone-1",
			"x14y2": "terra-1",
			"x14y3": "hill-1",
			"x14y4": "forest-1",
			"x14y5": "stone-1",
			"x14y6": "terra-1",
			"x14y7": "road-1",
			"x14y8": "terra-1",
			"x14y9": "forest-2",
			"x15y0": "stone-1",
			"x15y1": "forest-1",
			"x15y2": "forest-2",
			"x15y3": "stone-1",
			"x15y4": "forest-2",
			"x15y5": "forest-1",
			"x15y6": "stone-1",
			"x15y7": "road-1",
			"x15y8": "forest-1",
			"x15y9": "forest-1"
		}
	};

}(window));