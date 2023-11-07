import React, { useContext, useEffect, useState } from "react";
import Country from "./Country";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Countries() {
  const { countries } = useContext(GlobalContext);
  return (
    <main>
      {countries.map((country) => (
        <Country country={country} />
      ))}
    </main>
  );
}
