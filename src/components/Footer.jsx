import '../styles/Footer.css';
import WebsiteLogo from "../assets/website-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row__column">
          <a href="#">
            <figure className="footer__logo">
              <img
                className="footer__logo--img"
                src={WebsiteLogo}
                alt=""
              />
            </figure>
          </a>
          <div className="footer__list">
            <a href="/" className="footer__link">
              Home
            </a>
            <a className="footer__link no-cursor">About</a>
            <a href="/movies" className="footer__link">
              Movies
            </a>
            <a className="footer__link no-cursor">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer