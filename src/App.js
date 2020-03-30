import React, { useState, useEffect } from 'react';
import { HeaderDesktop, HeaderMobile } from './Components';
import { navScroll } from './Utilities';
import './App.css';
import { HomeDesktop, HomeMobile } from './Pages/Home';
import { ProfileDetailsDesktop, ProfileDetailsMobile, ProfileImages } from './Pages/Profile';
import { Contact, About } from './Pages';

function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
    const scrollFunc = navScroll(page);
    if (page !== "home") {
      window.addEventListener("scroll", scrollFunc);
    } else {
      window.removeEventListener("scroll", scrollFunc)
    }

    const container = document.getElementsByClassName("container");
    let a = document.getElementsByClassName("profile-img-container-desktop")[0];
    setTimeout(() => { container[0].style.height = a && `${a.offsetHeight}px`; }, 500);

    const videos = document.getElementsByClassName('animationVideo');
    for (let i = 0; i < videos.length; i++) {
      videos[i].play();
    }
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
        {page !== "home" && page !== "contact" && page !== "about" &&
          <ProfileDetailsDesktop
            page={page}
            func={setPage}
          />
        }
        {page === "contact" &&
          <Contact />
        }
        {page === "about" &&
          <About />
        }
      </div>
      <div className="mobile textCenter">
        <HeaderMobile
          page={page}
          func={setPage} />
        {page === "home" &&
          <HomeMobile
            page={page}
            func={setPage} />}
        {page !== "home" && page !== "contact" && page !== "about" && <>
          <ProfileDetailsMobile
            page={page}
            func={setPage}
          />
          <ProfileImages
            page={page}
            func={setPage}
            isMobile={true}
          /></>
        }
      </div>
      {page !== "home" && page !== "contact" && page !== "about" &&
        <ProfileImages
          page={page}
          func={setPage} />
      }
    </div>
  );
}

export default App;