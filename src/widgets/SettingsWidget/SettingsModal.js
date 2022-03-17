import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import Modal from "react-modal";
import "./SettingsWidget.css";

export default function SettingsModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  Modal.setAppElement(document.getElementById("root"));
  return (
    <div>
      <button id="SettingsWidgetOpenButton" onClick={openModal}>
        <i className="bi-gear"></i>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="SettingsWidgetModal"
        contentLabel="Settings Widget"
        overlayClassName="SettingsWidgetOverlay"
      >
        {/* Content Start*/}

        <Draggable>
          <div id="SettingsWidgetContent">
            <button id="SettingsWidgetCloseButton" onClick={closeModal}>
              <p className="X">X</p>
            </button>
            <i className="bi-gear"></i>
          </div>
        </Draggable>

        {/* Content End*/}
      </Modal>
    </div>
  );
}
