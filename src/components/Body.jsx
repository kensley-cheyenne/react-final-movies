import "../styles/Body.css";
import PinkCinema from "../assets/pink-home-cinema.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Body() {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/movies?search=${searchInput}`);
  };

  useEffect(() => {
  }, []);

  return (
    <main>
      <section id="home__main">
        <div className="container">
          <div className="h-row">
            <div className="home__header">
              <h2 className="section__title home__header--title">
                Find the perfect <span className="blue">movie</span> for your next movie night!
              </h2>
            </div>
            <div className="home__landing">
              <div className="input-wrap">
                <form onSubmit={handleSearch}>
                  <input
                    id="searchInput"
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search"
                  />
                  <div className="search-wrapper">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="search"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="fa-search"
                        onClick={handleSearch}
                      >
                        <path
                          fill="currentColor"
                          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                          className=""
                        ></path>
                      </svg>
                  </div>
                </form>
              </div>
              <div>
                <figure>
                  <img className="pink-cinema--img" src={PinkCinema} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Body;
