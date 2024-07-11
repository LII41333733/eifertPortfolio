const spring = ({ imagePath, isMobile }) => (
  <div id="spring-svg">
    <section id="spring-gif">
      <img src={`${imagePath}/spring.gif`} alt="Spring" />
    </section>
    <section id="spring1-gif">
      <img src={`${imagePath}/spring1.gif`} alt="Spring" />
    </section>
    <section id="spring2-gif">
      <img src={`${imagePath}/spring2.gif`} alt="Spring" />
    </section>
    <section id="video1">
      <video
        controls
        width="360px"
        poster={`/images/mobile/placeholders/home.png`}
      >
        <source src={`${imagePath}/spring1.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
    {isMobile && (
      <section id="spring3-gif">
        <img src={`${imagePath}/spring3.gif`} alt="Spring" />
      </section>
    )}
    <section id="video2">
      <video
        controls
        width="360px"
        poster={`/images/mobile/placeholders/social.png`}
      >
        <source src={`${imagePath}/spring2.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
    <section id="video3">
      <video
        controls
        width="100%"
        poster={`/images/mobile/placeholders/spring.png`}
      >
        <source src={`${imagePath}/spring3.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
    <img src={`${imagePath}/spring.svg`} alt="spring" />
  </div>
);

export default spring;
