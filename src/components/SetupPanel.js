import Button from "./Button/Button";
import DiceRoller from "./DiceRoller";

const SetupPanel = ({
  remainingSetupPoints,
  setupStats,
  handleAdjustSetupStat,
  handleConfirmCharacterSetup,
  isSetupComplete,
  rolledPoints,
  setRolledPoints,
}) => (
  <div className="setup-panel fade-in">
    {rolledPoints === null ? (
      <>
        <p className="stats-title">Бросьте кубик D8</p>
        <p className="points-remaining">Результат определит количество очков для распределения</p>
        <DiceRoller
          config={{
            baseSides: [1, 2, 3, 4, 5, 6, 7, 8],
            customOutcomes: [],
            filter: (context) => (value) => true,
          }}
          onRollComplete={setRolledPoints}
        />
      </>
    ) : (
      <>
        <p className="stats-title">Настройка персонажа</p>
        <p className="points-remaining">Осталось очков: {remainingSetupPoints} (из {rolledPoints})</p>
        <div className="setup-rows">
          {[
            { key: "health", label: "Здоровье", icon: "❤️", min: 3 },
            { key: "dexterity", label: "Ловкость", icon: "🤸", min: 0 },
            { key: "strength", label: "Сила", icon: "💪", min: 0 },
            { key: "charisma", label: "Харизма", icon: "😎", min: 0 },
          ].map(({ key, label, icon, min }) => (
            <div key={key} className="setup-row">
              <div className="setup-label">
                <span className="setup-icon">{icon}</span>
                <span>{label}</span>
              </div>
              <div className="setup-controls">
                <button
                  type="button"
                  className="adjust-button"
                  onClick={() => handleAdjustSetupStat(key, -1)}
                  disabled={setupStats[key] <= min}
                >
                  −
                </button>
                <span className="setup-value">{setupStats[key]}</span>
                <button
                  type="button"
                  className="adjust-button"
                  onClick={() => handleAdjustSetupStat(key, 1)}
                  disabled={remainingSetupPoints <= 0}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <Button
            label="Подтвердить персонажа"
            size="m"
            onClick={handleConfirmCharacterSetup}
            disabled={!isSetupComplete}
          />
          {!isSetupComplete && (
            <p className="decision-warning">
              Нужно распределить все очки. Здоровье минимум 3, остальные минимум 0.
            </p>
          )}
        </div>
      </>
    )}
  </div>
);

export default SetupPanel;