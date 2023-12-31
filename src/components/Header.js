import React, { useContext } from "react";
import styles from "./Header.module.css";
import { GlobalContext } from "../contexts/GlobalContext";
import { ReactComponent as MoonLight } from "../assets/moon-light.svg";
import { ReactComponent as MoonDark } from "../assets/moon-dark.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { isDark, setIsDark } = useContext(GlobalContext);
  return (
    <header className={isDark ? styles.headerDark : styles.headerLight}>
      <div className={styles.container}>
        <div onClick={() => navigate("/")}>
          <h1 className={styles.mainHeading}>Where in the world?</h1>
        </div>
        <button className={styles.headerBtn} onClick={() => setIsDark(!isDark)}>
          {isDark ? (
            <MoonDark className={styles.moon} />
          ) : (
            <MoonLight className={styles.moon} />
          )}{" "}
          Dark Mode
        </button>
      </div>
    </header>
  );
}
