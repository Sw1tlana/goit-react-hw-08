import Navigation from '../../components/Navigation/Navigation';
import AuthNav from '../../components/AuthNav/AuthNav';
import UserMenu from '../../components/UserMenu/UserMenu';
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
    
    const handleLogout = () => {
    // Додайте код для розлогінення користувача тут
  };
    
  return (
      <header>
      <Navigation />
      {isLoggedIn ? (
        <UserMenu userName={user.name} onLogout={handleLogout} />
      ) : (
        <AuthNav />
      )}
        </header>   
  )
}

export default AppBar;
