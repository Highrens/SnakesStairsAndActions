// No Control actions - события без выбора, которые просто происходят
export const noControlActions = {
    actions: [
        {
            "id": 51,
            "category": "noControl",
            "image": "/images/thief.png",
            "description": "Ты не заметил, как вор украл твоё золото!",
            "options": [
                {
                    "name": "Понять случившееся",
                    "outcomes": [
                        {
                            "text": "Когда ты заметил пропажу, было уже поздно. Потеряно 2 золота.",
                            "effects": [{ "type": "modifyStat", "stat": "gold", "value": -2 }]
                        }
                    ]
                }
            ]
        },
        {
            "id": 52,
            "category": "noControl",
            "image": "/images/wild_magic.png",
            "description": "Вокруг вспыхнула дикая магия!",
            "options": [
                {
                    "name": "Пассивно наблюдать",
                    "outcomes": [
                        {
                            "text": "Магия окутала тебя и отбросила назад на 2 клетки. Ты также потерял 1 здоровье.",
                            "effects": [{ "type": "moveBy", "value": -2 }, { "type": "modifyStat", "stat": "health", "value": -1 }]
                        }
                    ]
                }
            ]
        },
        {
            "id": 53,
            "category": "noControl",
            "image": "/images/curse_mark.png",
            "description": "На твою тень упала тень проклятия...",
            "options": [
                {
                    "name": "Почувствовать дискомфорт",
                    "outcomes": [
                        {
                            "text": "Ты не понимаешь почему, но чувствуешь себя проклятым. +1 проклятие.",
                            "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }]
                        }
                    ]
                }
            ]
        },
        {
            "id": 54,
            "category": "noControl",
            "image": "/images/dream_fade.png",
            "description": "Твой сон рассеялся с утренним туманом...",
            "options": [
                {
                    "name": "Проснуться",
                    "outcomes": [
                        {
                            "text": "Волшебное зелье, что ты вчера пил, потеряло силу. Потеряно 1 здоровье.",
                            "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }]
                        }
                    ]
                }
            ]
        },
        {
            "id": 55,
            "category": "noControl",
            "image": "/images/invisible_hand.png",
            "description": "Невидимая рука коснулась твоего плеча...",
            "options": [
                {
                    "name": "Попытаться понять что произошло",
                    "outcomes": [
                        {
                            "text": "Твоя сумка несколько легче, чем была. Потеряно 1 золото.",
                            "effects": [{ "type": "modifyStat", "stat": "gold", "value": -1 }]
                        }
                    ]
                }
            ]
        },
        {
            "id": 56,
            "category": "noControl",
            "image": "/images/poison_food.png",
            "description": "Еда, что ты съел, была испорчена...",
            "options": [
                {
                    "name": "Почувствовать недомогание",
                    "outcomes": [
                        {
                            "text": "Твой желудок протестует. Потеряно 2 здоровья.",
                            "effects": [{ "type": "modifyStat", "stat": "health", "value": -2 }]
                        }
                    ]
                }
            ]
        },
        {
            "id": 57,
            "category": "noControl",
            "image": "/images/lost_item.png",
            "description": "Ты потерял что-то очень ценное по пути...",
            "options": [
                {
                    "name": "Заметить пропажу",
                    "outcomes": [
                        {
                            "text": "Когда ты вспомнил, где видел это в последний раз, было уже слишком поздно. Потеряно 3 золота.",
                            "effects": [{ "type": "modifyStat", "stat": "gold", "value": -3 }]
                        }
                    ]
                }
            ]
        },
        {
            "id": 58,
            "category": "noControl",
            "image": "/images/shadow_touch.png",
            "description": "Ледяная тень коснулась твоего сердца...",
            "options": [
                {
                    "name": "Содрогнуться",
                    "outcomes": [
                        {
                            "text": "Холод пронизывает тебя. Потеряно 1 здоровье и получено 1 проклятие.",
                            "effects": [{ "type": "modifyStat", "stat": "health", "value": -1 }, { "type": "modifyStat", "stat": "curses", "value": 1 }]
                        }
                    ]
                }
            ]
        },
        {
            "id": 59,
            "category": "noControl",
            "image": "/images/sand_storm.png",
            "description": "Внезапный порыв ветра унёс тебя назад...",
            "options": [
                {
                    "name": "Попытаться устоять",
                    "outcomes": [
                        {
                            "text": "Ветер оказался сильнее. Ты отброшен назад на 3 клетки.",
                            "effects": [{ "type": "moveBy", "value": -3 }]
                        }
                    ]
                }
            ]
        },
        {
            "id": 60,
            "category": "noControl",
            "image": "/images/bad_omen.png",
            "description": "Дурное предчувствие охватило тебя...",
            "options": [
                {
                    "name": "Смириться с судьбой",
                    "outcomes": [
                        {
                            "text": "Что-то плохое точно произойдёт, но пока неизвестно что. +1 проклятие.",
                            "effects": [{ "type": "modifyStat", "stat": "curses", "value": 1 }]
                        }
                    ]
                }
            ]
        }
    ]
};
