import React from "react";

export default function Country({ country }) {
  // console.log(country);
  return <h1>{country.name.common}</h1>;
}
