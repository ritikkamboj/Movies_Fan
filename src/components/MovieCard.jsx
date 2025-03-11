import React from "react";
import { BASE_IMAGE_URL } from "../services/api";
import { useMoviesContext } from "../MoviesContext/MovieContext";

function MovieCard({ movie }) {
  const { addTofavourite, deleteFromFav, isFavourite } = useMoviesContext();
  const fav = isFavourite(movie.id);
  function handleButtonClick() {
    if (fav) {
      deleteFromFav(movie.id);
    } else {
      addTofavourite(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`${BASE_IMAGE_URL}/${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button onClick={handleButtonClick} className="favourite-btn">
            {fav ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
