export const actions2 = {

    "actions": [
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
                            "text": "Портал засасывает вас и вы телепортируетесь на 3 клетки вперед",
                            "effects": [
                                { "type": "moveBy", "value": 3 }
                            ]
                        },
                        {
                            "text": "Ничего не происходит",
                            "effects": []
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "category": "requirement",
            "image": "/images/goblins.png",
            "description": "Ты наткнулся на гоблинов!",
            "options": [
                {
                    "name": "Попробовать поговорить",
                    "outcomes": [
                        {
                            "text": "Брось D20",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "confirmLabel": "Подтвердить бросок",
                                "condition": { "operator": "<", "value": 10 },
                                "onSuccessText": "Условие выполнено: получаешь 1 урон.",
                                "onFailText": "Условие не выполнено: урона нет.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "health", "value": -1 }],
                                "onFailEffects": []
                            }
                        },
                        {
                            "text": "Они предлагают купить зелье лечения! Ты МОЖЕШЬ купить 1 здоровье за 3 золота",
                            "effects": [],
                            "requiresConfirmation": true,
                            "confirmation": {
                                "prompt": "Купить зелье за 3 золота и получить +1 здоровье?",
                                "confirmLabel": "Купить",
                                "cancelLabel": "Отказаться",
                                "requirements": [
                                    { "stat": "gold", "min": 3, "message": "Недостаточно золота для покупки." }
                                ],
                                "onConfirmText": "Ты купил зелье и восстановил 1 здоровье.",
                                "onCancelText": "Ты отказался от покупки зелья.",
                                "onConfirmEffects": [
                                    { "type": "modifyStat", "stat": "gold", "value": -3 },
                                    { "type": "modifyStat", "stat": "health", "value": 1 }
                                ],
                                "onCancelEffects": []
                            }
                        },
                        { "text": "Каким-то чудом вы смогли поговорить с ними, но ничего интересного они не сказали", "effects": [] }
                    ]
                },
                {
                    "name": "Попробовать прокрасться мимо",
                    "outcomes": [
                        {
                            "text": "Брось D20",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "confirmLabel": "Подтвердить бросок",
                                "condition": { "operator": "<", "value": 8 },
                                "onSuccessText": "Условие выполнено: получаешь 1 урон.",
                                "onFailText": "Условие не выполнено: урона нет.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "health", "value": -1 }],
                                "onFailEffects": []
                            }
                        },
                        { "text": "Вы удачно прокрались мимо", "effects": [] }
                    ]
                },
                {
                    "name": "Атаковать их!",
                    "outcomes": [
                        {
                            "text": "Брось D20",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "confirmLabel": "Подтвердить бросок",
                                "condition": { "operator": "<", "value": 8 },
                                "onSuccessText": "Условие выполнено: получаешь 1 урон.",
                                "onFailText": "Условие не выполнено: урона нет.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "health", "value": -1 }],
                                "onFailEffects": []
                            }
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
                        {
                            "text": "Брось D20",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "confirmLabel": "Подтвердить бросок",
                                "condition": { "operator": "<", "value": 14 },
                                "onSuccessText": "Ты теряешь 1 здоровье.",
                                "onFailText": "Ты избежал урона от мимика.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "health", "value": -1 }],
                                "onFailEffects": []
                            }
                        },
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
                        { "text": "Ты чувствуешь, как усталость отступает.", "effects": [] },
                        { "text": "Ничего не происходит.", "effects": [] }
                    ]
                }
            ]
        },
        {
            "id": 5,
            "image": "/images/strange_merchant.png",
            "description": "К тебе подходит странный торговец в капюшоне.",
            "options": [
                {
                    "name": "Посмотреть товары",
                    "outcomes": [
                        {
                            "text": "Ты купил редкое зелье! Потрать 3 золота, получи 1 здоровье.",
                            "effects": [],
                            "requiresConfirmation": true,
                            "confirmation": {
                                "prompt": "Купить редкое зелье за 3 золота?",
                                "confirmLabel": "Купить",
                                "cancelLabel": "Отказаться",
                                "requirements": [
                                    { "stat": "gold", "min": 3, "message": "Недостаточно золота для покупки." }
                                ],
                                "onConfirmText": "Ты купил редкое зелье и восстановил 1 здоровье.",
                                "onCancelText": "Ты решил не покупать зелье.",
                                "onConfirmEffects": [
                                    { "type": "modifyStat", "stat": "gold", "value": -3 },
                                    { "type": "modifyStat", "stat": "health", "value": 1 }
                                ],
                                "onCancelEffects": []
                            }
                        },
                        { "text": "Все товары оказались фальшивкой. Потеряй 2 золота.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": -2 }] }
                    ]
                },
                {
                    "name": "Игнорировать его",
                    "outcomes": [
                        { "text": "Он уходит, пробормотав что-то непонятное.", "effects": [] },
                        {
                            "text": "Брось D20",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "confirmLabel": "Подтвердить бросок",
                                "condition": { "operator": "<", "value": 10 },
                                "onSuccessText": "Условие выполнено: теряешь 1 здоровье.",
                                "onFailText": "Условие не выполнено: здоровье не теряется.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "health", "value": -1 }],
                                "onFailEffects": []
                            }
                        }
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
            "id": 8,
            "image": "/images/lost_traveler.png",
            "description": "Ты встречаешь потерявшегося путешественника.",
            "options": [
                {
                    "name": "Помочь ему",
                    "outcomes": [
                        { "text": "Он благодарит тебя и делится припасами. Получи +1 золото.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 1 }] },
                        {
                            "text": "Брось D20",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "confirmLabel": "Подтвердить бросок",
                                "condition": { "operator": "<", "value": 10 },
                                "onSuccessText": "Условие выполнено: теряешь 1 здоровье и 1 золото.",
                                "onFailText": "Условие не выполнено: потерь нет.",
                                "onSuccessEffects": [
                                    { "type": "modifyStat", "stat": "health", "value": -1 },
                                    { "type": "modifyStat", "stat": "gold", "value": -1 }
                                ],
                                "onFailEffects": []
                            }
                        }
                    ]
                },
                {
                    "name": "Проигнорировать",
                    "outcomes": [
                        { "text": "Ты проходишь мимо, но чувствуешь вину.", "effects": [] },
                        { "text": "Путешественник исчезает в тумане.", "effects": [] }
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
            "id": 14,
            "image": "/images/ancient_scroll.png",
            "description": "Ты находишь свиток древнего заклинания.",
            "options": [
                {
                    "name": "Прочитать вслух",
                    "outcomes": [
                        {
                            "text": "Брось D8",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 8,
                                "confirmLabel": "Подтвердить бросок",
                                "condition": { "operator": "<=", "value": 4 },
                                "onSuccessText": "Заклинание удвоило твою силу. +2 здоровья.",
                                "onFailText": "Магия бьёт в обратную сторону. -1 здоровье.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "health", "value": 2 }],
                                "onFailEffects": [{ "type": "modifyStat", "stat": "health", "value": -1 }]
                            }
                        }
                    ]
                },
                {
                    "name": "Спрятать свиток",
                    "outcomes": [
                        { "text": "Свиток окажется полезным позже. Ничего не происходит прямо сейчас.", "effects": [] },
                        { "text": "Охранные руны активируются! Получи 1 проклятие.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] }
                    ]
                }
            ]
        },
        {
            "id": 15,
            "image": "/images/giant_spider.png",
            "description": "В паутине огромного паука застрял сундук.",
            "options": [
                {
                    "name": "Оторвать сундук",
                    "outcomes": [
                        {
                            "text": "Брось D12",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 12,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": ">=", "value": 7 },
                                "onSuccessText": "Ты победил паука! +3 золота.",
                                "onFailText": "Паук укусил тебя. -2 здоровья.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "gold", "value": 3 }],
                                "onFailEffects": [{ "type": "modifyStat", "stat": "health", "value": -2 }]
                            }
                        }
                    ]
                },
                {
                    "name": "Оставить всё как есть",
                    "outcomes": [
                        { "text": "Паутина укрепляет сайт. Ты ничего не получаешь.", "effects": [] },
                        { "text": "Паук потерял интерес и уходит, оставив след к скрытому ходу. Продвинься на 2 клетки вперед.", "effects": [{ "type": "moveBy", "value": 2 }] }
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
            "id": 17,
            "image": "/images/bandit_camp.png",
            "description": "Ты наталкиваешься на бандитский лагерь.",
            "options": [
                {
                    "name": "Постучаться в палатку",
                    "outcomes": [
                        { "text": "Бандиты приглашают тебя на чаепитие и дают +2 золота.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 2 }] },
                        {
                            "text": "Тебя обманули и ограбили! Потеряй 2 золота и 1 здоровье.",
                            "effects": [{ "type": "modifyStat", "stat": "gold", "value": -2 }, { "type": "modifyStat", "stat": "health", "value": -1 }]
                        }
                    ]
                },
                {
                    "name": "Ограбить лагерь",
                    "outcomes": [
                        {
                            "text": "Брось D10",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 10,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": ">=", "value": 6 },
                                "onSuccessText": "Ты унес сундук. +4 золота.",
                                "onFailText": "Бандиты ранили тебя. -2 здоровья.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "gold", "value": 4 }],
                                "onFailEffects": [{ "type": "modifyStat", "stat": "health", "value": -2 }]
                            }
                        }
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
            "id": 19,
            "image": "/images/witch.png",
            "description": "Старая ведьма предлагает загадку.",
            "options": [
                {
                    "name": "Ответить на загадку",
                    "outcomes": [
                        {
                            "text": "Брось D4",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 4,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": ">", "value": 1 },
                                "onSuccessText": "Ты ответил правильно! +1 золота.",
                                "onFailText": "Загадка оказалась слишком сложной. -1 здоровье.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "gold", "value": 1 }],
                                "onFailEffects": [{ "type": "modifyStat", "stat": "health", "value": -1 }]
                            }
                        }
                    ]
                },
                {
                    "name": "Не отвечать",
                    "outcomes": [
                        { "text": "Она обиделась и наложила проклятие.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] },
                        { "text": "Она рассмеялась и отпустила тебя. Ничего не происходит.", "effects": [] }
                    ]
                }
            ]
        },
        {
            "id": 20,
            "image": "/images/bridge.png",
            "description": "Старый мост через реку шатается.",
            "options": [
                {
                    "name": "Бежать через мост",
                    "outcomes": [
                        {
                            "text": "Брось D6",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 6,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": ">=", "value": 4 },
                                "onSuccessText": "Мост выдержал. +3 клетки вперед.",
                                "onFailText": "Мост рухнул. -1 здоровье.",
                                "onSuccessEffects": [{ "type": "moveBy", "value": 3 }],
                                "onFailEffects": [{ "type": "modifyStat", "stat": "health", "value": -1 }]
                            }
                        }
                    ]
                },
                {
                    "name": "Обойти реку",
                    "outcomes": [
                        { "text": "Ты теряешь время и возвращаешься на 1 клетку назад.", "effects": [{ "type": "moveBy", "value": -1 }] },
                        { "text": "Ты находишь маленькую лодку и продвигаешься на 2 клетки вперед.", "effects": [{ "type": "moveBy", "value": 2 }] }
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
            "id": 23,
            "image": "/images/enchanted_sword.png",
            "description": "Ты находишь магический клинок, вонзённый в камень.",
            "options": [
                {
                    "name": "Попытаться вытащить",
                    "outcomes": [
                        {
                            "text": "Брось D20",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": ">=", "value": 12 },
                                "onSuccessText": "Клинок изъят! +2 золота.",
                                "onFailText": "Ловушка сработала. -1 здоровье.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "gold", "value": 2 }],
                                "onFailEffects": [{ "type": "modifyStat", "stat": "health", "value": -1 }]
                            }
                        }
                    ]
                },
                {
                    "name": "Оставить меч",
                    "outcomes": [
                        { "text": "Ты решаешь не рисковать. Ничего не происходит.", "effects": [] },
                        { "text": "Камень начинает светиться и ты получаешь +1 проклятье.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] }
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
            "id": 25,
            "image": "/images/haunted_mirror.png",
            "description": "Перед тобой старое зеркало с темной рамой.",
            "options": [
                {
                    "name": "Смотреть в зеркало",
                    "outcomes": [
                        {
                            "text": "Брось D100",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 100,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": "<=", "value": 20 },
                                "onSuccessText": "Тень отступила. +2 золота.",
                                "onFailText": "Зеркало наложило проклятие.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "gold", "value": 2 }],
                                "onFailEffects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }]
                            }
                        }
                    ]
                },
                {
                    "name": "Закрыть зеркало",
                    "outcomes": [
                        { "text": "Ты избежал опасности. Ничего не произошло.", "effects": [] },
                        { "text": "Зеркало сжалилось и вернуло тебе немного здоровья. +1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": 1 }] }
                    ]
                }
            ]
        },
        {
            "id": 26,
            "image": "/images/troll_bridge.png",
            "description": "Тролль охраняет узкий проход.",
            "options": [
                {
                    "name": "Устроить спор",
                    "outcomes": [
                        {
                            "text": "Брось D6",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 6,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": ">=", "value": 3 },
                                "onSuccessText": "Тролль уступил. +1 золота.",
                                "onFailText": "Он разозлился. -1 здоровье.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "gold", "value": 1 }],
                                "onFailEffects": [{ "type": "modifyStat", "stat": "health", "value": -1 }]
                            }
                        }
                    ]
                },
                {
                    "name": "Подкупить его",
                    "outcomes": [
                        { "text": "Он берёт золото, но уходит. Потеряй 2 золота.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": -2 }] },
                        { "text": "Он кидает тебя в реку! Вернись на 3 клетки назад.", "effects": [{ "type": "moveBy", "value": -3 }] }
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
            "id": 29,
            "image": "/images/market.png",
            "description": "Рынок полон ярких лавок и шумных торговцев.",
            "options": [
                {
                    "name": "Купить провизию",
                    "outcomes": [
                        { "text": "Ты купил еды за 2 золота и получаешь +1 здоровья.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": -2 }, { "type": "modifyStat", "stat": "health", "value": 1 }] },
                        { "text": "Товар оказался испорчен. Потеряй 2 золота.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": -2 }] }
                    ]
                },
                {
                    "name": "Попробовать торговаться",
                    "outcomes": [
                        {
                            "text": "Брось D10",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 10,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": ">=", "value": 5 },
                                "onSuccessText": "Ты выиграл сделку! +1 золота.",
                                "onFailText": "Продавец сердится. -1 здоровье.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "gold", "value": 1 }],
                                "onFailEffects": [{ "type": "modifyStat", "stat": "health", "value": -1 }]
                            }
                        }
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
            "id": 34,
            "image": "/images/dice.png",
            "description": "На алтаре лежат магические кости.",
            "options": [
                {
                    "name": "Бросить D20",
                    "outcomes": [
                        {
                            "text": "Брось D20",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": "==", "value": 20 },
                                "onSuccessText": "Критический успех! +3 здоровья.",
                                "onFailText": "Ничего особенного не произошло.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "health", "value": 3 }],
                                "onFailEffects": []
                            }
                        },
                        {
                            "text": "Брось D20",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": "==", "value": 1 },
                                "onSuccessText": "Провал! -3 здоровья.",
                                "onFailText": "Ты избежал беды.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "health", "value": -3 }],
                                "onFailEffects": []
                            }
                        }
                    ]
                },
                {
                    "name": "Не трогать кости",
                    "outcomes": [
                        { "text": "Ты оставляешь их в покое. Ничего не происходит.", "effects": [] },
                        { "text": "Кости играют сами по себе и шепчут проклятье. +1 проклятие.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] }
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
            "id": 37,
            "image": "/images/wishing_well.png",
            "description": "У тебя есть шанс бросить монету в волшебный колодец.",
            "options": [
                {
                    "name": "Бросить монету",
                    "outcomes": [
                        {
                            "text": "Брось D6",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 6,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": ">=", "value": 5 },
                                "onSuccessText": "+2 золота!", 
                                "onFailText": "Ничего не происходит.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "gold", "value": 2 }],
                                "onFailEffects": []
                            }
                        },
                        {
                            "text": "Брось D6",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 6,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": "==", "value": 1 },
                                "onSuccessText": "Ты потерял 1 здоровье.",
                                "onFailText": "Колодец молчит.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "health", "value": -1 }],
                                "onFailEffects": []
                            }
                        }
                    ]
                },
                {
                    "name": "Пройти мимо",
                    "outcomes": [
                        { "text": "Ты оставляешь колодец в покое. Ничего не происходит.", "effects": [] },
                        { "text": "Из колодца раздаётся смех, но ты его не слышишь. Ничего не произошло.", "effects": [] }
                    ]
                }
            ]
        },
        {
            "id": 38,
            "image": "/images/nightmare.png",
            "description": "Ты вошёл в ночь кошмара.",
            "options": [
                {
                    "name": "Бороться с кошмаром",
                    "outcomes": [
                        {
                            "text": "Брось D10",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 10,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": ">=", "value": 7 },
                                "onSuccessText": "Ты победил! +2 здоровья.",
                                "onFailText": "Кошмар преодолел тебя. -2 здоровья.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "health", "value": 2 }],
                                "onFailEffects": [{ "type": "modifyStat", "stat": "health", "value": -2 }]
                            }
                        }
                    ]
                },
                {
                    "name": "Проснуться",
                    "outcomes": [
                        { "text": "Ты просыпаешься безопасно. Ничего не происходит.", "effects": [] },
                        { "text": "Ты просыпаешься с чувствой проклятия. +1 проклятие.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] }
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
            "id": 40,
            "image": "/images/witch_hut.png",
            "description": "В хижине ведьмы пахнет зельями.",
            "options": [
                {
                    "name": "Выпить зелье",
                    "outcomes": [
                        {
                            "text": "Брось D8",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 8,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": ">=", "value": 5 },
                                "onSuccessText": "Зелье исцеляет тебя. +2 здоровья.",
                                "onFailText": "Оно ядовито. -2 здоровья.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "health", "value": 2 }],
                                "onFailEffects": [{ "type": "modifyStat", "stat": "health", "value": -2 }]
                            }
                        }
                    ]
                },
                {
                    "name": "Украсть зелье",
                    "outcomes": [
                        { "text": "Ты уносишь зелье и получаешь +1 золота удачи.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 1 }] },
                        { "text": "Ведьма тебя заметила. Получи 1 проклятие.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] }
                    ]
                }
            ]
        },
        {
            "id": 41,
            "image": "/images/basilisk.png",
            "description": "Перед тобой стоит василиск.",
            "options": [
                {
                    "name": "Попытаться обойти",
                    "outcomes": [
                        {
                            "text": "Брось D12",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 12,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": ">=", "value": 8 },
                                "onSuccessText": "Ты обошел василиска.",
                                "onFailText": "Ты зацепил взгляд. -2 здоровья.",
                                "onSuccessEffects": [],
                                "onFailEffects": [{ "type": "modifyStat", "stat": "health", "value": -2 }]
                            }
                        }
                    ]
                },
                {
                    "name": "Сразиться",
                    "outcomes": [
                        { "text": "Ты сражаешься и получаешь +1 золота от трофея, но теряешь 1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 1 }, { "type": "modifyStat", "stat": "health", "value": -1 }] },
                        { "text": "Он уходит, оставив только проклятие. +1 проклятие.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] }
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
            "id": 45,
            "image": "/images/cursed_book.png",
            "description": "Таинственный том лежит на пне.",
            "options": [
                {
                    "name": "Открыть книгу",
                    "outcomes": [
                        {
                            "text": "Брось D20",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": "<=", "value": 5 },
                                "onSuccessText": "Книга проклята. +1 проклятие.",
                                "onFailText": "Книга дарит знания. +1 золота.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }],
                                "onFailEffects": [{ "type": "modifyStat", "stat": "gold", "value": 1 }]
                            }
                        }
                    ]
                },
                {
                    "name": "Сжечь книгу",
                    "outcomes": [
                        { "text": "Огонь уничтожает проклятие. +1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": 1 }] },
                        { "text": "Ты обжигаешься. -1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] }
                    ]
                }
            ]
        },
        {
            "id": 46,
            "image": "/images/vampire.png",
            "description": "Ночь приносит клыкастого странника.",
            "options": [
                {
                    "name": "Позвать стражу",
                    "outcomes": [
                        {
                            "text": "Брось D10",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 10,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": ">=", "value": 7 },
                                "onSuccessText": "Стража спасла тебя! +1 золота.",
                                "onFailText": "Он укусил тебя. -2 здоровья.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "gold", "value": 1 }],
                                "onFailEffects": [{ "type": "modifyStat", "stat": "health", "value": -2 }]
                            }
                        }
                    ]
                },
                {
                    "name": "Сдаться ему",
                    "outcomes": [
                        { "text": "Он отпускает тебя, но ты ощущаешь жажду. -1 здоровья.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] },
                        { "text": "Он оставляет метку проклятия. +1 проклятие.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] }
                    ]
                }
            ]
        },
        {
            "id": 47,
            "image": "/images/magic_shop.png",
            "description": "Магазин магических артефактов манит тебя светом.",
            "options": [
                {
                    "name": "Купить зелье",
                    "outcomes": [
                        { "text": "Зелье стоит 2 золота и даёт +1 здоровья.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": -2 }, { "type": "modifyStat", "stat": "health", "value": 1 }] },
                        { "text": "Зелье поддельное. Потеряй 2 золота.", "effects": [{ "type": "modifyStat", "stat": "gold", "value": -2 }] }
                    ]
                },
                {
                    "name": "Спросить о проклятьях",
                    "outcomes": [
                        {
                            "text": "Брось D8",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 8,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": ">=", "value": 5 },
                                "onSuccessText": "Проклятие снято. -1 проклятие.",
                                "onFailText": "Сделка провалилась. +1 проклятие.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "curses", "value": -1 }],
                                "onFailEffects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }]
                            }
                        }
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
        },
        {
            "id": 50,
            "image": "/images/wizard_staff.png",
            "description": "Ты видишь посох, окутанный искрами.",
            "options": [
                {
                    "name": "Взять посох",
                    "outcomes": [
                        {
                            "text": "Брось D20",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "confirmLabel": "Проверить",
                                "condition": { "operator": ">=", "value": 10 },
                                "onSuccessText": "Посох признал тебя. +2 золота.",
                                "onFailText": "Он разрядился на тебя. -1 здоровье.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "gold", "value": 2 }],
                                "onFailEffects": [{ "type": "modifyStat", "stat": "health", "value": -1 }]
                            }
                        }
                    ]
                },
                {
                    "name": "Оставить посох",
                    "outcomes": [
                        { "text": "Ты оставляешь его в покое. Ничего не происходит.", "effects": [] },
                        { "text": "Лёгкая искра ударяет тебя. -1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] }
                    ]
                }
            ]
        }
    ]


}