import "./Events.css";
import {
  UncontrolledAccordion,
  AccordionHeader,
  AccordionItem,
  AccordionBody,
} from "reactstrap";
import { useState } from "react";

const array1 = [
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00380491-rnxjzaqlbc-portrait.jpg",
    name: "SAARANG-PPOULAR NIGHT",
    languages: "Telugu",
    catagory: "Photography | English, Hindi, Telugu | 12yrs + | 3hrs",
    price: 4000,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNyBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00375051-kjqsqfjmlh-portrait.jpg",
    name: "Vikkals of Vikram",
    languages: "Tamil",
    type: "exhibitions",
    catagory: "Comics | English, Tamil, Hindi | 16yrs + | 22hrs",
    price: 1000,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxOSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379602-adcqmkmvxb-portrait.jpg",
    name: "Friends in Concert",
    languages: "Tamil",
    type: "performances",
    catagory: "Dance | Tamil | 3yrs + | 3hrs 30mins",
    price: 300,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAxNyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379379-gnhfnyfvsk-portrait.jpg",
    name: "VISHAKHA HARI - ENGUM RAMAN EDILUM RAMAN",
    languages: "English",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    filter: "outdoorevents",
    price: 399,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379412-trqgwdkfky-portrait.jpg",
    name: "Star Singers Musical Nite",
    languages: "English",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    price: 1250,
    filter: "outdoorevents",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00380492-knplatlyfr-portrait.jpg",
    name: "SAARANG - ROCK NIGHT",
    languages: "English",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    price: 350,
    filter: "outdoorevents",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00377034-cpzmbtlrnd-portrait.jpg",
    name: "P. UNNIKRISHNAN AND UTHRA - CLASSICAL CONCERT",
    languages: "Hindi",
    type: "music shows",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    price: 799,
    filter: "outdoorevents",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNyBGZWIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00376976-yhjpajlpys-portrait.jpg",
    name: "Chennai Comic Con 2024",
    type: "music shows",
    languages: "Tamil",
    filter: "outdoorevents",
    catagory: "Comedy | Tamil | 12yrs + | 1hr 30mins",
    price: 499,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAzIEphbiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00371238-xxqcslzwkb-portrait.jpg",
    name: "Play Station Center",
    languages: "Telugu",
    type: "workshop",
    catagory: "Films",
    price: 2500,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAxNiBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379340-bdmpjsqgnv-portrait.jpg",
    name: "RANJANI & GAYATRI - CLASSICAL CONCERT",
    languages: "Telugu",
    type: "music shows",
    catagory: "Concerts",
    price: 299,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAxNSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379500-qtgppyttyq-portrait.jpg",
    name: "SUDHA RAGHUNATHAN - CLASSICAL CONCERT",
    languages: "Tamil",
    catagory: "Concerts",
    type: "music shows",
    location: "Kamarajar Arangam: Chennai",
    price: 500,
    filter: "outdoorevents",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00351918-wfyafagjfj-portrait.jpg",
    name: "Jagane Thandhiram - Tamil Standup Comedy",
    languages: "Tamil",
    catagory: "Comedy",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00378905-wzvyvqmjcf-portrait.jpg",
    name: "SPB CHARAN presents- CLASSICS OF SPB",
    languages: "Hindi",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
    filter: "fastfilling",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358075-rzkwxkshvk-portrait.jpg",
    name: "Praveen Kumar - Family Man Return",
    languages: "Tamil",
    catagory: "Comedy | Tamil | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00355125-bvhnykudtx-portrait.jpg",
    name: "Kisi Ko Batana Mat Ft. Anubhav Singh Bassi ",
    languages: "Tamil",
    catagory: "Comedy | Tamil | 12yrs + | 1hr 30mins",
    filter: "fastfilling",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00352262-bpetysvrwj-portrait.jpg",
    name: "Speed Dating ",
    catagory: "NY Parties",
    languages: "Hindi",
    filter: "fastfilling",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAzIEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382077-rkaghaxcpt-portrait.jpg",
    name: "Prophecy - by Raghava Krishna",
    languages: "Hindi",
    type: "online streaming events",
    catagory: "Magic",
    price: 49,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00361726-sjhrknfmjg-portrait.jpg",
    languages: "English",
    name: "GUNA SAI LIVE - A TAMIL STANDUP COMEDY SHOW ",
    catagory: "Stand up Comedy",
    price: 399,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMiBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00380490-tlpgzvrknq-portrait.jpg",
    name: "SAARANG - EDM NIGHT",
    languages: "English",
    catagory: "Music Festivals",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00361816-xvexrcgsul-portrait.jpg",
    name: "MADRAS COMEDY SHOW ",
    languages: "English",
    catagory: "Stand up Comedy",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAzIEphbiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00366687-qpnusdcgcx-portrait.jpg",
    name: "PLAY 'N' LEARN Express Avenue Mall Chennai",
    languages: "Hindi",
    catagory: "Entertainment",
    price: 499,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00373677-fdaqdezhdb-portrait.jpg",
    languages: "Gujarati",
    name: "Ed Sheeran: +–=÷× Tour",
    catagory: "Concert",
    price: 249,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379881-fxwyprmncb-portrait.jpg",
    name: "UNNIKRISHNAN & UTHARA - CLASSICAL CONCERT ",
    type: "kids",
    languages: "Hindi",
    catagory: "Concerts",
    price: 700,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355836-akhgjdpgmm-portrait.jpg",
    name: "Blind Dating 30+ - Florican",
    catagory: "Dating",
    languages: "Hindi",
    type: "meetups",
    price: 299,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382084-fhbmvuqnpz-portrait.jpg",
    name: "Sunburn Campus at Shaastra 2024",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    price: 399,
    type: "workshop",
    languages: "Bengali",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA0IEZlYg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382024-whqmcuxeru-portrait.jpg",
    name: "Padmabushan  Dr.P. Susheela  Musical  Nite",
    languages: "multilanguage",
    catagory: "Concerts",
    price: 299,
    type: "onlinestreaming",
  },
];

