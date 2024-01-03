import React from "react";
import Prophome from "./Prophome";

const card = [
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358311-zfaqpqtews-portrait.jpg",
    title: "Chess - Chai - Connect",
    para1: "One Paramount: Chennai",
    para2: "Chess",
    para3: "₹ 199",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzIEZlYg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00339877-nsljauckpe-portrait.jpg",
    title: "Samurai Sudoku Championship by Malsar",
    para1: "Watch on Zoom",
    para2: "Online Games",
    para3: "₹ 149",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00376165-cdvlyvdkcl-portrait.jpg",
    title: "Madras Marathon",
    para1: "Dindigul Thalappakatti Restaurant: Chennai",
    para2: "5K",
    para3: "₹ 499",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00360333-nelhudfswy-portrait.jpg",
    title: "Fitness Virtual Marathon 2024",
    para1: "Your Place and Your Time: India",
    para2: "5k",
    para3: "₹ 390",
  },
];

function Sports() {
  return (
    <div className="sportsprop">
      {card.map((mov, i) => {
        return (
          <Prophome
            key={i}
            img={mov.img}
            heading={mov.title}
            para1={mov.para1}
            para2={mov.para2}
            para3={mov.para3}
          ></Prophome>
        );
      })}
    </div>
  );
}

export default Sports;
