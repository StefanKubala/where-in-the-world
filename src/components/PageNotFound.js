import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className={styles.notFound}>
        <p>
          Page not found.{" "}
          <button onClick={() => navigate("/")}>Return on homepage</button>{" "}
        </p>
      </div>
    </>
  );
}
