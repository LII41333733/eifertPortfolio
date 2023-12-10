import React from "react";
import { resetDesktop } from "../Utilities";
export default ({ page, func, layer, setLayer }) => {
  return (
    <>
      <div className={"header"}>
        <img
          onClick={() => {
            func("home");
            resetDesktop();
            setLayer(0);
          }}
          className="logo"
          src="images/main/desktop/EifertDesign-Logo.jpeg"
          alt="logo"
        />
      </div>
      <div id="navList">
        <span
          className="cursor"
          onClick={() => {
            func("home");
            resetDesktop(true);
          }}
        >
          Work
        </span>
        <span className="cursor" onClick={() => func("about")}>
          About
        </span>
        <span className="cursor" onClick={() => func("contact")}>
          Contact
        </span>
        <span className="cursor" onClick={() => func("testimonials")}>
          Testimonials
        </span>
      </div>
    </>
  );
};
