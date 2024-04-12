import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogOut = () => {
  dispatch(logout())
  }

  return (
    <div>  
        <span>Welcome, {user.name}!</span>
      <button type="button" onClick={onLogOut}>
        Logout
      </button>   
    </div>
  )
}

export default UserMenu;
