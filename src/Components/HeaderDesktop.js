import React from "react";
import { navScroll } from "../Utilities";
import { SOURCE_IMAGES_DESKTOP } from "../App";
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function HeaderDesktop({
  page,
  setPage,
  layer,
  setLayer,
  isMobile,
}) {
  const [showMenu, setShowMenu] = React.useState(false);

  if (isMobile) {
    return (
      <>
        <div className={"header header-mobile"}>
          <img
            onClick={() => {
              setPage("home");
              scrollTop();
              setLayer(0);
            }}
            className="mobileLogo"
            src={`${SOURCE_IMAGES_DESKTOP}/logo.svg`}
            alt="logo"
          />
          <div
            id="hamburger"
            onClick={() => {
              setShowMenu((x) => !x);
            }}
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
          {/* <div id="navList">
            <span
              className="cursor"
              onClick={() => {
                setPage("home");
                scrollTop();
                setLayer(0);
              }}
            >
              work
            </span>
            <span
              className="cursor"
              onClick={() => {
                setPage("about");
                scrollTop();
              }}
            >
              about
            </span>
            <span className="cursor" onClick={() => setPage("contact")}>
              contact
            </span>
          </div> */}
          {
            <div
              id={`hamburger-menu`}
              className={`hamburger-menu ${showMenu ? "visible" : ""}`}
            >
              <div id="hamburger-nav">
                <span
                  className="cursor"
                  onClick={() => {
                    setPage("home");
                    scrollTop();
                    setLayer(0);
                  }}
                >
                  work
                </span>
                <span
                  className="cursor"
                  onClick={() => {
                    setPage("about");
                    scrollTop();
                  }}
                >
                  about
                </span>
                <span className="cursor" onClick={() => setPage("contact")}>
                  contact
                </span>
              </div>
            </div>
          }
        </div>
      </>
    );
  }

  return (
    <>
      <div className={"header"}>
        <img
          onClick={() => {
            setPage("home");
            scrollTop();
            setLayer(0);
          }}
          className="logo"
          src={`${SOURCE_IMAGES_DESKTOP}/logo.svg`}
          alt="logo"
        />
        <div id="navList">
          <span
            className="cursor"
            onClick={() => {
              setPage("home");
              scrollTop();
              setLayer(0);
            }}
          >
            work
          </span>
          <span
            className="cursor"
            onClick={() => {
              setPage("about");
              scrollTop();
            }}
          >
            about
          </span>
          <span className="cursor" onClick={() => setPage("contact")}>
            contact
          </span>
        </div>
      </div>
    </>
  );
}
