"use client";
import { useState } from "react";
import "./page.css";

import ActionButton from "../components/ActionButton/ActionButton.js";
import Search from "@/components/Search/Search.js";
import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import MazeGame from "@/components/Maze/Maze";
import CharacterCreator from "@/components/CharacterCreator/CharacterCreator";

export default function Home() {
  const [gameMode, setGameMode] = useState("");
  return (
    <div className="page">
      {/* <div className="action-container">
        {
          (gameMode == "" ? (
            <>
              <Button label="RPG" onClick={() => {setGameMode("RPG")}}/>
              <Button label="Chaos" onClick={() => {setGameMode("actions")}}/>
            </>
          ) : (
            <>
              <Header gameMode={gameMode} setGameMode={setGameMode}/>
              {gameMode == "RPG" ? ( <Search /> ) : ( <></> )}
              <ActionButton gameMode={gameMode} />
            </>
          ))
        }
      </div> */}
      <CharacterCreator />
    </div>
  );
}
