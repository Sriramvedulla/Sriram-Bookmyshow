import React from "react";
//LaughterTherapy====================================
const Laughtertherapy = [
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366286-aaeympfgmu-portrait.jpg",
    h3: "AnnaMala VandhuttaDa! ByTanglish Comedy",
    p: "Backyard:Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00351918-wfyafagjfj-portrait.jpg",
    h3: "Ramkumar Paathi Annachi Meethi",
    p: "The Music: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365092-qugtqdasys-portrait.jpg",
    h3: "Thandhiram-standup Comedy",
    p: "Academy: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365053-ynfctexhhj-portrait.jpg",
    h3: "MindFool India Tour - Vir Das",
    p: "Sir Mutha Venkatasubba Rao Concert Hall: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358075-rzkwxkshvk-portrait.jpg",
    h3: "AANSPLAINING by Karthik Kumar - TOUR.. ",
    p: "IDAM - The Art & Cultural Spacce: Chennai  ",
  },
];
function LaughterTherapy() {
  return (
    <div>
      <div className="movies">
        <div className="Movies">
          <h2>Laughter Therapy</h2>
          <p>See All</p>
        </div>
        <div className="Movies">
          {Laughtertherapy.map((item) => {
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

export default LaughterTherapy;
