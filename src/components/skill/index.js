import Link from "next/link";
import Image from "next/image";

const Skill = () => {
  return (
    <section class="develop-skill develop-skill--two">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div
              class="develop-skill__left wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div
                class="develop-skill__left__item"
                style={{
                  background: "url(assets/images/resources/developer-1-1.png)",
                }}
              >
                <div class="develop-skill__left__item__inner">
                  <div class="d-block d-md-flex align-items-end justify-content-between">
                    <div class="develop-skill__left__item__inner__item">
                      <i class="develop-skill__left__item__inner__item__icon icon-trophy"></i>
                      <span class="develop-skill__left__item__inner__item__text">
                        Award Winning Driving School in Town
                      </span>
                    </div>
                    <div class="develop-skill__left__item__inner__link">
                      <Link
                        href="/about"
                        class="develop-skill__left__item__inner__link__btn"
                      >
                        <i class="icon-arrow"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="develop-skill__right">
              <div class="develop-skill__right__head">
                <div
                  class="sec-title wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="000ms"
                >
                  <h6 class="sec-title__tagline">
                    <i class="icon-left-arrow sec-title__img"></i>
                    Develop Skill
                    <i class="icon-right-arrow sec-title__img"></i>
                  </h6>
                  <h3 class="sec-title__title">
                    Why You Should Choose Our PDX Driving School?
                  </h3>
                </div>
                <p class="develop-skill__right__head__text">
                  Our driving school offers comprehensive training programs and
                  experienced instructors to ensure you become a confident and
                  skilled driver.
                </p>
              </div>
              <div class="develop-skill__right__content">
                <div
                  class="develop-skill__right__content__item wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div class="develop-skill__right__content__item__icon">
                    <div class="icon">
                      <i class="icon-online-learning-1-1"></i>
                    </div>
                  </div>
                  <div class="develop-skill__right__content__item__content">
                    <h4 class="develop-skill__right__content__item__content__title">
                      Traffic School
                    </h4>
                    <p class="develop-skill__right__content__item__content__text">
                      Our traffic school offers flexible learning options to fit
                      your schedule.
                    </p>
                  </div>
                </div>
                <div
                  class="develop-skill__right__content__item wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div class="develop-skill__right__content__item__icon">
                    <div class="icon">
                      <i class="icon-instructor-1-1"></i>
                    </div>
                  </div>
                  <div class="develop-skill__right__content__item__content">
                    <h4 class="develop-skill__right__content__item__content__title">
                      Expert Instructor
                    </h4>
                    <p class="develop-skill__right__content__item__content__text">
                      Learn from our expert instructors who have years of
                      experience in driving education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="develop-skill__shape-one">
        <img
          src="/assets/images/shapes/about-cercle-1-1.png"
          alt="develop-skill__shape-one"
        />
      </div>
      <div class="develop-skill__shape-two">
        <img
          src="/assets/images/shapes/about-cercle-1-2.png"
          alt="develop-skill__shape-one"
        />
      </div>
      <div class="develop-skill__shape-three">
        <img
          src="/assets/images/shapes/about-cercle-1-3.png"
          alt="develop-skill__shape-one"
        />
      </div>
      <div class="develop-skill__shape-fore">
        <img
          src="/assets/images/shapes/about-cercle-1-4.png"
          alt="develop-skill__shape-one"
        />
      </div>
    </section>
  );
};
export default Skill;
