import React, { useEffect, useState } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await res.json();
    setCountries(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);
  //   fetchCountries();
  return (
    <main>
      {countries.map((country) => (
        <Country country={country} />
      ))}
    </main>
  );
}
