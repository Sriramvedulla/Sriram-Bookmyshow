import React from "react";
import "./Giftcards.css";
import { Link, Outlet } from "react-router-dom";

function Giftcards() {
  return (
    <div>
      <div className="giftbanner">
        <img
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1692874595339_fdf.jpg"
          alt="giftbannerimg"
        />
      </div>
      <div className="spanbtn">
        <span>
          <Link to="/gifts">
            <button className="giftbutton">E-Gift cards</button>
          </Link>
          <Link to="/gifts/physical">
            <button className="giftbutton">physical gift cards</button>
          </Link>
        </span>
        <Outlet />
      </div>
    </div>
  );
}

export default Giftcards;
