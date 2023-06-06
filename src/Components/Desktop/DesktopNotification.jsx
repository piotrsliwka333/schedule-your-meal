import React from "react";

export const DesktopNotification = (props) => {
  const { icon, text, display, name, extraClass } = props;
  const handleCheckFn = (e) => {
    if (typeof display === "function") {
      display(e);
    }
  };
  return (
    <div className={`desktop__notification ${extraClass}`}>
      <span className="desktop__notification__icon">
        <i className={icon} />
      </span>
      <p className="desktop__notification__text">{text}</p>
      <button
        name={name}
        className="desktop__notification__button"
        onClick={(e) => handleCheckFn(e)}
      >
        X
      </button>
    </div>
  );
};
