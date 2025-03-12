"use client";
import React from "react";
import "./Header.css"; // Стили
import Button from "../Button/Button";

const Header = ({gameMode, setGameMode}) => {
  const handleBackButtonClick = () => { setGameMode("")}

  return (
    <div className="header-container">
      <Button label="⬅️" onClick={handleBackButtonClick} size="icon" />
      <Button label={gameMode} onClick={handleBackButtonClick} size="icon" />
    </div>
  );
};

export default Header;
