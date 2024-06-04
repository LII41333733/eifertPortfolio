import { getSource } from "../../utils";

export default ({ isMobile }) => (
  <div id="vegas-svg">
    {/* <section id="video1">
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
    </section> */}
    <img
      src={
        isMobile
          ? `${getSource()}/images/mobile/vegas/vegas.svg`
          : `${getSource()}/images/vegas.svg`
      }
      alt="vegas"
    />{" "}
  </div>
);
