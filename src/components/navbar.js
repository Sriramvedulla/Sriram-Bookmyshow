import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
function Navbar() {
  return (
    <div className="navbar">
      <ul className="navlist">
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/stream"> Stream</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/plays">Plays</Link>
        </li>
        <li>
          <Link to="/sports">Sports</Link>
        </li>
        <li>
          <Link to="/activities">Activities</Link>
        </li>
        <li>
          <Link to="/buzz">Buzz</Link>
        </li>
        <li>
          <Link to="/worldcup">
            <img
              id="worldcup"
              src="https://assets-in.bmscdn.com/static/2023/08/cwc23.png"
              alt="worldcupimg"
            />
            <div className="new">NEW</div>
          </Link>
        </li>
      </ul>
      <ul className="navlist1">
        <li>
          <Link to="/listyourshow">ListYourshow</Link>
        </li>
        <li>
          <Link to="/corporates">Corporates</Link>
        </li>
        <li>
          <Link to="/offers">Offers</Link>
        </li>
        <li>
          <Link to="/gifts">Gift Cards</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
