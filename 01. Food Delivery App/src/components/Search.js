import { useState } from 'react';

const Search = (props) => {
  const [searchVal, setSearchVal] = useState('');
  function handleSearch(e) {
    setSearchVal(e.target.value);
  }
  return (
    <div className='search'>
      <div className='inputContainer'>
        <input
          type='text'
          name='searchInput'
          id='searchInput'
          placeholder='What are you craving for?'
          value={searchVal}
          onChange={handleSearch}
        />
      </div>
      <div className='buttonContainer'>
        <button className='searchButton' onClick={() => props.sendSearchVal(searchVal)}>Search</button>
      </div>
    </div>
  );
};

export default Search;
