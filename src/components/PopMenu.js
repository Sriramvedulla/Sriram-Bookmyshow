import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoApple } from "react-icons/bi";
import BasicTextFields from "./Login";

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        onClick={toggle}
        style={{
          color: "#fff",
          padding: "5px 15px",
          border: "none",
          fontSize: "12px",
          backgroundColor: "#f84464",
        }}
      >
        Sign In
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader
          toggle={toggle}
          style={{ marginLeft: "35%", borderBottom: "none" }}
        >
          <strong style={{ fontSize: "18px", fontWeight: "600" }}>
            Get Started
          </strong>
        </ModalHeader>
        <ModalBody>
          <div className="google">
            <FcGoogle className="coloricon"></FcGoogle>
            <b className="icontext">Continue with Google</b>
          </div>
          <div className="google">
            <AiOutlineMail className="coloricon"></AiOutlineMail>
            <b className="icontext">Continue with Email</b>
          </div>
          <div className="google">
            <BiLogoApple className="coloricon"></BiLogoApple>
            <b className="icontext">Continue with Apple</b>
          </div>
          <p className="or">OR</p>
          <div className="mnumber">
            <img
              src="https://in.bmscdn.com/webin/common/icons/indianflag.svg"
              alt="indlogo"
            />
            <strong>+91</strong>
            <BasicTextFields></BasicTextFields>
          </div>
          <div>
            <button type="button" className="continue">
              Continue
            </button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Example;
