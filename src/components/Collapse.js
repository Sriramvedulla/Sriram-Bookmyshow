import React, { useState } from "react";
import { Collapse, CardBody, Card } from "reactstrap";

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.StrictMode>
      <p onClick={toggle} className="viewcities">
        View All Cities
      </p>
      <Collapse isOpen={isOpen}>
        <Card style={{ border: "none" }}>
          <CardBody>
            <div className="cardbody">
              <ul>
                <li>Aalo</li>
                <li>Addanki</li>
                <li>Agar Malwa</li>
                <li>Ahmednagar</li>
                <li>Akbarpur</li>
                <li>Alakode</li>
                <li>Alibaug</li>
              </ul>
              <ul>
                <li>Abohar</li>
                <li>Adilabad</li>
                <li>Agartala</li>
                <li>Ahore</li>
                <li>Akividu</li>
                <li>Alangudi</li>
                <li>Aligarh</li>
              </ul>
              <ul>
                <li>Abu road</li>
                <li>Adimali</li>
                <li>Agiripalli</li>
                <li>Aizawl</li>
                <li>Akluj</li>
                <li>Alangulam</li>
                <li>Almora</li>
              </ul>
              <ul>
                <li>Achampet</li>
                <li>Adipur</li>
                <li>Agra</li>
                <li>Ajmer</li>
                <li>Akola</li>
                <li>Alappuzha</li>
                <li>Alsisar (Rajastan)</li>
              </ul>
              <ul>
                <li>Acharapakkam</li>
                <li>Adoni</li>
                <li>Ahmedgarh</li>
                <li>Akaltara</li>
                <li>Akot</li>
                <li>Alathur</li>
                <li>Alur</li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default Example;
