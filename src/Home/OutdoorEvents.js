import React from "react";
//OutdoorEvents===================================================
const Outdoorevents = [
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00313711-yycgpuayzk-portrait.jpg",
    h3: "Gainfully Employed By Punith Panaia",
    p: "Offbeat Music Ventures: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366675-qxtkjtbqpy-portrait.jpg",
    h3: "When Chai Met Toast-Love You The Same",
    p: "The Music Academy: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366777-rddtcpvqlw-portrait.jpg",
    h3: "MusiCuento-Classicult The Band",
    p: "IDAM - The Art & Cultural Space: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307957-dtrsnjaphf-portrait.jpg",
    h3: "Novlik 3- Hour Set In Chennai",
    p: "winchester, Radisson Blu Hostel: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361456-zwtappgwtr-portrait.jpg",
    h3: "Naan Sanikelama Live",
    p: "Media - The State, Alwarpet: Chennai",
  },
];
function OutdoorEvents({ imgLink, h3, p }) {
  return (
    <div>
      <div className="movies">
        <div className="Movies">
          <h2>Outdoor Events</h2>
          <p>See All</p>
        </div>
        <div className="Movies">
          {Outdoorevents.map((item) => {
            return (
              <div>
                <img src={item.imgLink} alt="" />
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

export default OutdoorEvents;
