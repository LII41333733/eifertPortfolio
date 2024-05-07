import { ReactComponent as HolidaySVG } from "../../views/holiday/holiday.svg";
import holidayGif from "../../views/holiday/holiday.gif";
import holidayGif1 from "../../views/holiday/holiday1.gif";

export default (
  <div id="holiday-svg">
    <section id="video">
      <video controls>
        <source
          src="http://www.eifertdesign.com/videos/holiday1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    <section id="holiday-gif">
      <img src={holidayGif} alt="Holiday Gif" />
    </section>
    <section id="holiday-gif1">
      <img src={holidayGif1} alt="Holiday Gif1" />
    </section>
    <HolidaySVG />
  </div>
);
