const markle = ({ imagePath, isMobile }) => (
  <div id="markle-svg">
    <section className="markle-text">
      <p>
        Steve “Philly Flash” Markle, a trick shot pool artist in the
        Philadelphia area, approached me about designing him a logo. Steve was
        looking for a badass letter “M” so that is exactly what I gave him. It
        was a robust process, filled with a lot of explorations but Steve’s
        left-handed shooting style is what ultimately inspired the look for his
        brand. The final logo is simple, effective, and has that “badass” look
        Steve was looking for.
      </p>
      <p>
        Steve got into trick shot pool at a very young age and as the years
        progressed, he climbed the ranks as a result of many top finishes in
        major professional events. He holds a current world rank and is also a
        former member of ESPN’s Team USA. He is the youngest player to ever be
        selected to compete on Team USA and the youngest to be ranked within the
        top 5 in the world. He has also claimed the title of masse world
        champion at the WPA World Championship in Las Vegas, Nevada and was
        featured in TV spots such as the
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=7zuLQrwesvw"
        >
          2019 Lincoln Nautilus Commercial
        </a>{" "}
        where his trick shots were compared to their vehicle’s modern safety
        features.
      </p>
      <p>
        In addition, Steve’s{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=usRbyM-MtPI"
        >
          trick shots
        </a>{" "}
        have been featured on many national television networks including FOX,
        NBC, ABC, Discovery, MTV, SYFY, Nickelodeon, and ESPN. Over the years,
        his amazing trick shot videos have racked up millions of views making
        him one of the most recognized trick shot artists in the nation.
      </p>
      <p>
        Steve continues to travel the world competing and performing his show
        “Redefining the Laws of Physics”. If you are interested in booking Steve
        for your next event or have any questions or comments click here to
        contact Steve directly.
      </p>
    </section>
    <section id="pool-colors">
      <img src={`${imagePath}/pool_colors.gif`} alt="Pool Colors" />
    </section>
    <section id="markle-logo">
      <img src={`${imagePath}/markle_logo.gif`} alt="Markle Logo" />
    </section>
    <section id="commercial">
      {isMobile ? (
        <video controls>
          <source src={`${imagePath}/nautilus.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <iframe
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/7zuLQrwesvw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </section>
    <section id="video">
      {isMobile ? (
        <video controls>
          <source src={`${imagePath}/video.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <iframe
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/usRbyM-MtPI"
          title="Trick Shots"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </section>
    <img src={`${imagePath}/markle.svg`} alt="markle" />{" "}
  </div>
);

export default markle;
