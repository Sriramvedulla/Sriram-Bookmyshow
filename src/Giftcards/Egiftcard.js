import React from "react";
import "./Giftbuttons.css";

const pgiftcards = {
  physical: [
    {
      imglink:
        "https://assets-in.bmscdn.com/webin/giftcards/available/row1/1.png",
    },
    {
      imglink:
        "https://assets-in.bmscdn.com/webin/giftcards/available/row1/2.png",
    },
    {
      imglink:
        "https://assets-in.bmscdn.com/webin/giftcards/available/row1/my_jio_store_logo_unit.jpg",
    },
    {
      imglink:
        "https://assets-in.bmscdn.com/webin/giftcards/available/row1/5.png",
    },
    {
      imglink:
        "https://assets-in.bmscdn.com/webin/giftcards/available/row1/6.png",
    },
  ],
  physical2: [
    {
      imglink:
        "https://assets-in.bmscdn.com/webin/giftcards/available/row2/1.png",
    },
    {
      imglink:
        "https://assets-in.bmscdn.com/webin/giftcards/available/row2/2.png",
    },
  ],
  firsthead: [
    {
      tophead: "introducing physical gift cards",
    },
    {
      toppara:
        "Gift your loved ones a range of experiences from movies to events, plays, concerts and sports with a BookMyShow gift card. Now pick one up at a store near you!! BookMyShow Gift Cards are now available at thousands of stores at all major towns across India.",
    },
    {
      para1: "Available at stores near you",
    },
    {
      para2: "or order online from",
    },
  ],
};

function Egiftcard() {
  return (
    <div>
      <div>
        {pgiftcards.firsthead.map((data, k) => {
          return (
            <div className="topsector" key={k}>
              <strong>{data.tophead}</strong>
              <p className="para">{data.toppara}</p>
              <p className="para1">{data.para1}</p>
            </div>
          );
        })}
      </div>
      <div className="physicalcards">
        {pgiftcards.physical.map((x, k) => {
          return (
            <div className="egiftcard" key={k}>
              <img src={x.imglink} alt="egiftimg" />
            </div>
          );
        })}
      </div>
      {pgiftcards.firsthead.map((data, k) => {
        return (
          <div className="topsector" key={k}>
            <p className="para1">{data.para2}</p>
          </div>
        );
      })}
      <div className="physicalcards2">
        {pgiftcards.physical2.map((x, k) => {
          return (
            <div className="egiftcard" key={k}>
              <img src={x.imglink} alt="egiftimg" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Egiftcard;
