import { NavLink } from "react-router-dom"

const Layout = ({ children }) => {
  return (
      <div>
          <header>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Log In</NavLink>
              
          </header>

          <main>{ children }</main>
          
    </div>
  )
}

export default Layout
