import React from "react";
import "./Home.css";
// Premiers========================================================
const Premier = [
  {
    PremiersImg:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00365921-qzzpdqegwp-portrait.jpg",
    PremierH3: "Return to Seoul",
    PremierH4: "French",
  },

  {
    PremiersImg:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00365828-pthvdgzjgl-portrait.jpg",
    PremierH3: "Follow Me",
    PremierH4: "English",
  },

  {
    PremiersImg:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00365169-uwpcjaxjmd-portrait.jpg",
    PremierH3: "The Only Way Out",
    PremierH4: "English",
  },

  {
    PremiersImg:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00366830-mmrpktqpfa-portrait.jpg",
    PremierH3: "Somewhere",
    PremierH4: "English",
  },

  {
    PremiersImg:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00366377-zbugdhlpnr-portrait.jpg",
    PremierH3: "Welcome To Demon",
    PremierH4: "Japanese",
  },
];
function Premiers() {
  return (
    <div>
      <div className="Movies-in" style={{ marginBottom: "5%" }}>
        <div className="premiermovies">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
            alt="rmovies"
          />
          <div className="premierflex">
            <h2>Premieres</h2>
            <p className="see">See All</p>
          </div>
          <p>Brand new releases every Friday</p>
        </div>
        <div className="Rmovies">
          {Premier.map((item) => {
            return (
              <div className="rmoviesimg1">
                <img src={item.PremiersImg} alt="rmovies" />
                <h3>{item.PremierH3}</h3>
                <p>{item.PremierH4}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Premiers;
