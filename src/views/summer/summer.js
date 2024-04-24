import { ReactComponent as SummerSVG } from "../../views/summer/summer.svg";
import heroGif from "../../views/summer/heroGif.gif";
import summerGif from "../../views/summer/summerGif.gif";
import leftVideo from "../../views/summer/Swim.mp4";
import rightVideo from "../../views/summer/Fashion.mp4";

export default (
  <div id="summer-svg">
    <section id="hero">
      <img src={heroGif} alt="Hero Gif" />
    </section>
    <section id="summer">
      <img src={summerGif} alt="Summer Gif" />
    </section>
    <section id="left-video">
      <video controls>
        <source src={leftVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
    <section id="right-video">
      <video controls>
        <source src={rightVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
    <SummerSVG />
  </div>
);
