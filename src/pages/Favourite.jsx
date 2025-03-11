import React from "react";
import { useMoviesContext } from "../MoviesContext/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourite() {
  const { favourites } = useMoviesContext();

  if (favourites.length !== 0) {
    console.log(favourites.length);
    return (
      <div>
        <h2>Below are your Favorites Cinema masterpiece</h2>
        <div className="">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <h3>No data found Here </h3>
      <p>Type something in search bar so that you can get results </p>
    </div>
  );

  // {
  //   favourites ? (
  //     <div>
  //       <h2>Below are your Favorites Cinema masterpiece</h2>
  //       <div className="">
  //         {favourites.map((movie) => (
  //           <MovieCard movie={movie} key={movie.id} />
  //         ))}
  //       </div>
  //     </div>
  //   ) : (
  //     <div>
  //       <h3>No data found Here </h3>
  //       <p>Type something in search bar so that you can get results </p>
  //     </div>
  //   );
  // }
}

export default Favourite;
