import React, { useContext } from "react";
import styles from "./Header.module.css";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Header() {
  const { isDark, setIsDark } = useContext(GlobalContext);
  return (
    <header className={isDark ? styles.headerDark : styles.headerLight}>
      <div className={styles.container}>
        <h1 className={styles.mainHeading}>Where in the world?</h1>
        <button className={styles.headerBtn} onClick={() => setIsDark(!isDark)}>
          Dark Mode
        </button>
      </div>
    </header>
  );
}
