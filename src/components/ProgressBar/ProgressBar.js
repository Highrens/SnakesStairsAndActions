import React, { useState, useEffect } from 'react';
import "./ProgressBar.css"; // Стили

const ProgressBar = ({ duration, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    const startProgress = () => {
      const step = 100 / (duration / 100); // Вычисляем шаг прогресса
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev + step >= 100) {
            clearInterval(interval);
            // onComplete(); // Вызываем коллбек после завершения
            return 100;
          }
          return prev + step;
        });
      }, 100);
    };

    startProgress();

    return () => clearInterval(interval); // Чистим интервал при размонтировании
  }, [duration, onComplete]);

  return (
    <div className="progress-bar-background">
      <div className="progress-bar"
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
