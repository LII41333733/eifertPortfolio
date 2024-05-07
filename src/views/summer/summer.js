import { ReactComponent as SummerSVG } from "../../views/summer/summer.svg";
import heroGif from "../../views/summer/heroGif.gif";
import summerGif from "../../views/summer/summerGif.gif";
// import leftVideo from "../../views/summer/Swim.mp4";
// import rightVideo from "../../views/summer/Fashion.mp4";

export default (
  <div id="summer-svg">
    <section id="hero">
      <img src={heroGif} alt="Hero Gif" />
    </section>
    <section id="summer">
      <img src={summerGif} alt="Summer Gif" />
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
    <SummerSVG />
  </div>
);
