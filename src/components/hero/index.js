import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section class="main-slider-two" id="home">
      <div
        class="main-slider-two__carousel drivschol-owl__carousel owl-carousel"
        data-owl-options='{
      "loop": true,
      "animateOut": "slideOutDown",
      "animateIn": "fadeIn",
      "items": 1,
      "autoplay": true,
      "autoplayTimeout": 7000,
      "smartSpeed": 1000,
      "nav": false,
      "navText": ["<span class=\"icon-left-arrow\"></span>","<span class=\"icon-right-arrow\"></span>"],
      "dots": true,
      "margin": 0
      }'
      >
        <div class="item">
          <div class="main-slider-two__item">
            <div
              class="main-slider-two__bg"
              style={{
                background: "url(assets/images/backgrounds/slider-2-1.png)",
              }}
            ></div>
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="main-slider-two__content">
                    <h5 class="main-slider-two__sub-title">
                      <span>Welcome to Our Drivschol</span>
                    </h5>
                    {/* <!-- slider-sub-title --> */}
                    <h2 class="main-slider-two__title">
                      Book & Start <br />
                      Learning Driving
                      <span class="main-slider-two__title__image">
                        <img
                          src="assets/images/backgrounds/slider-2-shape-1.png"
                          alt="drivschol"
                        />
                      </span>
                    </h2>
                    {/* <!-- slider-title --> */}
                    <div class="main-slider-two__btn">
                      <a
                        href="services.html"
                        class="drivschol-btn drivschol-btn--base2"
                      >
                        <span>Get Started</span>
                      </a>
                      {/* <!-- slider-btn --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-slider-two__layer">
              <img
                src="assets/images/backgrounds/slider-2-shape-2.png"
                alt="drivschol"
              />
              <img
                class="main-slider-two__layer__shape"
                src="assets/images/backgrounds/slider-2-shape-3.png"
                alt="drivschol"
              />
            </div>
            <div class="main-slider-two__layer-two">
              <img
                src="assets/images/backgrounds/slider-2-car.png"
                alt="drivschol"
              />
            </div>
          </div>
        </div>
        <div class="item">
          <div class="main-slider-two__item">
            <div
              class="main-slider-two__bg"
              style={{
                background: "url(assets/images/backgrounds/slider-2-1.png)",
              }}
            ></div>
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="main-slider-two__content">
                    <h5 class="main-slider-two__sub-title">
                      <span>Welcome to Our Drivschol</span>
                    </h5>
                    {/* <!-- slider-sub-title --> */}
                    <h2 class="main-slider-two__title">
                      Book & Start <br />
                      Learning Driving
                      <span class="main-slider-two__title__image">
                        <img
                          src="assets/images/backgrounds/slider-2-shape-1.png"
                          alt="drivschol"
                        />
                      </span>
                    </h2>
                    {/* <!-- slider-title --> */}
                    <div class="main-slider-two__btn">
                      <a
                        href="services.html"
                        class="drivschol-btn drivschol-btn--base2"
                      >
                        <span>Get Started</span>
                      </a>
                      {/* <!-- slider-btn --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-slider-two__layer">
              <img
                src="assets/images/backgrounds/slider-2-shape-2.png"
                alt="drivschol"
              />
              <img
                class="main-slider-two__layer__shape"
                src="assets/images/backgrounds/slider-2-shape-3.png"
                alt="drivschol"
              />
            </div>
            <div class="main-slider-two__layer-two">
              <img
                src="assets/images/backgrounds/slider-2-car.png"
                alt="drivschol"
              />
            </div>
          </div>
        </div>
        <div class="item">
          <div class="main-slider-two__item">
            <div
              class="main-slider-two__bg"
              style={{
                background: "url(assets/images/backgrounds/slider-2-1.png)",
              }}
            ></div>
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="main-slider-two__content">
                    <h5 class="main-slider-two__sub-title">
                      <span>Welcome to Our Drivschol</span>
                    </h5>
                    {/* <!-- slider-sub-title --> */}
                    <h2 class="main-slider-two__title">
                      Book & Start <br />
                      Learning Driving
                      <span class="main-slider-two__title__image">
                        <img
                          src="assets/images/backgrounds/slider-2-shape-1.png"
                          alt="drivschol"
                        />
                      </span>
                    </h2>
                    {/* <!-- slider-title --> */}
                    <div class="main-slider-two__btn">
                      <a
                        href="services.html"
                        class="drivschol-btn drivschol-btn--base2"
                      >
                        <span>Get Started</span>
                      </a>
                      {/* <!-- slider-btn --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-slider-two__layer">
              <img
                src="assets/images/backgrounds/slider-2-shape-2.png"
                alt="drivschol"
              />
              <img
                class="main-slider-two__layer__shape"
                src="assets/images/backgrounds/slider-2-shape-3.png"
                alt="drivschol"
              />
            </div>
            <div class="main-slider-two__layer-two">
              <img
                src="assets/images/backgrounds/slider-2-car.png"
                alt="drivschol"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
