"use client";

import "./ProgressPath.css";

const MIN_CELL = 1;
const MAX_CELL = 49;

const ProgressPath = ({ position = MIN_CELL }) => {
  const safePosition = Math.min(Math.max(position, MIN_CELL), MAX_CELL);
  const progressPercent = ((safePosition - MIN_CELL) / (MAX_CELL - MIN_CELL)) * 100;

  return (
    <aside className="progress-path" aria-label="Путь игрока от старта к финишу">
      <div className="path-header">
        <span className="path-number">49</span>
        <span className="path-text">Финиш</span>
      </div>

      <div className="path-track-wrap">
        <span className="path-dot path-dot_top" />
        <div className="path-track" />
        <div className="player-token" style={{ bottom: `${progressPercent}%` }} aria-label={`Позиция игрока: ${safePosition}`}>
          🧙
        </div>
        <span className="path-dot path-dot_bottom" />
      </div>

      <div className="path-header path-header_bottom">
        <span className="path-number">1</span>
        <span className="path-text">Старт</span>
      </div>
    </aside>
  );
};

export default ProgressPath;
