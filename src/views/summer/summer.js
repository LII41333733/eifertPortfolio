import { getSource } from "../../utils";

export default ({ imagePath }) => (
  <div id="summer-svg">
    <section id="hero">
      <img src={`${imagePath}/heroGif.gif`} alt="Hero Gif" />
    </section>
    <section id="summer">
      <img src={`${imagePath}/summerGif.gif`} alt="Summer Gif" />
    </section>
    <section id="summer-swim">
      <img src={`${imagePath}/summer_swim.gif`} alt="Summer Swim Gif" />
    </section>
    <section id="video">
      <video controls>
        <source src={`${imagePath}/summer1.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
    <section id="left-video">
      <video controls>
        <source src={`${imagePath}/summer2.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
    <section id="right-video">
      <video controls>
        <source src={`${imagePath}/summer3.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
    <img src={`${imagePath}/summer1.svg`} alt="summer1" />
    <img className="email" src={`${imagePath}/summer2.svg`} alt="summer2" />
    <img src={`${imagePath}/summer.gif`} alt="summer" />
  </div>
);