const langArray = [
  "English",
  "Hindi",
  "Tamil",
  "Telugu",
  "Malayalam",
  "Kannada",
  "Bengali",
  "Gujarati",
  "multilanguage",
];

function Events() {
  const [Evelanguage, setEveLanguage] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [newEvelanguage, setnewEveLanguage] = useState(array1);

  function multiplelangStates(index) {
    const newlanbtnActive = Evelanguage.map((ele, i) => {
      if (index === i) {
        return !ele;
      }
      return ele;
    });
    console.log(newlanbtnActive);
    setEveLanguage(newlanbtnActive);

    let mapgroupArray = newlanbtnActive.map((langTF, i) => {
      let filteredArray = [];
      if (langTF) {
        filteredArray = array1.filter((ele) => ele.languages === langArray[i]);
      }
      return filteredArray;
    });

    //console.log([...mapgroupArray[0],...mapgroupArray[1]])
    let newMapGroupArray = [
      ...mapgroupArray[0],
      ...mapgroupArray[1],
      ...mapgroupArray[2],
      ...mapgroupArray[3],
      ...mapgroupArray[4],
      ...mapgroupArray[5],
      ...mapgroupArray[6],
      ...mapgroupArray[7],
      ...mapgroupArray[8],
    ];

    if (newMapGroupArray.length === 0) {
      setnewEveLanguage(array1);
    } else {
      setnewEveLanguage(newMapGroupArray);
    }
  }

  function filterfunction() {
    // const lang = array1.filter((ele) => ele.languages === x);
    // setnewEveLanguage(lang);
  }

  return (
    <div className="bigcontainer">
      {" "}
      {/* main container start */}
      <div className="div2nd">
        <img
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1693217899163_jonitadesktop.jpg"
          alt=""
        />
      </div>
      <div className="div3rd"></div>
      <div className="div4section">
        <div className="div4-left">
          <UncontrolledAccordion defaultOpen={["1"]} stayOpen>
            <AccordionItem className="border border-light accord">
              <AccordionHeader targetId="1">Date</AccordionHeader>
              <AccordionBody accordionId="1">
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Today
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Tomorrow
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  This Weekend
                </button>
                <div className="inputbox">
                  <input type="checkbox" id="daterange" />
                  <label htmlFor="daterange">Date Range</label>
                </div>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="border border-light accord">
              <AccordionHeader targetId="2">Languages</AccordionHeader>
              <AccordionBody accordionId="2">
                <button
                  className={
                    Evelanguage[0]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(0);
                    // filterfunction("English");
                  }}
                >
                  English
                </button>
                <button
                  className={
                    Evelanguage[1]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(1);
                    filterfunction("Hindi");
                  }}
                >
                  Hindi
                </button>
                <button
                  className={
                    Evelanguage[2]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(2);
                    filterfunction("Tamil");
                  }}
                >
                  Tamil
                </button>
                <button
                  className={
                    Evelanguage[3]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(3);
                    filterfunction("Telugu");
                  }}
                >
                  Telugu
                </button>
                <button
                  className={
                    Evelanguage[4]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(4);
                    filterfunction("Malayalam");
                  }}
                >
                  Malayalam
                </button>
                <button
                  className={
                    Evelanguage[5]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(5);
                    filterfunction("Kannada");
                  }}
                >
                  Kannada
                </button>
                <button
                  className={
                    Evelanguage[6]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(6);
                    filterfunction("Bengali");
                  }}
                >
                  Bengali
                </button>
                <button
                  className={
                    Evelanguage[7]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(7);
                    filterfunction("Gujarati");
                  }}
                >
                  Gujarati
                </button>
                <button
                  className={
                    Evelanguage[8]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(8);
                    filterfunction("multilanguage");
                  }}
                >
                  Multi Language
                </button>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="border border-light accord">
              <AccordionHeader targetId="3">Categories</AccordionHeader>
              <AccordionBody accordionId="3">
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
              <AccordionHeader targetId="4">More Filters</AccordionHeader>
              <AccordionBody accordionId="4">
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
              <AccordionHeader targetId="5">Price</AccordionHeader>
              <AccordionBody accordionId="5">
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
        <div className="div4th-right">
          {newEvelanguage.map((index, y) => {
            return (
              <div className="right-flex" key={y}>
                <img
                  style={{ height: "300px", borderRadius: "10px" }}
                  src={index.img}
                  alt="eventimgs"
                />
                <h4 className="head4" style={{ width: "200px" }}>
                  {index.name}
                </h4>
                <p className="catpara">{index.catagory}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    /* main container end */
  );
}
export default Events;
