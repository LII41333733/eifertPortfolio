import heroGif from "../../views/summer/heroGif.gif";
import summerGif from "../../views/summer/summerGif.gif";

export default (
  <div id="summer-svg">
    <section id="hero">
      <img src={heroGif} alt="Hero Gif" />
    </section>
    <section id="summer">
      <img src={summerGif} alt="Summer Gif" />
    </section>
    <section id="summer-swim">
      <img
        src="http://www.eifertdesign.com/images/summer_swim.gif"
        alt="Summer Swim Gif"
      />
    </section>
    <section id="video">
      <video controls>
        <source
          src="http://www.eifertdesign.com/videos/summer1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    <section id="left-video">
      <video controls>
        <source
          src="http://www.eifertdesign.com/videos/summer2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    <section id="right-video">
      <video controls>
        <source
          src="http://www.eifertdesign.com/videos/summer3.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    <img src="http://www.eifertdesign.com/images/summer1.svg" alt="summer1" />
    <img
      className="email"
      src="http://www.eifertdesign.com/images/summer2.svg"
      alt="summer2"
    />
  </div>
);
