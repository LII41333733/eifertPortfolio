const Branded = ({ imagePath }) => (
  <div id="branded-svg">
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
    <img src={`${imagePath}/branded.svg`} alt="branded" />
  </div>
);

export default Branded;
