/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	var langEn = win.APP.languages.en;

	win.APP.maps.mission_001_003 = {
		"type": "mission",
		"isOpen": false,
		"openMaps": [ { "jsMapKey": 'mission_001_004', "type": "mission" } ],
		"size": {"width": 10, "height": 17},
		"name": "PATH OF SHADOWS",
		"name-ru": "RU - PATH OF SHADOWS",
		"maxPlayers": 2,
		"unitLimit": 25,
		"win": ['noEnemyUnit'], // allCastles, noEnemyUnit
		"defeat": ['commanderIsDead'], // 'galamarDead', 'valadornDead'

		"objective": 'Navigate safely through the forest. Destroy all opposition. King Galamar must survive.',
		"help": [
			{
				img: 'img/help/raise.png',
				text: ['A Sorceress has the power to summon skeleton warriors from the graves of fallen soldiers.', 'After a unit has been defeated, a tombstone appears for 1 turn.', 'Move a Sorceress next to a tombstone and select \'raise\' <img src="img/help/attack-icon.png" class="icon-in-text" />.']
			}
		],
		"startBriefing": [
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'Forest of Mists'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Your Majesty, this forest is known to be home of spirits, elementals, and other magical creatures. Travelling at night is not safe.',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 8 , y: 14 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Captain, you heard Valadorn\'s messenger - we must press on! Nothing must stand between us and the Temple of Life.',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Understood. Troops, keep your eyes open and protect King Galamar!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEn.objective,
					text: 'Navigate safely through the forest. Destroy all opposition. King Galamar must survive.'
				},
				onHide: {
					fn: 'autoShowHelpButton'
				}
			}

		],

		"n1Briefing": [
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'More wolves! Your Majesty, this does not look good...',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'By the Creator! What are those things!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Greetings, men of Thorin! We, the Elementals, have heard of your quest to protect our lands from evil and offer our allegiance to our King.'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'We gladly accept your offer. Your loyalty to the kingdom shall not be forgotten.',
					img: 'i/face/galamar.png'
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
				onHide: {
					fn: 'openMap',
					args: ['mission_001_004', { type: 'mission' }]
				}
			}
		],

		"cases": [
			{
				isDone: false,
				detect: 'noEnemyUnit',
				do: ['appendUnits', 'showBriefing'],
				units: [
					{
						type: 'elemental',
						ownerId: 0,
						x: 3,
						y: 8
					},
					{
						type: 'elemental',
						ownerId: 0,
						x: 4,
						y: 7
					},
					{
						type: 'elemental',
						ownerId: 0,
						x: 5,
						y: 8
					},

					{
						type: 'wisp',
						ownerId: 1,
						x: 2,
						y: 1
					},

					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 1,
						y: 2
					},
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 3,
						y: 2
					},

					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 0,
						y: 8
					},
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 1,
						y: 7
					},
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 8,
						y: 6
					}

				],
				briefingName: 'n1Briefing'
			}
		],






















		"units": [
			{"x": 7, "y": 14, "type": "soldier", "ownerId": 0},
			{"x": 8, "y": 14, "type": "galamar", "ownerId": 0},
			{"x": 7, "y": 15, "type": "archer", "ownerId": 0},
			{"x": 8, "y": 15, "type": "sorceress", "ownerId": 0},
			{"x": 6, "y": 13, "type": "dire-wolf", "ownerId": 1},
			{"x": 8, "y": 11, "type": "dire-wolf", "ownerId": 1}
		],
		"buildings": [
			{"x": 4, "y": 8, "type": "well", "state": "normal"}
		],
		"terrain": {
			"x0y0": "forest-1",
			"x0y1": "forest-1",
			"x0y2": "stone-1",
			"x0y3": "water-1",
			"x0y4": "water-1",
			"x0y5": "forest-2",
			"x1y0": "stone-1",
			"x1y1": "forest-1",
			"x1y2": "hill-1",
			"x1y3": "terra-1",
			"x1y4": "terra-1",
			"x1y5": "terra-1",
			"x2y0": "road-1",
			"x2y1": "road-1",
			"x2y2": "road-1",
			"x2y3": "road-1",
			"x2y4": "road-1",
			"x2y5": "forest-1",
			"x3y0": "terra-1",
			"x3y1": "forest-2",
			"x3y2": "hill-1",
			"x3y3": "forest-2",
			"x3y4": "road-1",
			"x3y5": "forest-2",
			"x4y0": "stone-1",
			"x4y1": "forest-1",
			"x4y2": "forest-1",
			"x4y3": "stone-1",
			"x4y4": "road-1",
			"x4y5": "terra-1",
			"x5y0": "water-1",
			"x5y1": "water-1",
			"x5y2": "water-1",
			"x5y3": "hill-1",
			"x5y4": "road-1",
			"x5y5": "stone-1",
			"x6y0": "water-1",
			"x6y1": "water-2",
			"x6y2": "water-1",
			"x6y3": "forest-1",
			"x6y4": "road-1",
			"x6y5": "forest-1",
			"x7y0": "water-3",
			"x7y1": "water-1",
			"x7y2": "water-1",
			"x7y3": "forest-2",
			"x7y4": "road-1",
			"x7y5": "road-1",
			"x8y0": "water-1",
			"x8y1": "water-1",
			"x8y2": "water-1",
			"x8y3": "forest-1",
			"x8y4": "terra-1",
			"x8y5": "forest-2",
			"x9y0": "water-1",
			"x9y1": "water-3",
			"x9y2": "water-1",
			"x9y3": "water-1",
			"x9y4": "water-1",
			"x9y5": "water-1",
			"x0y6": "forest-1",
			"x1y6": "hill-1",
			"x2y6": "water-1",
			"x3y6": "water-1",
			"x4y6": "water-1",
			"x5y6": "water-1",
			"x6y6": "water-1",
			"x7y6": "road-1",
			"x8y6": "hill-1",
			"x9y6": "forest-1",
			"x0y7": "hill-1",
			"x1y7": "terra-1",
			"x2y7": "water-1",
			"x3y7": "water-1",
			"x4y7": "water-1",
			"x5y7": "water-1",
			"x6y7": "water-1",
			"x7y7": "bridge-2",
			"x8y7": "water-1",
			"x9y7": "water-1",
			"x0y8": "forest-1",
			"x1y8": "terra-1",
			"x2y8": "water-1",
			"x3y8": "water-1",
			"x4y8": "terra-1",
			"x5y8": "water-1",
			"x6y8": "water-1",
			"x7y8": "bridge-2",
			"x8y8": "water-1",
			"x9y8": "water-1",
			"x0y9": "water-1",
			"x1y9": "bridge-2",
			"x2y9": "water-1",
			"x3y9": "water-1",
			"x4y9": "bridge-2",
			"x5y9": "water-1",
			"x6y9": "water-1",
			"x7y9": "road-1",
			"x8y9": "forest-1",
			"x9y9": "water-1",
			"x0y10": "water-1",
			"x1y10": "bridge-2",
			"x2y10": "water-1",
			"x3y10": "water-1",
			"x4y10": "bridge-2",
			"x5y10": "water-1",
			"x6y10": "water-1",
			"x7y10": "road-1",
			"x8y10": "stone-1",
			"x9y10": "stone-1",
			"x0y11": "forest-2",
			"x1y11": "hill-1",
			"x2y11": "forest-2",
			"x3y11": "terra-1",
			"x4y11": "road-1",
			"x5y11": "hill-1",
			"x6y11": "forest-1",
			"x7y11": "road-1",
			"x8y11": "forest-1",
			"x9y11": "stone-1",
			"x0y12": "forest-2",
			"x1y12": "forest-1",
			"x2y12": "terra-1",
			"x3y12": "hill-1",
			"x4y12": "road-1",
			"x5y12": "road-1",
			"x6y12": "road-1",
			"x7y12": "road-1",
			"x8y12": "road-1",
			"x9y12": "road-1",
			"x0y13": "forest-1",
			"x1y13": "stone-1",
			"x2y13": "hill-1",
			"x3y13": "terra-1",
			"x4y13": "forest-2",
			"x5y13": "forest-1",
			"x6y13": "stone-1",
			"x7y13": "road-1",
			"x8y13": "hill-1",
			"x9y13": "forest-2",
			"x0y14": "water-1",
			"x1y14": "water-1",
			"x2y14": "water-1",
			"x3y14": "forest-1",
			"x4y14": "stone-1",
			"x5y14": "forest-1",
			"x6y14": "forest-1",
			"x7y14": "road-1",
			"x8y14": "road-1",
			"x9y14": "forest-1",
			"x0y15": "water-2",
			"x1y15": "water-1",
			"x2y15": "water-1",
			"x3y15": "forest-1",
			"x4y15": "hill-1",
			"x5y15": "forest-1",
			"x6y15": "hill-1",
			"x7y15": "terra-1",
			"x8y15": "road-1",
			"x9y15": "forest-1",
			"x0y16": "water-1",
			"x1y16": "water-1",
			"x2y16": "forest-1",
			"x3y16": "forest-2",
			"x4y16": "water-1",
			"x5y16": "water-1",
			"x6y16": "forest-1",
			"x7y16": "forest-1",
			"x8y16": "road-1",
			"x9y16": "hill-1"
		}
	}

}(window));