import React, { useState } from "react";
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

  const [bgColor, setBgColor] = useState("#ffffff");

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setBgColor(newColor);
    document.querySelector("body").style.backgroundColor = newColor;
  };

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
            <p>
              Site_Background_Color:
              <input
                id="bg-colorInput"
                className="colorInput"
                type="color"
                value={bgColor}
                onChange={handleColorChange}
              ></input>
            </p>
          </div>
        </Draggable>

        {/* Content End*/}
      </Modal>
    </div>
  );
}
