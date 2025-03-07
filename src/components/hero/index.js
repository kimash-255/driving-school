import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const item = {
    id: 1,
    bg: "url(/assets/images/backgrounds/slider-2-1.webp)",
    car: "/assets/images/backgrounds/slider-2-car.png",
    shape1: "/assets/images/backgrounds/slider-2-shape-1.png",
    shape2: "/assets/images/backgrounds/slider-2-shape-2.png",
    shape3: "/assets/images/backgrounds/slider-2-shape-3.png",
    subtitle: "Welcome to PDX Driving School",
    title: "Drive Smart, Drive",
    title2: "Safe with the Best",
    buttonText: "Get Started",
  };

  return (
    <section className="main-slider-two" id="home">
      <div className="owl-item active">
        <div className="item">
          <div className="main-slider-two__item">
            <div
              className="main-slider-two__bg"
              style={{ background: item.bg }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-slider-two__content">
                    <h5 className="main-slider-two__sub-title">
                      <span>{item.subtitle}</span>
                    </h5>
                    <h2 className="main-slider-two__title">
                      {item.title} <br />
                      {item.title2}
                      <span className="main-slider-two__title__image">
                        <img src={item.shape1} alt="drivschol" />
                      </span>
                    </h2>
                    <div className="main-slider-two__btn">
                      <a
                        href="/services"
                        className="drivschol-btn drivschol-btn--base2"
                      >
                        <span>{item.buttonText}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-slider-two__layer">
              <img src={item.shape2} alt="drivschol" />
              <img
                className="main-slider-two__layer__shape"
                src={item.shape3}
                alt="drivschol"
              />
            </div>
            <div className="main-slider-two__layer-two">
              <img src={item.car} alt="drivschol" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
