import React from "react";
import { useNavigate } from "react-router-dom";
import { PATH_ABOUT, PATH_CONTACT, PATH_HOME, getImages } from "../utils";

export default function HeaderDesktop(props) {
  const {
    page,
    setPage,
    layer,
    setLayer,
    isMobile,
    descriptionIndex,
    setDescriptionIndex,
  } = props;
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = React.useState(false);
  const logoSrc = `${getImages()}/logo.svg`;

  if (isMobile) {
    return (
      <>
        <div className={"header header-mobile"}>
          <img
            onClick={() => {
              setShowMenu(false);
              navigate(PATH_HOME);
            }}
            className="mobileLogo"
            src={logoSrc}
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
          {
            <div
              id={`hamburger-menu`}
              className={`hamburger-menu ${showMenu ? "visible" : ""}`}
            >
              <div id="hamburger-nav">
                <span
                  className="cursor"
                  onClick={() => {
                    setShowMenu(false);
                    navigate(PATH_HOME);
                  }}
                >
                  work
                </span>
                <span
                  className="cursor"
                  onClick={() => {
                    setShowMenu(false);
                    navigate(PATH_ABOUT);
                  }}
                >
                  about
                </span>
                <span
                  className="cursor"
                  onClick={() => {
                    setShowMenu(false);
                    navigate(PATH_CONTACT);
                  }}
                >
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
            navigate(PATH_HOME);
          }}
          className="logo"
          src={logoSrc}
          alt="logo"
        />
        <div id="navList">
          <span
            className="cursor"
            onClick={() => {
              navigate(PATH_HOME);
            }}
          >
            work
          </span>
          <span
            className="cursor"
            onClick={() => {
              navigate(PATH_ABOUT);
            }}
          >
            about
          </span>
          <span
            className="cursor"
            onClick={() => {
              navigate(PATH_CONTACT);
            }}
          >
            contact
          </span>
        </div>
      </div>
    </>
  );
}
