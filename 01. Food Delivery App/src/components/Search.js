import { useState } from 'react';

const Search = (props) => {
  const [searchVal, setSearchVal] = useState('');
  //   const [searchClicked, setSearchClicked] = useState(false);
  function handleSearch() {
    // setSearchClicked((prevSearchClicked) => !prevSearchClicked); // doesn't get triggered immediately
    props.searchVal(searchVal);
    props.searchClicked(true);
    setSearchVal('');
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
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
      </div>
      <div className='buttonContainer'>
        <button className='searchButton' onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
