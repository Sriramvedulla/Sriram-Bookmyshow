import React from "react";

function Offers3({ imgLink, para1, para2, thumbnail }) {
  return (
    <div className="card">
      <img src={imgLink} alt="cardsimag" />
      <img id="thumbnail" src={thumbnail} alt="imgthumbnail" />
      <p>{para1}</p>
      <p> Valid till{para2}</p>
    </div>
  );
}

export default Offers3;
