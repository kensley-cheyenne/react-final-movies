import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import WebsiteLogo from "../assets/website-logo.png";
import "../styles/Nav.css";


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("h-menu--open");
    } else {
      document.body.classList.remove("h-menu--open");
    }

    return () => {
      document.body.classList.remove("h-menu--open");
    };
  }, [isMenuOpen]);


  return (
    <nav>
      <div className="h-nav__container">
        <div className="h-nav__left">
          <img className="h-logo h-nav__logo" src={WebsiteLogo} alt="" />
          <h1 className="h-web__title">FLIKKER</h1>
        </div>
        <ul className="h-nav__links">
          <li>
            <Link to="/" className="h-nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="h-nav__link no-cursor">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/movies" className="h-nav__link h-nav__link--primary">
              Movies
            </Link>
          </li>
          <button className="h-btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>

        <div className="h-menu__backdrop">
          <button className="h-btn__menu h-btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="h-menu__links">
            <li className="h-menu__list">
              <Link to="/" className="h-menu__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="h-menu__list">
              <Link to="/movies" className="h-menu__link" onClick={closeMenu}>
                Movies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
