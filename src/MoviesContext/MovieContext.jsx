import { createContext, useContext, useState, useEffect } from "react";

const MoviesContext = createContext();

export const useMoviesContext = () => useContext(MoviesContext);

export const MoviesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favMovies = localStorage.getItem("favourites");

    if (favMovies) {
      setFavourites(JSON.parse(favMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addTofavourite = (movie) => {
    setFavourites((prev) => [...prev, movie]);
  };

  const deleteFromFav = (movieId) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavourite = (movieId) => {
    return favourites.some((movie) => movie.id === movieId);
  };

  const value = {
    favourites,
    addTofavourite,
    deleteFromFav,
    isFavourite,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};
