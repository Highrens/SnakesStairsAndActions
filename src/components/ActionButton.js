// src/components/ActionButton.js
"use client"
import { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { actions } from '@/app/constants/actions';
import './ActionButton.css';  // Импорт CSS-файла

const ActionButton = () => {
  const [currentAction, setCurrentAction] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getRandomAction = () => {
    const randomIndex = Math.floor(Math.random() * actions.actions.length);
    return actions.actions[randomIndex].description;
  };

  const handleClick = () => {
    setIsLoading(true);
    let interval;

    interval = setInterval(() => {
      setCurrentAction(getRandomAction());
    }, 1);

    setTimeout(() => {
      clearInterval(interval);
      setCurrentAction(getRandomAction());
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Box className="action-container">
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClick}
        className="action-button"
      >
        Действие!
      </Button>
      <Typography
        variant="h6"
        className={isLoading ? 'loading-text' : 'final-text'}
      >
        {isLoading ? getRandomAction() : currentAction}
      </Typography>
    </Box>
  );
};

export default ActionButton;
