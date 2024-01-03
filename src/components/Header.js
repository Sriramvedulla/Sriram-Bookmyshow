import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navbar from "./navbar";
import TemporaryDrawer from "./Drawer";
import SimpleBackdrop from "./Backdrop";
import BasicModal from "./PopMenu";

function Header() {
  return (
    <div>
      <header>
        <div className="logoimg">
          <Link to="/">
            <img src="./images/book.png" alt="bookimage" />
          </Link>
          <input
            type="search"
            id="searchbar"
            placeholder="Seacrh for Movies,Events,Plays,Sports and Activities"
          />
        </div>
        <div className="logging">
          <div className="dropmodal">
            <SimpleBackdrop></SimpleBackdrop>
            <BasicModal></BasicModal>
          </div>
          <div className="menudash">
            <TemporaryDrawer></TemporaryDrawer>
          </div>
        </div>
      </header>
      <Navbar></Navbar>
    </div>
  );
}

export default Header;
