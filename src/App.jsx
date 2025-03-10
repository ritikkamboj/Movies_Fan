import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard
        movie={{ name: "Aashiq banaya apne", release_date: "18-08-1998" }}
      />
      <MovieCard
        movie={{ name: "Aashiq banaya apne", release_date: "18-08-1998" }}
      />
    </>
  );
}

export default App;
