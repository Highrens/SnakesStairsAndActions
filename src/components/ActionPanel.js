import { useMemo } from "react";
import Button from "./Button/Button";
import { getDecisionState } from "../utils/gameUtils";

const ActionPanel = ({
  isLoading,
  result,
  currentAction,
  showImage,
  withBasePath,
  pendingDecision,
  pendingRoll,
  rollInputValue,
  setRollInputValue,
  handleDecision,
  handleRollCheckConfirm,
  playerStats,
}) => {
  const decisionState = useMemo(
    () => getDecisionState(pendingDecision, playerStats),
    [pendingDecision, playerStats]
  );
  const isRollInputValid = useMemo(() => {
    if (!pendingRoll) return false;
    const value = Number(rollInputValue);
    return Number.isInteger(value) && value >= 1 && value <= pendingRoll.diceSides;
  }, [pendingRoll, rollInputValue]);

  return (
    <div className={`text-container ${isLoading ? "text-container_loading" : ""}`}>
      <p className={`text ${isLoading ? "loading-text" : "final-text"}`}>
        {isLoading
          ? "..."
          : result ||
          currentAction?.description ||
          "Нажми, чтобы получить действие"}
      </p>
      {currentAction && showImage && currentAction.image && (
        <img
          src={withBasePath(currentAction.image)}
          alt="event illustration"
          className="action-image"
        />
      )}
      {pendingDecision && !isLoading && (
        <div className="decision-panel fade-in">
          <p className="decision-text">
            {pendingDecision.prompt || "Подтвердить действие?"}
          </p>
          <div className="decision-buttons">
            <Button
              label={pendingDecision.confirmLabel || "Да"}
              size="m"
              onClick={() => handleDecision(true)}
              disabled={!decisionState.canConfirm}
            />
            <Button
              label={pendingDecision.cancelLabel || "Нет"}
              size="m"
              onClick={() => handleDecision(false)}
            />
          </div>
          {!decisionState.canConfirm && (
            <p className="decision-warning">{decisionState.requirementMessage}</p>
          )}
        </div>
      )}
      {pendingRoll && !isLoading && (
        <div className="decision-panel fade-in">
          <p className="decision-text">
            {pendingRoll.prompt ||
              `Брось D${pendingRoll.diceSides} и введи выпавшее число`}
          </p>
          <div className="roll-check-row">
            <input
              type="number"
              className="roll-input"
              min={1}
              max={pendingRoll.diceSides}
              value={rollInputValue}
              onChange={(event) => setRollInputValue(event.target.value)}
              placeholder={`1-${pendingRoll.diceSides}`}
            />
            <Button
              label={pendingRoll.confirmLabel || "Проверить"}
              size="m"
              onClick={handleRollCheckConfirm}
              disabled={!isRollInputValid}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionPanel;