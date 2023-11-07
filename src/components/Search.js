import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Search() {
  const { search, setSearch } = useContext(GlobalContext);
  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)}></input>

      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  );
}
