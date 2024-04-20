import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';
import clsx from 'clsx';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useState } from 'react';


const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const headerClasses = clsx(css.header, css.container);
  
  return (
    <>
    <header className={headerClasses}>
      <div className={css.menu}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
      <button className={css.burgerMenu} onClick={toggleMenu}>
        ☰
      </button>
   </header>
      {isMenuOpen && (
        <div className={css.mobileMenu}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      )}
      </>
  );
};

export default AppBar