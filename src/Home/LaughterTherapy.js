import React from "react";
//LaughterTherapy====================================
const Laughtertherapy = [
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxIEZlYg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00373704-kmmsnhznsf-portrait.jpg",
    h3: "Abhishek Upmanyu LIVE - Chennai",
    p: "Sir Mutha Venkatasubba Rao Concert Hall: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00351918-wfyafagjfj-portrait.jpg",
    h3: "Ramkumar Paathi Annachi Meethi",
    p: "The Music: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNCBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00377296-dzwxmeahuz-portrait.jpg",
    h3: "Thandhiram-standup Comedy",
    p: "Rajah Annamalai Mandram: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00377761-nacjldgkqv-portrait.jpg",
    h3: "PATCH WORK - A Tanglish standup comedy show ",
    p: "Offbeat Music Ventures: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00333391-agggcqttgf-portrait.jpg",
    h3: "Good Boy Better Show ft. Aashish Solanki",
    p: "Medai - The Stage, Alwarpet: Chennai",
  },
];
function LaughterTherapy() {
  return (
    <div>
      <div className="movies">
        <div className="Movies">
          <h2>Laughter Therapy</h2>
          <p className="see">See All</p>
        </div>
        <div className="Rmovies">
          {Laughtertherapy.map((item, i) => {
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

export default LaughterTherapy;
