import React, { useState } from 'react';

const SearchForm = ({ onCityChange }) => {
  const [inputValue, setInputValue] = useState("Getafe");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onCityChange(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter cityMet"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchForm;
