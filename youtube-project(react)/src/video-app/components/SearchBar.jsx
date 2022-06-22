import React from "react";
import { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState();

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmitted = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onSubmitted} action="" className="ui form">
        <div className="field">
          <label htmlFor="">Video Search</label>
          <input type="text" onChange={onInputChange} value={term} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
