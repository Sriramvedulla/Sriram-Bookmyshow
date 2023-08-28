import React from "react";
import "./nav.css";
function Navbar() {
  return (
    <div className="navbar">
      <ul className="navlist">
        <li>
          <a href="">Movies</a>
        </li>
        <li>
          <a href="">Stream</a>
        </li>
        <li>
          <a href="">Events</a>
        </li>
        <li>
          <a href="">Plays</a>
        </li>
        <li>
          <a href="">Sports</a>
        </li>
        <li>
          <a href="">Activities</a>
        </li>
        <li>
          <a href="">Buzz</a>
        </li>
      </ul>
      <ul className="navlist1">
        <li>
          <a href="">ListYourshow</a>
        </li>
        <li>
          <a href="">Corporates</a>
        </li>
        <li>
          <a href="">Offers</a>
        </li>
        <li>
          <a href="">Gift Cards</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
