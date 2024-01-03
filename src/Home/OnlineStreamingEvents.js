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
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzIEZlYg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00339877-nsljauckpe-portrait.jpg",
    h3: "Samurai Sudoku Championship by Malsar",
    h4: "Watch on Zoom",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00380937-burdkzswdf-portrait.jpg",
    h3: "New Year Virtual Marathon",
    h4: "Marina Beach: Chennai",
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
          {OnlineStreemingevents.map((item, i) => {
            return (
              <div className="rmoviesimg" key={i}>
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
