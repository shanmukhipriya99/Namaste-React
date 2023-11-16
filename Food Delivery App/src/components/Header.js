import { useState } from 'react';
import { LOGO_IMG } from '../../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  const [auth, setAuth] = useState(false);
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_IMG} alt='logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
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
