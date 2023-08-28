import React from "react";

function Footerimg() {
  return (
    <div className="tickets">
      <a href="">
        <div className="icons">
          <i
            class="fa-solid fa-headset fa-xl"
            style={{ color: "#b9bcc1;" }}
          ></i>
          <p>24/7 customer care</p>
        </div>
      </a>
      <a href="">
        <div className="icons">
          <i
            class="fa-solid fa-ticket fa-xl"
            style={{ color: " #b9bcc1;" }}
          ></i>
          <p>resend booking confirmation</p>
        </div>
      </a>
      <a href="">
        <div className="icons">
          <i
            class="fa-solid fa-envelope-open-text fa-xl"
            style={{ color: "#b9bcc1;" }}
          ></i>
          <p>subscribe to news letter</p>
        </div>
      </a>
    </div>
  );
}

export default Footerimg;
