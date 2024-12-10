import styles from "./page.module.css";
import ActionButton from "../components/ActionButton.js";

export default function Home() {
  return (
    <div className={styles.page}>
      <ActionButton />
    </div>
  );
}
