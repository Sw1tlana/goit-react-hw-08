import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from './AuthNav.module.css';
import clsx from 'clsx';

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.headerLink, {
    [css.active]: isActive,
  })
}

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {!isLoggedIn && (
        <div className={css.containerNav}>
          <NavLink to="/register" className={getNavLinkClass}>Register</NavLink>
          <NavLink to="/login" className={getNavLinkClass}>Log In</NavLink>
        </div>
      )}
    </div>    
  );
};

export default AuthNav;