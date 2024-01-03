// import { act } from "react-dom/test-utils";
import "./Activities.css";
import React from "react";

const activities = [
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAzIEphbiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00307957-gyusymzubk-portrait.jpg",
    title: "Snow Kingdom Chennai",
    discripition: "VGP Universal Kingdom: Chennai",
    category: "Snow Parks",
    price: "₹ 650 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAzIEphbiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00362045-bhbjujpyhu-portrait.jpg",
    title: "Hamleys Play - Chennai",
    discripition: "Hamleys Phoenix Marketcity: Chennai",
    category: "Theme Parks",
    price: "₹ 500 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCA0IEphbiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00310275-qfjwjwnlre-portrait.jpg",
    title: "imagica Water Park",
    discripition: "Imagica Water Park (Khopoli): Mumbai",
    category: "Theme park",
    price: "₹ 754 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00380526-dsctjhwpaa-portrait.jpg",
    title: "The Storyteller's Lunch",
    discripition: "The Westin Chennai Velachery",
    category: "Fine Dining",
    price: "₹ 1250 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCA0IEphbiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00375390-qugkbnwybz-portrait.jpg",
    title: "Day Out @ MGM",
    discripition: "MGM Beach Resorts: Chennai",
    category: "Resorts",
    price: "₹ 2803 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCA0IEphbiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00014607-engdszsccv-portrait.jpg",
    title: "Imagicaa Theme Park",
    discripition: "Imagica Theme Park (Khopoli): Mumbai",
    category: "Theme Parks",
    price: "₹ 707 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00063784-vzpyyxhsjp-portrait.jpg",
    title: "Wonderla Amusement Park Kochi",
    discripition: "Wonderla: Kochi",
    category: "Theme Parks",
    price: "₹ 1012 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzIEZlYiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00378740-bnstjrvncp-portrait.jpg",
    title: "Greenpeace Ship - Open Boat ",
    discripition: "Chennai Port Trust: Chennai",
    category: "Unique Tours",
    price: "Free",
  },
];

export default function Activities() {
  return (
    <div className="maindivs">
      {activities.map((x, y) => {
        return (
          <div key={y}>
            <img
              className="Activitiesimages"
              src={x.imageLink}
              alt="actimages"
            />
            <h2 className="Activiteshead">{x.title}</h2>
            <p className="ActivitesPara">{x.discripition}</p>
            <p className="ActivitesPara">{x.category}</p>
            <p className="ActivitesPara">{x.price}</p>
          </div>
        );
      })}
    </div>
  );
}
