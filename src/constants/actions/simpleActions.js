// Simple actions - без rollCheck и requiresConfirmation
export const simpleActions = {
    actions: [
        {
            "id": 1,
            "category": "simple",
            "image": "/images/portal.png",
            "description": "Перед тобой неожиданно открылся портал!",
            "options": [
                {
                    "name": "Прыгнуть в портал",
                    "outcomes": [
                        {
                            "text": "Вы телепортируетесь на 3 клетки вперед",
                            "effects": [
                                { "type": "moveBy", "value": 3 }
                            ]
                        },
                        {
                            "text": "Вы телепортируетесь на 3 клетки назад",
                            "effects": [
                                { "type": "moveBy", "value": -3 }
                            ]
                        },
                        {
                            "text": "Вы телепортируетесь на 10 клетку",
                            "effects": [
                                { "type": "moveTo", "value": 10 }
                            ]
                        }
                    ]
                },
                {
                    "name": "Ничего не делать",
                    "outcomes": [
                        {
                            "text": "Портал засасывает вас и вы телепортируетесь на 3 клетки назад",
                            "effects": [
                                { "type": "moveBy", "value": -3 }
                            ]
                        },
                        {
                            "text": "Ничего не происходит, Портал расстворяется",
                            "effects": []
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "category": "simple",
            "image": "/images/treasure_chest.png",
            "description": "Ты нашёл древний сундук, покрытый мхом.",
            "options": [
                {
                    "name": "Открыть сундук",
                    "outcomes": [
                        { "text": "Ты нашёл 5 золота!", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 5 }] },
                        { "text": "Внутри ловушка! Потеряй 1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] },
                        { "text": "Сундук пуст, ничего кроме паутины.", "effects": [] }
                    ]
                },
                {
                    "name": "Пройти мимо",
                    "outcomes": [
                        { "text": "Ты избежал возможной ловушки, но и упустил шанс на сокровища.", "effects": [] },
                        { "text": "Сундук исчез у тебя за спиной...", "effects": [] }
                    ]
                }
            ]
        },
        {
            "id": 4,
            "image": "/images/mystic_fountain.png",
            "description": "Ты находишь странный фонтан с мерцающей водой.",
            "options": [
                {
                    "name": "Выпить воду",
                    "outcomes": [
                        { "text": "Ты чувствуешь прилив сил! +1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": 1 }] },
                        { "text": "Вода оказалась отравленной! Потеряй 1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] }
                    ]
                },
                {
                    "name": "Бросить монету",
                    "outcomes": [
                        { "text": "Ничего не происходит, потеряй 1 золото", "effects": [{ "type": "modifyStat", "stat": "gold", "value": -1 }] },
                        { "text": "Ты чувствуешь прилив сил! Получи 1 здоровье, потеряй 1 золото", "effects": [{ "type": "modifyStat", "stat": "health", "value": 1 }, { "type": "modifyStat", "stat": "gold", "value": -1 }] }
                    ]
                },
                {
                    "name": "Умыться",
                    "outcomes": [
                        { "text": "Ты чувствуешь, как усталость отступает.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": -1 }] },
                        { "text": "Ничего не происходит.", "effects": [] }
                    ]
                }
            ]
        },
        {
            "id": 6,
            "image": "/images/trap_pit.png",
            "description": "Под ногами треснула земля — ловушка!",
            "options": [
                {
                    "name": "Прыгнуть в сторону",
                    "outcomes": [
                        { "text": "Ты успеваешь отскочить в последний момент.", "effects": [] },
                        { "text": "Ты падаешь в яму! Потеряй 1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] }
                    ]
                },
                {
                    "name": "Замереть",
                    "outcomes": [
                        { "text": "Яма обрушивается прямо под тобой! Потеряй 1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] },
                        { "text": "Ничего не происходит, ловушка не сработала.", "effects": [] }
                    ]
                }
            ]
        },
        {
            "id": 7,
            "image": "/images/portal.png",
            "description": "На стене высечены древние руны.",
            "options": [
                {
                    "name": "Коснуться рун",
                    "outcomes": [
                        { "text": "Ты чувствуешь магическую энергию! Получи 1 случайный эффект.", "effects": [] },
                        { "text": "Руны обжигают тебя! Потеряй 1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] }
                    ]
                },
                {
                    "name": "Скопировать символы",
                    "outcomes": [
                        { "text": "Ты записал руны в свой журнал. Возможно, пригодятся позже.", "effects": [] },
                        { "text": "Ты не успел — руны рассыпаются в пыль.", "effects": [] }
                    ]
                }
            ]
        },
        {
            "id": 9,
            "image": "/images/forest_spirit.png",
            "description": "Из тумана появляется лесной дух.",
            "options": [
                {
                    "name": "Поклониться",
                    "outcomes": [
                        { "text": "Дух благословляет тебя! +1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": 1 }] },
                        { "text": "Он молчит, но ты чувствуешь спокойствие.", "effects": [] }
                    ]
                },
                {
                    "name": "Спросить путь",
                    "outcomes": [
                        { "text": "Дух указывает короткий путь — переместися на 2 клетки вперед.", "effects": [{ "type": "moveBy", "value": 2 }] },
                        { "text": "Дух исчезает, не ответив.", "effects": [] }
                    ]
                }
            ]
        },
        {
            "id": 10,
            "image": "/images/haunted_temple.png",
            "description": "Ты входишь в заброшенный храм, где царит тишина.",
            "options": [
                {
                    "name": "Обыскать храм",
                    "outcomes": [
                        { "text": "Ты находишь древний артефакт! +2 золота.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 2 }] },
                        { "text": "Пол рушится под тобой! Потеряй 1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] },
                        { "text": "Храм защищали древние духи! Получи проклятье", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] }
                    ]
                },
                {
                    "name": "Помолиться",
                    "outcomes": [
                        { "text": "Ты чувствуешь лёгкость и умиротворение. Избавься от 1 проклятья", "effects": [{ "type": "modifyStat", "stat": "curses", "value": -1 }] },
                        { "text": "Ты пробудил что-то древнее, но успел убежать", "effects": [] }
                    ]
                },
                {
                    "name": "Пройти мимо",
                    "outcomes": [
                        { "text": "Ничего не поизошло", "effects": [] }
                    ]
                }
            ]
        },
        {
            "id": 11,
            "image": "/images/meteor.png",
            "description": "На небе вспыхивает метеор и падает неподалёку!",
            "options": [
                {
                    "name": "Пойти посмотреть",
                    "outcomes": [
                        { "text": "Ты находишь осколок звезды! +1 золото.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 1 }] },
                        { "text": "Радиция метеора ослабила тебя. Потеряй 1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] },
                        { "text": "Радиция метеора серьёзно отравило тебя. Получи проклятье", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] }
                    ]
                },
                {
                    "name": "Остаться на месте",
                    "outcomes": [
                        { "text": "Ты пропускаешь шанс на редкую находку.", "effects": [] }
                    ]
                }
            ]
        },
        {
            "id": 12,
            "image": "/images/enchanted_cat.png",
            "description": "Перед тобой появляется загадочный кот в шляпе.",
            "options": [
                {
                    "name": "Погладить кота",
                    "outcomes": [
                        { "text": "Кот мурлычет и дарит тебе удачу! +1 к броску D20 на следующее испытание.", "effects": [] },
                        { "text": "Кот исчезает, оставив после себя запах магии.", "effects": [] }
                    ]
                },
                {
                    "name": "Напасть",
                    "outcomes": [
                        { "text": "Кот оказывается волшебным и произносит мощное заклинание! Тебя откинуло на 10 клеток назад, потеряй 2 здоровья", "effects": [{ "type": "moveBy", "value": -10 }, { "type": "modifyStat", "stat": "health", "value": -2 }] }
                    ]
                },
                {
                    "name": "Игнорировать",
                    "outcomes": [
                        { "text": "Кот фыркает и исчезает.", "effects": [] },
                        { "text": "Он следит за тобой издалека...", "effects": [] }
                    ]
                }
            ]
        },
        {
            "id": 13,
            "image": "/images/magic_item.png",
            "description": "Ты находишь древний зеркальный обелиск.",
            "options": [
                {
                    "name": "Посмотреть в зеркало",
                    "outcomes": [
                        { "text": "Ты видишь свое будущее и получаешь +1 золото от вдохновения.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 1 }] },
                        { "text": "Зеркало показывает твои страхи. Получи 1 проклятие.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] }
                    ]
                },
                {
                    "name": "Разбить зеркало",
                    "outcomes": [
                        { "text": "В зеркале гибнет злой двойник. Ты теряешь 1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] },
                        { "text": "Осколок ранит тебя и ты возвращаешься на 2 клетки назад.", "effects": [{ "type": "moveBy", "value": -2 }, { "type": "modifyStat", "stat": "health", "value": -1 }] }
                    ]
                }
            ]
        },
        {
            "id": 16,
            "image": "/images/blessing.png",
            "description": "Маленькая фея предлагает благословение.",
            "options": [
                {
                    "name": "Принять благословение",
                    "outcomes": [
                        { "text": "Фея дарует тебе 1 здоровье и 1 золото.", "effects": [{ "type": "modifyStat", "stat": "health", "value": 1 }, { "type": "modifyStat", "stat": "gold", "value": 1 }] },
                        { "text": "Фея закружила тебя и ты немного потерялся — отступи на 1 клетку.", "effects": [{ "type": "moveBy", "value": -1 }] }
                    ]
                },
                {
                    "name": "Отказаться",
                    "outcomes": [
                        { "text": "Фея сердится и дарит тебе проклятие.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] },
                        { "text": "Она исчезает невозмутимо. Ничего не происходит.", "effects": [] }
                    ]
                }
            ]
        },
        {
            "id": 18,
            "image": "/images/dragon.png",
            "description": "Огнедышащий дракон поднимается из ущелья.",
            "options": [
                {
                    "name": "Попытаться оседлать его",
                    "outcomes": [
                        { "text": "Дракон твой! Получи +2 золота и продвинься на 4 клетки.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 2 }, { "type": "moveBy", "value": 4 }] },
                        { "text": "Он сбрасывает тебя с хвоста — потеряй 2 здоровья.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -2 }] }
                    ]
                },
                {
                    "name": "Спрятаться",
                    "outcomes": [
                        { "text": "Дракон не замечает тебя, но ты пропускаешь шанс. Ничего не происходит.", "effects": [] },
                        { "text": "Дракон замечает тебя и бросает огонь! -3 здоровья.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -3 }] }
                    ]
                }
            ]
        },
        {
            "id": 21,
            "image": "/images/fairy_circle.png",
            "description": "Ты попал в кольцо из тумана и цветущих грибов.",
            "options": [
                {
                    "name": "Съесть гриб",
                    "outcomes": [
                        { "text": "Гриб даёт +2 здоровья, но ты начинаешь слышать голоса.", "effects": [{ "type": "modifyStat", "stat": "health", "value": 2 }] },
                        { "text": "Гриб ядовит! Потеряй 2 здоровья.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -2 }] }
                    ]
                },
                {
                    "name": "Пересечь кольцо",
                    "outcomes": [
                        { "text": "Ты выходишь из тумана. Ничего не происходит.", "effects": [] },
                        { "text": "Тебя застают духи, наложено 2 проклятия.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 2 }] }
                    ]
                }
            ]
        },
        {
            "id": 22,
            "image": "/images/drunk_knight.png",
            "description": "Пьяный рыцарь просит помочь ему найти меч.",
            "options": [
                {
                    "name": "Помочь ему",
                    "outcomes": [
                        { "text": "Он благодарит тебя и даёт +1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": 1 }] },
                        { "text": "Он находит меч и случайно ранит тебя. -1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] }
                    ]
                },
                {
                    "name": "Игнорировать",
                    "outcomes": [
                        { "text": "Он сердится и метает в тебя копьё. -1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] },
                        { "text": "Он уходит, такой же беспомощный, как и был.", "effects": [] }
                    ]
                }
            ]
        },
        {
            "id": 24,
            "image": "/images/cursed_statue.png",
            "description": "Статуя в лесу кажется живой.",
            "options": [
                {
                    "name": "Приложиться к статуе",
                    "outcomes": [
                        { "text": "Ты получаешь проклятие, но в спину тихо шепчет сокровище.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] },
                        { "text": "Статуя дарует тебе +1 здоровье после жертвоприношения.", "effects": [{ "type": "modifyStat", "stat": "health", "value": 1 }] }
                    ]
                },
                {
                    "name": "Разрушить статую",
                    "outcomes": [
                        { "text": "Она взрывается, сшибая тебя. -2 здоровья.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -2 }] },
                        { "text": "Внутри найдены монеты! +3 золота.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 3 }] }
                    ]
                }
            ]
        },
        {
            "id": 27,
            "image": "/images/enchanted_forest.png",
            "description": "Тропа ведёт к сияющему лесу.",
            "options": [
                {
                    "name": "Войти в лес",
                    "outcomes": [
                        { "text": "Лес окутывает тебя магией. Получи +1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": 1 }] },
                        { "text": "Ты запутался в корнях. Вернись на 2 клетки.", "effects": [{ "type": "moveBy", "value": -2 }] }
                    ]
                },
                {
                    "name": "Обойти лес",
                    "outcomes": [
                        { "text": "Ты экономишь силы, но теряешь время. Ничего не происходит.", "effects": [] },
                        { "text": "Пока ты обходил лес, наткнулся на клада. +1 золота.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 1 }] }
                    ]
                }
            ]
        },
        {
            "id": 28,
            "image": "/images/wizard_tower.png",
            "description": "Башня мага окружена молниями.",
            "options": [
                {
                    "name": "Поприветствовать мага",
                    "outcomes": [
                        { "text": "Маг благословляет тебя. +1 здоровья и +1 золота.", "effects": [{ "type": "modifyStat", "stat": "health", "value": 1 }, { "type": "modifyStat", "stat": "gold", "value": 1 }] },
                        { "text": "Маг считает тебя шпионкой и посылает шар молний. -2 здоровья.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -2 }] }
                    ]
                },
                {
                    "name": "Убежать",
                    "outcomes": [
                        { "text": "Ты спасся с минимальными потерями. Ничего не происходит.", "effects": [] },
                        { "text": "Ты споткнулся и упал назад на 1 клетку.", "effects": [{ "type": "moveBy", "value": -1 }] }
                    ]
                }
            ]
        },
        {
            "id": 30,
            "image": "/images/dragon_egg.png",
            "description": "Ты находишь сверкающее яйцо, теплое на ощупь.",
            "options": [
                {
                    "name": "Унести яйцо",
                    "outcomes": [
                        { "text": "Оно может быть ценным. +3 золота.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 3 }] },
                        { "text": "Яйцо трескается, и из него выпрыгивает огненный малыш. Ты теряешь 1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] }
                    ]
                },
                {
                    "name": "Оставить яйцо",
                    "outcomes": [
                        { "text": "Яйцо благословляет тебя безопасным сном. +1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": 1 }] },
                        { "text": "Оно ломается само, и ты слышишь странные голоса. Получи +1 проклятие.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] }
                    ]
                }
            ]
        },
        {
            "id": 31,
            "image": "/images/ghost_ship.png",
            "description": "Призрачный корабль стоит на суше.",
            "options": [
                {
                    "name": "Войти на корабль",
                    "outcomes": [
                        { "text": "Призраки дарят тебе сундук. +2 золота.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 2 }] },
                        { "text": "Они забывают тебя и закрывают путь. Отступи на 2 клетки.", "effects": [{ "type": "moveBy", "value": -2 }] }
                    ]
                },
                {
                    "name": "Обойти корабль",
                    "outcomes": [
                        { "text": "Ничего не происходит.", "effects": [] },
                        { "text": "Корабль пытается утащить тебя в море. Отступи на 1 клетку.", "effects": [{ "type": "moveBy", "value": -1 }] }
                    ]
                }
            ]
        },
        {
            "id": 32,
            "image": "/images/magic_portal.png",
            "description": "Маленький портал мерцает на обочине.",
            "options": [
                {
                    "name": "Перейти через портал",
                    "outcomes": [
                        { "text": "Ты телепортируешься на 5 клеток вперед.", "effects": [{ "type": "moveBy", "value": 5 }] },
                        { "text": "Портал ведёт на болото. Отступи на 4 клетки.", "effects": [{ "type": "moveBy", "value": -4 }] }
                    ]
                },
                {
                    "name": "Игнорировать дверь",
                    "outcomes": [
                        { "text": "Портал вибрирует и исчезает. Ничего не происходит.", "effects": [] },
                        { "text": "Из портала выскакивает светлячок. Ты получаешь +1 золота.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 1 }] }
                    ]
                }
            ]
        },
        {
            "id": 33,
            "image": "/images/cursed_coin.png",
            "description": "На дороге блестит монета с черепом.",
            "options": [
                {
                    "name": "Поднять монету",
                    "outcomes": [
                        { "text": "Это не простая монета: +1 золота и +1 проклятие.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 1 }, { "type": "modifyStat", "stat": "curses", "value": 1 }] },
                        { "text": "Она ржавеет в руках. Ничего не происходит.", "effects": [] }
                    ]
                },
                {
                    "name": "Обойти её",
                    "outcomes": [
                        { "text": "Ты пропускаешь проклятие, но и золото. Ничего не произошло.", "effects": [] },
                        { "text": "Монета внезапно исчезает, и ты слышишь рык духа. Отступи на 1 клетку.", "effects": [{ "type": "moveBy", "value": -1 }] }
                    ]
                }
            ]
        },
        {
            "id": 35,
            "image": "/images/horned_skull.png",
            "description": "Ты находишь череп с рогами, украшенный цепями.",
            "options": [
                {
                    "name": "Поставить его на алтарь",
                    "outcomes": [
                        { "text": "Алтарь дарует 2 золота.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 2 }] },
                        { "text": "Алтарь оживает и ты теряешь 1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] }
                    ]
                },
                {
                    "name": "Использовать как талисман",
                    "outcomes": [
                        { "text": "Ты чувствуешь себя защищённым. Ничего не происходит.", "effects": [] },
                        { "text": "Талисман переполняет тебя темной энергией. +2 проклятия.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 2 }] }
                    ]
                }
            ]
        },
        {
            "id": 36,
            "image": "/images/giant_frog.png",
            "description": "Гигантская лягушка сидит на камне и квакает.",
            "options": [
                {
                    "name": "Поговорить с лягушкой",
                    "outcomes": [
                        { "text": "Она предлагает обмен: +1 золота за -1 здоровья.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 1 }, { "type": "modifyStat", "stat": "health", "value": -1 }] },
                        { "text": "Она клюнет тебя за ногу. -1 здоровья.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] }
                    ]
                },
                {
                    "name": "Убежать",
                    "outcomes": [
                        { "text": "Лягушка преследует тебя, но отстаёт. Ничего не происходит.", "effects": [] },
                        { "text": "Она плеснула слизью и ты теряешь 1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] }
                    ]
                }
            ]
        },
        {
            "id": 39,
            "image": "/images/giant_beetle.png",
            "description": "Огромный жук преграждает дорогу.",
            "options": [
                {
                    "name": "Попробовать обойти",
                    "outcomes": [
                        { "text": "Ты обходишь жука и продолжаешь путь. Ничего не происходит.", "effects": [] },
                        { "text": "Ты случайно наступаешь на жука и он бросает тебя назад на 2 клетки.", "effects": [{ "type": "moveBy", "value": -2 }] }
                    ]
                },
                {
                    "name": "Убрать его силой",
                    "outcomes": [
                        { "text": "Жук убран, но ты ранен. -1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] },
                        { "text": "Жук оборачивается и протыкает тебя. -2 здоровья.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -2 }] }
                    ]
                }
            ]
        },
        {
            "id": 42,
            "image": "/images/stone_golem.png",
            "description": "Ты видишь статую-голема у дороги.",
            "options": [
                {
                    "name": "Постучать по голове",
                    "outcomes": [
                        { "text": "Голем просыпается и даёт тебе +2 золота.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 2 }] },
                        { "text": "Он разозлён и отодвигает тебя на 3 клетки назад.", "effects": [{ "type": "moveBy", "value": -3 }] }
                    ]
                },
                {
                    "name": "Обойти его",
                    "outcomes": [
                        { "text": "Голем остаётся спящим. Ничего не происходит.", "effects": [] },
                        { "text": "Он просыпается и тебя пугает. Отступи на 1 клетку.", "effects": [{ "type": "moveBy", "value": -1 }] }
                    ]
                }
            ]
        },
        {
            "id": 43,
            "image": "/images/waterfall.png",
            "description": "Ты стоишь перед водопадом с блестящими камнями.",
            "options": [
                {
                    "name": "Искупаться",
                    "outcomes": [
                        { "text": "Вода лечит тебя. +1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": 1 }] },
                        { "text": "Холодная вода обжигает. -1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] }
                    ]
                },
                {
                    "name": "Собрать камни",
                    "outcomes": [
                        { "text": "Ты нашёл редкий кристалл и получаешь +2 золота.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 2 }] },
                        { "text": "Камень оказался проклятым. +1 проклятие.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] }
                    ]
                }
            ]
        },
        {
            "id": 44,
            "image": "/images/ancient_ruins.png",
            "description": "Ты подошёл к древним руинам.",
            "options": [
                {
                    "name": "Войти внутрь",
                    "outcomes": [
                        { "text": "Ты находишь сокровища: +3 золота.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 3 }] },
                        { "text": "Ты попадаешь в ловушку и теряешь 1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] }
                    ]
                },
                {
                    "name": "Исследовать окрестности",
                    "outcomes": [
                        { "text": "Ты находишь безопасный проход. +2 клетки вперед.", "effects": [{ "type": "moveBy", "value": 2 }] },
                        { "text": "Ты натыкаешься на обвал. Отступи на 2 клетки.", "effects": [{ "type": "moveBy", "value": -2 }] }
                    ]
                }
            ]
        },
        {
            "id": 48,
            "image": "/images/tornado.png",
            "description": "Сильный ветер поднимает тебя в воздух.",
            "options": [
                {
                    "name": "Держаться изо всех сил",
                    "outcomes": [
                        { "text": "Ветер ослаб, ты падаешь, но остаешься целым. Ничего не происходит.", "effects": [] },
                        { "text": "Ветер уносит тебя назад на 3 клетки.", "effects": [{ "type": "moveBy", "value": -3 }] }
                    ]
                },
                {
                    "name": "Отпустить сумку",
                    "outcomes": [
                        { "text": "Ты теряешь часть золота, но спасаешь здоровье. -1 золота.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": -1 }] },
                        { "text": "Ты падаешь прямо на колючки и теряешь 1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] }
                    ]
                }
            ]
        },
        {
            "id": 49,
            "image": "/images/witch_hat.png",
            "description": "В лесу найдены шляпы ведьм.",
            "options": [
                {
                    "name": "Надеть шляпу",
                    "outcomes": [
                        { "text": "Шляпа дарует тебе +1 здоровье и +1 золота.", "effects": [{ "type": "modifyStat", "stat": "health", "value": 1 }, { "type": "modifyStat", "stat": "gold", "value": 1 }] },
                        { "text": "Шляпа проклята. +2 проклятия.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 2 }] }
                    ]
                },
                {
                    "name": "Сжечь шляпу",
                    "outcomes": [
                        { "text": "Ты уничтожаешь зло. +1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": 1 }] },
                        { "text": "Пламя возвращается к тебе. -1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] }
                    ]
                }
            ]
        }
    ]
};
