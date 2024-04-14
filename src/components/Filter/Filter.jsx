import React from 'react';
import { ReactComponent as Search } from '../Icons/Search.svg';

export const Filter = ({ filter, handleChange }) => {
  return (
    <div className="filter">
      <label htmlFor="filter">Find contacts by name:</label>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
      <Search />
    </div>
  );
};
