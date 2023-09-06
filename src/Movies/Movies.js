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
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NjEzLjVLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330424-ahkfdbxxjp-portrait.jpg",
    title: "Jawan",
    certificate: "UA",
    languages: "Hindi, Telugu , Tamil",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMDRLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg",
    title: "Jailer",
    certificate: "UA",
    languages: "Tamil , Malayalam , Kannada , Telugu , Hindi",
    route: "/jailerTickets",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTkuOUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364397-vtjczctwmn-portrait.jpg",
    title: "RDX",
    certificate: "UA",
    languages: "Malayalam , Kannada , Telugu , Tamil",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICA3SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331565-akxtqdbbwa-portrait.jpg",
    title: "Blue Beetle",
    certificate: "UA",
    languages: "English , Hindi , Telugu , Tamil",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICAxMS41SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363001-xgtxmsxmys-portrait.jpg",
    title: "Voice of Sathyanathan",
    certificate: "UA",
    languages: "Malayalam",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyMDIuMUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg",
    title: "Gadar 2: The Katha Continues",
    certificate: "UA",
    languages: "Hindi",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxMDQuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361712-npjeqfmyrt-portrait.jpg",
    title: "OMG 2",
    certificate: "UA",
    languages: "Hindi",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICAxNTEuNksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347867-rruvehxwpe-portrait.jpg",
    title: "Oppenheimer",
    certificate: "UA",
    languages: "Hindi,English",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4xLzEwICAxLjdLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367624-xehmldscrk-portrait.jpg",
    title: "Karumegangal Kalaigindrana",
    certificate: "U",
    languages: "Tamil",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4zLzEwICA0NC41SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00072466-pzdcejeceq-portrait.jpg",
    title: "Barbie",
    certificate: "UA",
    languages: "English",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgMTUuNksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365396-qnqdtlfpwu-portrait.jpg",
    title: "Ghoomer",
    certificate: "UA",
    languages: "Hindi",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS42LzEwICAxNDUgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367000-rnxuzymwam-portrait.jpg",
    title: "Digital Village",
    certificate: "UA",
    languages: "Malayalam",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni44LzEwICA5MiBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365786-tsxzzbyvva-portrait.jpg",
    title: "Jailer (Malayalam)",
    certificate: "UA",
    languages: "Malayalam",
    route: "/jailerTickets",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NC43LzEwICAxLjJLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367748-eejgvttnbx-portrait.jpg",
    title: "Rangoli",
    certificate: "U",
    languages: "Tamil",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC42LzEwICAxLjJLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365979-fcewhegsgv-portrait.jpg",
    title: "Corona Dhavan",
    certificate: "UA",
    languages: "Malayalam",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICAxOS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00358316-uzzgjdlpvr-portrait.jpg",
    title: "Meg 2: The Trench",
    certificate: "UA",
    languages: "English , Hindi , Telugu , Tamil",
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
          {MoviesData.map((x) => {
            return (
              <div className="bmymovies">
                <Link className="linked" to={x.route}>
                  <div className="bmovies">
                    <img src={x.imageLink} alt="" />
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
