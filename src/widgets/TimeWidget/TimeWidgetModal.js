import React, { useEffect, useState } from "react";
import Modal from "react-modal";

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

  const customStyles = {
    content: {
      backgroundColor: "lime",
    },
  };
  return (
    <div>
      <button onClick={openModal}>
        <i className="bi-clock"></i>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Time Widget"
      >
        <i className="bi-clock"></i>
        <p className="centerText">
          {today}
          <br></br>
          <small>{time}</small>
        </p>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}
