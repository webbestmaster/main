(function (win) {

	"use strict";
	/*global window */

	win.langs = win.langs || {};

	win.langs.ru = {
		language: 'язык',
		languageName: 'Русский',
		languageNameShort: 'Рус',
		objective: 'Цель мисссии',
		thanks: 'Программист:<br>Дмитрий Туровцов<br><br>Благодарности:<br>Павел Прилуцкий<br>Игорь Купреев<br>Павел Сычиков',
		back: 'Назад',
		confirmTurn: 'подтверждение хода',
		sound: 'звук',
		gameSpeed: 'скорость игры',
		fast: 'быстрее',
		slow: 'медленнее',
		companies: 'компании',
		maps: 'карты',
		createGame: 'создать игру',
		instruction: 'инструкции',
		settings: 'настройки',
		credits: 'авторы',
		players: 'игроки',
		human: 'игрок',
		cpu: 'бот',
		buy: 'цена',
		menu: 'меню',
		exit: 'выход',
		restart: 'перезапуск',
		quit: 'выход',
		areYouSure: 'Вы уверены?',
		yes: 'да',
		no: 'нет',
		blueTurn: 'ход<br>синих!',
		redTurn: 'ход<br>красных!',
		nextMission: 'следующая миссия',
		youWin: 'победа',
		youDefeat: 'поражение',
		blueWin: 'синие победили!',
		redWin: 'красные победили!',
		occupyAllBuildings: 'Захватить все здания.',
		helpProject: 'Помочь проекту',
		mapsName: {
			'Regroup': 'Перегруппировка',
			'Friends and Enemies': 'Друзья и Враги',
			'Escort': 'Эскорт',
			'Reinforcements': 'Подкрепление',
			'Wyvern Rescue!': 'Спасти Вайверн!',
			'Siege!': 'Осада!',
			'Final Assault': 'Последний Штурм',
			'Island Cross': 'Остров Крест',
			'Rocky Bay': 'Скалистая Бухта',
			'River': 'Река'
		},
		units: {
			archer: {
				name: 'лучник',
				description: 'Со своими мощными луками лучники могут атаковать на расстоянии, и они особенно сильны против летающих врагов.'
			},
			bones: {
				name: 'скелет',
				description: 'Вызванные волшебниками, эти безжизненные воины также сильны как солдаты, и являются смертелными противниками на любом поле битвы.'
			},
			catapult: {
				name: 'катапульта',
				description: 'Катапульты приносят опустошение везде, куда достанут со своей гигантской зоной атаки. Однако, они относительная неподвижность и неспособность атаковать вблизи делают их уязвимыми, так что защищайте их хорошо. Катапульты могут передвигаться и атаковать в течении хода, но только что-нибудь одно за ход.'
			},
			golem: {
				name: 'голем',
				description: 'Выкованные из живых камней племенем гномов в Потерянных Горах, големы медленны, но необычайно сильны в защите. Голема, расположенного в здании или хорошо защищенной горе очень сложно победить.'
			},
			knight: {
				name: 'рыцарь',
				description: 'Рыцарь очень силен в атаке и защите. Также рыцарь может захватить замок или ферму.'
			},
			lizard: {
				name: 'ящерица',
				description: 'Потомки древней земноводной империи, лежащей в болотах на востоке, ящерицы - гордые воины. Они чрезвычайно мобильны (+3) и сильны в защите (+2), когда находятся в воде.'
			},
			soldier: {
				name: 'солдат',
				description: 'Усердные и храбрые, солдаты сформируют основу любой армии. Только они и рыцари могут захватывать фермы с целью получения золота.'
			},
			spider: {
				name: 'паук',
				description: 'Пауки - это опасные создания, чье местообитание простирается в суровых темных лесах на западе. В добавление к их высокой мобильности, пауки используют атаку ядом, чтобы ослабить оппонента на один ход.'
			},
			wisp: {
				name: 'висп',
				description: 'Эти мистические существа чистого Света излучают ауру, которая добавляет очки атаки ближайшим дружественным единицам. В близком бою они особенно смертельны против скелетов.'
			},
			wizard: {
				name: 'волшебник',
				description: 'Древняя гильдия волшебников слаба в близком бою, но чрезвычайна полезна, так как они могут поднимать боевых скелетов из мертвых войск.'
			},
			wyvern: {
				name: 'вайверн',
				description: 'Эти грациозные летающие твари правят над горами с древнейших времен. Они чрезвычайно подвижны, а так же смертельно опасны в атаках на земле, воздухе и в море.'
			}
		},
		instructions: [
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
		missions: {
			c01_regroup: {
				A1Header: 'Часть 1',
				A1: 'Королевство Торин разделено. Преданный собственным братом-близнецом Валадорном, Король Галамар спасься бегством в граничных землях на востоке. Только Синяя охрана, личные войска Галамара, остались ему верными и готовы вернуть страну...',
				H1: 'Сэр, ваши войска утомлены после последней ночной битвы. Было бы разумно перегруппироваться в заброшенном замке.',
				G1: 'Хорошо, капитан. Готовьте войска - мы не должны позволить врагам застать нас неподготовленными.',
				H2: 'Войска Валадорна легко заметить из-за их красной формы.',
				T1: '[] Король Галамар должен занять замок.%%%%[] Сохраните все войска в живых.',
				H3: 'Шпионы! Валадорн и его Красный легион должно быть знают, где мы! Быстро, защитите Короля!',
				objective: '[] Король Галамар должен занять замок.%%%%[] Сохраните все войска в живых.',
				'Keep all troops alive': 'Сохраните все войска в живых.'
			},
			c02_friendsAndEnemies: {
				A1Header: 'Часть 2',
				A1: 'Король Галамар выжил после атаки Валадорна. Однако, перед тем, как Галамар сможет попытаться вернуть свое королевство, он должен сначала найти новых союзников на севере.',
				G1: 'Вперед, войска. Но сначала, займите те два здания. Мы сможем отдохнуть, когда достигнем следующей деревни.',
				T1: '[] Рыцарь должен выжить.%%%%[] Захватите замок и, как минимум, одну деревню.%%%%[] Наймите, как минимум, трёх воинов.',

				H1: 'Сэр, наши разведчики докладывают, что ящерицы на севере атакованы!',
				G2: 'Тогда мы должны дейстовать быстро! Вождь Ящериц наш старый союзник, и он, конечно, поможет нам, если мы спасем его.',

				H2: 'Сэр, эти ящерицы принесли новости из своей деревни. Их атакуют лесные пауки!',

				G3: 'Пауки? Тогда мы должны использовать местность в свою пользу - стремительная атака может быть глупостью.',
				H3: 'Осторожней, ваше Величество - атаки пауков ядовиты!',
				objective: '[] Рыцарь должен выжить.%%%%[] Захватите замок и, как минимум, одну деревню.%%%%[] Наймите, как минимум, трёх воинов.',
				'Keep the knight': 'Рыцарь должен выжить.'
			},
			c03_escort: {
				A1Header: 'Часть 3',
				A1: 'Вождь Ящериц согласился присоединиться к силам Галамара. Теперь мысли Галамара повернулись в сторону волшебников Серой Башни. Если Вождь Ящериц сможет убедить их помочь, их магия была бы великим добавлением к его растущей армии.',
				H1: 'Сэр, мост разрушен!',
				G1: 'Валадорн должно быть поджидает нас - мы должны найти другой путь. Этот может быть ловушкой.',
				H2: 'Войска! Держите глаза открытыми и защитите Вождя Ящериц любой ценой.',
				//T1: 'Galamar and the Lizard Chief must reach the Grey Tower.',
				T1: '[] Займите замок.%%%%[] Рыцарь должен выжить.%%%%[] Вождь Ящериц должен выжить.',
				objective: '[] Займите замок.%%%%[] Рыцарь должен выжить.%%%%[] Вождь Ящериц должен выжить.',
				'Keep the knight': 'Рыцарь должен выжить.',
				'Keep the Lizard Chief': 'Вождь Ящериц должен выжить.'
			},
			c04_reinforcements: {
				A1Header: 'Часть 4',
				A1: 'Достигнув Серой Башни, Высокий Волшебник согласился помочь Галамару. Однако, у войск Галамара нет времени на отдых, поточу что прибыло донесение из лежащего поблизости города Вар Телан, сообщающего о неожиданной атаке Красного легиона Валадорна.',
				H1: 'Ваше величество, Красный легион! Посмотрите на их мощную катапульту!',
				T1: '[] Рыцарь должен выжить.%%%%[] Сохраните город: уничтожьте все вражеские войска.%%%%[] Займите замок.',
				H2: 'Что за измена! Город повернулся против нас!',
				V1: 'Также предсказуем, как обычно, братец! Сейчас я тебя поимею!',
				V2: 'Поражение!! Прокятье на тебя, Галамар! Тебе больше так не повезет!',
				objective: '[] Рыцарь должен выжить.%%%%[] Сохраните город: уничтожьте все вражеские войска.%%%%[] Займите замок.',
				'Keep the knight': 'Рыцарь должен выжить.'
			},
			c05_wyvernRescue: {
				A1Header: 'Часть 5',
				A1: 'Когда силы Галамара основались в замке города, разведывательный отряд обнаружил несколько летающих змей, называемых вайвернами, взятыми в плен во вражеском лагере неподалеку. Смоут ли вайверны быть использованы против Валадорна и его сил? Чтобы узнать это, Галамар должен спасти их.',
				G1: 'Источники сообщают, что вайверны заключены в этом замке.',
				H1: 'Осторожно, ваше Величество, вайверны могут быть как опасными противниками, так и сильными союзниками.',
				T1: '[] Займите замок.%%%%[] Уничтожьте все вражеские войска и освободите вайверн.%%%%[] Рыцарь должен выжить.',
				H2: 'Посмотрите, ваше Величество, вайверны потеряли свою свободу! Теперь они под наших контролем!',
				objective: '[] Займите замок.%%%%[] Уничтожьте все вражеские войска и освободите вайверн.%%%%[] Рыцарь должен выжить.',
				'Keep the knight': 'Рыцарь должен выжить.'
			},
			c06_siege: {
				A1Header: 'Часть 6',
				A1: 'С могучими вайвернами, присоединившимися к его силам, Галамар готов биться против Валадорна. Он решил произвести неожиданную атаку на главный командный аванпост около города Торин.',
				H1: 'Город хорошо защищен, ваше Величество.',
				G1: 'Похоже на то. Мы должны изменить наш план битвы.',
				T1: '[] Уничтожьте все вражеские войска.%%%%[] Займите вражеский замок.%%%%[] Рыцарь должен выжить.',
				objective: '[] Уничтожьте все вражеские войска.%%%%[] Займите вражеский замок.%%%%[] Рыцарь должен выжить.',
				'Keep the knight': 'Рыцарь должен выжить.'
			},
			c07_finalAssault: {
				A1Header: 'Часть 7',
				A1: 'Галамар был на краю захвата города, когда вдруг огромный взрыв расколол землю.',
				G1: 'Войска Валадорна появляются повсюду? Что за адская магия?',
				V1: 'Итак, брат-близнец, похоже наши позиции переменились! Покорись немедленно или будешь уничтожен!',
				G2: 'Никогда! Какая бы злая сила не контролировала тебя, я уничтожу ее!',
				T1: '[] Уничтожьте все вражеские войска и сохраните королевство!%%%%[] Рыцарь должен выжить.',
				V2: 'Галамар... что я должен сделать?',
				G3: 'Заклинание! Оно разрушено!',
				A2: 'С победой Галамара, заклятие, управляющее Валадорном, было разрушено. Злая сила - это никто иной, как Саеф, призрачный демон! Его план провалился, с ужасным ревом он приказал своей темной армии атаковать Галамара. Окажет ли новообразованное Королевство Торина сопротивление этой атаке?  Сможет ли Галамар и его брат изгнать Саефа раз и навсегда?',
				objective: '[] Уничтожьте все вражеские войска и сохраните королевство!%%%%[] Рыцарь должен выжить.',
				'Keep the knight': 'Рыцарь должен выжить.'
			}
		}

	};

}(window));