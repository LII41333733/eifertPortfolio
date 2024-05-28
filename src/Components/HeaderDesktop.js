import React from "react";
import { navScroll, resetDesktop } from "../Utilities";
export default function HeaderDesktop({ page, setPage, layer, setLayer }) {
  return (
    <>
      <div className={"header"}>
        <img
          onClick={() => {
            setPage("home");
            resetDesktop(false);
            setLayer(0);
          }}
          className="logo"
          src="images/main/desktop/logo.svg"
          alt="logo"
        />
      </div>
      <div id="navList">
        <span
          className="cursor"
          onClick={() => {
            setPage("home");
            resetDesktop(true);
            setLayer(0);
          }}
        >
          work
        </span>
        <span
          className="cursor"
          onClick={() => {
            setPage("about");
            navScroll("about");
          }}
        >
          about
        </span>
        <span className="cursor" onClick={() => setPage("contact")}>
          contact
        </span>
      </div>
    </>
  );
}
