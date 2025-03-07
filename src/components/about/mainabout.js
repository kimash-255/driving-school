import Link from "next/link";
import Image from "next/image";

const MainAbout = () => {
  return (
    <section class="about-two" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="about-two__left wow fadeInUp" data-wow-delay="500ms">
              <div class="about-two__left__item text-end">
                <div class="about-two__left__item__img__one">
                  <img
                    src="/assets/images/resources/about-2-1.jpg"
                    alt="drivschol"
                  />
                </div>
                <div class="about-two__left__item__img__two text-start">
                  <img
                    src="/assets/images/resources/about-l-2-2.png"
                    alt="drivschol"
                  />
                </div>
                <div class="about-two__left__item__img__shape">
                  <svg
                    width="171"
                    height="167"
                    viewBox="0 0 171 167"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M70.5 69L-3.01609e-06 69L0 138L70.5 138L141 138L141 69L141 -6.16331e-06L70.5 -3.08165e-06L70.5 69Z"
                      fill="#EC2526"
                    />
                    <path
                      d="M171 27L171 167L27 167L27 95.5992L97.5591 95.5992L97.5591 27L171 27ZM168.118 164.198L168.118 29.8017L100.441 29.8017L100.441 98.4008L29.8817 98.4008L29.8817 164.198L168.118 164.198Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M0.744079 54.347L0.74408 58.5308L60.412 58.5308L60.412 54.347L0.744079 54.347Z"
                      fill="#111117"
                    />
                    <path
                      d="M0.744079 43.7051L0.74408 47.8889L60.412 47.8889L60.412 43.7051L0.744079 43.7051Z"
                      fill="#111117"
                    />
                    <path
                      d="M0.744079 33.063L0.74408 37.2468L60.412 37.2468L60.412 33.063L0.744079 33.063Z"
                      fill="#111117"
                    />
                    <path
                      d="M0.744079 22.4212L0.74408 26.605L60.412 26.605L60.412 22.4212L0.744079 22.4212Z"
                      fill="#111117"
                    />
                    <path
                      d="M0.744079 11.7791L0.74408 15.9629L60.412 15.9629L60.412 11.7791L0.744079 11.7791Z"
                      fill="#111117"
                    />
                    <path
                      d="M0.744079 1.26363L0.74408 5.32104L60.412 5.32104L60.412 1.26362L0.744079 1.26363Z"
                      fill="#111117"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="about-two__right">
              <div class="about-two__right__head">
                <div class="about-two__right__head__title">
                  <div
                    class="sec-title text-start wow fadeInUp"
                    data-wow-duration="300ms"
                  >
                    <h6 class="sec-title__tagline">
                      <i class="icon-left-arrow sec-title__img"></i>
                      Get to Know Us
                      <i class="icon-right-arrow sec-title__img"></i>
                    </h6>

                    <h3 class="sec-title__title">
                      Ready to Learn Driving in Our Latest Models Vehicles
                    </h3>
                  </div>
                </div>

                <p
                  class="about-two__right__head__text wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  Our driving school offers comprehensive driving lessons with
                  experienced instructors. We ensure you learn to drive safely
                  and confidently in the latest model vehicles.
                </p>
              </div>

              <div class="about-two__right__award">
                <div
                  class="about-two__right__award__item wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  <div class="about-two__right__item__icon">
                    <i class="icon-trophy-2"></i>
                  </div>

                  <div class="about-two__right__item__content">
                    <h4 class="about-two__right__item__content__title">
                      Award Winning Team
                    </h4>

                    <p class="about-two__right__item__content__text">
                      Our school has been recognized for excellence in driver
                      education, winning multiple awards for our high standards
                      and successful training programs.
                    </p>
                  </div>
                </div>

                <div
                  class="about-two__right__award__item wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  <div class="about-two__right__item__icon">
                    <i class="icon-interest-rate-1"></i>
                  </div>

                  <div class="about-two__right__item__content">
                    <h4 class="about-two__right__item__content__title">
                      Highest Success Rates
                    </h4>

                    <p class="about-two__right__item__content__text">
                      We pride ourselves on having one of the highest success
                      rates in the industry, with our students passing their
                      driving tests on the first attempt.
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="about-two__right__author wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div class="about-two__right__link">
                  <Link
                    href="/about"
                    class="about-two__right__link__btn drivschol-btn drivschol-btn--black"
                  >
                    Get to Know Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainAbout;
