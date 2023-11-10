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
  const [currencies, setCurrencies] = useState([]);
  const [borders, setBorderd] = useState([]);
  const [languages, setLanguages] = useState([]);

  // Fetch data on component mount
  useEffect(function () {
    async function fetchData() {
      const res = await fetch(`https://restcountries.com/v2/alpha/${name}`);
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);
  console.log(data);
  useEffect(function () {});
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
            onClick={() => navigate("/")}
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
                <p>
                  <strong>Border Countries:</strong> {borders}
                </p>
              </div>
              <div className={styles.rightText}>
                <p>
                  <strong>Top Level Domain:</strong> {data.topLevelDomain}
                </p>
                <p>
                  <strong>Currencies:</strong>{" "}
                </p>
                <p>
                  <strong>Languages:</strong>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
