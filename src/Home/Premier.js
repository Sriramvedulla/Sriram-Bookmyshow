import React from "react";
import "./Home.css";
// Premiers========================================================
const Premier = [
  {
    PremiersImg:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00059052-jdujactdne-portrait.jpg",
    PremierH3: "Ondu Motteya Kathe",
    PremierH4: "Kannada",
  },

  {
    PremiersImg:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00038182-xznjtfveak-portrait.jpg",
    PremierH3: "U Turn",
    PremierH4: "Kannada",
  },

  {
    PremiersImg:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00380947-bazgeyaatl-portrait.jpg",
    PremierH3: "Patra Mitro",
    PremierH4: "Gujarati",
  },

  {
    PremiersImg:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00381434-vngzaskayp-portrait.jpg",
    PremierH3: "Tasher Ghawr",
    PremierH4: "Bengali",
  },

  {
    PremiersImg:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00363189-atvgnmuwwl-portrait.jpg",
    PremierH3: "Trolls Band Together",
    PremierH4: "English",
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
          {Premier.map((item, i) => {
            return (
              <div className="rmoviesimg1" key={i}>
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
