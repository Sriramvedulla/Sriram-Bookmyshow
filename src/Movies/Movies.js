import React from "react";
import {
  UncontrolledAccordion,
  AccordionHeader,
  AccordionItem,
  AccordionBody,
} from "reactstrap";
import "./Movies.css";
import { Link } from "react-router-dom";

const MoviesData = [
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA0OTguMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00301886-adtpyusrqu-portrait.jpg",
    title: "Salaar: Cease Fire - Part 1",
    certificate: "A",
    languages: "Telugu, Kannada, Hindi, Tamil, Malayalam",
    route: "/jawanTickets",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAyLjhLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00380404-xltbhnjqyc-portrait.jpg",
    title: "Saba Nayagan",
    certificate: "UA",
    languages: "Tamil",
    route: "/jailerTickets",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA5LjhLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00378033-cgjbwrsmgr-portrait.jpg",
    title: "Conjuring Kannappan",
    certificate: "UA",
    languages: "Tamil",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICAyMS4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00321161-crtrbkrqdj-portrait.jpg",
    title: "Aquaman and the Lost Kingdom",
    certificate: "UA",
    languages: "English , Hindi , Telugu , Tamil",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICAyMjQuNUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00326964-gfhauqthan-portrait.jpg",
    title: "Dunki",
    certificate: "UA",
    languages: "Hindi",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4yLzEwICAxNzggVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00381394-cmysqyplwz-portrait.jpg",
    title: "Nandhi Varman",
    certificate: "U",
    languages: "Tamil",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-NS43LzEwICAxNjYgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00381524-wsvyvystpm-portrait.jpg",
    title: "Sarakku",
    certificate: "UA",
    languages: "Tamil",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICAxMS4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00312544-utzpasftrb-portrait.jpg",
    title: "Devil: The British Secret Agent",
    certificate: "UA",
    languages: "Telugu",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMzZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379301-esmzjmyvaj-portrait.jpg",
    title: "Neru",
    certificate: "UA",
    languages: "Malayalam",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni42LzEwICAyMTUgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00378435-vtzeanzyyd-portrait.jpg",
    title: "Odavum Mudiyadhu Oliyavum Mudiyadhu",
    certificate: "UA",
    languages: "Tamil",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAxMDIuOUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364503-qhkxrggpbx-portrait.jpg",
    title: "Hi Nanna",
    certificate: "U",
    languages: "Telugu, Tamil, Malayalam, Kannada",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA1NzEuMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311762-rzpbrhskfn-portrait.jpg",
    title: "Animal",
    certificate: "A",
    languages: "Hindi, Telugu, Tamil, Kannada, Malayalam",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni42LzEwICBFYXJseSBSYXRpbmdz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00381418-uqqfmsecte-portrait.jpg",
    title: "Vattara Vazhakku",
    certificate: "UA",
    languages: "Tamil",
    route: "/jailerTickets",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICAzMzYgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00365212-swjvwkevga-portrait.jpg",
    title: "Migration",
    certificate: "U",
    languages: "English",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMTIuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00376793-eqdecxvmaa-portrait.jpg",
    title: "Joe (2023)",
    certificate: "UA",
    languages: "Tamil",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAxMTMuNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00310187-nbqbszhvcm-portrait.jpg",
    title: "Sam Bahadur",
    certificate: "UA",
    languages: "Hindi",
  },
];

function Movies() {
  return (
    <div className="moviesbody">
      <div className="bookmyshow">
        <div className="bmyleft">
          <UncontrolledAccordion defaultOpen={["1"]} stayOpen>
            <AccordionItem className="border border-light accord">
              <AccordionHeader targetId="1">Languages</AccordionHeader>
              <AccordionBody accordionId="1">
                <button
                  className="p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  onClick={() => {}}
                >
                  English
                </button>
                <button
                  className="p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  onClick={() => {}}
                >
                  Hindi
                </button>
                <button
                  className="p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  onClick={() => {}}
                >
                  Tamil
                </button>
                <button
                  className="p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  onClick={() => {}}
                >
                  Telugu
                </button>
                <button
                  className="p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  onClick={() => {}}
                >
                  Malayalam
                </button>
                <button
                  className="p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  onClick={() => {}}
                >
                  Kannada
                </button>
                <button
                  className="p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  onClick={() => {}}
                >
                  Bengali
                </button>
                <button
                  className="p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  onClick={() => {}}
                >
                  Gujarati
                </button>
                <button
                  className="p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  onClick={() => {}}
                >
                  Multi Language
                </button>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="border border-light accord">
              <AccordionHeader targetId="2">Categories</AccordionHeader>
              <AccordionBody accordionId="2">
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Online Streaming Events
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Workshops
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Comedy Shows
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Music Shows
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Kids
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Meetups
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Spirituality
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Exhibitions
                </button>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="border border-light accord">
              <AccordionHeader targetId="3">More Filters</AccordionHeader>
              <AccordionBody accordionId="3">
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Online Streaming
                </button>
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Outdoor Events
                </button>
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Fast Filling
                </button>
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Kids Allowed
                </button>
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Must Attend
                </button>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="border border-light accord">
              <AccordionHeader targetId="4">Price</AccordionHeader>
              <AccordionBody accordionId="4">
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Free
                </button>
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  0-500
                </button>
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  501-2000
                </button>
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Above 2000
                </button>
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        </div>
        <div className="bmyright">
          {MoviesData.map((x, i) => {
            return (
              <div className="bmymovies" key={i}>
                <Link className="linked" to={x.route}>
                  <div className="bmovies">
                    <img src={x.imageLink} alt="moviesimg" />
                    <h4>{x.title}</h4>
                    <p>{x.certificate}</p>
                    <p>{x.languages}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Movies;
