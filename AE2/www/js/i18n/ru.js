/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global APP */

	win.APP = win.APP || {};

	APP.languages = APP.languages || {};

	APP.languages.ru = {
		language: 'Язык',
		languageName: 'Русский',
		shortLanguageName: 'Рус',
		appName: 'AE2FG',

		//theme: 'Theme',
		//share: 'Share',

		// title page
		play: 'Играть',
		online: 'По сети',
		settings: 'Настройки',
		instructions: 'Инструкции',
		about: 'О программе',

		// settings
		on: 'вкл',
		off: 'выкл',
		music: 'музыка',
		vibrate: 'вибро',
		help: 'помощь',
		fightAnimation: 'анимация боя',
		gameSpeed: 'скорость игры',
		confirmTurn: 'подтверждение хода',
		confirmMove: 'подтверждение движения юнита',
		confirmAttack: 'подтверждение атаки',
		'gameSpeed-1': 'оч. медленно',
		'gameSpeed-2': 'медленно',
		'gameSpeed-3': 'обычная',
		'gameSpeed-4': 'быстро',
		'gameSpeed-5': 'оч. быстро',
		mainSettings: 'Основные настройки',
		gameDifficulty: 'Сложность игры',
		easy: 'легко',
		normal: 'нормально',
		hard: 'трудно',
		buildingSmoke: 'дым из труб',
		unitAnimation: 'анимация юнитов',
		autoSave: 'автосохранение',

		// play
		newGame: 'Новая игра',
		loadGame: 'Загрузить игру',
		selectLevel: 'Выбор уровня',
		skirmish: 'Схватка',
		mission: 'Миссия',

		// setup skirmish
		player: 'Игрок',
		cpu: 'ЦПУ',
		none: 'Нет',
		money: 'Деньги',
		unitLimit: 'Лимит войск',
		fight: 'В бой',
		team: 'Команда',

		// colors
		blue: 'синий',
		red: 'красный',
		green: 'зелёный',
		black: 'чёрный',

		rateUs: {
			header: 'Пожалуйста, оцените приложение!',
			notNow: 'не сейчас',
			fiveStars: 'Да, 5 звёзд!'
		},

		// unit store
		unitStoreHeader: 'Войска',

		// popups
		endTurnQuestion: 'Закончить ход?',
		yes: 'Да',
		no: 'Нет',
		ok: 'Ок',
		continue: 'продолжить',
		congratulations: 'Поздравления!',
		gameSaved: 'Игра сохранена',
		unlocked: 'доступна!',

			//save/load popup
		save: 'Сохранить',
		delete: 'Удалить',
		replace: 'Заменить',
		saveGame: 'Сохранить игру',
		areYouSureToDeleteSavedGame: 'Вы уверены, что хотите удалить сохранение?',
		areYouSureToLoadGame: 'Вы уверены, что хотите загрузить сохранение?',
		noSavedGames: 'Нет сохранённых игр',
		load: 'Загрузить',

			// end game
		blackDefeat: 'Чёрный игрок повержен!',
		blueDefeat: 'Синий игрок повержен!',
		greenDefeat: 'Зелёный игрок повержен!',
		redDefeat: 'Красный игрок повержен!',
		victory: 'Победа!',
		defeat: 'Поражение!',
		missionComplete: 'Миссия завершена!',
		restartBattle: 'Заново',
		quitBattle: 'Выход',
		areYouSureToQuitBattle: 'Вы уверены, что хотите покинуть сражение?',
		areYouSureToRestartBattle: 'Вы уверены, что хотите перезапустить сражение?',

			// notification
		objective: 'Цель',
		skirmishObjective: 'Поразить вражеского командира и захватить все вражеские замки!',
		newTurn: 'Смена хода',
		income: 'Доход',

			//battle menu
		menu: 'Меню',

		// map editor
		mapEditor: 'Редактор карт',
		maps: 'Карты',
		width: 'Ширина',
		height: 'Высота',
		name: 'Имя',
		colors: 'Цвета',

		//aboutText: 'Ancient Empire: strike back.<br><br><br>Программист:<br>Дмитрий Туровцов<br><br>Благодарности:<br>Алексей Данилов<br>Павел Прилуцкий<br>Игорь Купреев<br>Павел Сычиков',
		aboutText: '<br><br><br>Ancient Empire: Strike Back.<br><br><br>Древняя Империя: Ответный Удар.<br><br><br>',
		instructionsText: [
			'\'Ancient Empire: Strike Back\' - это захватывающая стратегия, которая позволяет вам управлять Королем Галамаром и его братом Валадорном в попытках защитить их королевство от зла.',
			'Далее последуют инструкции, подсказки и советы о том, как играть, которые также будут появляться в игре.',
			'Красные квадраты помечают область перемещения единицы. Границы единицы определяется ее типом и местностью, на которой она стоит.',
			'Разные типы местности влияют на способности единиц к передвижению, атаке и защите. Например, горы добавляют боевым единицам очки защиты, но замедляют скорость передвижения. Когда вы двигаете курсор через такие места, их особенности появляются внизу экрана.',
			'Когда единица завершит движение, она сменит цвет на серый. Она означает, что единица не может быть использована снова до следующего вашего хода.',
			'Вы можете перемещать единицу только один раз за ход. Когда вы закончите движение всех ваших единиц, то выберите \'конец хода\'.',
			'Единицы становятся более сильными, получая опыт в битвах.',
			'Вы можете увидеть пределы атаки любой единицы нажатием двойным нажатием на неё, когда она выбрана.',
			'Чтобы атаковать вражескую единицу, сдвиньте вашу единицу в пределы атаки и выберите \'атака\'. Если в пределах атаки находятся несколько врагов, выберите, какую единицу атаковать. Успех атаки определяется характеристиками единиц и местностью.',
			'Только командир может занять замок. Как только замок оккупирован, вы можете покупать новые единицы за золото. Командиру не обязательно оставаться в замке, чтобы покупать единицы.',
			'Вы можете занимать здания, переместив Солдата или Командира на него и выбрав \'занять\'. Как только здание будет занято, оно сменит цвет. Если здание повреждено, вам придется отремонтировать его, перед тем как занять.',
			'Как только здание будет занято, оно начнет приносить золото. Чем больше зданий вы займете, тем больше заработаете.',
			'Единицы могут лечиться в занятых зданиях. Чем больше единица находится в здании, тем больше жизни восстановится.',
			'Если Командир погибнет в битве, его можно будет оживить в замке.',
			'Водные Элементалы - земноводные, что увеличивает им перемещение, атаку и защиту, когда они в воде.',
			'Атака Жутких Волков ядовита. Отравленная единица становится медленной и вялой в следующем ходе.',
			'Ведьма имеет силу поднимать скелетов-воинов из могил павших солдат. После поражения единицы на ее месте на 1 ход появится надгробие. Переместите Ведьму к надгробию и выберите \'поднять\'.',
			'Используйте Виспов, чтобы обеспечить ближайшие дружественные единицы аурой, которая усиливает их атаку.',
			'Катапульта может уничтожать вражеские города, что помогает прервать поток золота.',
			'Держите ваших Драконов подальше от вражеских стрелков, потому что они уязвимы перед стрелами!'
		],
		helpList: [
			// 0
			{
				img: 'img/help/select-unit.png',
				text: ['Что бы выбрать еденицу нажмите (<img src="img/help/tap-finger.png" class="icon-in-text" />) на неё.', '<img src="img/help/finger-on-red-square.png" class="icon-in-text" /> - Красные квадраты помечают область перемещения единицы.', 'Границы единицы определяется ее типом и местностью, на которой она стоит.']
			},
			// 1
			{
				img: 'img/help/attack.png',
				text: ['Чтобы атаковать вражескую единицу, сдвиньте вашу единицу в пределы атаки и выберите <img src="img/help/attack-icon.png" class="icon-in-text" />.', 'Если в пределах атаки находятся несколько врагов, выберите, какую единицу атаковать. Успех атаки определяется характеристиками единиц и местностью.']
			},
			// 2
			{
				//img: 'img/help/occupy-castle.png',
				text: ['Только командир может занять (<img src="img/help/occupy-building-icon.png" class="icon-in-text" />) замок.', 'Как только замок оккупирован, вы можете покупать новые единицы за золото.', 'Командиру не обязательно оставаться в замке, чтобы покупать единицы.']
			},
			// 3
			{
				//img: 'img/help/occupy-farm.png',
				text: ['Вы можете занимать здания, переместив Солдата или Командира на него и выбрав \'занять\' (<img src="img/help/occupy-building-icon.png" class="icon-in-text" />).', 'Как только здание будет занято, оно сменит цвет.', 'Если здание повреждено, вам придется отремонтировать (<img src="img/help/fix-building-icon.png" class="icon-in-text" />) его, перед тем как занять.']
			},
			// 4
			{
				img: 'img/help/raise.png',
				text: ['Ведьма имеет силу поднимать скелетов-воинов из могил павших солдат.', 'После поражения единицы на ее месте на 1 ход появится надгробие.', 'Переместите Ведьму к надгробию и выберите \'поднять\' <img src="img/help/attack-icon.png" class="icon-in-text" />.']
			}
		],
		unitsList: {
			'soldier': {
				name: 'Солдат',
				description: 'Солдаты это солидные всесторонние бойцы, которые сформируют костяк любой армии. Также солдаты - единственная единица, которая может захватывать города, приносящие золото.'
			},
			'archer': {
				name: 'Лучник',
				description: 'Со своими мощными луками стрелки могут атаковать на расстоянии и особенно эффективны против летающих врагов.'
			},
			'elemental': {
				name: 'Элементаль',
				description: 'Элементалы это магические водяные духи. Будучи в воде, Элементалы быстрее передвигаются и лучше защищаются.'
			},
			'sorceress': {
				name: 'Ведьма',
				description: 'Натасканные в использовании магии, Ведьмы слабы в ближнем бою. Однако, их способность к вызову боевых скелетов из мертвых войск может стать решающей в битве.'
			},
			'wisp': {
				name: 'Висп',
				description: 'Эти мистические существа чистого света излучают ауру, которая усиливает способности к атаке у ближайших дружественных единиц. В ближнем бою они особенно смертельны против скелетов.'
			},
			'dire-wolf': {
				name: 'Жуткий волк',
				description: 'Жуткие Волки - опасные охотники, которые передвигаются стаями. Будьте осторожны - их укусы ядовиты, что умельшает и атаку, и защиту на один ход.'
			},
			'golem': {
				name: 'Голем',
				description: 'Големы - это древние существа - медленны, но необычайно сильны в защите. Голема, расположенного в здании или хорошо защищенной горе очень сложно победить.'
			},
			'catapult': {
				name: 'Катапульта',
				description: 'Катапульты приносят опустошение везде, куда достанут со своей гигантской зоной атаки. Однако, они относительная неподвижность и неспособность атаковать вблизи делают их уязвимыми, так что защищайте их хорошо. Катапульты могут передвигаться и атаковать в течении хода, но только что-нибудь одно за ход.'
			},
			'dragon': {
				name: 'Дракон',
				description: 'Эти грациозные летающие твари правят над горами с древнейших времен. Они чрезвычайно подвижны, а так же смертельно опасны в атаках на земле, воздухе и в море.'
			},
			'skeleton': {
				name: 'Скелет',
				description: 'Вызванные ведьмами, эти безжизненные воины сильны как солдаты и смертельные оппоненты на любом поле боя.'
			},
			'galamar': {
				name: 'Галамар',
				description: 'Галамар (командир) очень силен в атаке и защите. Командиры могут также занимать замки, чтобы производить войска, и их можно оживлять в замке, если они умрут в битве.'
			},
			'valadorn': {
				name: 'Валадорн',
				description: 'Валадорн (командир) очень силен в атаке и защите. Командиры могут также занимать замки, чтобы производить войска, и их можно оживлять в замке, если они умрут в битве.'
			},
			'demon-lord': {
				name: 'Демон Лорд',
				description: 'Демон лорд (командир) очень силен в атаке и защите. Командиры могут также занимать замки, чтобы производить войска, и их можно оживлять в замке, если они умрут в битве.'
			},
			'saeth': {
				name: 'Саеф',
				description: 'Саеф (командир) очень силен в атаке и защите. Командиры могут также занимать замки, чтобы производить войска, и их можно оживлять в замке, если они умрут в битве.'
			},
			'crystal': {
				name: 'Кристалл',
				description: 'Эти легендарные кристаллы были изначально выкопаны из руин Античной Цитадели. Мало что известно об их силе, за исключением того, что они, по слухам, могут защитить королевство, а также обладают силой, чтобы уничтожить его.'
			}
		},

		story: {
			list: [
				// 0
				//'With the passing of the war against the forces of darkness, the brothers Galamar and Valadorn are reunited in their rule of the kingdom of Thorin. The kingdom is slowly returning to its peace time ways, protected by three ancient crystals safely guarded in the temples of Courage, Wisdom and Life, when rumours of skirmishes in the North reach the palace...',
				'img/story/story-1-1.png_!_With the passing of the war against the forces of darkness, the brothers Galamar and Valadorn are reunited in their rule of the kingdom of Thorin. The kingdom is slowly returning to its peace time ways, protected by three ancient crystals safely guarded in the temples of Courage, Wisdom and Life, when rumours of skirmishes in the North reach the palace...',
				// 1
				//'\'And three was their number, three to protect, three to destroy. Mercy upon the wielder of their power, mercy upon our souls, for He shall unleash the heavenly fires onto this world.\'<br \/>[Verse 3:7 from the Crystal Prophecies, author unknown, translated from the only surviving transcript from the Age of Darkness]',
				'img/story/story-1-2.png_!_\'And three was their number, three to protect, three to destroy. Mercy upon the wielder of their power, mercy upon our souls, for He shall unleash the heavenly fires onto this world.\'<br \/>[Verse 3:7 from the Crystal Prophecies, author unknown, translated from the only surviving transcript from the Age of Darkness]',
				// 2
				//'A messenger from the Temple of Courage arrives at the castle gates, pleading for the King\'s assistance - the Temple has fallen prey to brutal attackers, and must be protected...',
				'img/story/story-1-3.png_!_A messenger from the Temple of Courage arrives at the castle gates, pleading for the King\'s assistance - the Temple has fallen prey to brutal attackers, and must be protected...',
				// 3
				//'With the help of the Elementals, King Galamar finally reaches the Temple of Life one step before the enemy...',
				'img/story/story-4-1.png_!_With the help of the Elementals, King Galamar finally reaches the Temple of Life one step before the enemy...',
				// 4
				//'Galamar and Valadorn follow the path of destruction left behind by the dragon and find themselves at the ruins of the Ancient Citadel...',
				'img/story/story-8-1.png_!_Galamar and Valadorn follow the path of destruction left behind by the dragon and find themselves at the ruins of the Ancient Citadel...',
				// 5
				//'\'And the Earth shall tremble, and the skies shall weep. For He who is the destroyer shall be destroyed, for the He who is the taker shall be taken. And a new age, free of evil and darkness shall dawn.\'<br>[Final verse from the Crystal Prophecies, author unknown, never translated, lost during the age of darkness]'
				'img/story/story-8-2.png_!_\'And the Earth shall tremble, and the skies shall weep. For He who is the destroyer shall be destroyed, for the He who is the taker shall be taken. And a new age, free of evil and darkness shall dawn.\'<br>[Final verse from the Crystal Prophecies, author unknown, never translated, lost during the age of darkness]'
			]
		}

	};

}(window));