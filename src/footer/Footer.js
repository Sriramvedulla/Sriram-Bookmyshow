import React from "react";
import "./Footer.css";
import Footerimg from "./Footerimg";

export default function Footer() {
  return (
    <div>
      <div className="footer-first">
        <div className="activity">
          <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="" />
          <h4>List Your Show</h4>
          <p>
            Got a show, event, activity or a great experience? Partner with us &
            get listed on BookMyShow
          </p>
        </div>
        <div className="today">
          <a href="./ListYourShow">Contact Today!</a>
        </div>
      </div>
      <Footerimg></Footerimg>
    </div>
  );
}
