/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global _ */

	function Cpu(json) { // model, player:'activePlayer'

		var cpu = this;
		cpu.attr = {};
		cpu.extend(json);

	}

	Cpu.prototype = {

		get: function (key) {
			return this.attr[key];
		},

		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},

		extend: function (json) {
			_.extend(this.attr, json);
			return this;
		},

		run: function () {

			var cpu = this;

			cpu.buyUnits().then(function () {

				cpu.turnUnit()

			});

		},

		buyUnits: function () {

			// 1 - detect castle closest to enemy castle
			var cpu = this,
				model = cpu.get('model'),
				player = cpu.get('player'),
				stores = cpu.getStores(),
				store,
				deferred = $.Deferred();

			if ( !stores.length ) {
				return;
			}

			// todo: get store closest to enemy store
			store = stores[0];

			// buy commander if needed and can
			cpu.buyUnit({
				store: store,
				type: player.commander.name
			});

			if ( !model.playerHasCommander(player) ) {
				return;
			}

			// todo: buy normal units
			cpu.buyUnit({
				store: store,
				type: 'soldier'
			});

			cpu.buyUnit({
				store: store,
				type: 'archer'
			});

			deferred.resolve();

			return deferred.promise();

		},

		getStores: function () {

			var cpu = this,
				model = cpu.get('model'),
				ownerId = cpu.get('player').id,
				buildings = model.get('buildings');

			return _.where(buildings, { ownerId: ownerId, canBeStore: true });

		},

		buyUnit: function (data) {

			var cpu = this,
				model = cpu.get('model'),
				unitType = data.type,
				store = data.store,
				unitStore = win.APP.BB.UnitStoreView.prototype;

			unitStore.buyUnit({
				state: 'cpu',
				view: model.get('view'),
				model: model,
				player: cpu.get('player'),
				unitType: unitType,
				x: store.x,
				y: store.y
			});

		},

		turnUnit: function () {

			var cpu = this,
				player = cpu.get('player'),
				playerTeamNumber = player.teamNumber,
				model = cpu.get('model'),
				units = model.get('units'),
				buildings = model.get('building'),
				enemyUnit = _.filter(units, function (unit) {
					return unit.get('teamNumber') !== playerTeamNumber;
				}),
				privateUnits = model.getUnitsByOwnerId(player.id),
				wholes = [], // x, y, and who can ignore this whole
				scenarios = [];

			// get ALL scenarios, except nonActive units
			_.each(privateUnits, function (unit) {

				if ( !unit.get('isActive') ) {
					return;
				}

				var scenario = cpu.getUnitScenarios(unit);
				scenarios = scenarios.concat(scenario);

			});


			_.each(scenarios, function (scenario) {
				cpu.setAutoRate(scenario, scenarios);
			});

			console.log('scenarios');
			console.log(scenarios);

		},

		// getting action of unit
		getUnitScenarios: function (unit) {

			var cpu = this,
				availableXYs = cpu.getAvailableUnitXYs(unit),
				scenarios = [];

			_.each(availableXYs, function (xy) {

				var xyScenarios = cpu.getUnitScenariosByXY({
					x: xy.x,
					y: xy.y,
					unit: unit
				});

				scenarios = scenarios.concat(xyScenarios);

			});

			return scenarios;

		},

		getAvailableUnitXYs: function (unit) {

			var cpu = this,
				model = cpu.get('model'),
				fullPath = unit.getAvailablePathWithTeamUnit(),
				restPath,
				units = model.get('units');

			restPath = _.filter(fullPath, function (xy) {

				var unit = model.getUnitByXY(xy);

				if ( !unit ) {
					return true;
				}

				return unit.get('isActive');

			});

			restPath.push({
				x: unit.get('x'),
				y: unit.get('y')
			});

			return restPath;

		},

		getUnitScenariosByXY: function (data) {

			var cpu = this,
				model = cpu.get('model'),
				x = data.x,
				y = data.y,
				unit = data.unit,
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				gravesToRaise,
				scenarios = [],
				actionList = ['move', 'attack', 'fixBuilding', 'getBuilding', 'raiseSkeleton'],
				Scenario = win.APP.Scenario;

			// todo: see change:x and y, create silent mode for this

			unit.set('x', x);
			unit.set('y', y);

			_.each(actionList, function (action) {

				var scenario,
					unitsUnderAttack,
					buildingToGet,
					buildingToFix;

				switch (action) {

					case 'move':

						scenario = new Scenario({
							x: x,
							y: y,
							unit: unit,
							action: {
								name: action
							}
						});

						scenarios.push(scenario);
						break;

					case 'attack':

						// todo: add IF for cristal, cristal can not attack

						if ( !(unit.get('canNotActionAfterMove') && ( unitX !== x || unitY !== y )) ) { // detect moved catapult

							unitsUnderAttack = unit.getUnitsUnderAttack();

							_.each(unitsUnderAttack, function (enemyUnitXY) {

								var scenario = new Scenario({
									x: x,
									y: y,
									unit: unit,
									action: {
										name: action,
										enemy: {
											x: enemyUnitXY.x,
											y: enemyUnitXY.y
										}
									}
								});

								scenarios.push(scenario);

							});

						}


						break;

					case 'fixBuilding':

						buildingToFix = unit.getBuildingToFix();

						if (buildingToFix) {

							scenario = new Scenario({
								x: x,
								y: y,
								unit: unit,
								action: {
									name: action
								}
							});

							scenarios.push(scenario);

						}

						break;

					case 'getBuilding':

						// detect can unit get this building
						buildingToGet = unit.getBuildingToOccupy();

						if ( buildingToGet && buildingToGet.teamNumber !== unit.get('teamNumber') ) {

							scenario = new Scenario({
								x: x,
								y: y,
								unit: unit,
								action: {
									name: action,
									building: {
										type: buildingToGet.type
									}
								}
							});

							scenarios.push(scenario);

						}

						break;

					case 'raiseSkeleton':

						gravesToRaise = unit.getGravesToRaise();

						_.each(gravesToRaise, function (grave) {

							var scenario = new Scenario({
								x: x,
								y: y,
								unit: unit,
								action: {
									name: action,
									grave: {
										x: grave.x,
										y: grave.y
									}
								}
							});

							scenarios.push(scenario);

						});

						break;

				}

			});

			unit.set('x', unitX);
			unit.set('y', unitY);

			return scenarios;

		},

		rates: {
			getBuilding: 1000,
			fixBuilding: 1000,
			raiseSkeleton: 500,
			lowPriority: -1000,
			highPriority: 1000,

			q: {
				availableReceiveDamage: -0.5,
				//availableGivenDamage: 2,
				//availableResponseDamage: -0.5,
				placeArmor: 0.5,
				//nearestNoPlayerBuilding: -1.5,
				upHealth: 2
			},

			// next value wipe previous
			onCanEnemyGetBuilding: 100, // high priority
			onCanNotEnemyGetBuilding: 2,
			onEnemyBuilding: 2,
			onUpHealthBuilding: 2
			//,withBuilding: 2

		},

		setAutoRate: function (scenario, allScenarios) {

			var cpu = this,
				action = scenario.get('action').name,
				rates = cpu.rates,
				dataByPosition = cpu.getDataByPosition(scenario),
				rate = 0;

			switch (action) {

				case 'move':

					rate = cpu.rateMove({
						scenario: scenario,
						allScenarios: allScenarios
					});

					break;

				case 'attack':

					rate = cpu.rateAttack({
						scenario: scenario
					});

					break;

				case 'fixBuilding':

					rate = rates.fixBuilding;

					break;

				case 'getBuilding':

					rate = rates.getBuilding;

					break;

				case 'raiseSkeleton':

					rate = rates.raiseSkeleton;

					break;

			}

			scenario.set('rate', rate);

		},

		getDataByPosition: function (scenario) {

			var cpu = this,
				model = cpu.get('model'),
				allUnits = model.get('units'),
				unit = scenario.get('unit'),
				x = scenario.get('x'),
				y = scenario.get('y'),
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				unitTeamNumber = unit.get('teamNumber'),
				enemyUnits,
				availableReceiveDamage = 0, // +
				placeArmor, // +
				upHealth = 0, // ---
				building,
				buildingData = win.APP.building,
				buildingUpHealthList = buildingData.upHealthList,
				buildingList = buildingData.list;

			unit.set('x', x);
			unit.set('y', y);

			enemyUnits = _.filter(allUnits, function (unit) {
				return unit.get('teamNumber') !== unitTeamNumber;
			});

			_.each(enemyUnits, function (enemy) {

				var availableAttackMap = enemy.getAvailableAttackMap();

				if ( !_.find(availableAttackMap, {x: x, y: y}) ) {
					return;
				}

				availableReceiveDamage += enemy.getAttackToUnit(unit);

			});

			placeArmor = model.getArmorByXY({
				x: x,
				y: y
			});

			building = model.getBuildingByXY({ x: x, y: y });
			if ( building && (building.ownerId === unit.get('ownerId') || _.contains(buildingUpHealthList, building.type) ) ) {
				upHealth = buildingList[building.type].healthUp;
				upHealth = Math.min(upHealth, unit.get('defaultHealth') - unit.get('health'));
			}

			unit.set('x', unitX);
			unit.set('y', unitY);

			return {
				placeArmor: placeArmor,
				availableReceiveDamage: availableReceiveDamage,
				upHealth: upHealth
			}

		},

		rateMove: function (data) {

			var cpu = this,
				model = cpu.get('model'),
				allUnits = model.get('units'),
				enemyUnits,
				scenario = data.scenario,
				unit = scenario.get('unit'),
				unitTeamNumber = unit.get('teamNumber'),
				allScenarios = data.allScenarios,
				rates = cpu.rates,
				buildingData = win.APP.building,
				x = scenario.get('x'),
				y = scenario.get('y'),
				building = model.getBuildingByXY({x: x, y: y}),
				rate = 0;


			// 1 - todo: detect: enemy unit get or stay on building
			if ( building ) {

				enemyUnits = _.filter(allUnits, function (unit) {
					return unit.get('teamNumber') !== unitTeamNumber;
				});

				// can enemy get building
				// can not enemy get building
				_.each(enemyUnits, function (enemy) {

					var path = enemy.getAvailablePathFull(),
						buildingTypeList = enemy.get('listOccupyBuilding');

					if ( !_.find(path, {x: x, y: y}) || !buildingTypeList ) {
						return;
					}

					if ( _.contains(buildingTypeList, building.type) ) {
						rate = rates.onCanEnemyGetBuilding;
					} else {
						rate = rates.onCanNotEnemyGetBuilding;
					}

				});

				// if enemy building
				if ( building.teamNumber !== null && building.teamNumber !== unit.get('teamNumber') ) {
					rate = rates.onEnemyBuilding;
				}

				// if well building
				if ( _.contains(buildingData.upHealthList, building.type) ) {
					rate = rates.onUpHealthBuilding;
				}

			}














			// 2 - todo: nearest non player and available to get building










			// detect scenario where unit get building or raise skeleton
			_.each(allScenarios, function (sc) {

				var action = sc.get('action'),
					actionName = action.name,
					grave;

				switch (actionName) {

					case 'fixBuilding':
					case 'getBuilding':

						if ( sc.get('x') === x && sc.get('y') === y ) {
							rate = rates.lowPriority;
						}

						break;

					case 'raiseSkeleton':

						grave = action.grave;

						if ( grave.x === x && grave.y === y ) {
							rate = rates.lowPriority;
						}

						break;

				}

			});


			return rate;

		},

		rateAttack: function (data) {

			var scenario = data.scenario;




		}


	};

	win.APP.Cpu = Cpu;

}(window));