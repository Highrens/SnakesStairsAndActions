export const actions2 = {

    "actions": [
        {
            "id": 1,
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
            "image": "/images/goblins.png",
            "description": "Ты наткнулся на гоблинов!",
            "options": [
                {
                    "name": "Попробовать поговорить",
                    "outcomes": [
                        {
                            "text": "У вас не удалось найти общий язык и на тебя напали! Получи 1ед урона если D20 < 10",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "prompt": "Брось D20 и введи результат. Если меньше 10 — получаешь 1 урон.",
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
                            "text": "Они тебя заметили! Получи 1ед урона если D20 < 8",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "prompt": "Брось D20 и введи результат. Если меньше 8 — получаешь 1 урон.",
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
                            "text": "Завязалась драка! Получи 1ед урона если D20 < 8",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "prompt": "Брось D20 и введи результат. Если меньше 8 — получаешь 1 урон.",
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
            "image": "/images/treasure_chest.png",
            "description": "Ты нашёл древний сундук, покрытый мхом.",
            "options": [
                {
                    "name": "Открыть сундук",
                    "outcomes": [
                        { "text": "Ты нашёл 5 золота!", "effects": [{ "type": "modifyStat", "stat": "gold", "value": 5 }] },
                        { "text": "Внутри ловушка! Потеряй 1 здоровье.", "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }] },
                        {
                            "text": "Это мимик! Потеряй 1 здоровье, если D20 < 14.",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "prompt": "Брось D20 и введи результат. Если меньше 14 — теряешь 1 здоровье.",
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
                            "text": "Он шепчет проклятие! Потеряй 1 здоровье, если D20 < 10.",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "prompt": "Брось D20 и введи результат. Если меньше 10 — теряешь 1 здоровье.",
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
                            "text": "Оказывается, это бандит! Потеряй 1 здоровье и 1 золото, если D20 < 10",
                            "effects": [],
                            "rollCheck": {
                                "diceSides": 20,
                                "prompt": "Брось D20 и введи результат. Если меньше 10 — теряешь 1 здоровье и 1 золото.",
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
        }
    ]


}