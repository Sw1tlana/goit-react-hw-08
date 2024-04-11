
const UserMenu = ({ userName, onLogout }) => {
  return (
    <div>
        <span>Welcome, {userName}!</span>
        <button type="button" onClick={onLogout}>
        Logout
      </button>   
    </div>
  )
}

export default UserMenu;
