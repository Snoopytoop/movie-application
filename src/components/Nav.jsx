import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <div className="row nav__row">
      <div className="backdrop">
        <button className="backdrop__btn">
          <FontAwesomeIcon icon="xmark" />
        </button>
        <h1>Menu</h1>
      </div>
      <nav>
        <Link to="/">
          <h3 className="nav__logo">MovieSearch</h3>
        </Link>
        <ul className="nav__list">
          <button className="btn">
            <FontAwesomeIcon icon="bars" />
          </button>
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
