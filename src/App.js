import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Markle from "./views/markle/markle";
import Summer from "./views/summer/summer";
import Spring from "./views/spring/spring";
import Holiday from "./views/holiday/holiday";
import Vegas from "./views/vegas/vegas";
import Kay from "./views/kay/kay";
import Branded from "./views/branded/branded";
import Womenheart from "./views/womenheart/womenheart";
import Harlem from "./views/harlem/harlem";
import { HeaderDesktop } from "./Components";
import "./styles/App.css";
import "./styles/hamburger.css";
import HomeDesktop from "./Pages/Home";
import { Contact, About } from "./Pages";
import {
  PAGE_ABOUT,
  PAGE_CONTACT,
  PAGE_HOME,
  PATH_ABOUT,
  PATH_ART_DIRECTION,
  PATH_BRANDING,
  PATH_CONTACT,
  PATH_HOME,
  PATH_ILLUSTRATIONS_AND_MORE,
  getImagesByPlatform,
  getPlatform,
} from "./utils";
import { isMobile } from "react-device-detect";
import { MediaLoader } from "./Components/hooks/MediaLoader";
import Page from "./Components/Page";

function App() {
  const [layer, setLayer] = React.useState(0);
  const [page, setPage] = useState("home");
  const [descriptionIndex, setDescriptionIndex] = React.useState(-1);
  const platform = getPlatform(isMobile);
  let location = useLocation();

  const setters = {
    isMobile,
    layer,
    page,
    descriptionIndex,
    setLayer,
    setPage,
    setDescriptionIndex,
    platform,
  };

  React.useEffect(() => {
    setDescriptionIndex(-1);
    window.scrollTo({ top: 0, behavior: "smooth" });

    const path = location.pathname;

    switch (path) {
      case PATH_HOME:
        setPage(PAGE_HOME);
        setLayer(isMobile ? 0 : 0);
        break;

      case PATH_BRANDING:
        setPage(PAGE_HOME);
        setLayer(isMobile ? 2 : 1);
        break;

      case PATH_ILLUSTRATIONS_AND_MORE:
        setPage(PAGE_HOME);
        setLayer(isMobile ? 3 : 2);
        break;

      case PATH_ART_DIRECTION:
        setPage(PAGE_HOME);
        setLayer(isMobile ? 1 : 3);
        break;

      case PATH_ABOUT:
        setPage(PAGE_ABOUT);
        setLayer(0);
        break;

      case PATH_CONTACT:
        setPage(PAGE_CONTACT);
        setLayer(0);
        break;

      default:
        setPage(PAGE_HOME);
        setLayer(0);
    }
  }, [location, isMobile]);

  return (
    <Routes>
      <Route path="/" element={<Layout {...setters} />}>
        <Route index element={<HomeDesktop {...setters} />} />
        <Route path="/branding" element={<HomeDesktop {...setters} />} />
        <Route path="/art-direction" element={<HomeDesktop {...setters} />} />
        <Route
          path="/illustrations-and-more"
          element={<HomeDesktop {...setters} />}
        />
        <Route path="/contact" element={<Contact isMobile={isMobile} />} />
        <Route path="/about" element={<About isMobile={isMobile} />} />

        {/* <Route path="/kay" element={<Kay imagePath={`${imagePath}/kay`} />} /> */}
        <Route
          path="/kay"
          element={<Page path="/kay" Component={Kay} isMobile={isMobile} />}
        />
        <Route
          path="/markle"
          element={
            <Page path="/markle" Component={Markle} isMobile={isMobile} />
          }
        />
        <Route
          path="/womenheart"
          element={
            <Page
              path="/womenheart"
              Component={Womenheart}
              isMobile={isMobile}
            />
          }
        />
        <Route
          path="/branded"
          element={
            <Page path="/branded" Component={Branded} isMobile={isMobile} />
          }
        />
        <Route
          path="/harlem"
          element={
            <Page path="/harlem" Component={Harlem} isMobile={isMobile} />
          }
        />
        <Route
          path="/vegas"
          element={<Page path="/vegas" Component={Vegas} isMobile={isMobile} />}
        />
        <Route
          path="/summer"
          element={
            <Page path="/summer" Component={Summer} isMobile={isMobile} />
          }
        />
        <Route
          path="/holiday"
          element={
            <Page path="/holiday" Component={Holiday} isMobile={isMobile} />
          }
        />
        <Route
          path="/spring"
          element={
            <Page path="/spring" Component={Spring} isMobile={isMobile} />
          }
        />
        <Route path="*" element={<Layout {...setters} />} />
      </Route>
    </Routes>
  );
}

export default App;

const Layout = (setters) => {
  let location = useLocation();

  useEffect(() => {
    document.title = "Eifert Design";
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      const ham = document.getElementById("hamburger-nav");
      if (ham) ham.style.visibility = "visible";
    }, 1000);
  }, []);

  // useEffect(() => {
  //   if (!loading && pageRef.current) {
  //     const container = pageRef.current.querySelector(".header + div");

  //     if (container) {
  //       container.style.visibility = "visible";
  //     }
  //   }
  // }, [loading]);

  // React.useEffect(() => {
  //   resetMedia();
  // }, [location]);

  return (
    <div className="container">
      <div className={setters.platform}>
        <HeaderDesktop {...setters} />
        <Outlet />
      </div>
    </div>
  );
};
