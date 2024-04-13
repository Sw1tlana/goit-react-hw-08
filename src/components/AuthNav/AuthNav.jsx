import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {!isLoggedIn && (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </>
      )}
    </div>
  );
};

export default AuthNav;