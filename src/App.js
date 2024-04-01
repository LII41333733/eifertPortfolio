import React, { useState, useEffect } from "react";
import { HeaderDesktop, HeaderMobile } from "./Components";
import { navScroll } from "./Utilities";
import "./App.css";
import { HomeDesktop, HomeMobile } from "./Pages/Home";
import { ReactComponent as MarkleSvg } from "./TEST/SVG/markle.svg";
import poolColorsGif from "./TEST/SVG/pool_colors.gif";
import markleLogo from "./TEST/SVG/markle_logo.gif";
// import commercial from "./TEST/SVG/commercial.mp4";
// import video from "./TEST/SVG/video.mp4";

// zoom: 1.3;
//     margin: 0 auto;
//     text-align: center;
//     display: flex;
//     justify-content: center;
//     left: -6.7rem;
//     position: absolute;

import {
  ProfileDetailsDesktop,
  ProfileDetailsMobile,
  ProfileImages,
} from "./Pages/Profile";
import { Contact, About } from "./Pages";

function App() {
  const [layer, setLayer] = React.useState(0);

  const [page, setPage] = useState("home");
  const isHome = page === "home";
  const isContact = page === "contact";
  const isAbout = page === "about";
  const isTestimonials = page === "testimonials";
  const isWork = !isHome && !isContact && !isAbout && !isTestimonials;

  useEffect(() => {
    !isWork && window.scrollTo(0, 0);
    const scrollFunc = navScroll(page);
    if (page !== "home") {
      window.addEventListener("scroll", scrollFunc);
    } else {
      window.removeEventListener("scroll", scrollFunc);
    }

    const container = document.getElementsByClassName("container");
    let a = document.getElementsByClassName("profile-img-container-desktop")[0];
    setTimeout(() => {
      container[0].style.height = a && `${a.offsetHeight}px`;
      container[0].style.height = isAbout && "800px";
    }, 500);
  });

  return (
    <div className="container">
      <div className="desktop">
        <HeaderDesktop
          page={page}
          func={setPage}
          layer={layer}
          setLayer={setLayer}
        />

        <div id="markle-svg">
          <section className="markle-text">
            <p>
              Steve “Philly Flash” Markle, a trick shot pool artist in the
              Philadelphia area, approached me about designing him a logo. Steve
              was looking for a badass letter “M” so that is exactly what I gave
              him. It was a robust process, filled with a lot of explorations
              but Steve’s left-handed shooting style is what ultimately inspired
              the look for his brand. The final logo is simple, effective, and
              has that “badass” look Steve was looking for.
            </p>
            <p>
              Steve got into trick shot pool at a very young age and as the
              years progressed, he climbed the ranks as a result of many top
              finishes in major professional events. He holds a current world
              rank and is also a former member of ESPN’s Team USA. He is the
              youngest player to ever be selected to compete on Team USA and the
              youngest to be ranked within the top 5 in the world. He has also
              claimed the title of masse world champion at the WPA World
              Championship in Las Vegas, Nevada and was featured in TV spots
              such as the{" "}
              <a href="https://www.youtube.com/watch?v=7zuLQrwesvw">
                2019 Lincoln Nautilus Commercial
              </a>{" "}
              where his trick shots were compared to their vehicle’s modern
              safety features.
            </p>
            <p>
              In addition, Steve’s{" "}
              <a href="https://www.youtube.com/watch?v=usRbyM-MtPI">
                trick shots
              </a>{" "}
              have been featured on many national television networks including
              FOX, NBC, ABC, Discovery, MTV, SYFY, Nickelodeon, and ESPN. Over
              the years, his amazing trick shot videos have racked up millions
              of views making him one of the most recognized trick shot artists
              in the nation.
            </p>
            <p>
              Steve continues to travel the world competing and performing his
              show “Redefining the Laws of Physics”. If you are interested in
              booking Steve for your next event or have any questions or
              comments click here to contact Steve directly.
            </p>
          </section>
          <section id="pool-colors">
            <img src={poolColorsGif} alt="Pool Colors" />
          </section>
          <section id="markle-logo">
            <img src={markleLogo} alt="Markle Logo" />
          </section>
          {/* <section id="commercial">
            <video width="700" height="440" controls>
              <source src={commercial} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
          <section id="video">
            <video width="700" height="440" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section> */}
          <MarkleSvg />
        </div>

        {/* {page === "home" && <HomeDesktop layer={layer} setLayer={setLayer} />} */}
        {isWork && <ProfileDetailsDesktop page={page} func={setPage} />}
        {isContact && <Contact />}
        {isAbout && <About />}
      </div>
      <div className="mobile textCenter">
        <HeaderMobile page={page} func={setPage} />
        {page === "home" && (
          <HomeMobile func={setPage} layer={layer} setLayer={setLayer} />
        )}
        {isWork && (
          <>
            <ProfileDetailsMobile page={page} func={setPage} />
            <ProfileImages page={page} func={setPage} isMobile={true} />
          </>
        )}
        {isContact && <Contact isMobile={true} />}
        {isAbout && <About isMobile={true} />}
        {isTestimonials && <About isMobile={true} />}
      </div>
      {isWork && <ProfileImages page={page} func={setPage} />}
    </div>
  );
}

export default App;
