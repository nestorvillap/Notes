import React, { useState } from 'react';
import '../styles/SearchComponent.css';

const SearchComponent = ({ filtrar }) => {

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    filtrar(query);
    closeSearch();
  };

  return(
    <>
      <button className='iconos' onClick={handleSearchClick}>Buscar 🔍</button>
    { isSearchOpen ? 
      <div className="search-overlay">
        <div className="search-container">
          <input type="text" value={query} onChange={handleInputChange} />
          <button onClick={handleSearch}>Buscar</button>
        </div>
      </div>
      : 
      null
    }
    </>
  );
};

export default SearchComponent;
