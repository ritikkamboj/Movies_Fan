import "./App.css";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MoviesProvider } from "./MoviesContext/MovieContext";

function App() {
  return (
    <MoviesProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favourite" element={<Favourite />} />
        </Routes>
      </main>
    </MoviesProvider>
  );
}

export default App;
