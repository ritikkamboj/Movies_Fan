import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, getSearchMovies } from "../services/api.js";

function Home() {
  const [serachMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const movies = [
  //   {
  //     id: 1,
  //     name: "The Shawshank Redemption",
  //     release_date: "1994-09-23",
  //   },
  //   {
  //     id: 2,
  //     name: "The Godfather",
  //     release_date: "1972-03-24",
  //   },
  //   {
  //     id: 3,
  //     name: "The Dark Knight",
  //     release_date: "2008-07-18",
  //   },
  //   {
  //     id: 4,
  //     name: "Pulp Fiction",
  //     release_date: "1994-10-14",
  //   },
  //   {
  //     id: 5,
  //     name: "Schindler's List",
  //     release_date: "1993-12-15",
  //   },
  //   {
  //     id: 6,
  //     name: "The Lord of the Rings: The Return of the King",
  //     release_date: "2003-12-17",
  //   },
  //   {
  //     id: 7,
  //     name: "12 Angry Men",
  //     release_date: "1957-04-13",
  //   },
  //   {
  //     id: 8,
  //     name: "Forrest Gump",
  //     release_date: "1994-07-06",
  //   },
  //   {
  //     id: 9,
  //     name: "Inception",
  //     release_date: "2010-07-16",
  //   },
  //   {
  //     id: 10,
  //     name: "The Matrix",
  //     release_date: "1999-03-31",
  //   },
  // ];

  useEffect(() => {
    try {
      const popularMovies = async () => {
        const data = await getPopularMovies();
        // console.log(data);
        setMovies(data);
      };

      popularMovies();
    } catch (error) {
      console.log(error);
      setError("Failed to load movies...");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSearchSubmission = async (e) => {
    e.preventDefault();
    if (!serachMovie.trim()) return;
    if (isLoading) return;

    setIsLoading(true);

    try {
      const data = await getSearchMovies(serachMovie);
      console.log(data);
      setMovies(data);
    } catch (error) {
      console.log("Failed to Fetched the search movies datas");
      setError(error);
    } finally {
      setIsLoading(false);
    }
    // alert(serachMovie);
    setSearchMovie("");
  };

  console.log(movies);
  return (
    <div>
      <form onSubmit={handleSearchSubmission}>
        <input
          type="text"
          placeholder="Serach the Movies...."
          value={serachMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
        <button type="submit" className="">
          Search
        </button>
      </form>
      {error && <div className=""> {error} </div>}

      {isLoading ? (
        <div className=""> Loading... </div>
      ) : (
        <div className="">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(serachMovie) && (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
