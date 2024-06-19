import { useRef, useState, useEffect } from "react";

const Summer = ({ imagePath, isMobile }) => {
  const [elements, setElements] = useState([]);
  const [handleRest, setHandleRest] = useState(false);

  const handleLoad = () => {
    setElements(
      ...elements,
      <section id="hero">
        <img
          src={`${imagePath}/heroGif.gif`}
          alt="Hero Gif"
          onLoad={() => setHandleRest(true)}
        />
      </section>
    );
  };

  return (
    <div id="summer-svg">
      <img src={`${imagePath}/summer.svg`} alt="summer" onLoad={handleLoad} />
      {elements}
      {handleRest && (
        <>
          <section id="summer">
            <img src={`${imagePath}/summerGif.gif`} alt="Summer Gif" />
          </section>
          <section id="summer-swim">
            <img src={`${imagePath}/summer_swim.gif`} alt="Summer Swim Gif" />
          </section>
          {isMobile && (
            <section id="summer-social">
              <img
                src={`${imagePath}/summer_social.gif`}
                alt="Summer Social Gif"
              />
            </section>
          )}
          <section id="video">
            <video controls>
              <source src={`${imagePath}/summer1.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
          <section id="left-video">
            <video controls>
              <source src={`${imagePath}/summer2.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
          <section id="right-video">
            <video controls>
              <source src={`${imagePath}/summer3.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
          {!isMobile && (
            <img
              className="email"
              src={`${imagePath}/summer1.svg`}
              alt="summer1"
            />
          )}
        </>
      )}
    </div>
  );
};

export default Summer;
