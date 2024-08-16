
import React, { useState } from 'react';

function Filter({ setFilters }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const applyFilters = () => {
    setFilters(selectedFilters);
  };

  return (
    <div className="filter-bar">
      <h4 id= "header4">Filter by Class</h4>
      {["Support", "Medic", "Assault", "Defender", "Captain", "Witch"].map((filter) => (
        <label key={filter}>
          <input
            type="checkbox"
            value={filter}
            onChange={() => toggleFilter(filter)}
            checked={selectedFilters.includes(filter)}
          />
          {filter}
        </label>
      ))}
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
}

export default Filter;
