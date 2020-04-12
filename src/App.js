import React, { useState, useEffect } from 'react';
import { HeaderDesktop, HeaderMobile } from './Components';
import { navScroll } from './Utilities';
import './App.css';
import { HomeDesktop, HomeMobile } from './Pages/Home';
import { ProfileDetailsDesktop, ProfileDetailsMobile, ProfileImages } from './Pages/Profile';
import { Contact, About } from './Pages';

function App() {
  const [page, setPage] = useState("home");
  const isHome = page === "home";
  const isContact = page === "contact";
  const isAbout = page === "about";
  const isWork = !isHome && !isContact && !isAbout;

  useEffect(() => {
    !isWork && window.scrollTo(0, 0);
    const scrollFunc = navScroll(page);
    if (page !== "home") {
      window.addEventListener("scroll", scrollFunc);
    } else {
      window.removeEventListener("scroll", scrollFunc)
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
        />
        {page === "home" &&
          <>
            <HomeDesktop
              page={page}
              func={setPage}
            />
          </>
        }
        {isWork &&
          <ProfileDetailsDesktop
            page={page}
            func={setPage}
          />
        }
        {isContact && <Contact />}
        {isAbout && <About />}
      </div>
      <div className="mobile textCenter">
        <HeaderMobile
          page={page}
          func={setPage} />
        {page === "home" &&
          <HomeMobile
            func={setPage} />}
        {isWork &&
          <>
            <ProfileDetailsMobile
              page={page}
              func={setPage}
            />
            <ProfileImages
              page={page}
              func={setPage}
              isMobile={true}
            />
          </>}
        {isContact && <Contact
          isMobile={true}
        />}
        {isAbout && <About
          isMobile={true}
        />}
      </div>
      {isWork &&
        <ProfileImages
          page={page}
          func={setPage} />}
    </div >
  );
}

export default App;