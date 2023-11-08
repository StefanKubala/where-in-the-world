import React, { useContext } from "react";
import Country from "./Country";
import { GlobalContext } from "../contexts/GlobalContext";
import styles from "./Countries.module.css";

export default function Countries() {
  const { countries } = useContext(GlobalContext);
  return (
    <div className={styles.countries}>
      {countries?.map((country) => (
        <Country
          name={country.name}
          country={country}
          population={country.population}
        />
      ))}
    </div>
  );
}
