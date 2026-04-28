import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import WebsiteLogo from "../assets/website-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu--open");
    } else {
      document.body.classList.remove("menu--open");
    }

    return () => {
      document.body.classList.remove("menu--open");
    };
  }, [isMenuOpen]);

  return (
    <section>
      <nav>
        <div className="nav__container">
          <div className="nav__left">
          <img
            className="logo nav__logo"
            src={WebsiteLogo}
            alt=""
          />
          <h1 className="web__title">FLIKKER</h1>
          </div>
          <ul className="nav__links">
            <li>
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="nav__link no-cursor">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/movies" className="nav__link nav__link--primary">
                Movies
              </Link>
            </li>
            <button className="btn__menu" onClick={openMenu}>
              <FontAwesomeIcon icon="bars" />
            </button>
          </ul>

          <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={closeMenu}>
              <FontAwesomeIcon icon="times" />
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <Link to="/" className="menu__link" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="menu__list">
                <Link to="/movies" className="menu__link" onClick={closeMenu}>
                  Movies
                </Link>
              </li>
            </ul>
          </div>
          <div className="overlay">
            <figure>
              <img
                className="overlay__img"
                src="https://offloadmedia.feverup.com/secretmiami.com/wp-content/uploads/2025/02/03001701/shutterstock_1284521104-2-1024x683.jpg"
              />
            </figure>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar