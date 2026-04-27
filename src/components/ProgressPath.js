"use client";

import "./ProgressPath.css";
import { START_POSITION, FINISH_POSITION } from "../constants/gameConfig";

const ProgressPath = ({ position = START_POSITION, actionCells = [], hideEvents = false }) => {
  const safePosition = Math.min(Math.max(position, START_POSITION), FINISH_POSITION);
  const progressPercent = ((safePosition - START_POSITION) / (FINISH_POSITION - START_POSITION)) * 100;
  const actionMarkers = actionCells.map((cell) => ({
    cell,
    percent: ((cell - START_POSITION) / (FINISH_POSITION - START_POSITION)) * 100,
  }));

  return (
    <aside className="progress-path" aria-label="Путь игрока от старта к финишу">
      <div className="path-header">
        <span className="path-number">{FINISH_POSITION}</span>
        <span className="path-text">Финиш</span>
      </div>

      <div className="path-track-wrap">
        <span className="path-dot path-dot_top" />
        <div className="path-track" />
        {!hideEvents && actionMarkers.map((marker) => (
          <span
            key={marker.cell}
            className="path-action-cell"
            style={{ bottom: `${marker.percent}%` }}
            aria-label={`Клетка действия ${marker.cell}`}
            title={`Клетка действия ${marker.cell}`}
          />
        ))}
        <div className="player-token" style={{ bottom: `${progressPercent}%` }} aria-label={`Позиция игрока: ${safePosition}`}>
          🧙
        </div>
        <span className="path-dot path-dot_bottom" />
      </div>

      <div className="path-header path-header_bottom">
        <span className="path-number">{START_POSITION}</span>
        <span className="path-text">Старт</span>
      </div>
    </aside>
  );
};

export default ProgressPath;
