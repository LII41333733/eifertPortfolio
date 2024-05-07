import { ReactComponent as SpringSVG } from "../../views/spring/spring.svg";
import spring from "../../views/spring/spring.gif";

export default (
  <div id="spring-svg">
    <section id="spring-gif">
      <img src={spring} alt="Spring" />
    </section>
    <section id="video1">
      <video controls>
        <source
          src="http://www.eifertdesign.com/videos/spring1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    <section id="video2">
      <video controls>
        <source
          src="http://www.eifertdesign.com/videos/spring2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    <SpringSVG />
  </div>
);
