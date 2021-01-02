import React from 'react'

const SearchBar = ({ showSearch, setVisibility, searchQuery, setSearchQuery }) => {

  return (
    <div id="searchModal" className={`modal ${showSearch ? "modal-active" : ""}`}>
        <div className="modal-content">
            <form role="search" method="get" className="search-form" action="/search" autoComplete="off">
            <span className="screen-reader-text">Search for:</span>
            
            <input
              className="search-input"
              onInput={ (e) => setSearchQuery( e.target.value ), console.log('yesah') }
              type="text"
              id="header-search"
              placeholder="Search..."
              name="s"
            />
            {/* <button type="submit">Search</button> */}
            </form>
            <div onClick={ () => setVisibility(0) } className="close">&times;</div>
        </div>
    </div>
  )
}

export default SearchBar