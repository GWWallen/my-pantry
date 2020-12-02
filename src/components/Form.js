import React from 'react';

const Form = ({ getSearch, search, updateSearch }) => {
  return (
    <form onSubmit={getSearch} className='search-form'>
      <input
        className='search-bar'
        type='text'
        value={search}
        onChange={updateSearch}
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  );
};

export default Form;
