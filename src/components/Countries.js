import React, { useContext, useEffect, useState } from "react";
import Country from "./Country";
import { GlobalContext } from "../contexts/GlobalContext";
import styles from "./Countries.module.css";

export default function Countries() {
  const { countries } = useContext(GlobalContext);
  return (
    <div className={styles.countries}>
      {countries.map((country) => (
        <Country country={country} />
      ))}
    </div>
  );
}
