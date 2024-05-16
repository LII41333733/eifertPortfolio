import { ReactComponent as VegasSVG } from "../../views/vegas/vegas.svg";

export default (
  <div id="vegas-svg">
    <section id="video1">
      <video controls>
        <source
          src="http://www.eifertdesign.com/videos/vegas1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    <section id="video2">
      <video controls>
        <source
          src="http://www.eifertdesign.com/videos/vegas2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    <VegasSVG />
  </div>
);
