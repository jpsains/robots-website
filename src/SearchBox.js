import React, { Fragment } from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <Fragment>
      <div className='pa2'>
        <input
          className='pa3 ba b--green bg-lightest-blue'
          type='search'
          placeholder='search robots'
          value={searchfield}
          onChange={searchChange}
        />
      </div>
    </Fragment>
  );
};

export default SearchBox;
