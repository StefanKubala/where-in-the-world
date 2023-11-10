import React, { useEffect, useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [region, setRegion] = useState("all");

  // Fetch all countries on homepage
  useEffect(function () {
    async function fetchData() {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await res.json();
      setCountries(data);
      // console.log(data);
    }
    fetchData();
  }, []);

  //Fetch countries by search name
  useEffect(
    function () {
      if (search && search.length >= 3) {
        async function fetchData() {
          const res = await fetch(
            `https://restcountries.com/v2/name/${search}`
          );
          const data = await res.json();
          setCountries(data);
        }
        fetchData();
      } else if (search === "") {
        async function fetchData() {
          const res = await fetch(`https://restcountries.com/v3.1/all`);
          const data = await res.json();
          setCountries(data);
          // console.log(data);
        }
        fetchData();
      }
    },
    [search]
  );
  //Fetch countries by regions
  useEffect(
    function () {
      if (region !== "all") {
        async function fetchData() {
          const res = await fetch(
            `https://restcountries.com/v2/region/${region}`
          );
          const data = await res.json();
          setCountries(data);
          setOpenFilter(false);
          // console.log(data);
        }
        fetchData();
      } else if (region === "all") {
        async function fetchData() {
          const res = await fetch("https://restcountries.com/v2/all");
          const data = await res.json();
          setCountries(data);
          setOpenFilter(false);
          // console.log(data);
        }
        fetchData();
      }
    },
    [region]
  );

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
