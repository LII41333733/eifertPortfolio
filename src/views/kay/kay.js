import React from "react";

const Kay = ({ imagePath }) => {
  const [handleRest, setHandleRest] = React.useState(false);

  return (
    <div id="kay-svg">
      <img
        src={`${imagePath}/kay.svg`}
        alt="kay"
        onLoad={() => setHandleRest(true)}
      />
      {handleRest && (
        <section id="kay-gif">
          <img src={`${imagePath}/kay.gif`} alt="kay" />
        </section>
      )}
    </div>
  );
};

export default Kay;
