import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>What is Prodyogiki?</h2>
              <p className="about_para">
                Every technocrat’s first hand at practical implementation of
                what has been learnt, every nerd’s passion and the most
                fulfilling exploration of technology that any engineer can do.
                These are merely the glimpses of the gala show that "Prodyogiki
                2022" will be. We at ISTE, NIT Hamirpur are ready with a chain
                of events designed to challenge and motivate the students at the
                same time, and bring out their best. Prodyogiki 2022 is filled
                with interactive technological sessions, workshops, events,
                quizzes and ample other activities for all you technocrats out
                there. We promise to be the melting pots of different
                engineering and technical fields and will set new benchmarks in
                taking the technological culture of NIT Hamirpur to the
                unprecedented marks of glory.
              </p>
              {/* <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
