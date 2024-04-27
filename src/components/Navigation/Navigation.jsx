import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors"; 
import clsx from 'clsx';
import css from './Navigation.module.css';

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.headerLink, {
    [css.active]: isActive,
  })
}

const Navigation = ({onCloseMenu}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      {isLoggedIn && (
        <div className={css.containerNav}>
          <NavLink to="/" onClick={onCloseMenu} className={getNavLinkClass}>Home</NavLink>
          <NavLink to="/contacts" onClick={onCloseMenu}  className={getNavLinkClass}>Contacts</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navigation;