import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { restaurantList } from '../../utils/mockData';
import Search from '../components/Search';

const Body = () => {
  const [restList, setRestList] = useState(restaurantList);
  const [filteredRest, setFilteredRest] = useState(restaurantList);
  const [filterStatus, setFilterStatus] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    if (searchClicked) {
      setFilteredRest(
        restList.filter((res) => {
          return Object.values(res.data).some((value) =>
            String(value).toLowerCase().includes(searchQuery.toLowerCase())
          );
        })
      );
    } else {
      setFilteredRest(restList);
    }
  }, [searchQuery, restList, searchClicked]);

  return (
    <div className='body'>
      <Search
        searchVal={(val) => setSearchQuery(val)}
        searchClicked={(val) => setSearchClicked(val)}
      />
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            setFilterStatus((prevFilterStatus) => !prevFilterStatus);
            !filterStatus
              ? setFilteredRest(
                  restList.filter((res) => res.data.avgRating > 4)
                )
              : setFilteredRest(restList);
          }}
        >
          {filterStatus ? 'Show All Restaurants' : 'Top Rated Restaurants'}
        </button>
      </div>
      <div className='res-container'>
        {filteredRest.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
