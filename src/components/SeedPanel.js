import Button from "./Button/Button";
import Checkbox from "./Checkbox/Checkbox";

const SeedPanel = ({ seed, setSeed, generateRandomSeed, actionCells, shareUrl, hideEvents, setHideEvents }) => (
  <div className="seed-tab-panel fade-in">
    <label className="seed-label" htmlFor="seed-input">
      SEED (8 цифр)
    </label>
    <div className="seed-row">
      <input
        id="seed-input"
        className="seed-input"
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength={8}
        value={seed}
        onChange={(event) => {
          const value = event.target.value.replace(/\D/g, "").slice(0, 8);
          setSeed(value.padStart(8, "0"));
        }}
      />
      <Button
        label="Новый SEED"
        size="s"
        onClick={() => setSeed(generateRandomSeed())}
      />
    </div>
    <p className="seed-description">
      Клеток действия: {actionCells.length} — {actionCells.join(", ")}
    </p>
    <div className="share-row">
      <input
        className="share-url"
        type="text"
        readOnly
        value={shareUrl}
        aria-label="Ссылка для общего доступа"
      />
      <Button
        label="Копировать ссылку"
        size="s"
        onClick={() => navigator.clipboard.writeText(shareUrl)}
      />
    </div>
    <div className="settings-row">
      <Checkbox
        label="Скрыть события"
        checked={hideEvents}
        onChange={(e) => setHideEvents(e.target.checked)}
      />
    </div>
    <div className="qr-row">
      <img
        className="qr-code"
        src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
          shareUrl
        )}`}
        alt="QR код для ссылки"
      />
    </div>
  </div>
);

export default SeedPanel;