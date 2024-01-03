import React from "react";
//OutdoorEvents===================================================
const Outdoorevents = [
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00380029-efyssmknbv-portrait.jpg",
    h3: "Sundaresh & Pratima Live - A standup comedy show ",
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
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNyBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00375051-kjqsqfjmlh-portrait.jpg",
    h3: "Vikkals of Vikram ",
    p: "Music Academy: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBEZWMgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358311-zfaqpqtews-portrait.jpg",
    h3: "Chess - Chai - Connect",
    p: "One Paramount: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00377955-zcwbzdepme-portrait.jpg",
    h3: "ELITE TAMIL NIGHT NYE 2024 @ LE ROYAL MERIDIEN ",
    p: "Grand Madras Ballroom, Le Royal Meridien: Chennai",
  },
];
function OutdoorEvents({ imgLink, h3, p }) {
  return (
    <div>
      <div className="movies">
        <div className="Movies">
          <h2>Outdoor Events</h2>
          <p className="see">See All</p>
        </div>
        <div className="Rmovies">
          {Outdoorevents.map((item, i) => {
            return (
              <div className="rmoviesimg" key={i}>
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

export default OutdoorEvents;
