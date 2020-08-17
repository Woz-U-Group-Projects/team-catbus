import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input className='pa3 ba b--green bg-lightest-blue'
        type='search' placeholder='Search Game'
        onChange={searchChange} />
    </div >
  );
}

export default SearchBox;


/* <input ref={this.taskName} />
  <button type="button" className="btn btn-primary" onClick={this.addTask}>add</button> */