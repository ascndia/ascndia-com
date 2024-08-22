import React from 'react';

import filters from '../constant/filter';
import FilterCard from './FilterCard';

function Filter() {
  return (
    <div className="flex justify-start flex-wrap flex-1 gap-2">
      {filters.map((filter, index) => (
        <FilterCard {...filter} key={index} />
      ))}
    </div>
  );
}

export default Filter;
