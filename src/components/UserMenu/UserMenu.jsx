import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';

const UserMenu = ({ userName }) => {
  const dispatch = useDispatch();

  const onLogOut = () => {
  dispatch(logout())
  }

  return (

    <div>
        <span>Welcome, {userName}!</span>
        <button type="button" onClick={onLogOut}>
        Logout
      </button>   
    </div>
  )
}

export default UserMenu;
