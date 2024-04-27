import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from './AuthNav.module.css';
import clsx from 'clsx';
import '../../index.css';

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.headerLink, {
    [css.active]: isActive,
  })
}

const AuthNav = ({onCloseMenu}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      {!isLoggedIn && (
        <div className={css.containerNav}>
          <NavLink to="/register" onClick={onCloseMenu} className={getNavLinkClass}>Register</NavLink>
          <NavLink to="/login" onClick={onCloseMenu} className={getNavLinkClass}>Log In</NavLink>
        </div>
      )}
    </div>    
  );
};

export default AuthNav;