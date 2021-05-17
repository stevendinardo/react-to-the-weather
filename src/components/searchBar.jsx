import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <header className="search-area">
        <input
          type="text"
          className="search-box"
          placeholder='Enter a Canadian City...'
          size="16"
          id="city"
        />
      </header>
    );
  }
}

export default SearchBar;