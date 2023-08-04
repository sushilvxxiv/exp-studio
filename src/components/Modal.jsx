import React from "react";
import Graph from "../graphs/collapsableTree";
import Globe from "../graphs/versorDragging";


const modelContentMap={
  a: <Graph />,
  b: <Globe />,

}

const Modal = ({ name, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          X
        </span>
        <div className="modal-graph">
        {modelContentMap[name]}
        </div>
      </div>
    </div>
  );
};

export default Modal;

