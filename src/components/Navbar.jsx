import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <Link to="/">Movies_Fan</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/favourite">Favourite</Link>
      </div>
    </div>
  );
}

export default Navbar;
