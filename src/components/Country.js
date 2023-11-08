import React, { useContext } from "react";
import styles from "./Country.module.css";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Country({ country, name, population }) {
  const { isDark } = useContext(GlobalContext);

  return (
    <div
      className={`${styles.country} ${
        isDark ? styles.itemDark : styles.idemLight
      }`}
    >
      <img
        src={country.flags.png}
        className={styles.countryImage}
        alt="country"
      ></img>
      <div className={styles.countryText}>
        <h3 className={styles.countryHeading}>
          {country.name.common ? country.name.common : name}
        </h3>
        <p>
          Population: <span>{population.toLocaleString()}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>
        </p>
      </div>
    </div>
  );
}
