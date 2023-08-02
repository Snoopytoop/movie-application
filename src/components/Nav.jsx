import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="row nav__row">
      <nav>
        <Link to="/">
          <h3 className="nav__logo">MovieSearch</h3>
        </Link>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/">
              <h3 className="nav__link">Home</h3>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/search">
              <h3 className="nav__link">Search</h3>
            </Link>
          </li>
          <li className="nav__item">
            <h3 className="nav__link nav__link--false">Contact</h3>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
