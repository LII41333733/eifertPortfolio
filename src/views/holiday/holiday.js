import React from "react";

const Holiday = ({ imagePath }) => {
  const [handleRest, setHandleRest] = React.useState(false);

  return (
    <div id="holiday-svg">
      <img
        src={`${imagePath}/holiday.svg`}
        alt="holiday"
        onLoad={() => setHandleRest(true)}
      />
      {handleRest && (
        <>
          <section id="video">
            <video controls>
              <source src={`${imagePath}/holiday1.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
          <section id="holiday-gif">
            <img src={`${imagePath}/holiday.gif`} alt="Holiday Gif" />
          </section>
          <section id="holiday-gif1">
            <img src={`${imagePath}/holiday1.gif`} alt="Holiday Gif1" />
          </section>
        </>
      )}
    </div>
  );
};

export default Holiday;
