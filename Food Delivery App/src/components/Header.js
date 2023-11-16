import { useState } from 'react';
import { LOGO_IMG } from '../../utils/constants';

const Header = () => {
  const [auth, setAuth] = useState(false);
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_IMG} alt='logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className='auth'
            onClick={() => setAuth((prevAuth) => !prevAuth)}
          >
            {auth ? 'Logout' : 'Login'}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;