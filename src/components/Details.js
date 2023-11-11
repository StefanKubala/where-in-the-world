import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import Header from "./Header";
import styles from "./Details.module.css";

export default function Details() {
  const navigate = useNavigate();
  const { isDark } = useContext(GlobalContext);
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState("");
  const [borders, setBorders] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);

  const uniqueBorders = [...new Set(borders.map(JSON.stringify))].map(
    JSON.parse
  );
  console.log(name);
  // Fetch data on component mount
  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch(`https://restcountries.com/v2/alpha/${name}`);
        const json = await res.json();
        setData(json);
      }
      fetchData();
    },
    [name]
  );
  //   console.log(borders);

  //   useEffect(async () => {
  //     if (updateData != "") {
  //       setCurrencies([]);
  //       setBorders([]);
  //       setUpdateData("");
  //       const response = await fetch(
  //         `https://restcountries.com/v2/alpha/${updateData}`
  //       );
  //       const json = await response.json();
  //       !json.status && setData(json);
  //       navigate(`/${updateData}`);
  //     }
  //   }, [updateData]);

  useEffect(
    function () {
      if (updatedData !== "") {
        async function updateDataFunc() {
          setCurrencies([]);
          setBorders([]);
          setUpdatedData("");
          const response = await fetch(
            `https://restcountries.com/v2/alpha/${updatedData}`
          );
          const json = await response.json();
          console.log(json);
          !json.status && setData(json);
          navigate(`/${updatedData}`);
        }
        updateDataFunc();
      }
    },
    [updatedData, navigate]
  );

  //Change page title
  useEffect(
    function () {
      if (!data.name) return;
      document.title = `Country | ${data.name}`;

      return function () {
        document.title = "Where in the world";
      };
    },
    [data.name]
  );

  // Define languages, currencies and bordeer countries
  useEffect(
    function () {
      async function addData() {
        data !== "" &&
          data.currencies !== undefined &&
          data.currencies.map((currency) => {
            setCurrencies(() => [currency.name]);
          });

        data !== "" &&
          data.languages !== undefined &&
          data.languages.map((language) => {
            setLanguages(() => [language.name]);
          });
        data !== "" &&
          data.borders !== undefined &&
          data.borders.map(async (border) => {
            const response = await fetch(
              `https://restcountries.com/v2/alpha/${border}`
            );
            const json = await response.json();
            // console.log(json);
            !json.status && setBorders((oldArray) => [...oldArray, json]);
          });
      }
      addData();
    },
    [data]
  );

  return (
    <>
      <Header />
      <main
        className={`${styles.main} ${
          isDark ? styles.mainDark : styles.mainLight
        } `}
      >
        <div className={styles.btnContainer}>
          <button
            className={`${styles.detailsBtn} ${
              isDark ? styles.btnDark : styles.btnLight
            }`}
            onClick={() => navigate(-1)}
          >
            &larr; Back
          </button>
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.imageContainer}>
            <img
              className={styles.detailsImg}
              src={data.flag}
              alt="country flag"
            ></img>
          </div>
          <div
            className={`${styles.textContainer} ${
              isDark ? styles.infosDark : styles.infosLight
            }`}
          >
            <h2 className={styles.detailsHeading}>{data.name}</h2>
            <div className={styles.flexText}>
              <div className={styles.leftText}>
                <p>
                  <strong> Native Name:</strong> {data.nativeName}
                </p>
                <p>
                  <strong>Population:</strong>{" "}
                  {data.population === undefined
                    ? ""
                    : data.population.toLocaleString()}
                </p>
                <p>
                  <strong>Region:</strong> {data.region}
                </p>
                <p>
                  <strong>Sub Region:</strong> {data.subregion}
                </p>
                <p>
                  <strong>Capital:</strong> {data.capital}
                </p>
              </div>
              <div className={styles.rightText}>
                <p>
                  <strong>Top Level Domain:</strong> {data.topLevelDomain}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {currencies.join(", ")}
                </p>
                <p>
                  <strong>Languages: </strong>
                  {languages.join(", ")}
                </p>
              </div>
            </div>
            <div>
              <p className={styles.borders}>
                <strong>Border Countries:</strong>
                {uniqueBorders.map((border) => (
                  <button
                    aria-label={`Details about ${border.name}`}
                    key={border.alpha2Code}
                    className={`${styles.borderBtn} ${
                      isDark ? styles.btnDark : styles.btnLight
                    }`}
                    onClick={() => setUpdatedData(border.alpha2Code)}
                  >
                    {border.name}
                  </button>
                ))}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
