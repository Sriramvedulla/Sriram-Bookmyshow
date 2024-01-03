import React, { useState, useEffect } from "react";
import "./Stream.css";
const picture = [
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/naal--bhag-2-et00374217-1702023353.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/oppenheimer-et00347867-1700808846.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/tasher-ghawr-et00381434-1703586376.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/blue-beetle-et00331565-1702638412.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/killers-of-the-flower-moon-et00365290-1701427555.jpg",
];
const picture2 = [
  "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00059052-jdujactdne-portrait.jpg",
  "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00038182-xznjtfveak-portrait.jpg",
  "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00380947-bazgeyaatl-portrait.jpg",
  "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00381434-vngzaskayp-portrait.jpg",
  "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00363189-atvgnmuwwl-portrait.jpg",
  "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00374217-ehuvedwnrt-portrait.jpg",
];
var n = picture.length;
function Stream() {
  const [firstcontainerimg, setimageindex] = useState(0);
  function change(event) {
    if (event.target.id === "btn2") {
      setimageindex((firstcontainerimg + 1) % n);
    }
    if (event.target.id === "btn1") {
      setimageindex((firstcontainerimg - 1 + n) % n);
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setimageindex((firstcontainerimg + 1) % n);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [firstcontainerimg]);
  // picture.map((item) => {});
  return (
    <div>
      {/* {picture.map((item) => (
        <img key={item} src={item} />
      ))} */}
      <div id="imagecontainer">
        <button id="btn1" onClick={change}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <img id="imga" src={picture[firstcontainerimg]} alt="streamimg" />
        <button id="btn2" onClick={change}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div id="container2">
        <div id="imagecontainer2">
          <h4>Premier of the Week</h4>
          <div id="imagevaluecontainer">
            {picture2.map((item, index) => (
              <img id="imga2" key={index} src={item} alt="streamimg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stream;
