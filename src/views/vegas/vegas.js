import React from "react";

const Vegas = ({ imagePath }) => {
  const [handleRest, setHandleRest] = React.useState(false);

  return (
    <div id="vegas-svg">
      <img
        src={`${imagePath}/vegas.svg`}
        alt="vegas"
        onLoad={() => setHandleRest(true)}
      />
      {handleRest && (
        <>
          <section id="video1">
            <video
              controls
              width="360px"
              poster={`/images/mobile/placeholders/vegas1.png`}
            >
              <source src={`${imagePath}/vegas1.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
          <section id="video2">
            <video
              controls
              width="360px"
              poster={`/images/mobile/placeholders/vegas2.png`}
            >
              <source src={`${imagePath}/vegas2.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
        </>
      )}
    </div>
  );
};

export default Vegas;
