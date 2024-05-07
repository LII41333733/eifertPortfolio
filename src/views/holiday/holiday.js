import { ReactComponent as HolidaySVG } from "../../views/holiday/holiday.svg";
import holidayGif from "../../views/holiday/holiday.gif";

export default (
  <div id="holiday-svg">
    <section id="holiday-gif">
      <img src={holidayGif} alt="Holiday Gif" />
    </section>
    <HolidaySVG />
  </div>
);
