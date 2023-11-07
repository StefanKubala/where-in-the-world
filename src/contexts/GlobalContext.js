import React, { useEffect, useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [region, setRegion] = useState("all");

  // Fetch all countries on homepage
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await res.json();
      setCountries(data);
    }
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isDark,
        setIsDark,
        countries,
        search,
        setSearch,
        openFilter,
        setOpenFilter,
        region,
        setRegion,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
