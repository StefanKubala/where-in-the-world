import React, { useContext } from "react";
import Header from "./Header";
import styles from "./Homepage.module.css";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Homepage() {
  const {
    search,
    setSearch,
    isDark,
    setOpenFilter,
    openFilter,
    // region,
    setRegion,
  } = useContext(GlobalContext);
  return (
    <>
      <Header />
      <main className={`${isDark ? styles.mainDark : styles.mainLight}`}>
        <div className={styles.container}>
          <div className={styles.search}>
            <input
              className={`${styles.input} ${
                isDark ? styles.inputDark : styles.inputLight
              }`}
              value={search}
              type="text"
              placeholder="Search for a country..."
              onChange={(e) => setSearch(e.target.value)}
            ></input>

            <div
              className={`${styles.filter} ${
                isDark ? styles.filterDark : styles.filterLight
              }`}
            >
              <button
                aria-label="Filter by Region"
                onClick={() => setOpenFilter(!openFilter)}
              >
                <span>Filter by Region</span>
              </button>
              {openFilter && (
                <ul>
                  <li
                    aria-label="Filter by All"
                    role="button"
                    tabIndex="0"
                    onClick={() => setRegion("all")}
                  >
                    All
                  </li>
                  <li
                    aria-label="Filter by Africa"
                    role="button"
                    tabIndex="0"
                    onClick={() => setRegion("africa")}
                  >
                    Africa
                  </li>
                  <li
                    aria-label="Filter by Americas"
                    role="button"
                    tabIndex="0"
                    onClick={() => setRegion("americas")}
                  >
                    Americas
                  </li>
                  <li
                    aria-label="Filter by Asia"
                    role="button"
                    tabIndex="0"
                    onClick={() => setRegion("asia")}
                  >
                    Asia
                  </li>
                  <li
                    aria-label="Filter by Europe"
                    role="button"
                    tabIndex="0"
                    onClick={() => setRegion("europe")}
                  >
                    Europe
                  </li>
                  <li
                    aria-label="Filter by Oceania"
                    role="button"
                    tabIndex="0"
                    onClick={() => setRegion("oceania")}
                  >
                    Oceania
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* <Countries /> */}
    </>
  );
}
