import "./App.css";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favourite" element={<Favourite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
