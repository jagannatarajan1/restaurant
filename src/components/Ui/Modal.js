import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const BackDrop = () => <div className="backdrop"></div>;

const ModalOverlay = (props) => (
  <div className="modal">
    <div className="content">{props.children}</div>
  </div>
);

const PortalContainer = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop />, PortalContainer)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalContainer
      )}
    </React.Fragment>
  );
};

export default Modal;
