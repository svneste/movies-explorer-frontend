import React from "react";
import "./Popup.css";


function Popup({ isOpenPopup, handleOpenPopup, textPopup }) {
  return (
    <section className={`popup ${isOpenPopup ? "popup__visible" : "" }` }>
      <div className="popup__container">
        <p className="popup__text">{textPopup.toString()}</p>
        <button onClick={handleOpenPopup} type="button" className="popup__icon-close"></button>
      </div>
    </section>
  );
}

export default Popup;
