import React from "react";

const Popularevents = [
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366286-aaeympfgmu-portrait.jpg",
    h3: "AnnaMala VandhuttaanDa!!! by TanglishComedy",
    p: "Backyard: Chennai",
  },
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00313711-yycgpuayzk-portrait.jpg",
    h3: "Gainfully Employed by Punith Paina",
    p: "Offbeat Music Ventures: Chennai",
  },
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365904-wwmrqzjpyx-portrait.jpg",
    h3: "When Chai Met Toast-Love You The Same |...",
    p: "The Music Academy: Chennai",
  },
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366093-wrtjatechr-portrait.jpg",
    h3: "Novik - 3 Hours Set in Chennai",
    p: "Winchester, Radission Blu Hotel: Chennai",
  },
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365332-cecqxcwrrj-portrait.jpg",
    h3: "MusiCuento - Classicult The band",
    p: "IDAM - The Art & Cultural Space: Chennai",
  },
];
function PopularEvents({ imgLink, h3, p }) {
  return (
    <div className="divs">
      <div className="movies">
        <div className="Movies">
          <h2>Popular Events</h2>
          <p className="see">See All</p>
        </div>
        <div className="Rmovies">
          {Popularevents.map((item) => {
            return (
              <div className="rmoviesimg">
                <img src={item.imgLink} alt="rmovies" />
                <h3>{item.h3}</h3>
                <p>{item.p}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PopularEvents;
