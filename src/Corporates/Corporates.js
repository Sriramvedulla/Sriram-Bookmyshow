import React from "react";
import "./Corporates.css";

function Corporatesbody() {
  let images = [
    "https://in.bmscdn.com/webin/corporate/hp-logo.png",
    "https://in.bmscdn.com/webin/corporate/ola-logo.png",
    "https://in.bmscdn.com/webin/corporate/axis-logo.png",
    "https://in.bmscdn.com/webin/corporate/mastercard-logo.png",
    "https://in.bmscdn.com/webin/corporate/icici-logo.png",
  ];
  let text = {
    name: [
      {
        item: "1000+",
        item2: "cities",
      },
      {
        item: "6000",
        item2: "Screens",
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <div className="crimg">
        <h4 style={{ textAlign: "center", paddingTop: "25px" }}>
          OUR PARTNERS
        </h4>
        <ul style={{ listStyleType: "none" }}>
          {images.map((item, c) => {
            return (
              <li key={c}>
                <img src={item} alt="corpimages" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="crp">
        {text.name.map((x, c) => {
          return (
            <div key={c}>
              <h4>{x.item}</h4>
              <p>{x.item2}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Corporatesbody;
