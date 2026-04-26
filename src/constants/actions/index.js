// Central export combining all actions by category
import { simpleActions } from './simpleActions';
import { rollCheckActions } from './rollCheckActions';
import { noControlActions } from './noControlActions';

// Объединяем все действия в единый объект actions2
export const actions2 = {
    actions: [
        ...simpleActions.actions,
        ...rollCheckActions.actions,
        ...noControlActions.actions
    ]
};

// Экспорты для импорта отдельных категорий (если нужно)
export { simpleActions };
export { rollCheckActions };
export { noControlActions };
