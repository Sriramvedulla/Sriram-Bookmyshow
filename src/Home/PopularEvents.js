import React from "react";

const Popularevents = [
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00376868-xhqzmygbrn-portrait.jpg",
    h3: "Sri Devi Nrithyalaya's  JAYA KALYANA KRISHNAM",
    p: "Bharat Kalachar: Chennai",
  },
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00378406-eyvvlshvbv-portrait.jpg",
    h3: "Evolve 2024",
    p: "Taj Club House: Chennai",
  },
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00378468-dktgttkspy-portrait.jpg",
    h3: "New Year 2024 @ THE CONNAUGHT,CITADINES  HOTEL OMR",
    p: "Citadines OMR: Chennai",
  },
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAxMSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00380505-mdljdnffms-portrait.jpg",
    h3: "SAARANG - CHOREO NIGHT",
    p: "IIT Madras Open Air Theatre: Chennai",
  },
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00381221-lmeqqrwbxm-portrait.jpg",
    h3: "CHENNAI FOOD FESTIVAL 2023 @ Chetpet Eco Park ",
    p: "Chetpet EcoPark: Chennai",
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
          {Popularevents.map((item, i) => {
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

export default PopularEvents;
