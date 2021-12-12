import React from "react";

function Search({search, setSearch}) {

  const handleSearch = (event) => {
    // console.log(event.target.value)
    setSearch(event.target.value)
  }

  return (
    <div className="filter">
      <input id="search-bar" type="text" placeholder="Search Notes"
      onChange={handleSearch}
      value={search}
      />
    </div>
  );
}

export default Search;
