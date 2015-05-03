/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global APP */

	win.APP = win.APP || {};

	APP.languages = APP.languages || {};

	APP.languages.ru = {
		language: 'язык',
		languageName: 'Русский',
		shortLanguageName: 'Рус',
		appName: 'AE2FG',

		//theme: 'Theme',
		//share: 'Share',

		// title page
		play: 'играть',
		online: 'по сети',
		settings: 'настройки',
		instructions: 'инструкции',
		about: 'о программе',

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
		'gameSpeed-1': 'оч.медленно',
		'gameSpeed-2': 'медленно',
		'gameSpeed-3': 'обычная',
		'gameSpeed-4': 'быстро',
		'gameSpeed-5': 'оч.быстро',
		gameDifficulty: 'сложность игры',
		easy: 'легко',
		normal: 'нормально',
		hard: 'трудно',
		buildingSmoke: 'дым из зданий',
		unitAnimation: 'анимация юнитов',
		autoSave: 'автосохранение',

		// play
		newGame: 'новая игра',
		loadGame: 'загрузить игру',
		selectLevel: 'выбор уровня',
		skirmish: 'схватка',
		mission: 'миссия',

		// setup skirmish
		player: 'игрок',
		cpu: 'ЦПУ',
		none: 'нет',
		money: 'деньги',
		unitLimit: 'лимит войск',
		fight: 'в бой',
		team: 'команда',

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
		yes: 'да',
		no: 'нет',
		ok: 'ok',
		continue: 'продолжить',
		congratulations: 'Поздравления!',
		gameSaved: 'Игра сохранена',
		unlocked: 'доступна!',

			//save/load popup
		save: 'сохранить',
		delete: 'удалить',
		replace: 'заменить',
		saveGame: 'сохранить игру',
		areYouSureToDeleteSavedGame: 'Вы уверены, что хотите удалить сохранение?',
		areYouSureToLoadGame: 'Вы уверены, что хотите загрузить сохранение?',
		noSavedGames: 'нет сохранённых игр',
		load: 'загрузить',

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
		objective: 'цель',
		skirmishObjective: 'Убить вражеского командира и захватить все вражеские замки!',
		newTurn: 'смена хода',
		income: 'доход',

			//battle menu
		menu: 'меню',

		// map editor
		mapEditor: 'map editor',
		maps: 'maps',
		width: 'width',
		height: 'height',
		name: 'name',
		colors: 'colors',

		aboutText: 'Ancient Empire: strike back.<br><br><br>Программист:<br>Дмитрий Туровцов<br><br>Благодарности:<br>Алексей Данилов<br>Павел Прилуцкий<br>Игорь Купреев<br>Павел Сычиков',
		instructionsText: [
			'Античные Империи это захватывающая стратегия, помещающая вас в роли Короля Галамара в битву за свое королевство.',
			'Синие или красные квадратики показывают возможной путь единицы. Размер пути единицы определяется ее типом и местностью, на которой она стоит.',
			'Разные типы местности влияют на способности единиц к передвижению, атаке и защите. Например, горы добавляют единицам очки защиты, но замедляют скорость передвижения. При нажатии на них особенности местности отображаются в нижней части экрана.',
			'Когда единица завершила движение, то она становится полупрозрачной. Это означает, что он не может быть перемещена снова до следующего хода.',
			'Вы можете перемещать единицу только один раз за ход.',
			'Используйте \'+\' и \'-\' (в правом нижнем углу) чтобы масштабировать карту.',
			'Вы можете посмотреть характеристики воинов в магазине. Единицы становятся более сильными, получая опыт в битвах.',
			'Чтобы атаковать вражескую единицу, передвиньте вашу единицу в пределы атаки и выберите \'Атака\'. Если в пределах находятся несколько врагов, выберите, какую единицу атаковать. Успех атаки определяется характеристиками единиц и местностью.',
			'Только рыцарь может занять замок. В замке Вы покупать новые единицы за золото.',
			'Вы можете занять здание, переместив солдата на него и выбрав \'Занять\'. Как только здание будет занято, оно сменит цвет.',
			'Как только здание будет занято, оно начнет приносить золото. Чем больше зданий вы займете, тем больше заработаете.',
			'Единицы могут быть вылечены, заняв здание. Чем больше единица находится в здании, тем больше жизни восстановится.',
			'Ящерицы - земноводные, это увеличивает им передвижение и защиту в воде.',
			'Атака паука ядовита. Отравленная единица замедляется и слабеет до своего следующего хода.',
			'Надгробие показывает, где единица была повержена. Оно исчезает после одного хода.',
			'У волшебников есть сила для вызова скелетов-воинов из могил поверженных солдат.',
			'Используйте виспов для обеспечения ближайшим дружественным единицам ауры, которая прибавляет им очки атаки.',
			'Держите ваших вайвернов вдали от вражеских лучников, так как они уязвимы для стрел!'
		],
		helpList: [],
		unitsList: {
			'soldier': {
				name: 'солдат',
				description: 'Солдаты это солидные всесторонние бойцы, которые сформируют костяк любой армии. Также солдаты - единственная единица, которая может захватывать города, приносящие золото.'
			},
			'archer': {
				name: 'лучник',
				description: 'Со своими мощными луками стрелки могут атаковать на расстоянии и особенно эффективны против летающих врагов.'
			},
			'elemental': {
				name: 'элементаль',
				description: 'Элементалы это магические водяные духи. Будучи в воде, Элементалы быстрее передвигаются и лучше защищаются.'
			},
			'sorceress': {
				name: 'ведьма',
				description: 'Натасканные в использовании магии, Ведьмы слабы в ближнем бою. Однако, их способность к вызову боевых скелетов из мертвых войск может стать решающей в битве.'
			},
			'wisp': {
				name: 'висп',
				description: 'Эти мистические существа чистого света излучают ауру, которая усиливает способности к атаке у ближайших дружественных единиц. В ближнем бою они особенно смертельны против скелетов.'
			},
			'dire-wolf': {
				name: 'лесной волк',
				description: 'Жуткие Волки - опасные охотники, которые передвигаются стаями. Будьте осторожны - их укусы ядовиты, что умельшает и атаку, и защиту на один ход.'
			},
			'golem': {
				name: 'голем',
				description: 'Големы - это древние существа - медленны, но необычайно сильны в защите. Голема, расположенного в здании или хорошо защищенной горе очень сложно победить.'
			},
			'catapult': {
				name: 'катапульта',
				description: 'Катапульты приносят опустошение везде, куда достанут со своей гигантской зоной атаки. Однако, они относительная неподвижность и неспособность атаковать вблизи делают их уязвимыми, так что защищайте их хорошо. Катапульты могут передвигаться и атаковать в течении хода, но только что-нибудь одно за ход.'
			},
			'dragon': {
				name: 'дракон',
				description: 'Эти грациозные летающие твари правят над горами с древнейших времен. Они чрезвычайно подвижны, а так же смертельно опасны в атаках на земле, воздухе и в море.'
			},
			'skeleton': {
				name: 'скелет',
				description: 'Вызванные ведьмами, эти безжизненные воины сильны как солдаты и смертельные оппоненты на любом поле боя.'
			},
			'galamar': {
				name: 'галамар',
				description: 'Галамар (командир) очень силен в атаке и защите. Командиры могут также занимать замки, чтобы производить войска, и их можно оживлять в замке, если они умрут в битве.'
			},
			'valadorn': {
				name: 'валадорн',
				description: 'Валадорн (командир) очень силен в атаке и защите. Командиры могут также занимать замки, чтобы производить войска, и их можно оживлять в замке, если они умрут в битве.'
			},
			'demon-lord': {
				name: 'демон лорд',
				description: 'Демон лорд (командир) очень силен в атаке и защите. Командиры могут также занимать замки, чтобы производить войска, и их можно оживлять в замке, если они умрут в битве.'
			},
			'saeth': {
				name: 'саеф',
				description: 'Саеф (командир) очень силен в атаке и защите. Командиры могут также занимать замки, чтобы производить войска, и их можно оживлять в замке, если они умрут в битве.'
			},
			'crystal': {
				name: 'crystal',
				description: 'Эти легендарные кристаллы были изначально выкопаны из руин Античной Цитадели. Мало что известно об их силе, за исключением того, что они, по слухам, могут защитить королевство, а также обладают силой, чтобы уничтожить его.'
			}
		}

	};

}(window));