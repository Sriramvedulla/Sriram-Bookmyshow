import React from "react";
import Example from "./Collapse";
import "./Popularcities.css";

const LocationInfo = [
  {
    imgLink:
      "https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png",
    text: "Mumbai",
  },
  {
    imgLink: "https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png",
    text: "Delhi",
  },
  {
    imgLink: "https://in.bmscdn.com/m6/images/common-modules/regions/bang.png",
    text: "Bangaluru",
  },
  {
    imgLink: "https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png",
    text: "Hyderabad",
  },
  {
    imgLink: "https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png",
    text: "Ahmedabad",
  },
  {
    imgLink: "https://in.bmscdn.com/m6/images/common-modules/regions/chd.png",
    text: "Chandigarh",
  },
  {
    imgLink: "https://in.bmscdn.com/m6/images/common-modules/regions/chen.png",
    text: "Chennai",
  },
  {
    imgLink: "https://in.bmscdn.com/m6/images/common-modules/regions/pune.png",
    text: "Pune",
  },
  {
    imgLink: "https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png",
    text: "Kolkata",
  },
  {
    imgLink: "https://in.bmscdn.com/m6/images/common-modules/regions/koch.png",
    text: "Kochi",
  },
];

function Popularcities() {
  return (
    <div className="popular">
      <p className="pop">Popular Cities</p>
      <div className="popularcities">
        {LocationInfo.map((item, p) => {
          return (
            <div className="cities" key={p}>
              <img src={item.imgLink} alt="locationimgs"></img>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
      <Example></Example>
    </div>
  );
}

export default Popularcities;
