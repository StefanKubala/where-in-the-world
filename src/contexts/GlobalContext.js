import React, { useEffect, useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [region, setRegion] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all countries on homepage
  useEffect(function () {
    async function fetchData() {
      const res = await fetch(`https://restcountries.com/v2/all`);
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  //Fetch countries by search name
  useEffect(
    function () {
      if (search && search.length >= 3) {
        setIsLoading(true);
        async function fetchData() {
          const res = await fetch(
            `https://restcountries.com/v2/name/${search}`
          );
          if (!res.ok) {
            setIsLoading(false);
            setError("Invalid search value");
            return;
          }
          const data = await res.json();
          setError("");
          setCountries(data);
          setIsLoading(false);
        }
        fetchData();
      } else if (search === "") {
        async function fetchData() {
          setIsLoading(true);
          setError("");
          const res = await fetch(`https://restcountries.com/v2/all`);
          const data = await res.json();
          setCountries(data);
          setIsLoading(false);
        }
        fetchData();
      } else {
        setCountries([]);
      }
    },
    [search]
  );
  //Fetch countries by regions
  useEffect(
    function () {
      setIsLoading(true);
      if (region !== "all") {
        async function fetchData() {
          const res = await fetch(
            `https://restcountries.com/v2/region/${region}`
          );
          const data = await res.json();
          setCountries(data);
          setOpenFilter(false);
          setIsLoading(false);
        }
        fetchData();
      } else if (region === "all") {
        async function fetchData() {
          const res = await fetch("https://restcountries.com/v2/all");
          const data = await res.json();
          setCountries(data);
          setOpenFilter(false);
          setIsLoading(false);
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
        isLoading,
        error,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
