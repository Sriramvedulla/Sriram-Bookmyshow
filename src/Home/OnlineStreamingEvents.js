import React from "react";
//OnlineStreemingEvents===========================================
const OnlineStreemingevents = [
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367009-mcgkcabczp-portrait.jpg",
    h3: "WeMET Speed",
    h4: "Watch on Zoom",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355836-trhqeqvuta-portrait.jpg",
    h3: "Blind Dating 30+-...",
    h4: "Watch on Zoom",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAzMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362649-zdwdlgftyn-portrait.jpg",
    h3: "Talk Session in English",
    h4: "Watch on Zoom",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAzMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362333-gkullrbvzg-portrait.jpg",
    h3: "Talk Session in English",
    h4: "Watch on Zoom",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366284-hfppaydegr-portrait.jpg",
    h3: "NCPA-HSBC",
    h4: "Watch on Zoom",
  },
];
function OnlineStreamingEvents() {
  return (
    <div>
      <div className="movies">
        <div className="Movies">
          <h2>Online Streeming Events</h2>
          <p className="see">See All</p>
        </div>
        <div className="Rmovies">
          {OnlineStreemingevents.map((item) => {
            return (
              <div className="rmoviesimg">
                <img src={item.imgLink} alt="rmovies" />
                <h3>{item.h3}</h3>
                <p>{item.h4}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OnlineStreamingEvents;
