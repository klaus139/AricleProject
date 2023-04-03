import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const bfLoginLinks = [
    { label: 'Login', path: '/login' },
    { label: 'Register', path: '/register' }
  ];
   // replace 'JohnDoe' with the actual username
  
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item d-lg-none">
          <Link className="nav-link" to={bfLoginLinks[0].path}>{bfLoginLinks[0].label}</Link>
        </li>
        <li className="nav-item d-lg-none">
          <Link className="nav-link" to={bfLoginLinks[1].path}>{bfLoginLinks[1].label}</Link>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item d-none d-lg-block">
          <Link className="nav-link" to={bfLoginLinks[0].path}>{bfLoginLinks[0].label}</Link>
        </li>
        <li className="nav-item d-none d-lg-block">
          <Link className="nav-link" to={bfLoginLinks[1].path}>{bfLoginLinks[1].label}</Link>
        </li>
        <li className="nav-item dropdown d-block d-lg-none">
          <span
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            username
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/about">
                About us
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default Menu;
