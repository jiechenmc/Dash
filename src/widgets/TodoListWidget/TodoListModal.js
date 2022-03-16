import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import Modal from "react-modal";
import TodoL from "./TodoL";
import "./TodoList.css";

export default function TodoListModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  Modal.setAppElement(document.getElementById("root"));

  const [listItems, setListItems] = useState([]);
  const inputEl = useRef();

  const handleAddRequest = () => {
    const currentTask = inputEl.current.value;
    if (currentTask === "") return;
    setListItems((prevItems) => {
      return [...prevItems, currentTask];
    });
    inputEl.current.value = null;
  };

  const handleRemoveRequest = () => {
    const currentTask = inputEl.current.value;
    if (currentTask === "") return;
    setListItems((previousItems) => {
      let temp = [];
      previousItems.forEach((element) => {
        if (element !== currentTask) temp.push(element);
      });
      return temp;
    });
    inputEl.current.value = null;
  };

  const handleClearRequest = () => {
    setListItems([]);
  };

  return (
    <div>
      <button id="TDLOpen" onClick={openModal}>
        <i className="bi-clipboard"></i>
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="TodoListModal"
        contentLabel="TodoList Widget"
        overlayClassName="TodoListWidgetOverlay"
      >
        {/* Content Start*/}
        <Draggable>
          <div id="TDLContent">
            <button id="TDLClose" onClick={closeModal}>
              <p className="X">X</p>
            </button>
            <i className="bi-clipboard"></i>
            <input type="text" placeholder="Task..." ref={inputEl}></input>
            <span id="A-RButtons">
              <button id="addButton" onClick={handleAddRequest}>
                +
              </button>
              <button id="removeButton" onClick={handleRemoveRequest}>
                -
              </button>
              <button id="clearButton" onClick={handleClearRequest}>
                X
              </button>
            </span>
            <span id="listItemsContainer">
              <TodoL todos={listItems}></TodoL>
            </span>
          </div>
        </Draggable>
        {/* Content End*/}
      </Modal>
    </div>
  );
}
