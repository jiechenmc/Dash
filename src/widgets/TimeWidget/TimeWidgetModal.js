import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import Modal from "react-modal";
import "./TimeWidget.css";

export default function TimeWidgetModal() {
  const parseTime = () => {
    const timeOfDay = date.getHours() - 12 < 0 ? "AM" : "PM";
    const hours = timeOfDay === "PM" ? date.getHours() - 12 : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return `${hours}:${minutes}:${seconds} ${timeOfDay}`;
  };

  const [date, setDate] = useState(new Date());

  // This useEffect hook only runs once when the component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const today = date.toDateString();
  const time = parseTime();

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
      <button id="TimeWidgetOpenButton" onClick={openModal}>
        <i className="bi-clock"></i>
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="TimeWidgetModal"
        contentLabel="Time Widget"
        overlayClassName="TimeWidgetOverlay"
      >
        {/* Content Start*/}

        <Draggable>
          <div id="TimeWidgetContent">
            <button id="TimeWidgetCloseButton" onClick={closeModal}>
              <p className="X">X</p>
            </button>
            <i className="bi-clock"></i>
            <p className="centerText date">
              {today}
              <br></br>
              <small>{time}</small>
            </p>
          </div>
        </Draggable>

        {/* Content End*/}
      </Modal>
    </div>
  );
}
