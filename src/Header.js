import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { SearchTwoTone, ShoppingBasket } from '@material-ui/icons';

import './Header.css';

import { useStateValue } from './context/State';

const Header = () => {
  // let match = useRouteMatch();

  // const [state, dispatch] = useStateValue();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
        />
      </Link>

      <div className='header__searchBox'>
        <input type='text' className='header__searchInput' />
        <SearchTwoTone className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        {/* link is qual to a tag but href will refresh the page but ( to ) no */}
        <Link to='/login' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello Alex</span>
            <span className='header__optionLineTwo'> Sign In</span>
          </div>
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>

        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            <ShoppingBasket />
            <span className='header__optionLineTwo header__basketCount'>
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
