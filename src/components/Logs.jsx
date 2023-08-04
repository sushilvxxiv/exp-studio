import React from "react";
import BottomBar from "./Bottombar";

function Logs() {
  return (
    <div className="logs-page">
      <div className="logs-page-text  page-text">Logs Canvas</div>

      <div className="logs-page-footer">
        <BottomBar />
      </div>
    </div>
  );
}

export default Logs;

