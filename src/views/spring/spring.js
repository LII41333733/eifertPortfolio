import spring from "../../views/spring/spring.gif";

export default (
  <div id="spring-svg">
    <section id="spring-gif">
      <img src={spring} alt="Spring" />
    </section>
    <section id="spring1-gif">
      <img src="http://www.eifertdesign.com/images/spring1.gif" alt="Spring" />
    </section>
    <section id="spring2-gif">
      <img src="http://www.eifertdesign.com/images/spring2.gif" alt="Spring" />
    </section>
    <section id="video1">
      <video controls>
        <source
          src="http://www.eifertdesign.com/videos/spring2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    <section id="video2">
      <video controls>
        <source
          src="http://www.eifertdesign.com/videos/spring1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    <section id="video3">
      <video controls>
        <source
          src="http://www.eifertdesign.com/videos/spring3.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    <img src="http://www.eifertdesign.com/images/spring.svg" alt="spring" />
  </div>
);
