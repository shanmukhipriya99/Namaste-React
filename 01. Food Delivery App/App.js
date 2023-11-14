import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={require('./assets/logo.jpg')} alt='logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className='res-card'>
      <img
        className='res-logo'
        src='https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/90e8d831-9176-4b66-9c9e-9ff0f6c86f83.jpg'
        alt='res-logo'
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <div className='res-info'>
        <h4>{props.rating}</h4>
        <h4>{props.deliveryTime}</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        <RestaurantCard resName='Seattle Pizza & Bar' cuisine='American, Sandwiches, Burgers' rating='4.4 ⭐️' deliveryTime='40 mins' />
        <RestaurantCard resName='Papa Johns Pizza' cuisine='American, Sandwiches, Burgers' rating='4.4 ⭐️' deliveryTime='40 mins' />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
