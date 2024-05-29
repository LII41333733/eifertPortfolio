import React, { useState, useEffect } from "react";
import { HeaderDesktop } from "./Components";
import "./App.css";
import { HomeDesktop } from "./Pages/Home";
import { Contact, About } from "./Pages";

export const SOURCE = "http://www.eifertdesign.com";
export const SOURCE_IMAGES = `${SOURCE}/images`;
export const SOURCE_IMAGES_DESKTOP = `${SOURCE_IMAGES}/desktop`;
export const SOURCE_IMAGES_MOBILE = `${SOURCE_IMAGES}/mobile`;
export const SOURCE_VIDEOS_DESKTOP = `${SOURCE}/videos`;

export const getHomePageImage = (imageName, isDesktop) => {
  if (isDesktop) {
    return `${SOURCE_IMAGES_DESKTOP}/${imageName}.png`;
  }
  return `${SOURCE_IMAGES_MOBILE}/${imageName}.png`;
};

function App() {
  useEffect(() => {
    document.title = "Eifert Design";
  }, []);

  const [layer, setLayer] = React.useState(0);
  const [page, setPage] = useState("home");

  const isContact = page === "contact";
  const isAbout = page === "about";
  const isHome = !isContact && !isAbout;

  const setters = {
    layer,
    page,
    getHomePageImage,
    setLayer,
    setPage,
  };

  return (
    <div className="container">
      <div className="desktop">
        <HeaderDesktop {...setters} />
        {isHome && <HomeDesktop {...setters} />}
        {isContact && <Contact />}
        {isAbout && <About />}
      </div>
    </div>
  );
}

export default App;
