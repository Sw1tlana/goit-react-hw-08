import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
  const user = useSelector(selectUser).name;
  const dispatch = useDispatch();

  const onLogOut = () => {
  dispatch(logout())
  }

  return (
     <div>
      {user && user.name && (
        <p>Welcome, {user.name}!</p>
      )}
      <button type="button" onClick={onLogOut}>
        Logout
      </button>  
    </div>
  )
}

export default UserMenu;
