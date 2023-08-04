import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Movie() {
  const { movie } = useParams();

  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState([]);
  const [extra, setExtra] = useState([]);

  async function fetchMovies() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=da79f3d4&i=${movie}&plot=full`
      );
      setLoading(false);
      console.log(data);
      setFilm(data);
      setRating(new Array(Math.floor(parseFloat(data.imdbRating))).fill(0));
      setExtra(new Array(9 - Math.floor(parseFloat(data.imdbRating))).fill(0));
    } catch (error) {
      console.error("error fetching data:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      {loading ? (
        <section className="movie__section">
          <div className="movie__img--wrapper">
            <div className="movie__img movie__img--loading"></div>
          </div>
          <div className="movie__text--wrapper">
            <div className="text__loading text__loading--short"></div>
            <div className="text__loading text__loading--para"></div>
            <div className="text__loading text__loading--short"></div>
            <div className="text__loading text__loading--long"></div>
            <div className="text__loading text__loading--short"></div>
            <div className="text__loading text__loading--long"></div>
            <div className="text__loading text__loading--short"></div>
            <div className="text__loading text__loading--long"></div>
          </div>
        </section>
      ) : (
        <section className="movie__section">
          <div className="movie__img--wrapper">
            <img src={film.Poster} alt="" className="movie__img" />
          </div>
          <div className="movie__text--wrapper">
            <h1>{film.Title}</h1>
            <p className="movie__text--para">{film.Plot}</p>
            <ul>
              <li className="movie__text--li">
                <p className="movie__text--li-para">
                  <span className="bold">Relase date: </span>
                  {film.Released}
                </p>
              </li>
              <li className="movie__text--li">
                <p className="movie__text--li-para">
                  <span className="bold">Languages: </span>
                  {film.Language}
                </p>
              </li>
              <li className="movie__text--li">
                <p className="movie__text--li-para">
                  <span className="bold">Genres: </span>
                  {film.Genre}
                </p>
              </li>
              <li className="movie__text--li">
                <p className="movie__text--li-para">
                  <span className="bold">Actors: </span>
                  {film.Actors}
                </p>
              </li>
              <li className="movie__text--li">
                <p className="movie__text--li-para">
                  <span className="bold">Runtime: </span>
                  {film.Runtime}
                </p>
              </li>
              <li className="movie__text--li">
                <p className="movie__text--li-para">
                  <span className="bold">IMDB Rating: </span>
                  {rating.map((_, index) => (
                    <FontAwesomeIcon
                      icon="star"
                      key={index}
                      style={{ color: "gold" }}
                    />
                  ))}
                  {!Number.isInteger(parseFloat(film.imdbRating)) && (
                    <FontAwesomeIcon
                      icon="star-half-alt"
                      style={{ color: "gold" }}
                    />
                  )}
                  {extra.map((_, index) => (
                    <FontAwesomeIcon
                      icon="fa-regular fa-star"
                      style={{ color: "gold" }}
                      key={index}
                    />
                  ))}
                </p>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
}

export default Movie;
