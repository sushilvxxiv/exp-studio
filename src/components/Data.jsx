import React, { useState } from "react";
import BottomBar from "./Bottombar";
import Modal from "./Modal";

const graphIcons = [
  { id: 1, name: "a", address: "exp-icon-1", function: "" },
  { id: 2, name: "b", address: "exp-icon-2", function: "" },
  { id: 3, name: "c", address: "exp-icon-3", function: "" },
  { id: 4, name: "d", address: "exp-icon-4", function: "" },
  { id: 5, name: "e", address: "exp-icon-5", function: "" },
  { id: 6, name: "f", address: "exp-icon-6", function: "" },
  { id: 7, name: "g", address: "exp-icon-7", function: "" },
  { id: 8, name: "h", address: "exp-icon-8", function: "" },
  { id: 9, name: "i", address: "exp-icon-9", function: "" },
  { id: 10, name: "j", address: "exp-icon-10", function: "" },
  { id: 11, name: "k", address: "exp-icon-11", function: "" },
  { id: 12, name: "l", address: "exp-icon-12", function: "" },
  { id: 13, name: "m", address: "exp-icon-13", function: "" },
  { id: 14, name: "n", address: "exp-icon-14", function: "" },
  { id: 15, name: "o", address: "exp-icon-15", function: "" },
];

function Data() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName]=useState(null);

  const handleClick = (iconName) => {
    setShowModal(true);
    setName(iconName);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="data-page">
      <div className="data-page-main">
        <div
          className="data-page-container page-text"
          style={{ color: "blue", fontSize: "1.2rem" }}
        >
          Data Canvas
        </div>
      </div>
      <div className="graph-icons-component">
        {graphIcons.map((icon) => (
          <div
            key={icon.id}
            onClick={() => handleClick(icon.name)}
            className="graph-icon graph-icon-1"
          >
            <img
              className={`graph-icon-image`}
              src={require(`../images/${icon.address}.jpg`)}
              alt={`${icon.address}`}
            />
          </div>
        ))}
      </div>
      {showModal && <Modal onClose={handleCloseModal} name={name} />}

      <div className="data-page-footer">
        <BottomBar />
      </div>
    </div>
  );
}

export default Data;
