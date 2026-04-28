import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import "../styles/MovieInfo.css";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios"

const MovieInfo = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { imdbID } = useParams()

  async function fetchMovieInfo() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=d5c82cd3&i=${imdbID}`,
    );
    setMovieInfo(data);
    console.log(data);
  }

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  const fallbackImage =
    "https://t3.ftcdn.net/jpg/18/04/78/30/360_F_1804783011_WN63vDRcs6uODpA9a0F6suoYI2zrKeU9.jpg";

  return (
    <>
      <Navbar />
      <div id="movie__body">
        <main id="movie__main">
          <div className="movies__container">
            <div className="row">
              <div className="movie__selected--top">
                <Link to="/movies" className="movie__link">
                  <FontAwesomeIcon icon="arrow-left" className="arrow" />
                  <h2 className="movie__selected--title--top">Movies</h2>
                </Link>
              </div>
              <div className="movie__selected">
                <figure className="movie__selected--figure">
                  <img
                    src={movieInfo.Poster}
                    onError={(e) => {
                      e.target.src = fallbackImage;
                    }}
                    alt=""
                    className="movie__selected--img"
                  />
                </figure>
                <div className="movie__selected--info">
                  <h2 className="movie__selected--title">{movieInfo.Title}</h2>
                  <div className="movie__selected--details">
                    <p className="movie__selected--year">{movieInfo.Year},</p>
                    <p className="movie__selected--rated">{movieInfo.Rated},</p>
                    <p className="movie__selected--rating">
                      {movieInfo.Ratings?.[1]?.Value}{" "}
                      {movieInfo.Ratings?.[1]?.Source}
                    </p>
                  </div>
                  <div className="movie__selected--genre">
                    {movieInfo.Genre}
                  </div>
                  <div className="movie__plot">
                    <div className="movie__plot--title">Plot</div>
                    <p className="movie__plot--para">{movieInfo.Plot}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default MovieInfo;
