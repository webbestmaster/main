(function () {

	"use strict";
	/*global window, document */
	/*global APP */

	APP.maps = APP.maps || {};

	APP.maps.islandCross = {
		"type": "skirmish",
		"size": {
			"width": 15,
			"height": 15
		},
		"name": "Island Cross",
		"name-ru": "Остров Крест",
		"maxPlayers": 2,

		"units": [
			{"type": "Knight", "x": 1, "y": 13, playerId: 0},
			{"type": "Knight", "x": 13, "y": 1, playerId: 1}
		],
		"buildings": [{"type": "farm", "x": 8, "y": 0}, {"type": "farm", "x": 0, "y": 1}, {"type": "farm", "x": 11, "y": 1}, {"type": "castle", "x": 13, "y": 1}, {"type": "farm", "x": 0, "y": 4}, {"type": "farm", "x": 7, "y": 6}, {"type": "castle", "x": 11, "y": 6}, {"type": "castle", "x": 3, "y": 8}, {"type": "farm", "x": 7, "y": 8}, {"type": "farm", "x": 14, "y": 10}, {"type": "castle", "x": 1, "y": 13}, {"type": "farm", "x": 3, "y": 13}, {"type": "farm", "x": 14, "y": 13}, {"type": "farm", "x": 6, "y": 14}],
		"terrain": {
			"x0y0": "stone",
			"x1y0": "terra",
			"x2y0": "forest",
			"x3y0": "terra",
			"x4y0": "water",
			"x5y0": "terra",
			"x6y0": "forest",
			"x7y0": "hill",
			"x8y0": "terra",
			"x9y0": "forest",
			"x10y0": "road",
			"x11y0": "road",
			"x12y0": "road",
			"x13y0": "road",
			"x14y0": "hill",
			"x0y1": "terra",
			"x1y1": "forest",
			"x2y1": "road",
			"x3y1": "road",
			"x4y1": "bridge-1",
			"x5y1": "road",
			"x6y1": "road",
			"x7y1": "road",
			"x8y1": "road",
			"x9y1": "road",
			"x10y1": "road",
			"x11y1": "terra",
			"x12y1": "forest",
			"x13y1": "terra",
			"x14y1": "forest",
			"x0y2": "terra",
			"x1y2": "terra",
			"x2y2": "road",
			"x3y2": "terra",
			"x4y2": "water",
			"x5y2": "terra",
			"x6y2": "terra",
			"x7y2": "terra",
			"x8y2": "terra",
			"x9y2": "terra",
			"x10y2": "terra",
			"x11y2": "terra",
			"x12y2": "terra",
			"x13y2": "terra",
			"x14y2": "terra",
			"x0y3": "terra",
			"x1y3": "terra",
			"x2y3": "road",
			"x3y3": "terra",
			"x4y3": "water",
			"x5y3": "water",
			"x6y3": "water",
			"x7y3": "water",
			"x8y3": "water",
			"x9y3": "water",
			"x10y3": "water",
			"x11y3": "water",
			"x12y3": "water",
			"x13y3": "water",
			"x14y3": "water",
			"x0y4": "terra",
			"x1y4": "forest",
			"x2y4": "road",
			"x3y4": "terra",
			"x4y4": "water",
			"x5y4": "water",
			"x6y4": "water",
			"x7y4": "water",
			"x8y4": "water",
			"x9y4": "water",
			"x10y4": "water",
			"x11y4": "water",
			"x12y4": "water",
			"x13y4": "water",
			"x14y4": "water",
			"x0y5": "terra",
			"x1y5": "terra",
			"x2y5": "road",
			"x3y5": "road",
			"x4y5": "terra",
			"x5y5": "water",
			"x6y5": "water",
			"x7y5": "terra",
			"x8y5": "terra",
			"x9y5": "water",
			"x10y5": "terra",
			"x11y5": "terra",
			"x12y5": "terra",
			"x13y5": "terra",
			"x14y5": "terra",
			"x0y6": "forest",
			"x1y6": "terra",
			"x2y6": "stone",
			"x3y6": "road",
			"x4y6": "terra",
			"x5y6": "water",
			"x6y6": "terra",
			"x7y6": "terra",
			"x8y6": "terra",
			"x9y6": "water",
			"x10y6": "terra",
			"x11y6": "terra",
			"x12y6": "stone",
			"x13y6": "stone",
			"x14y6": "stone",
			"x0y7": "forest",
			"x1y7": "forest",
			"x2y7": "terra",
			"x3y7": "road",
			"x4y7": "road",
			"x5y7": "bridge-1",
			"x6y7": "forest",
			"x7y7": "forest",
			"x8y7": "forest",
			"x9y7": "bridge-1",
			"x10y7": "road",
			"x11y7": "road",
			"x12y7": "terra",
			"x13y7": "forest",
			"x14y7": "forest",
			"x0y8": "stone",
			"x1y8": "stone",
			"x2y8": "stone",
			"x3y8": "terra",
			"x4y8": "terra",
			"x5y8": "water",
			"x6y8": "terra",
			"x7y8": "terra",
			"x8y8": "terra",
			"x9y8": "water",
			"x10y8": "terra",
			"x11y8": "road",
			"x12y8": "stone",
			"x13y8": "terra",
			"x14y8": "forest",
			"x0y9": "terra",
			"x1y9": "terra",
			"x2y9": "terra",
			"x3y9": "terra",
			"x4y9": "terra",
			"x5y9": "water",
			"x6y9": "terra",
			"x7y9": "terra",
			"x8y9": "water",
			"x9y9": "water",
			"x10y9": "terra",
			"x11y9": "road",
			"x12y9": "road",
			"x13y9": "terra",
			"x14y9": "terra",
			"x0y10": "water",
			"x1y10": "water",
			"x2y10": "water",
			"x3y10": "water",
			"x4y10": "water",
			"x5y10": "water",
			"x6y10": "water",
			"x7y10": "water",
			"x8y10": "water",
			"x9y10": "water",
			"x10y10": "water",
			"x11y10": "terra",
			"x12y10": "road",
			"x13y10": "forest",
			"x14y10": "terra",
			"x0y11": "water",
			"x1y11": "water",
			"x2y11": "water",
			"x3y11": "water",
			"x4y11": "water",
			"x5y11": "water",
			"x6y11": "water",
			"x7y11": "water",
			"x8y11": "water",
			"x9y11": "water",
			"x10y11": "water",
			"x11y11": "terra",
			"x12y11": "road",
			"x13y11": "terra",
			"x14y11": "terra",
			"x0y12": "terra",
			"x1y12": "terra",
			"x2y12": "terra",
			"x3y12": "terra",
			"x4y12": "terra",
			"x5y12": "terra",
			"x6y12": "terra",
			"x7y12": "terra",
			"x8y12": "terra",
			"x9y12": "terra",
			"x10y12": "water",
			"x11y12": "terra",
			"x12y12": "road",
			"x13y12": "terra",
			"x14y12": "terra",
			"x0y13": "forest",
			"x1y13": "terra",
			"x2y13": "forest",
			"x3y13": "terra",
			"x4y13": "road",
			"x5y13": "road",
			"x6y13": "road",
			"x7y13": "road",
			"x8y13": "road",
			"x9y13": "road",
			"x10y13": "bridge-1",
			"x11y13": "road",
			"x12y13": "road",
			"x13y13": "forest",
			"x14y13": "terra",
			"x0y14": "hill",
			"x1y14": "road",
			"x2y14": "road",
			"x3y14": "road",
			"x4y14": "road",
			"x5y14": "forest",
			"x6y14": "terra",
			"x7y14": "hill",
			"x8y14": "forest",
			"x9y14": "terra",
			"x10y14": "water",
			"x11y14": "terra",
			"x12y14": "forest",
			"x13y14": "terra",
			"x14y14": "stone"
		}
	};

}());