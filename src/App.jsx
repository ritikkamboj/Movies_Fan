import "./App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <MovieCard
        movie={{ name: "Aashiq banaya apne", release_date: "18-08-1998" }}
      />
      <MovieCard
        movie={{ name: "Aashiq banaya apne", release_date: "18-08-1998" }}
      />
      <Home />
    </>
  );
}

export default App;
