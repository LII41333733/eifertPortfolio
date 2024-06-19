import React from "react";

const Branded = ({ imagePath }) => {
  const [handleRest, setHandleRest] = React.useState(false);

  return (
    <div id="branded-svg">
      <img
        src={`${imagePath}/branded.svg`}
        alt="branded"
        onLoad={() => setHandleRest(true)}
      />
      {handleRest && (
        <>
          <section id="video1">
            <video controls>
              <source src={`${imagePath}/branded1.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
          <section id="video2">
            <video controls>
              <source src={`${imagePath}/branded2.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
          <section id="video3">
            <video controls>
              <source src={`${imagePath}/branded3.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
        </>
      )}
    </div>
  );
};

export default Branded;
