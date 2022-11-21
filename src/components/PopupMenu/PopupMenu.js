import React from "react";
import "./PopupMenu.css";
import Navigation from "../Navigation/Navigation";

function PopupMenu(isOpenMenu) {

  return (
    <section className="popup">
      <div className={`popup__place-hidden ${
        isOpenMenu ? "popup__place" : ""
      }`}>
        <Navigation />

      </div>
    </section>
  );
}

export default PopupMenu;
