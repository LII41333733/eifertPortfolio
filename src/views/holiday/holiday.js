import { getSource } from "../../utils";

const holiday = ({ imagePath }) => (
  <div id="holiday-svg">
    <section id="video">
      <video controls>
        <source src={`${imagePath}/holiday1.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
    <section id="holiday-gif">
      <img src={`${imagePath}/holiday.gif`} alt="Holiday Gif" />
    </section>
    <section id="holiday-gif1">
      <img src={`${imagePath}/holiday1.gif`} alt="Holiday Gif1" />
    </section>
    <img src={`${imagePath}/holiday.svg`} alt="holiday" />
  </div>
);

export default holiday;
