import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navbar from "./navbar";
function Header() {
  return (
    <div>
      <header>
        <div className="logoimg">
          <Link to="/">
            <img src="./images/book.png" alt="" />
          </Link>
          <input
            type="search"
            id="searchbar"
            placeholder="Seacrh for Movies,Events,Plays,Sports and Activities"
          />
        </div>
        <div className="logging">
          <a href="" className="hyd">
            Hyderabad <i class="fa fa-caret-down"></i>
          </a>
          <button className="signin">Sign in</button>
          <div className="menudash">
            <div className="dash"></div>
            <div className="dash"></div>
            <div className="dash"></div>
          </div>
        </div>
      </header>
      <Navbar></Navbar>
    </div>
  );
}

export default Header;
