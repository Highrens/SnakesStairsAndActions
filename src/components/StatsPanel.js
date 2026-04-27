const StatsPanel = ({ playerStats }) => (
  <div className="stats-container fade-in">
    <p className="stats-title">Характеристики игрока</p>
    <p className="stats-row">❤️ Здоровье: {playerStats.health}</p>
    <p className="stats-row">🤸 Ловкость: {playerStats.dexterity}</p>
    <p className="stats-row">💪 Сила: {playerStats.strength}</p>
    <p className="stats-row">😎 Харизма: {playerStats.charisma}</p>
    <p className="stats-row">🪙 Золото: {playerStats.gold}</p>
    <p className="stats-row">☠️ Проклятия: {playerStats.curses}</p>
  </div>
);

export default StatsPanel;