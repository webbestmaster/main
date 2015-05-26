(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.logicalTricksAndParadoxes = {
		name: 'Логические трюки и парадоксы',
		lang: 'ru', // ru || en
		//вЂ™
		questions: [
			{
				title: 'Парадокс с парикмахером',

				text: 'Мудрецу задали вопрос:<br>- В деревне только один парикмахер, но он бреет тех, и только тех жителей своей деревни, которые не бреются сами, должен ли он брить самого себя?<br>Мудрец ответил:<br>- Если он себя не бреет, то он относится к тем жителям деревни, которых он должен брить. Значит, он должен себя брить. Если же он себя бреет, то он не относится к тем жителям своей своей деревни, которых он должен брить. Значит, он не должен себя брить. Вот и весь ответ на ваш вопрос.<br>- Как же так, - продолжали спрашивать мудреца. - Если парикмахер себя не бреет, то он должен брить, а если он себя бреет, то не должен брить?<br>Что ответил мудрец, история умалчивает',

				answer: 'Это "парадокс брадобрея". Парадокс свидетельствует только о том, что такого парикмахера не может существовать; парадокс показывает, что условие, которому должен удовлетворять деревенский парикмахер, является внутренне противоречивым и, следовательно, невыполнимым'

			},
			{
				title: 'Равен ли полный стакан пустому?',

				text: 'Можно ли доказать, что полный стакан равен пустому? Проведем следующее рассуждение. Пусть имеется стакан, наполненный водой до половины. Тогда можно написать, что стакан, наполовину полный, равен стакану, наполовину пустому. Увеличивая обе части равенства вдвое, получим, что стакан полный равен стакану пустому.<br>Верно ли приведенное рассуждение?',

				answer: 'Ясно, что приведенное рассуждение неверно, так как в нем применяется неправомерное действие: увеличение вдвое. В данной ситуации его применение бессмысленно'

			},
			{
				title: 'Древний софизм',

				text: '"То, что ты не потерял, ты имеешь; ты не потерял рога, следовательно, ты их имеешь".<br>В чем заключается логическая ошибка этого древнего софизма, который называется "Рогатый"?',

				answer: 'Ошибка состоит в неправомерном переходе от общего правила к частному случаю, который этим правилом не предусмотрен. Действительно, начало первой фразы: "То, что ты не потерял..." подразумевает под словом "то" - все, что ты имеешь, и ясно, что в него не включены "рога". Поэтому заключение "ты имеешь рога" неправомерно'

			},
			{
				title: 'Кто прав: учитель или ученик?',

				text: 'В Древней Греции существовали школы софистов, где молодые люди могли обучаться красноречию, ораторскому искусству и юридическим наукам.<br>Рассказывают, что к одному учителю-софисту Протагору однажды явился юноша по имени Эватл и обратился к учителю с просьбой сделать из него хорошего оратора, так как он жаждет выступить в каком-нибудь судебном процессе в качестве защитника или обвинителя.<br>Протагор согласился, но с условием, что Эватл заплатит ему за обучение 20 монет, причем половина этого гонорара должна быть уплачена немедленно, а другая половина - по окончании обучения, да и то только в том случае, если Эватл аыиграет тот судебный процесс, в котором он выступит впервые.<br>Юноша согласился и стал ежедневно посещать Протагора, проявляя во время занятий удивительные способности и воспринимая все, что преподавал ему учитель.<br>Так дело шло до тех пор, пока наконец Протагор не объявил, что курс обучения вполне закончен, и Эватл может смело выступить на суде.<br>Но тут произошло то, чего никак не ожидал мудрый учитель.<br>- Знаешь что? - заявил Эватл. - Я своевременно заплатил тебе половину условленного гонорара, но второй половины, по-моему, я имею полное право не платить!<br>- Это почему же? - удивился Протагор.<br>- На основании закона и нашего договора, - ответил Эватл.<br>Протагор возмутился.<br>- Но ведь я подам на тебя в суд, - сказал он, - и ты принужден будешь будешь там защищаться. Что же касается приговора судей, то мне, в сущности, безразлично, присудят ли они тебя к уплате гонорара или нет, потому что и в том, и в другом случае мне требуемые деньги.<br>- Это каким же образом? - удивился в свою очередь Эватл.<br>- Очень просто! Если судьи скажут, что ты должен уплатить мне вторую половину гонорара, то ты будешь обязан сделать это на основании приговора суда. Если же суд откажет мне в иске, другими словами, если ты выиграешь свой первый судебный процесс, то ты заплатишь мне ту же сумму на основании заключенного между нами договора. Видишь - я прав!<br>В первую минуту Эватл был смущен такими, по-видимому, неопровержимыми доводами своего учителя, но затем, сообразив что-то, воскликнул:<br>- Ничего подобного! Я буду иметь право не платить тебе ни в том, ни в другом случае! И вот почему: если судьи скажут, что я обязан заплатить тебе гонорар полностью, то есть другими словами, если я проиграю свой первый судебный процесс, то я не заплачу тебе денег на основании нашего с тобой договора! Если же суд решит, что я не должен платить тебе, то я и не заплачу ничего на основании приговора суда?<br>Кто же прав: учитель или ученик?',

				answer: 'Это "софизм Эватла". Если решать вопрос, кто из них прав, учитель или ученик, то придется ответить, что ни тот, ни другой, так как оба рассуждали логически неправильно; тот и другой, доказывая свою правоту, опирались то на приговор суда, то условия своего договора'

			},
			{
				title: 'Верно ли тождество?',

				text: 'Напишем тождество: 4 : 4 = 5 : 5.<br>Вынеся из каждой части тождества общие множители за скобки, получаем:<br>4 * (1 : 1) = 5 * (1 : 1) или (2 * 2) * (1 : 1) = 5 * (1 : 1).<br>Так как 1 : 1 = 1, то 2 * 2 = 5. Где ошибка?',

				answer: 'Ошибка сделана при вынесении общих множителей 4 из левой части и 5 из правой части. Действительно, 4 : 4 = 1 : 1, но 4 : 4 <> 4 * (1 : 1)'

			},
			{
				title: 'Где ошибка?',

				text: 'Рассмотрим очевидное равенство:<br>(2 - 2.5)2 = (3 - 2.5)2<br>Отсюда, извлекая квадратный корень, имеем:<br>2 - 2.5 = 3 - 2.5<br>Прибавляем к обеим частям этого равенства по 2.5, получаем, что 2 = 3. Где ошибка?',

				answer: 'При извлечении корня квадратного из обеих частей возможного равенства получаем неверный результат. Так как при любом значении а справедливо sqrt(а2) = |а|, то правильным следствием должно быть верное равенство |2 - 2.5| = |3 - 2.5|, а из него следует |-0.5| = |0.5|, а вовсе не равенство 2 - 2.5 = 3 - 2.5'

			},
			{
				title: 'Сколько песчинок образуют кучу?',

				text: 'Встретились два приятеля, стали разговаривать. Вдруг взгляд одного из них упал на кучу песка<br>- Видишь кучу песка? - спросил он. - А на самом деле ее нет.<br>- Почему? - удивился его приятель.<br>- Очень просто, - ответил он. - Давай рассудим: одна песчинка, очевидно, не образует кучи песка. Если n песчинок не могут образовать кучи песка, то и после прибавления еще одной песчинки они по-прежнему не могут образовать кучи. Следовательно, никакое число песчинок не образует кучи, т. е. кучи песка нет',

				answer: 'Это "парадокс кучи". В приведенном рассуждении второй приятель воспользовался методом полной математической индукции. Однако этот метод нельзя применять в рассуждениях, подобных этой задаче, ибо в них не определено само понятие "кучи песчинок"'

			},
			{
				title: 'Утверждение Эпименида',

				text: 'По преданию, Эпименид утверждал, что все критяне лжецы. Верно ли это утверждение, если учесть, что сам Эпименид родом с острова Крит?',

				answer: ' Эпименид - легендарный греческий поэт, живший на Крите в VI в. до н. э. Он-то и был первым Рипом ван Винклем: по преданию, Эпименид проспал 57 лет.<br>Если предположить, что Эпименид солгал, то отрицанием утверждения "все критяне лжецы" будет утверждение "существует хоть один не лжец", причем это не Эпименид. В таком виде это будет верное утверждение.'

			},
			{
				title: 'О полупустой бочке',

				text: 'Полупустая бочка - это ведь то же, что и полуполная. Но если две половины равны, то должны быть равны и целые. Полупустая бочка равна полуполной - значит, пустая бочка должна равняться полной. Выходит, что пустой равен полному!<br>Почему получается такой несообразный вывод? ',

				answer: 'Полупустая бочка есть не половина пустой бочки, а такая бочка, одна половина которой пуста, а другая - полна. Мы же рассуждали так, как будто слово "полупустая" значит "половина пустой бочки", а слово "полуполная" - "половина полной". Неудивительно, что при таком неправильном понимании мы пришли к неправильному выводу '

			},
			{
				title: '1 = 1',

				text: 'Вот доказательство того, что 1=1:<br>1. 1=1<br>2. Одну единицу обозначаем за Х, вторую за У, получается Х=У;<br>3. Умножаем обе части тождества на Х, получаем Х2=ХУ;<br>4. Из обеих частей тождества отнимаем У2, получаем Х2 - У2=ХУ - У2;<br>5. Левую часть раскладывем как разность квадратов, а в правой выносим У за скобку, получаем: (Х-У)(Х+У)=У(Х-У);<br>6. Сокращаем обе части на (Х-У), получаем: Х+У=У<br>7. Подставим вместо Х и У единицы, получим: 1+1=1, т.е. 2=1.<br>Где здесь ошибка?',

				answer: ' В пункте 6, при сокращении на (Х-У), необходимо обе части разделить на данную разность. Но подставив в нее значения Х и У, равные 1, мы получим 0, а на 0, как известно, делить нельзя '

			},
			{
				title: 'Возраст отца',

				text: '— Сколько лет твоему отцу? — спрашивают мальчика.<br>— Столько же, сколько и мне, — невозмутимо отвечает он.<br>— Как такое возможно?<br>— Очень просто: мой отец стал моим отцом только тогда, когда я родился, ведь до моего рождения он не был моим отцом, значит, моему отцу столько же лет, сколько и мне.<br>Верно ли это рассуждение? Если нет, то какая ошибка в нем допущена?',

				answer: 'Рассуждение, конечно же, неверно. Эффект его внешней правильности достигается благодаря употреблению понятия «возраст отца» в двух разных смыслах: возраст отца как возраст человека, который является этим отцом, и возраст отца как количество лет отцовства. Кстати, во втором значении понятие «возраст», как правило, не употребляется: обычно под словосочетанием «возраст отца» понимается возраст этого человека, а не что-либо иное'

			}

		]

	};

}(window));