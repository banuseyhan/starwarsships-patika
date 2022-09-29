import React, { useState } from "react";
import "./SeacrhForm.css";

export const SearchForm = ({ setQuery }) => {
  const [searchValue, setSearchValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(searchValue);
  };

  return (
    <form className="searchform" onSubmit={submitHandler}>
      <input
        type="search"
        className="searchform__input"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="searchform__btn">Search</button>
    </form>
  );
};
