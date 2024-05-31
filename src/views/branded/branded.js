import { ReactComponent as BrandedSVG } from "../../views/branded/branded.svg";

export default (
  <div id="branded-svg">
    <section id="video1">
      <video controls>
        <source
          src="http://www.eifertdesign.com/videos/branded1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    <section id="video2">
      <video controls>
        <source
          src="http://www.eifertdesign.com/videos/branded2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    <section id="video3">
      <video controls>
        <source
          src="http://www.eifertdesign.com/videos/branded3.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    <img src="http://www.eifertdesign.com/images/branded.svg" alt="branded" />
  </div>
);
