import { ArrowDropDown, Search, ShoppingCartOutlined } from '@mui/icons-material';
import './navbar.css';
import { Badge, IconButton } from '@mui/material';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-wrapper">
        <div className="navbar-left">
          <span className="language">EN</span>
          <ArrowDropDown className='nav-icon'/>
          <div className="search-container">
            <input type="text" placeholder='Search products...' />
            <Search className='nav-icon'/>
          </div>
        </div>
        <div className="navbar-center">
          <h1>codeit.</h1>
        </div>
        <div className="navbar-right">
          <span>Register</span>
          <span>Login</span>
          <IconButton aria-label="cart">
        <Badge badgeContent={4} color="secondary">
        <ShoppingCartOutlined/>
        </Badge>
        </IconButton>
        </div>
        </div>
        </div>
  )
}

export default Navbar