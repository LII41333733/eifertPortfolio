import { getSource } from "../../utils";

const vegas = ({ imagePath }) => (
  <div id="vegas-svg">
    <section id="video1">
      <video controls>
        <source src={`${imagePath}/vegas1.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
    <section id="video2">
      <video controls>
        <source src={`${imagePath}/vegas2.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
    <img src={`${imagePath}/vegas.svg`} alt="vegas" />{" "}
  </div>
);

export default vegas;
