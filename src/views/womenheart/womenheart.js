const womenheart = ({ imagePath }) => (
  <div id="womenheart-svg">
    <section id="womenheart-gif">
      <img src={`${imagePath}/womenheart.gif`} alt="womenheart" />
    </section>
    <img src={`${imagePath}/womenheart.svg`} alt="womenheart" />
  </div>
);

export default womenheart;
