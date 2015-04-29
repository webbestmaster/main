/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	var langEn = win.APP.languages.en;

	win.APP.maps.mission_001_005 = {
		"type": "mission",
		"isOpen": false,
		"openMaps": [ { "jsMapKey": 'mission_001_006', "type": "mission" } ],
		"size": {"width": 20, "height": 12},
		"name": "ESCORT DUTY",
		"name-ru": "RU ESCORT DUTY",
		"maxPlayers": 2,
		"unitLimit": 10,
		"win": ['noEnemyUnit', 'allUnorderedCasesIsDone'], // allCastles, noEnemyUnit, allUnorderedCasesIsDone
		"defeat": ['commanderIsDead', 'crystalIsDead'], // 'galamarDead', 'valadornDead', crystalIsDead

		"objective": 'Deliver the Crystal south to the city of Thorin. King Galamar must survive.',
		"startBriefing": [
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'Pathway to Thorin'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Your Highness, I do not like the look of this forest, we must be careful!',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 11 , y: 1 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Very well, Captain. Let us follow this path and stay on our guard.',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'ESCORT DUTY',
					text: 'Deliver the Crystal south to the city of Thorin. King Galamar must survive.'
				}
			}
		],

		"n1Briefing": [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Ambush! Protect the Crystal at all cost!',
					img: 'i/face/soldier.png'
				}
			}

		],

		"endBriefing": [
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEn.victory,
					text: langEn.continue
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_006', { type: 'mission' }]
				}
			}
		],

		"unorderedCases": [
			{
				isDone: false,
				detect: 'unitOnPlace',
				do: ['appendUnits', 'showBriefing'],
				place: [
					{
						x1: 0,
						y1: 0,
						x2: 8,
						y2: 6
					}
				],
				units: [
					{
						type: 'skeleton',
						ownerId: 1,
						x: 4,
						y: 1
					},
					{
						type: 'archer',
						ownerId: 1,
						x: 5,
						y: 2
					},
					{
						type: 'skeleton',
						ownerId: 1,
						x: 4,
						y: 3
					}
				],
				briefingName: 'n1Briefing'
			},

			{
				isDone: false,
				detect: 'unitOnPlace',
				do: ['appendUnits'],
				place: [
					{
						x1: 0,
						y1: 7,
						x2: 7,
						y2: 11
					}
				],
				units: [
					{
						type: 'archer',
						ownerId: 1,
						x: 5,
						y: 10
					},
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 7,
						y: 9
					},
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 7,
						y: 8
					}
				]
			},
			{
				isDone: false,
				detect: 'unitOnPlace',
				do: ['appendUnits'],
				place: [
					{
						x1: 8,
						y1: 7,
						x2: 15,
						y2: 11
					}
				],
				units: [
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 11,
						y: 5
					},
					{
						type: 'golem',
						ownerId: 1,
						x: 12,
						y: 6
					},
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 12,
						y: 7
					}
				]
			},
			{
				isDone: false,
				detect: 'unitOnPlace',
				do: ['appendUnits'],
				place: [
					{
						x1: 16,
						y1: 4,
						x2: 19,
						y2: 11
					}
				],
				units: [
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 16,
						y: 10
					},
					{
						type: 'golem',
						ownerId: 1,
						x: 17,
						y: 10
					},
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 18,
						y: 10
					},
					{
						type: 'archer',
						ownerId: 1,
						x: 18,
						y: 9
					}
				]
			}
		],

		"units": [
			{"x": 11, "y": 0, "type": "crystal", "ownerId": 0},
			{"x": 11, "y": 1, "type": "galamar", "ownerId": 0},
			{"x": 12, "y": 0, "type": "archer", "ownerId": 0},
			{"x": 12, "y": 1, "type": "sorceress", "ownerId": 0},
			{"x": 11, "y": 2, "type": "soldier", "ownerId": 0},
			{"x": 10, "y": 1, "type": "dire-wolf", "ownerId": 0}
		],
		"buildings": [
			{"x": 2, "y": 1, "type": "temple", "state": "normal"},
			{"x": 7, "y": 5, "type": "temple", "state": "normal"},
			{"x": 6, "y": 10, "type": "well", "state": "normal"},
			{"x": 4, "y": 4, "type": "well", "state": "normal"},
			{"x": 12, "y": 5, "type": "well", "state": "normal"},
			{"x": 18, "y": 8, "type": "well", "state": "normal"},
			{"x": 12, "y": 8, "type": "temple", "state": "normal"}
		],
		"terrain": {
			"x0y0": "stone-1",
			"x0y1": "stone-1",
			"x0y2": "stone-1",
			"x0y3": "forest-2",
			"x0y4": "stone-1",
			"x0y5": "forest-1",
			"x1y0": "stone-1",
			"x1y1": "stone-1",
			"x1y2": "forest-1",
			"x1y3": "hill-1",
			"x1y4": "terra-1",
			"x1y5": "terra-1",
			"x2y0": "stone-1",
			"x2y1": "terra-1",
			"x2y2": "road-1",
			"x2y3": "road-1",
			"x2y4": "road-1",
			"x2y5": "road-1",
			"x3y0": "forest-1",
			"x3y1": "terra-1",
			"x3y2": "road-1",
			"x3y3": "terra-1",
			"x3y4": "hill-1",
			"x3y5": "forest-1",
			"x4y0": "stone-1",
			"x4y1": "hill-1",
			"x4y2": "road-1",
			"x4y3": "terra-1",
			"x4y4": "terra-1",
			"x4y5": "stone-1",
			"x5y0": "forest-2",
			"x5y1": "terra-1",
			"x5y2": "road-1",
			"x5y3": "forest-1",
			"x5y4": "forest-1",
			"x5y5": "stone-1",
			"x6y0": "stone-1",
			"x6y1": "forest-2",
			"x6y2": "road-1",
			"x6y3": "road-1",
			"x6y4": "stone-1",
			"x6y5": "terra-1",
			"x7y0": "stone-1",
			"x7y1": "forest-1",
			"x7y2": "hill-1",
			"x7y3": "road-1",
			"x7y4": "stone-1",
			"x7y5": "terra-1",
			"x8y0": "forest-1",
			"x8y1": "stone-1",
			"x8y2": "forest-1",
			"x8y3": "road-1",
			"x8y4": "stone-1",
			"x8y5": "hill-1",
			"x9y0": "terra-1",
			"x9y1": "forest-1",
			"x9y2": "forest-2",
			"x9y3": "road-1",
			"x9y4": "forest-2",
			"x9y5": "stone-1",
			"x0y6": "stone-1",
			"x1y6": "hill-1",
			"x2y6": "road-1",
			"x3y6": "forest-1",
			"x4y6": "stone-1",
			"x5y6": "stone-1",
			"x6y6": "hill-1",
			"x7y6": "road-1",
			"x8y6": "road-1",
			"x9y6": "road-1",
			"x0y7": "forest-2",
			"x1y7": "terra-1",
			"x2y7": "road-1",
			"x3y7": "forest-2",
			"x4y7": "forest-1",
			"x5y7": "forest-2",
			"x6y7": "road-1",
			"x7y7": "road-1",
			"x8y7": "terra-1",
			"x9y7": "hill-1",
			"x0y8": "forest-1",
			"x1y8": "forest-2",
			"x2y8": "road-1",
			"x3y8": "terra-1",
			"x4y8": "forest-2",
			"x5y8": "hill-1",
			"x6y8": "road-1",
			"x7y8": "hill-1",
			"x8y8": "stone-1",
			"x9y8": "stone-1",
			"x0y9": "forest-1",
			"x1y9": "forest-1",
			"x2y9": "road-1",
			"x3y9": "road-1",
			"x4y9": "road-1",
			"x5y9": "road-1",
			"x6y9": "road-1",
			"x7y9": "terra-1",
			"x8y9": "hill-1",
			"x9y9": "stone-1",
			"x0y10": "stone-1",
			"x1y10": "stone-1",
			"x2y10": "forest-2",
			"x3y10": "stone-1",
			"x4y10": "terra-1",
			"x5y10": "hill-1",
			"x6y10": "terra-1",
			"x7y10": "forest-1",
			"x8y10": "forest-2",
			"x9y10": "stone-1",
			"x0y11": "forest-2",
			"x1y11": "stone-1",
			"x2y11": "stone-1",
			"x3y11": "forest-1",
			"x4y11": "stone-1",
			"x5y11": "stone-1",
			"x6y11": "stone-1",
			"x7y11": "stone-1",
			"x8y11": "stone-1",
			"x9y11": "forest-1",
			"x10y0": "road-1",
			"x10y1": "forest-1",
			"x10y2": "terra-1",
			"x10y3": "road-1",
			"x10y4": "stone-1",
			"x10y5": "terra-1",
			"x10y6": "road-1",
			"x10y7": "stone-1",
			"x10y8": "stone-1",
			"x10y9": "forest-1",
			"x10y10": "forest-2",
			"x10y11": "stone-1",
			"x11y0": "road-1",
			"x11y1": "road-1",
			"x11y2": "road-1",
			"x11y3": "road-1",
			"x11y4": "stone-1",
			"x11y5": "terra-1",
			"x11y6": "road-1",
			"x11y7": "stone-1",
			"x11y8": "hill-1",
			"x11y9": "forest-1",
			"x11y10": "stone-1",
			"x11y11": "stone-1",
			"x12y0": "terra-1",
			"x12y1": "terra-1",
			"x12y2": "hill-1",
			"x12y3": "forest-2",
			"x12y4": "stone-1",
			"x12y5": "terra-1",
			"x12y6": "road-1",
			"x12y7": "terra-1",
			"x12y8": "terra-1",
			"x12y9": "stone-1",
			"x12y10": "stone-1",
			"x12y11": "stone-1",
			"x13y0": "hill-1",
			"x13y1": "forest-2",
			"x13y2": "forest-1",
			"x13y3": "forest-1",
			"x13y4": "stone-1",
			"x13y5": "stone-1",
			"x13y6": "road-1",
			"x13y7": "road-1",
			"x13y8": "road-1",
			"x13y9": "terra-1",
			"x13y10": "stone-1",
			"x13y11": "forest-1",
			"x14y0": "forest-1",
			"x14y1": "stone-1",
			"x14y2": "forest-2",
			"x14y3": "stone-1",
			"x14y4": "stone-1",
			"x14y5": "forest-2",
			"x14y6": "terra-1",
			"x14y7": "hill-1",
			"x14y8": "road-1",
			"x14y9": "hill-1",
			"x14y10": "forest-2",
			"x14y11": "stone-1",
			"x15y0": "stone-1",
			"x15y1": "stone-1",
			"x15y2": "stone-1",
			"x15y3": "stone-1",
			"x15y4": "hill-1",
			"x15y5": "terra-1",
			"x15y6": "hill-1",
			"x15y7": "terra-1",
			"x15y8": "road-1",
			"x15y9": "hill-1",
			"x15y10": "terra-1",
			"x15y11": "hill-1",
			"x16y0": "stone-1",
			"x16y1": "forest-2",
			"x16y2": "stone-1",
			"x16y3": "forest-1",
			"x16y4": "forest-1",
			"x16y5": "hill-1",
			"x16y6": "stone-1",
			"x16y7": "stone-1",
			"x16y8": "road-1",
			"x16y9": "terra-1",
			"x16y10": "hill-1",
			"x16y11": "road-1",
			"x17y0": "forest-1",
			"x17y1": "stone-1",
			"x17y2": "forest-1",
			"x17y3": "hill-1",
			"x17y4": "forest-1",
			"x17y5": "stone-1",
			"x17y6": "stone-1",
			"x17y7": "stone-1",
			"x17y8": "road-1",
			"x17y9": "road-1",
			"x17y10": "road-1",
			"x17y11": "road-1",
			"x18y0": "stone-1",
			"x18y1": "stone-1",
			"x18y2": "stone-1",
			"x18y3": "forest-2",
			"x18y4": "stone-1",
			"x18y5": "stone-1",
			"x18y6": "stone-1",
			"x18y7": "stone-1",
			"x18y8": "terra-1",
			"x18y9": "hill-1",
			"x18y10": "forest-2",
			"x18y11": "forest-2",
			"x19y0": "forest-1",
			"x19y1": "stone-1",
			"x19y2": "forest-1",
			"x19y3": "forest-1",
			"x19y4": "stone-1",
			"x19y5": "forest-1",
			"x19y6": "stone-1",
			"x19y7": "forest-2",
			"x19y8": "stone-1",
			"x19y9": "forest-2",
			"x19y10": "forest-1",
			"x19y11": "forest-1"
		}
	};

}(window));