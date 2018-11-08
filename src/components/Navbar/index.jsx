import React from 'react';
import {Link} from  'react-router-dom';
import Proptypes from 'prop-types';

const Navbar=({authUser,removeAuthUser})=>{
    return(
        <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
  <div className="container">
    <div className="topbar-left">
      <button className="topbar-toggler">☰</button>
      <Link className="topbar-brand" to="/">
        <img className="logo-default" src={`${process.env.PUBLIC_URL}/assets/img/logo1.png`} alt="logo" />
        <img className="logo-inverse" src={`${process.env.PUBLIC_URL}/assets/img/logo-light1.png`} alt="logo" />
      </Link>
    </div>
    <div className="topbar-right">
      <ul className="topbar-nav nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
          
        </li>
        {
          authUser &&
          <li className="nav-item">
          
          <Link className="nav-link" to="/articles/create">Write new article</Link>
        </li>
        }
        {
        authUser &&
        <li className="nav-item">
          <a className="nav-link" href="#">Hey { authUser && authUser.user.name}!
            <i className="fa fa-caret-down" />
          </a>
          <div className="nav-submenu">
            <Link to="/user/articles" className="nav-link" >My articles</Link>
            <Link className="nav-link" to="/" onClick={removeAuthUser}>Logout</Link>
          </div>
        </li>
        }
        {
          !authUser &&
          <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        }
        {
          !authUser && 
          <li className="nav-item">
          <Link className="nav-link" to="/signup">Signup</Link>
        </li>
        }
      </ul>
    </div>
  </div>
</nav>

    );
};

Navbar.propTypes={
  authUser:Proptypes.shape({
    user:Proptypes.shape({
      name:Proptypes.string,
    }).isRequired,
  }),
};

Navbar.defaultProps={
  authUser:null,
};

export default Navbar;