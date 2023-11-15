import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { restaurantList } from '../../utils/mockData';
import Search from '../components/Search';

const Body = () => {
  const [restList, setRestList] = useState(restaurantList);
  const [filterStatus, setFilterStatus] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  function getSearchVal(val) {
    if (val) {
      setRestList(
        restList.filter((res) => {
          return Object.values(res.data).some((value) =>
            String(value).toLowerCase().includes(val.toLowerCase())
          );
        })
      );
    }
  }

  return (
    <div className='body'>
      <Search sendSearchVal={getSearchVal} />
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            setFilterStatus((prevFilterStatus) => !prevFilterStatus);
            !filterStatus
              ? setRestList(restList.filter((res) => res.data.avgRating > 4))
              : setRestList(restaurantList);
          }}
        >
          {filterStatus ? 'Show All Restaurants' : 'Top Rated Restaurants'}
        </button>
      </div>
      <div className='res-container'>
        {restList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
