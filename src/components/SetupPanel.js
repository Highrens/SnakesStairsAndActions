import Button from "./Button/Button";

const SetupPanel = ({
  remainingSetupPoints,
  setupStats,
  handleAdjustSetupStat,
  handleConfirmCharacterSetup,
  isSetupComplete,
  maxCharacterPoints,
}) => (
  <div className="setup-panel fade-in">
    <p className="stats-title">Настройка персонажа</p>
    <p className="points-remaining">Осталось очков: {remainingSetupPoints}</p>
    <div className="setup-rows">
      {[
        { key: "health", label: "Здоровье", icon: "❤️" },
        { key: "dexterity", label: "Ловкость", icon: "🤸" },
        { key: "strength", label: "Сила", icon: "💪" },
        { key: "charisma", label: "Харизма", icon: "😎" },
      ].map(({ key, label, icon }) => (
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
              disabled={setupStats[key] <= 1}
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
      <p className="setup-note">
        Распределите ровно {maxCharacterPoints} очков между характеристиками.
      </p>
      <Button
        label="Подтвердить персонажа"
        size="m"
        onClick={handleConfirmCharacterSetup}
        disabled={!isSetupComplete}
      />
      {!isSetupComplete && (
        <p className="decision-warning">
          Нужно распределить все очки, минимум 1 на каждую характеристику.
        </p>
      )}
    </div>
  </div>
);

export default SetupPanel;