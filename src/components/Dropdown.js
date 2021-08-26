import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelected, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  //Eventlistener for body tag
  useEffect(() => {
    const onBodyClick = (e) => {
      if (e.target.contains(ref.current)) setOpen(false);
    }; 

    document.body.addEventListener("click", onBodyClick);

    return () => {
      //For cleanup or in case of contains method
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderOptions = options.map((option) => {
    if (selected === option) return null;
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelected(option)} // 1st eventListener
      >
        {option.label}
      </div>
    );
  });

  
  return (
    <div className="ui container" ref={ref}>
      <div className="ui form segment">
        <div className="field">
          <div className={`ui ribbon ${selected.value} label`}>
            Select a {label}
          </div>
          <div
            className="ui selection dropdown"
            id="dropdown"
            style={{ marginTop: "10px" }}
            onClick={() => setOpen(!open)} // 2nd eventListener
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderOptions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
