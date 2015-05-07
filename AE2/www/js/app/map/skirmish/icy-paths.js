/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_004 = {
		"version": 2,
		"type": "skirmish",
		"size": {"width": 15, "height": 15},
		"name": "Icy Path",
		"name-ru": "Ледяной путь",
		"maxPlayers": 2,
		"isOpen": true,

		"units": [
			{"x": 1, "y": 1, "type": "commander", "ownerId": 0},
			{"x": 13, "y": 13, "type": "commander", "ownerId": 1}
		],
		"buildings": [
			{"x": 1, "y": 3, "type": "farm", "state": "normal", "ownerId": 0},
			{"x": 3, "y": 1, "type": "farm", "state": "normal", "ownerId": 0},
			{"x": 1, "y": 1, "type": "castle", "state": "normal", "ownerId": 0},
			{"x": 1, "y": 10, "type": "castle", "state": "normal"},
			{"x": 3, "y": 8, "type": "farm", "state": "normal"},
			{"x": 6, "y": 13, "type": "farm", "state": "normal"},
			{"x": 6, "y": 8, "type": "farm", "state": "normal"},
			{"x": 8, "y": 6, "type": "farm", "state": "normal"},
			{"x": 8, "y": 1, "type": "farm", "state": "normal"},
			{"x": 13, "y": 4, "type": "castle", "state": "normal"},
			{"x": 11, "y": 6, "type": "farm", "state": "normal"},
			{"x": 13, "y": 11, "type": "farm", "state": "normal", "ownerId": 1},
			{"x": 11, "y": 13, "type": "farm", "state": "normal", "ownerId": 1},
			{"x": 13, "y": 13, "type": "castle", "state": "normal", "ownerId": 1}
		],
		"terrain": {
			"x0y0": "stone-1",
			"x0y1": "forest-1",
			"x0y2": "road-1",
			"x0y3": "stone-1",
			"x0y4": "water-1",
			"x0y5": "water-1",
			"x1y0": "terra-1",
			"x1y1": "terra-1",
			"x1y2": "road-1",
			"x1y3": "terra-1",
			"x1y4": "water-1",
			"x1y5": "water-1",
			"x2y0": "road-1",
			"x2y1": "road-1",
			"x2y2": "road-1",
			"x2y3": "road-1",
			"x2y4": "bridge-2",
			"x2y5": "bridge-2",
			"x3y0": "hill-1",
			"x3y1": "terra-1",
			"x3y2": "road-1",
			"x3y3": "forest-1",
			"x3y4": "water-1",
			"x3y5": "water-1",
			"x4y0": "water-1",
			"x4y1": "water-1",
			"x4y2": "bridge-1",
			"x4y3": "water-1",
			"x4y4": "water-1",
			"x4y5": "water-1",
			"x5y0": "water-1",
			"x5y1": "water-1",
			"x5y2": "bridge-1",
			"x5y3": "water-1",
			"x5y4": "water-1",
			"x5y5": "water-1",
			"x6y0": "water-1",
			"x6y1": "forest-2",
			"x6y2": "road-1",
			"x6y3": "stone-1",
			"x6y4": "water-1",
			"x6y5": "water-1",
			"x7y0": "forest-1",
			"x7y1": "terra-1",
			"x7y2": "road-1",
			"x7y3": "road-1",
			"x7y4": "road-1",
			"x7y5": "road-1",
			"x8y0": "hill-1",
			"x8y1": "terra-1",
			"x8y2": "terra-1",
			"x8y3": "stone-1",
			"x8y4": "terra-1",
			"x8y5": "forest-1",
			"x9y0": "stone-1",
			"x9y1": "forest-1",
			"x9y2": "hill-1",
			"x9y3": "forest-1",
			"x9y4": "forest-2",
			"x9y5": "road-1",
			"x10y0": "forest-2",
			"x10y1": "forest-1",
			"x10y2": "stone-1",
			"x10y3": "forest-2",
			"x10y4": "stone-1",
			"x10y5": "road-1",
			"x11y0": "water-1",
			"x11y1": "stone-1",
			"x11y2": "forest-1",
			"x11y3": "terra-1",
			"x11y4": "hill-1",
			"x11y5": "road-1",
			"x0y6": "forest-1",
			"x1y6": "hill-1",
			"x2y6": "terra-1",
			"x3y6": "forest-1",
			"x4y6": "stone-1",
			"x5y6": "water-1",
			"x6y6": "water-1",
			"x7y6": "road-1",
			"x8y6": "terra-1",
			"x9y6": "road-1",
			"x10y6": "terra-1",
			"x11y6": "terra-1",
			"x0y7": "forest-2",
			"x1y7": "terra-1",
			"x2y7": "forest-1",
			"x3y7": "hill-1",
			"x4y7": "terra-1",
			"x5y7": "road-1",
			"x6y7": "road-1",
			"x7y7": "road-1",
			"x8y7": "road-1",
			"x9y7": "road-1",
			"x10y7": "hill-1",
			"x11y7": "forest-2",
			"x0y8": "hill-1",
			"x1y8": "terra-1",
			"x2y8": "terra-1",
			"x3y8": "terra-1",
			"x4y8": "stone-1",
			"x5y8": "road-1",
			"x6y8": "terra-1",
			"x7y8": "road-1",
			"x8y8": "water-1",
			"x9y8": "water-1",
			"x10y8": "terra-1",
			"x11y8": "forest-1",
			"x0y9": "forest-2",
			"x1y9": "road-1",
			"x2y9": "road-1",
			"x3y9": "road-1",
			"x4y9": "road-1",
			"x5y9": "road-1",
			"x6y9": "terra-1",
			"x7y9": "road-1",
			"x8y9": "water-1",
			"x9y9": "water-1",
			"x10y9": "water-1",
			"x11y9": "water-1",
			"x0y10": "forest-1",
			"x1y10": "terra-1",
			"x2y10": "stone-1",
			"x3y10": "terra-1",
			"x4y10": "hill-1",
			"x5y10": "forest-2",
			"x6y10": "forest-2",
			"x7y10": "road-1",
			"x8y10": "water-1",
			"x9y10": "water-1",
			"x10y10": "water-1",
			"x11y10": "water-1",
			"x0y11": "stone-1",
			"x1y11": "hill-1",
			"x2y11": "terra-1",
			"x3y11": "forest-2",
			"x4y11": "stone-1",
			"x5y11": "forest-1",
			"x6y11": "stone-1",
			"x7y11": "road-1",
			"x8y11": "stone-1",
			"x9y11": "water-1",
			"x10y11": "water-1",
			"x11y11": "forest-1",
			"x12y0": "water-1",
			"x12y1": "water-1",
			"x12y2": "stone-1",
			"x12y3": "forest-2",
			"x12y4": "terra-1",
			"x12y5": "road-1",
			"x12y6": "terra-1",
			"x12y7": "forest-1",
			"x12y8": "stone-1",
			"x12y9": "bridge-2",
			"x12y10": "bridge-2",
			"x12y11": "road-1",
			"x13y0": "water-1",
			"x13y1": "water-1",
			"x13y2": "hill-1",
			"x13y3": "terra-1",
			"x13y4": "terra-1",
			"x13y5": "road-1",
			"x13y6": "forest-2",
			"x13y7": "forest-1",
			"x13y8": "water-1",
			"x13y9": "water-1",
			"x13y10": "water-1",
			"x13y11": "terra-1",
			"x14y0": "water-1",
			"x14y1": "water-1",
			"x14y2": "forest-2",
			"x14y3": "terra-2",
			"x14y4": "stone-1",
			"x14y5": "terra-1",
			"x14y6": "forest-1",
			"x14y7": "stone-1",
			"x14y8": "forest-2",
			"x14y9": "water-1",
			"x14y10": "water-1",
			"x14y11": "stone-1",
			"x0y12": "forest-1",
			"x1y12": "stone-1",
			"x2y12": "hill-1",
			"x3y12": "stone-1",
			"x4y12": "hill-1",
			"x5y12": "stone-1",
			"x6y12": "terra-1",
			"x7y12": "road-1",
			"x8y12": "road-1",
			"x9y12": "bridge-1",
			"x10y12": "bridge-1",
			"x11y12": "road-1",
			"x12y12": "road-1",
			"x13y12": "road-1",
			"x14y12": "road-1",
			"x0y13": "water-1",
			"x1y13": "water-1",
			"x2y13": "water-1",
			"x3y13": "forest-2",
			"x4y13": "forest-1",
			"x5y13": "hill-1",
			"x6y13": "terra-1",
			"x7y13": "terra-1",
			"x8y13": "forest-1",
			"x9y13": "water-1",
			"x10y13": "water-1",
			"x11y13": "terra-1",
			"x12y13": "road-1",
			"x13y13": "terra-1",
			"x14y13": "forest-2",
			"x0y14": "water-1",
			"x1y14": "water-1",
			"x2y14": "water-1",
			"x3y14": "water-1",
			"x4y14": "forest-1",
			"x5y14": "forest-1",
			"x6y14": "terra-1",
			"x7y14": "forest-2",
			"x8y14": "water-1",
			"x9y14": "water-1",
			"x10y14": "water-1",
			"x11y14": "hill-1",
			"x12y14": "road-1",
			"x13y14": "terra-1",
			"x14y14": "stone-1"
		}
	};

}(window));