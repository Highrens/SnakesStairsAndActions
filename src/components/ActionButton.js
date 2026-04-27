"use client";
import { useState, useCallback, useEffect, useMemo } from "react";
import { actions2 } from "@/constants/actions";
import { DEFAULT_DICE_CONFIG } from "@/constants/dice";
import "./ActionButton.css";
import Button from "./Button/Button";
import DiceRoller from "./DiceRoller";
import ProgressPath from "./ProgressPath";
import SetupPanel from "./SetupPanel";
import ActionPanel from "./ActionPanel";
import StatsPanel from "./StatsPanel";
import SeedPanel from "./SeedPanel";
import StatusPanel from "./StatusPanel";
import Checkbox from "./Checkbox/Checkbox";
import OptionsContainer from "./OptionsContainer";
import { useGameState } from "../hooks/useGameState";
import { useActions } from "../hooks/useActions";
import { normalizeActions, generateRandomSeed } from "../utils/gameUtils";
import { MAX_CHARACTER_POINTS, FINISH_POSITION } from "../constants/gameConfig";

const ActionButton = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const withBasePath = useCallback(
    (assetPath = "") => {
      if (!assetPath) return "";
      return assetPath.startsWith("/") ? `${basePath}${assetPath}` : `${basePath}/${assetPath}`;
    },
    [basePath]
  );

  const [seed, setSeed] = useState("00000000");
  const [activeTab, setActiveTab] = useState("action");
  const [hideEvents, setHideEvents] = useState(false);

  const normalizedActions = useMemo(() => normalizeActions(actions2.actions), []);

  const gameState = useGameState(normalizedActions, seed, setSeed);
  const actions = useActions(normalizedActions, seed, gameState.isCharacterCreated, gameState.applyOutcomeEffects, gameState.playerStats);

  const diceConfig = {
    ...DEFAULT_DICE_CONFIG,
    customOutcomes: [
      {
        value: 7,
        weight: 1,
        isEnabled: (context) => context.enableLuckySeven,
      },
    ],
    filter: (context) => (value) => {
      if (context.onlyEven && value % 2 !== 0) return false;
      if (context.onlyOdd && value % 2 === 0) return false;
      return true;
    },
  };

  const handleDiceRollComplete = useCallback(
    (value) => {
      if (gameState.gameStatus !== "playing" || !gameState.isCharacterCreated) return;
      gameState.movePlayerBy(value);
    },
    [gameState.gameStatus, gameState.movePlayerBy, gameState.isCharacterCreated]
  );

  useEffect(() => {
    if (gameState.gameStatus !== "playing") return;
    if (actions.isActionCell(gameState.playerPosition)) {
      actions.triggerActionCellEvent(gameState.playerPosition);
    }
  }, [gameState.playerPosition, actions.isActionCell, actions.triggerActionCellEvent, gameState.gameStatus]);

  return (
    <div
      className="action-container"
      style={{ "--action-bg-image": `url("${withBasePath("/background.png")}")` }}
    >
      <div className="action-main">

        {activeTab !== "seed" && gameState.gameStatus === "playing" && gameState.isCharacterCreated && (
          <>
            <div className="dice-and-stats">
              <div className="player-stats">
                <div>❤️ {gameState.displayedHealth}</div>
                <div>🪙 {gameState.playerStats.gold}</div>
                <div>☠️ {gameState.playerStats.curses}</div>
              </div>
            {/* <Button label="Действие!" onClick={actions.handleActionButtonClick} /> */}
              <DiceRoller
                config={diceConfig}
                context={gameState.diceContext}
                onRollComplete={handleDiceRollComplete}
              />
            </div>

          </>
        )}



        <p className="player-position">Позиция игрока: {gameState.playerPosition}/{FINISH_POSITION}</p>
        <div className="panel-tabs">
          <button
            type="button"
            className={`panel-tab ${activeTab === "action" ? "panel-tab_active" : ""}`}
            onClick={() => setActiveTab("action")}
          >
            Событие
          </button>
          <button
            type="button"
            className={`panel-tab ${activeTab === "stats" ? "panel-tab_active" : ""}`}
            onClick={() => setActiveTab("stats")}
          >
            Игрок
          </button>
          <button
            type="button"
            className={`panel-tab ${activeTab === "seed" ? "panel-tab_active" : ""}`}
            onClick={() => setActiveTab("seed")}
          >
            Игра
          </button>
        </div>


        {activeTab === "seed" ? (
          <SeedPanel
            seed={seed}
            setSeed={setSeed}
            generateRandomSeed={generateRandomSeed}
            actionCells={actions.actionCells}
            shareUrl={gameState.shareUrl}
            hideEvents={hideEvents}
            setHideEvents={setHideEvents}
          />
        ) : !gameState.isCharacterCreated ? (
          <SetupPanel
            remainingSetupPoints={gameState.remainingSetupPoints}
            setupStats={gameState.setupStats}
            handleAdjustSetupStat={gameState.handleAdjustSetupStat}
            handleConfirmCharacterSetup={gameState.handleConfirmCharacterSetup}
            isSetupComplete={gameState.isSetupComplete}
            rolledPoints={gameState.rolledPoints}
            setRolledPoints={gameState.setRolledPoints}
          />
        ) : gameState.gameStatus === "win" || gameState.gameStatus === "lost" ? (
          <StatusPanel
            gameStatus={gameState.gameStatus}
            generateRandomSeed={generateRandomSeed}
            setSeed={setSeed}
            lossRollInput={gameState.lossRollInput}
            setLossRollInput={gameState.setLossRollInput}
            handleDeathRollConfirm={gameState.handleDeathRollConfirm}
            lossFeedback={gameState.lossFeedback}
          />
        ) : activeTab === "action" ? (
          <ActionPanel
            isLoading={actions.isLoading}
            result={actions.result}
            currentAction={actions.currentAction}
            showImage={actions.showImage}
            withBasePath={withBasePath}
            pendingDecision={actions.pendingDecision}
            pendingRoll={actions.pendingRoll}
            rollInputValue={actions.rollInputValue}
            setRollInputValue={actions.setRollInputValue}
            handleDecision={actions.handleDecision}
            handleRollCheckConfirm={actions.handleRollCheckConfirm}
            playerStats={gameState.playerStats}
          />
        ) : (
          <StatsPanel playerStats={gameState.playerStats} />
        )}

        <OptionsContainer
          currentAction={actions.currentAction}
          result={actions.result}
          isLoading={actions.isLoading}
          handleOptionSelect={actions.handleOptionSelect}
        />
      </div>

      <ProgressPath position={gameState.playerPosition} actionCells={actions.actionCells} hideEvents={hideEvents} />
    </div>
  );
};

export default ActionButton;