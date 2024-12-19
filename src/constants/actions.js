export const actions = {
    "actions": [
    { "id": 1, "description": "Поменяйся местами с любым игроком." },
    { "id": 2, "description": "Отдай свой следующий ход игроку справа." },
    { "id": 3, "description": "Выбери игрока, который пропустит следующий ход." },
    { "id": 4, "description": "Кинь кубик, возьми дополнительный ход, если выпала 3." },
    { "id": 5, "description": "Смените порядок хода по часовой стрелке или против часовой стрелки." },
    { "id": 6, "description": "Обменивайтесь позициями с игроком, стоящим дальше всего от тебя." },
    { "id": 7, "description": "Брось D8 и переместись на соответствующую клетку вокруг себя (по часовой стрелке)"},
    { "id": 8, "description": "7Ё3#RW82с38РDSF№1#@21F ##ERROR##. Ваш ход отменен, вернитель в его начало" },
    { "id": 9, "description": "Выбери игрока который пропустит следущее действие" },
    { "id": 10, "description": "Если твой день рождения сегодня - сделай 10 шагов вперед и восстанови здоровье" },
    { "id": 11, "description": "Назови 3 города вне России,  начинающихся с буквы 'С'. Или вернись на 5 клеток назад" },
    { "id": 12, "description": "Все мужчины пропускают ход" },
    { "id": 13, "description": "Все девушки пропускают ход" },
    { "id": 14, "description": "Все представители мужского пола делают 1-20 шагов вперед (Брось D20)" },
    { "id": 15, "description": "Все представители мужского пола делают 1-20 шагов назад (Брось D20)" },
    { "id": 16, "description": "Все представители женского пола делают 1-20 шагов вперед (Брось D20)" },
    { "id": 17, "description": "Все представители женского пола делают 1-20 шагов назад (Брось D20)" },
    { "id": 18, "description": "Ладья! Любой кто находится с тобой на одной вертикали или горизонтали тяряет 1 здоровья" },
    { "id": 19, "description": "'Змеи и лестницы' Следущие круг: действия, шипы и здоровье не используются в игре", "icon": "🐍" },
    { "id": 20, "description": "Скажи алфавит задом наперёд до буквы 'М'. Если ошибешся вернись назад, где был на начало хода" },
    { "id": 21, "description": "Вернись на 3 клетки назад." },
    { "id": 22, "description": "Перейди на следующую клетку действия." },
    { "id": 23, "description": "Брось кубик ещё раз, но только если угадаешь точный результат." },
    { "id": 24, "description": "Перемести свою фишку на 50 клетку поля." },
    { "id": 25, "description": "Поменяй главный кубик, на случайный (Кинь D6)" },
    { "id": 26, "description": "Выйди на случайную клетку, бросив 2 кубика D10" },
    { "id": 27, "description": "Пропусти один ход, чтобы удвоить следующий." },
    { "id": 28, "description": "Переставь цифры текущей клетки местами и перейди на эту клетку" },
    { "id": 29, "description": "Пропусти клетку действия, если ты попадёшь на неё следующий раз." },
    { "id": 30, "description": "Вернись к старту, если на следующем броске выпадет 6.", "icon": "6️⃣" }, 
   // { "id": 31, "description": "Сыграй роль злодея из сказки." },
    { "id": 32, "description": "Следущая змея на тебя не действует!" , "icon": "🚫🐍" }, 
    { "id": 33, "description": "Следущая лестница на тебя не действует!(" , "icon": "🚫🪜" }, 
    { "id": 34, "description": "Все игроки кроме тебя кидают D6, у кого выпадет больше - притягивается к тебе (таких может быть несколько)" },
    { "id": 35, "description": "Сделай два шага назад и передай кубик следующему игроку." },
    //{ "id": 36, "description": "Назови столицу любого государства. Если ошибёшься, вернись на 3 клетки." },
   // { "id": 37, "description": "Исполни танец радости, чтобы пропустить действие следующей клетки." },
    { "id": 38, "description": "Выдай одному игроку 'звание' или титул. До конца игры обращаться к нему можно только так, иначе не правильно назвавший идет на 3 клетки назад", "icon": "🤴" }, 
    { "id": 39, "description": "Получи единиицу здоровья, если на следующем броске выпадет четное число." },
    { "id": 40, "description": "Выбери игрока, который передвинет тебя на 5 клеток вперёд или назад." },
    { "id": 41, "description": "Попроси другого игрока нарисовать тебя на бумаге. Если откажется, у него нет бумаги или чем писать, он пропускает ход.(Брать у других нельзя)" },
    { "id": 42, "description": "Перемести всех игроков на 3 клетки ближе друг к другу." },
    { "id": 43, "description": `Валун! С 100 клетки к 1 катиться D20, он двигается на 1 клетку
       после хода каждого игрока и сносит каждого игрока до близжащего поворота, перепрыгнуть валун можно только выкинув больше 15 при столкновении с ним`, "icon": "🪨"},
    { "id": 44, "description": "Сбрось все дебаффы, если есть." },
    { "id": 45, "description": "Игрок справа называет слово, назови его по буквам, если назовешь правильно иди на две клетки вперед, иначе на две назад" },
    { "id": 46, "description": "Загадай и попроси всех игроков угадать число от 1 до 10. Если кто то угадает, ты пропускаешь ход." },
    { "id": 47, "description": "Назови любимый фильм или книгу. Если никто не знает его, продвинься на 3 клетки вперёд." },
    { "id": 48, "description": "Заставь всех игроков поменяться местами по твоему выбору." },
    { "id": 49, "description": "Предложи тост в честь игры или друзей." },
    { "id": 50, "description": "Светлая сторона. Все игроки у кого на телефоне включена светлая тема делают 5 шагов вперед" },
    { "id": 51, "description": "Расскажи шутку. Если никто не смеётся, вернись на одну клетку назад." },
    { "id": 52, "description": "Крикни название игры и продвинься на 1 клетку вперёд или откажись и вернись на 5 назад" },
    { "id": 53, "description": "Соревнуйся в 'камень-ножницы-бумага' с игроком слева, победитель ходит на 3 клетки вперед, проигравший - назад" },
    { "id": 54, "description": "Отзеркаливает игровое поле по центру, делит игроков на две команды и теперь главная задача попасть в центральные 4 квадрата" },
    { "id": 55, "description": "Получи 1 урона!" },
    { "id": 56, "description": "Получи 2 урона!" },
    { "id": 57, "description": "Восстанови 1 здоровье" },
    { "id": 58, "description": "Восстанови 2 здоровья" },
    { "id": 59, "description": "Сыграй 'Правда или действие' с игроком справа" },
    { "id": 60, "description": "Все игроки восстанавливают здоровье до 3" },
    { "id": 61, "description": "Получите дополнительный ход." },
    { "id": 62, "description": "Зомби! Все неиспользованные фишки начинают с 100 клетки и идут навстречу игрокам к 1. Выкидаете D6 за каждого зомби после своего хода", "icon": "🧟‍♂️" },
    { "id": 63, "description": "Перейдите сразу на 5 клеток вперёд." },
    { "id": 64, "description": "Обменяйтесь своими местами с любым игроком на выбор." },
    { "id": 65, "description": "Вампир! Если у тебя меньше 3 единиц здоровья забери 1 у любого игрока" },
    { "id": 66, "description": "Пропустите следующую клетку змеи/другой штраф." },
    { "id": 67, "description": "Заставьте другого игрока выполнить ваше следущее задание." },
    { "id": 68, "description": "Только Хардкор! Отныне умирая игрок выбывает из игры", "icon": "☠️" },
    { "id": 69, "description": "Вы можете отменить действие любого игрока один раз.", "icon": "🚫🪜" }, 
    { "id": 70, "description": "Нафиг все! Если игроки договоряться и согласятся: Отныне игра идет в обратную сторону, задача вернутся на первую клетку первым" },
    { "id": 71, "description": "Хаос! Выполни 5 действий подряд" },
    { "id": 72, "description": "Говори только шёпотом до следующего своего хода. (Штраф за ошибку - 3 клетки назад", "icon": "🔇" }, 
    { "id": 73, "description": "Русская рулетка. Все игроки бросают D6, первый у кого выпадет 1 теряет все здоровье" },
    { "id": 74, "description": "Очень ветренно! Все игроки двигаются на 1 клетку по вертикали(если возможно) в сторону старта" },
    { "id": 75, "description": "Передай своё право хода ближайшему игроку справа." },
    { "id": 76, "description": "Сделай дополнительный ход, если ты стоишь на чётной клетке." },
    { "id": 77, "description": "Заставь всех игроков повторить за тобой любую фразу. Те, кто откажутся или не смогут, теряют один ход." },
    { "id": 78, "description": "Попроси любого игрока произнести скороговорку. Если он ошибётся, он теряет 1 здоровье." },
    { "id": 79, "description": "Дай себе иммунитет от действия ближайшей змеи на поле." },
    { "id": 80, "description": "Произнеси 'магическое заклинание' перед каждым действием в течении 5 ходов. (Если провалишься, вернись на эту клетку)" , "icon": "🧙‍♂️" }, 
    { "id": 81, "description": "Все игроки родившиеся в последние 6 месяцев года двигаются назад 6 клеток" },
    { "id": 82, "description": "Все игроки родившиеся в первые 6 месяцев года двигаются назад 6 клеток" },
    { "id": 83, "description": "Обменивайтесь фишками с игроком слева до конца игры." },
    { "id": 84, "description": "Выбери цвет, все игроки с этим цветом на одежде теряют один ход." },
    { "id": 85, "description": "Кинь кубик и умножь результат на 2. Продвинься на столько клеток вперёд." },
    { "id": 86, "description": "Все игроки берут на себя действие, которое пропустил любой игрок ранее." },
    { "id": 87, "description": "Ничего не происходит" },
    { "id": 88, "description": "Купи Серёже Кофе ☕️" },
    { "id": 89, "description": "Дорогу молодым! Если ты самый старший игрок, пропусти два хода." },
    { "id": 90, "description": "Если это действие выпало Серёже он бросает D12 и если выпало больше 7 он выигрывает, если ты не Серёжа, крути другое действие" },
    { "id": 91, "description": "Верни всех игроков(включая себя) на старт." },
    { "id": 92, "description": "Шипы наносят двойной урон (всем и  всегда)", "icon": "🔱✖️2️⃣" }, 
    { "id": 93, "description": "Брось кубик дважды и выбери лучшее число для следущего хода." },
    { "id": 94, "description": "В течении следущих 3 ходов, кубик за тебя кидает игрок слева. Если ты бросишь кубик за себя сам - оба возвращаетесь на 3 клетки назад и теряеете 1 здоровье" , "icon": "🎲➡️" }, 
    { "id": 95, "description": "Перейди на клетку с головой змеи или лестницей, если такая есть не дальше 5 клеток." },
    { "id": 96, "description": "Поменяй направление движения всей игры." },
    { "id": 97, "description": "Сбрось все бонусы, если есть." },
    { "id": 98, "description": "Заставь игрока пересчитать клетки на поле до своей фишки вслух. (или оба получают 1 единицу урона и двигаются на клетку назад" },
    { "id": 99, "description": "Нанеси 1 единицу урона любому игроку" },
    { "id": 100, "description": "Верни фишку на 2 клетки назад, и пропусти следующие действие." },
    { "id": 101, "description": "Поменяйся здоровьем с ближайшим игроком." },
    { "id": 102, "description": "Если хочешь: Пропусти ход, чтобы другой игрок вернулся на 2 клетки." },
    { "id": 103, "description": "Отдай один из своих бонусов (если есть) любому игроку." },
    { "id": 104, "description": "Поменяй главный кубик на другой на свой выбор (на один круг.)" },
    { "id": 105, "description": "Все игроки выполняют 2 действия (для получившего это действие оно первое)" },
    { "id": 106, "description": "Определи игрока, с которого дальше продолжиться игра" },
    { "id": 107, "description": "Следущее действие (Любого игрока) срабатывает на всех игроков (Все бонусы и штрафы сумируются)", "icon": "☣️" }, 
    { "id": 108, "description": "Попроси игроков назвать твой следующий ход." },
    { "id": 109, "description": "Брось D12. Перемести ближайшего к тебе игрока на столько клеток назад." },
    { "id": 110, "description": "Брось D8. Если выпало четное число, перейди вперёд на столько клеток, если нечетное – назад." },
    { "id": 111, "description": "Брось D10 и раздели значение пополам. Восстанови столько единиц здоровья." },
    { "id": 112, "description": "Брось D4. Выбери игрока, который пропустит столько ходов, сколько выпало." },
    { "id": 113, "description": "Брось D20. Если выпало больше 15, заставь любого игрока вернуться на 10 клеток назад." },
    { "id": 114, "description": "Брось два кубика D4. Сложи их результаты и перейди вперёд на эту сумму." },
    { "id": 115, "description": "Брось D12. Все игроки, у кого меньше здоровья, чем выпало, пропускают следующий ход." },
    { "id": 116, "description": "Брось D20. Если выпало больше 10, выбери игрока, чтобы поменяться с ним здоровьем." },
    { "id": 117, "description": "Брось два кубика D6. Если их сумма равна 7 или 11, получи дополнительный ход." },
    { "id": 118, "description": "Брось D4 и передай результат следующему игроку в качестве штрафа – он перемещается назад на столько клеток." },
    { "id": 119, "description": "Брось D8. Все игроки с четными номерами клетки переходят вперёд на столько клеток." },
    { "id": 120, "description": "Брось два кубика D10. Если их разница больше 5, выбери игрока, чтобы он пропустил следующий ход." },
    { "id": 121, "description": "Брось D6. Если выпало больше 3, выбери игрока, который передвинется на 6 клеток вперёд." },
    { "id": 122, "description": "Брось D20. Если выпало меньше 10, потеряй 2 здоровья; если больше – восстанови 2 здоровья." },
    { "id": 123, "description": "Все бросают два кубика D4. Игроки меняются местами в порядке убывания выпавших результатов." },
    { "id": 124, "description": "Брось D8. Выбери игрока, чей ход будет увеличен на столько клеток, сколько выпало." },
    { "id": 125, "description": "Брось D12. Перейди вперёд на столько клеток, сколько выпало, если игрок справа не бросит больше." },
    { "id": 126, "description": "Брось D4. Отдай результат своему соседу справа – он перемещается назад на столько клеток." },
    { "id": 127, "description": "Здоровье со всех клеток 'Здоровье' пропадает" },
    { "id": 128, "description": "Если какие либо клетки 'здоровье' потрачены, они восстанавливаются " },
    { "id": 129, "description": "Брось два кубика D8. Если их сумма четная, возьми дополнительный ход." },
    { "id": 130, "description": "Брось D12 и D6. Перемести свою фишку на разницу их значений вперёд или назад, по выбору." },
    { "id": 131, "description": "Выберите игрока. Вы оба бросаете D6. Проигравший теряет 3 здоровья."},
    { "id": 132, "description": "Все игроки бросают D10. Тот, у кого минимальный результат, теряет 2 здоровья, а максимальный восстанавливает 2 здоровья."  },
    { "id": 133, "description": "Выберите игрока и бросьте D20. Если ваш результат выше, он теряет 5 здоровья. Если ниже, вы теряете 5 здоровья."  },
    { "id": 134, "description": "Выберите игрока. Он восстанавливает здоровье, равное результату броска D4."  },
    { "id": 135, "description": "Все игроки бросают D12. Тот, у кого минимальный результат, теряет здоровье, равное выпавшему числу."  },
    { "id": 136, "description": "Поменяйтесь местами со случайным игроком."  },
    { "id": 137, "description": "Выберите игрока и переместите его на 5 клеток вперёд или назад."  },
    { "id": 138, "description": "Выберите игрока. Он перемещается на ближайшую клетку 'Шипы'."  },
    { "id": 139, "description": "Выберите игрока. Он перемещается на ближайшую клетку 'Здоровья' (Даже если такова использованна)."  },
    { "id": 140, "description": "Все игроки, кроме вас, двигаются назад на число клеток, равное текущему ходу."  },
    { "id": 141, "description": "Все игроки теряют 1 здоровья, а вы восстанавливаете 1 за каждого."  },
    { "id": 142, "description": "Поменяйтесь здоровьем с выбранным игроком."  },
    { "id": 143, "description": "Выберите игрока и передайте ему 5 своего здоровья."  },
    { "id": 144, "description": "Выберите игрока и заберите у него 3 здоровья."  },
    { "id": 145, "description": `Если кто то попадет на клетки 7, 22, 51 или 72 он выбывает из игры (Действует до конца игры) 
                                (Игрок может вернутся, если кто то восстановит ему здоровье)`, "icon": "⚰️" }, 
    { "id": 146, "description": "Обменяйтесь порядком хода с любым игроком."  },
    { "id": 147, "description": "Выберите игрока, который пропустит следующий ход."  },
    { "id": 148, "description": "Выберите игрока, который бросит кубик дважды на своём ходу."  },
    { "id": 149, "description": "Выберите игрока, которому придётся бросать только D4 в следующие 3 хода.", "icon": "👶" },
    { "id": 150, "description": "Ваш следующий бросок делает игрок напротив."  },
    { "id": 151, "description": "Все игроки бросают кубик D4, и их здоровье перераспределяется в зависимости от выпавшего числа."  },
    { "id": 152, "description": "Бросьте D20 для всех игроков. Поменяйтесь местами с тем, у кого число ближе всего к вашему."  },
    { "id": 153, "description": "Случайный игрок теряет 2 здоровья."  },
    { "id": 154, "description": "Случайный игрок восстанавливает 2 здоровья."  },
    { "id": 155, "description": "Случайный игрок перемещается на ближайшую клетку 'Шипы' или 'Зелье'."  },
    { "id": 156, "description": "Все игроки теряют 3 здоровья, кроме вас."  },
    { "id": 157, "description": "Предложите любому игроку обмен клетками или здоровьем."  },
    { "id": 158, "description": "Поменяйтесь текущей позицией с игроком, который находится дальше всего от вас."  },
    { "id": 159, "description": "Выберите игрока. Он получает 3 здоровья."  },
    { "id": 160, "description": "Если кто-то перемещал вас ранее, вы можете сразу переместить его на 5 клеток назад."},
    { "id": 161, "description": "В порыве хаоса здоровье всех игроков перемешивается (Все игроки берут здоровье соседа справа)"},
    { "id": 162, "description": "В порыве баланса здоровье всех игроков приравнивается к броску D4 (одному на всех)"},
    { "id": 163, "description": "На своем следущем ходу, ты можешь двигаться сквозь стены (По вертикали и горизонтали)", "icon": "↕️↔️" },
    { "id": 164, "description": "Отныне сердца на клетках бесконечны для всех", "icon": "❤️" },
    { "id": 165, "description": "Если кто то стоит на клетках 7, 22, 51 или 72 он выбывает из игры (Игрок может вернутся, если кто то восстановит ему здоровье)"},
    { "id": 166, "description": "Брось D6, если выпало 5 или 6: получи 1 здоровье или передвинься на 2 клетки вперед"}
]
}

export const actionsShort = {
    "actions": [
        { "id": 43, "description": `Валун! С 100 клетки к 1 катиться D20, он двигается на 1 клетку
            после хода каждого игрока и сносит каждого игрока до близжащего поворота, перепрыгнуть валун можно только выкинув больше 15 при столкновении с ним`, "icon": "🪨"},
        { "id": 62, "description": "Зомби! Все неиспользованные фишки начинают с 100 клетки и идут навстречу игрокам к 1. Выкидаете D6 за каждого зомби после своего хода", "icon": "🧟‍♂️" },
    ]   
}