import React, { useState } from "react";

export const AddWord = ({ onNewWord }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length <= 0) return;
    onNewWord(inputValue);
  };

  return (
    <form className="form-main-flex animate__animated animate__fadeIn" onSubmit={handleSubmit}>
      <h1>Try searching a word</h1>
      <div className="word-searching">
        <input
          className="input-word"
          type="text"
          placeholder="What word are you looking for?"
          value={inputValue}
          onChange={onInputChange}
        />
        <i className="fa-solid fa-magnifying-glass" onClick={handleSubmit}></i>
      </div>
    </form>
  );
};
