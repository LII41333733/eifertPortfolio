import React from "react";

const Womenheart = ({ imagePath }) => {
  const [handleRest, setHandleRest] = React.useState(false);

  return (
    <div id="womenheart-svg">
      <img
        src={`${imagePath}/womenheart.svg`}
        alt="womenheart"
        onLoad={() => setHandleRest(true)}
      />
      {handleRest && (
        <section id="womenheart-gif">
          <img src={`${imagePath}/womenheart.gif`} alt="womenheart" />
        </section>
      )}
    </div>
  );
};

export default Womenheart;
