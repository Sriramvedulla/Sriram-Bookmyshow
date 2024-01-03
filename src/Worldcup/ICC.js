import React from "react";

const matches = [
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-ahmedabad-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-bengaluru-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-chennai-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-delhi-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-dharamshala-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-guwahati-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-hyderabad-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-kolkata-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-lucknow-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-mumbai-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-pune-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-trivandrum-web-collection-202308221143.png",
  },
];

function ICC() {
  return (
    <div>
      <div>
        <h3 className="heading2" id="venue">
          Find Matches By Venue
        </h3>
      </div>

      <div className="mainimg-card">
        {matches.map((x, j) => {
          return (
            <div key={j}>
              <div className="imageCard">
                <img src={x.imageLink} alt="worldcupimg" />
              </div>
              <div></div>
            </div>
          );
        })}
      </div>

      <div className="ott-logo">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-240:q-80/cwc-partners-web-collection-202308240228.png"
          alt="bannerimg"
        />
      </div>
    </div>
  );
}

export default ICC;
