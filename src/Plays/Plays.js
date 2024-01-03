import React from "react";
import "./Plays.css";

const PlaysData = {
  dataplay: [
    {
      imageLink:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEphbiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00381752-evdjhfwjql-portrait.jpg",
      title: "LIVES OF CLAY",
      description: "The Forum - Celebration and Convention: Ahmedabad",
      languages: "English",
      price: "₹ 250 onwards",
    },
    {
      imageLink:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00375269-fgrkrfkubx-portrait.jpg",
      title: "Allauddin and 100watts Bulb",
      description: "Mangalbaug and Bucky Galleries: Ahmedabad",
      languages: "Hindi",
      price: "₹ 500",
    },
    {
      imageLink:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00349046-vzbvagysen-portrait.jpg",
      title: "Mouthful of Stories - Children and Family",
      description: "Prayogshala: Ahmedabad",
      languages: "Gujarati",
      price: "₹ 500",
    },
    {
      imageLink:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00377307-fqyyldzvmt-portrait.jpg",
      title: "MOUNAM SANGADAM – The Mouth Trap",
      description: "The Forum - Celebration and Convention: Ahmedabad",
      languages: "Hindi",
      price: "₹ 250 onwards",
    },
    {
      imageLink:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00380290-cwgybqtrjx-portrait.jpg",
      title: "Notion(s): In Between You and Me",
      description: "The Forum - Celebration and Convention: Ahmedabad",
      languages: "English",
      price: "₹ 250 onwards",
    },
    {
      imageLink:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00378192-lafhgelyaj-portrait.jpg",
      title: "A Story Walk through Velachery ",
      description: "Mangalbaug and Bucky Galleries: Ahmedabad",
      languages: "Hindi",
      price: "₹ 500",
    },
    {
      imageLink:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00378824-jkwbjsexxe-portrait.jpg",
      title: " Tiruchiyai meeta Sundarapandiyan",
      description: "Prayogshala: Ahmedabad",
      languages: "Gujarati",
      price: "₹ 500",
    },
    {
      imageLink:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00327515-qhzyftebwl-portrait.jpg",
      title: "Stories at Sunset  - Storytime for Adults",
      description: "The Forum - Celebration and Convention: Ahmedabad",
      languages: "Hindi",
      price: "₹ 250 onwards",
    },
    {
      imageLink:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00380451-jynatvegxw-portrait.jpg",
      title: "Sound Healing from Auroville",
      description: "The Forum - Celebration and Convention: Ahmedabad",
      languages: "English",
      price: "₹ 250 onwards",
    },
    {
      imageLink:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00380038-usdtwnuttn-portrait.jpg",
      title: "Meesai Aanalum Manaivi",
      description: "Mangalbaug and Bucky Galleries: Ahmedabad",
      languages: "Hindi",
      price: "₹ 500",
    },
    {
      imageLink:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00381577-pphmvmbgmq-portrait.jpg",
      title: "Spotlight (Edition 9)",
      description: "Prayogshala: Ahmedabad",
      languages: "Gujarati",
      price: "₹ 500",
    },
    {
      imageLink:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00378824-jkwbjsexxe-portrait.jpg",
      title: " Tiruchiyai meeta Sundarapandiyan",
      description: "The Forum - Celebration and Convention: Ahmedabad",
      languages: "Hindi",
      price: "₹ 250 onwards",
    },
  ],
};
function Plays() {
  return (
    <div className="play-section">
      {PlaysData.dataplay.map((item, p) => {
        return (
          <div className="plays" key={p}>
            <img src={item.imageLink} alt="playimg" />
            <h3 className="play-title">{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.languages}</p>
            <b>{item.price}</b>
          </div>
        );
      })}
    </div>
  );
}

export default Plays;
