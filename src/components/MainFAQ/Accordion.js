import React, { useState } from "react";
import arrowDown from "../../images/icon-arrow-down.svg";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h2 className="question">{title}</h2>
        <div className="arrow">
          <img
            src={arrowDown}
            alt="arrow down"
            className={isActive ? "active" : "normal"}
          />
        </div>
      </div>
      {isActive && (
        <div className="box-content">
          <p className="response">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
