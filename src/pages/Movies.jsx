import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Movies.css";
import { useState, useEffect } from "react";
import NoMatches from "../assets/no-matches.svg";
import { Link } from "react-router-dom";
import axios from "axios";

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchInput, setSearchInput] = useState("");

//   async function getMovies(searchValue) {
//     const { data } = await axios.get(
//       `https://www.omdbapi.com/?apikey=d5c82cd3&s=${searchValue}`,
//     );
//     setMovies(data);
//     console.log(data);
//   }

//   useEffect(() => {
//     getMovies("");
//   }, []);

  function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getMovies("");
  }, []);

  async function getMovies(searchValue) {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=d5c82cd3&s=${searchValue}`,
      );
      const data = await response.json();
      setMovies(data.Search || []);
  }

  function filterMovies(event) {
    const filter = event.target.value;
    let sortedMovies = [...movies];

    if (filter === "NEW_TO_OLD") {
      sortedMovies = sortedMovies.sort(
        (a, b) => parseInt(b.Year.slice(0, 4)) - parseInt(a.Year.slice(0, 4)),
      );
    } else if (filter === "OLD_TO_NEW") {
      sortedMovies = sortedMovies.sort(
        (a, b) => parseInt(a.Year.slice(0, 4)) - parseInt(b.Year.slice(0, 4)),
      );
    }

    setMovies(sortedMovies);
  }

  function handleSearch(event) {
    const value = event.target.value;
    setSearchInput(value);
    getMovies(value);
  }

  const fallbackImage =
    "https://t3.ftcdn.net/jpg/18/04/78/30/360_F_1804783011_WN63vDRcs6uODpA9a0F6suoYI2zrKeU9.jpg";

  return (
    <>
      <Navbar />
      <main>
        <section id="movies__main">
          <div className="container">
            <div className="row">
              <div className="movies__header">
                <h2 className="section__title movies__header--title">
                  All <span className="blue">Movies</span>
                </h2>
                <select id="filter" onChange={filterMovies}>
                  <option value="">Select filter</option>
                  <option value="NEW_TO_OLD">Newest to Oldest</option>
                  <option value="OLD_TO_NEW">Oldest to Newest</option>
                </select>
              </div>
              <div className="input-wrap">
                <input
                  id="searchInput"
                  type="text"
                  placeholder="Search"
                  value={searchInput}
                  onChange={handleSearch}
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
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      className=""
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="movies movies__loading">
                {movies.length === 0 ? (
                  <div className="no-matches">
                    <figure>
                      <img className="no-matches__img" src={NoMatches} alt="" />
                    </figure>
                    <div className="no-matches--note">
                      Could not find any matches related to your search.
                    </div>
                  </div>
                ) : (
                  movies.map((movies) => (
                    <div key={movies.imdbID} className="movie">
                      <Link to={`/${movies.imdbID}`}>
                        <figure className="movie__img--wrapper">
                          <img
                            className="movie__img"
                            src={movies.Poster}
                            onError={(e) => {
                              e.target.src = fallbackImage;
                            }}
                            alt=""
                          />
                        </figure>
                        <div className="movie__title">{movies.Title}</div>
                      </Link>
                      <div className="movie__year">{movies.Year}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Movies;
