import React from "react";
import "../App.css";
function Offers4({ imgLink, para1, para2, thumbnail }) {
  return (
    <div className="card">
      <img src={imgLink} alt="cardsimag" />
      <img id="thumbnail" src={thumbnail} alt="imgthumbnail" />
      <p>{para1}</p>
      <p> Valid till{para2}</p>
    </div>
  );
}

export default Offers4;
