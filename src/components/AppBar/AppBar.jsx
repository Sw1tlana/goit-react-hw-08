import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';
import '../../index.css';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useState } from 'react';

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

   const closeMenu = () => {
    setIsMenuOpen(false);
  };
 
  return (
    <>
      <header className={css.header}>
      <div className={css.menu}>
        <Navigation onCloseMenu={closeMenu} />
        {isLoggedIn ? <UserMenu onCloseMenu={closeMenu} /> : <AuthNav onCloseMenu={closeMenu} />}
      </div>
      <button className={css.burgerMenu} onClick={toggleMenu}>
        ☰
      </button>
      {isMenuOpen && (
        <div className={css.mobileMenu}>
          <Navigation onCloseMenu={closeMenu} />
          {isLoggedIn ? <UserMenu onCloseMenu={closeMenu} /> : <AuthNav onCloseMenu={closeMenu} />}
        </div>
      )}
    </header>
    </>
  );
};

export default AppBar;