import React from "react";
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
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
          style={{ width: "90%", margin: " 0 5% 0 5%" }}
        ></img>
        <div className="Movies">
          <h2>Premieres</h2>
          <p>See All</p>
        </div>
        <p style={{ marginBottom: "20px", marginLeft: "5%" }}>
          Brand new releases every Friday
        </p>
        <div className="Movies">
          {Premier.map((item) => {
            return (
              <div>
                <img src={item.PremiersImg} alt="" />
                <h3>{item.PremierH3}</h3>
                <h4>{item.PremierH4}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Premiers;
