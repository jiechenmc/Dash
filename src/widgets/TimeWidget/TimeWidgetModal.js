import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./TimeWidget.css";

export default function TimeWidgetModal() {
  const parseTime = () => {
    const timeOfDay = date.getHours() - 12 < 0 ? "AM" : "PM";
    const hours = timeOfDay === "PM" ? date.getHours() - 12 : date.getHours();
    const minutes = date.getMinutes();
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

  const [modalIsOpen, setIsOpen] = React.useState(false);

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
        overlayClassName="TimeWidgetModalOverlay"
        contentLabel="Time Widget"
      >
        {/* Content Start*/}
        <i className="bi-clock"></i>
        <p className="centerText">
          {today}
          <br></br>
          <small>{time}</small>
        </p>
        <button id="TimeWidgetCloseButton" onClick={closeModal}>
          X
        </button>
        {/* Content End*/}
      </Modal>
    </div>
  );
}
