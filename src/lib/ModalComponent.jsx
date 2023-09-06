// import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ModalComponent.css";

const MyModal = ({ show, handleClose, text }) => {
  return (
    <div>
      <Modal className="modal-container" show={show} onHide={handleClose}>
        <Modal.Body className="modal-title">
          <p>{text}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="close-btn"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyModal;
