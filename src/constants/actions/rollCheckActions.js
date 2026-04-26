// Actions with rollCheck - содержат механику броска кубика
export const rollCheckActions = {
    actions: [
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
                                "condition": { "operator": ">", "value": 4 },
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
                        { "text": "Паутина укрепляет крепчает. Ты ничего не получаешь.", "effects": [] },
                        { "text": "Паук потерял интерес и уходит, оставляя след к скрытому ходу. Продвинься на 2 клетки вперед.", "effects": [{ "type": "moveBy", "value": 2 }] }
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
                                "condition": { "operator": ">=", "value": 14 },
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
                                "condition": { "operator": "<=", "value": 40 },
                                "onSuccessText": "Тень отступила. -1 проклятий.",
                                "onFailText": "Зеркало наложило проклятие.",
                                "onSuccessEffects": [{ "type": "modifyStat", "stat": "curses", "value": -1 }],
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
                        { "text": "Ты просыпаешься с чувствой проклятия. +1 проклятие.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] }
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
                        { "text": "Он уходит, оставляя только проклятие. +1 проклятие.", "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }] }
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
};
