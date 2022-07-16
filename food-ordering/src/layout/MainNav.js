import React from "react";
import "./MainNav.css";
import { Link } from "react-router-dom";

export default function MainNav() {
  return (
    <div className="header">
      <div className="logo">Thida's Food</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
