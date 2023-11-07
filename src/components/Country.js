import React, { useContext } from "react";
import styles from "./Country.module.css";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Country({ country }) {
  const { isDark } = useContext(GlobalContext);

  // console.log(country);
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
        <h3 className={styles.countryHeading}>{country.name.common}</h3>
        <p>
          Population: <span>{country.population.toLocaleString()}</span>
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
