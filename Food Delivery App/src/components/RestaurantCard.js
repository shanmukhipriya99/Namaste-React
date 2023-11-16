import { CDN_URL } from '../../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;
  return (
    <div className='res-card'>
      <img className='res-logo' src={CDN_URL + cloudinaryImageId} alt='res-logo' />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <div className='res-info'>
        <h4>{avgRating} Stars</h4>
        <h4>{deliveryTime} mins</h4>
        <h4>Rs. {costForTwo/100} For 2</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
