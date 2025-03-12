"use client";
import React, { useState } from "react";
import "./Search.css"; // Стили
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";

const possibleSearchResult = [
  { name: "Вы нашли: Меч 🗡", chance: 5 },
  { name: "Вы нашли: Монету 🪙", chance: 20 },
  { name: "Вы нашли: Стрелу 🏹", chance: 15 },
  { name: "Вы нашли: Зелье лечения ❤️", chance: 15 },
  { name: "Вы не ничего не нашли", chance: 30 },
];

const Search = () => {
  const [searchResult, setSearchResult] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const HandleSearchClick = () => {
    setIsSearching(true);
    setSearchResult("Поиск 🔍");
    setTimeout(() => {
      const totalChance = possibleSearchResult.reduce(
        (sum, item) => sum + item.chance,
        0
      );
      const random = Math.random() * totalChance;
      let cumulativeChance = 0;

      for (const item of possibleSearchResult) {
        cumulativeChance += item.chance;

        if (random <= cumulativeChance) {
            setIsSearching(false);
          setSearchResult(item.name);
          return;
        }
      }
    }, 2000);
  };

  return (
    <div className="text-container final-text">
      <Button label="Поиск" onClick={HandleSearchClick} />
      {isSearching ? <ProgressBar duration={1900} onComplete /> : <></>}
      
      {searchResult}
    </div>
  );
};

export default Search;
