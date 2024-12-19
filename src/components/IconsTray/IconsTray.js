"use client";
import React, { useState } from "react";
import "./IconsTray.css";
import Button from "../Button/Button";

const IconTray = ({ IconList, setIcons }) => {
  const [text, setText] = useState("");
  const [currentAction, setCurrentAction] = useState({});

  const handleIconClick = (action) => {
    if (action.description === text) {
      setText("");
    } else {
      setText(action.description);
      setCurrentAction(action);
    }
  };

  const handleDeleteButton = () => {
    setIcons(IconList.filter((action) => action.id != currentAction.id));
    setText("");
    setCurrentAction({});
  };

  return (
    <>
      <div className="IconTray">
        {IconList.map((action) => (
          <Button
            label={action.icon}
            key={action.id}
            onClick={() => handleIconClick(action)}
            size="icon"
          />
        ))}
      </div>
      {text == "" ? (
        <></>
      ) : (
        <div className="text-container final-text">
          {text}
          <Button
            label="Удалить"
            onClick={handleDeleteButton}
            size="m"
          />
        </div>
      )}
    </>
  );
};

export default IconTray;
