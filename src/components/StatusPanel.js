import Button from "./Button/Button";

const StatusPanel = ({ gameStatus, generateRandomSeed, setSeed, lossRollInput, setLossRollInput, handleDeathRollConfirm, lossFeedback }) => {
  if (gameStatus === "win") {
    return (
      <div className="status-panel fade-in">
        <h2>Победа!</h2>
        <p>Ты добрался до финиша.</p>
        <Button
          label="Новая игра с новым SEED"
          size="m"
          onClick={() => setSeed(generateRandomSeed())}
        />
      </div>
    );
  }

  if (gameStatus === "lost") {
    return (
      <div className="status-panel fade-in">
        <h2>Поражение</h2>
        <p>Здоровье достигло 0. Воскресни броском D20.</p>
        <div className="roll-check-row">
          <input
            type="number"
            className="roll-input"
            min={1}
            max={20}
            value={lossRollInput}
            onChange={(event) => setLossRollInput(event.target.value)}
            placeholder="1-20"
          />
          <Button
            label="Проверить"
            size="m"
            onClick={handleDeathRollConfirm}
            disabled={!Number.isInteger(Number(lossRollInput)) || Number(lossRollInput) < 1 || Number(lossRollInput) > 20}
          />
        </div>
        {lossFeedback && <p className="decision-warning">{lossFeedback}</p>}
      </div>
    );
  }

  return null;
};

export default StatusPanel;