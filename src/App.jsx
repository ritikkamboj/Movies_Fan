import "./App.css";
import MovieCard from "./components/MovieCard";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <MovieCard
        movie={{ name: "Aashiq banaya apne", release_date: "18-08-1998" }}
      />
      <MovieCard
        movie={{ name: "Aashiq banaya apne", release_date: "18-08-1998" }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favourite" element={<Favourite />} />
      </Routes>
    </>
  );
}

export default App;
