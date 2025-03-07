import Link from "next/link";
import Image from "next/image";

const WorkProcess = () => {
  return (
    <section className="work-process-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="work-process-one__image wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <img
                src="/assets/images/resources/step-man.png"
                alt="work process man image"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="work-process-one__inner">
              <div
                className="sec-title text-start wow fadeInUp"
                data-wow-duration="300ms"
              >
                <h6 className="sec-title__tagline">
                  <i className="icon-left-arrow sec-title__img"></i>
                  How You Learn
                  <i className="icon-right-arrow sec-title__img"></i>
                </h6>
                <h3 className="sec-title__title">
                  Let’s Learn Driving with us In 3 Easy Steps
                </h3>
              </div>
              <div className="work-process-one__inner__content">
                <div
                  className="work-process-one__inner__content__item wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="work-process-one__inner__content__item__step">
                    <p className="work-process-one__inner__content__item__step__text">
                      STEP
                    </p>
                    <span className="work-process-one__inner__content__item__step__number">
                      01
                    </span>
                    <svg
                      viewBox="0 0 161 186"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M161 139.5V46.5L80.5 0L0 46.5V139.5L80.5 186L161 139.5Z"
                        fill=""
                      />
                    </svg>
                  </div>
                  <div className="work-process-one__inner__content__item__info">
                    <h4 className="work-process-one__inner__content__item__info__title">
                      Get Consultation
                    </h4>
                    <p className="work-process-one__inner__content__item__info__text">
                      Schedule a consultation with our experts to discuss your
                      driving goals.
                    </p>
                  </div>
                </div>

                <div
                  className="work-process-one__inner__content__item wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  <div className="work-process-one__inner__content__item__step">
                    <p className="work-process-one__inner__content__item__step__text">
                      STEP
                    </p>
                    <span className="work-process-one__inner__content__item__step__number">
                      02
                    </span>
                    <svg
                      viewBox="0 0 161 186"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M161 139.5V46.5L80.5 0L0 46.5V139.5L80.5 186L161 139.5Z"
                        fill=""
                      />
                    </svg>
                  </div>
                  <div className="work-process-one__inner__content__item__info">
                    <h4 className="work-process-one__inner__content__item__info__title">
                      Start Your Training
                    </h4>
                    <p className="work-process-one__inner__content__item__info__text">
                      Begin your driving lessons with our experienced
                      instructors.
                    </p>
                  </div>
                </div>

                <div
                  className="work-process-one__inner__content__item wow fadeInUp"
                  data-wow-delay="900ms"
                >
                  <div className="work-process-one__inner__content__item__step">
                    <p className="work-process-one__inner__content__item__step__text">
                      STEP
                    </p>
                    <span className="work-process-one__inner__content__item__step__number">
                      03
                    </span>
                    <svg
                      viewBox="0 0 161 186"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M161 139.5V46.5L80.5 0L0 46.5V139.5L80.5 186L161 139.5Z"
                        fill=""
                      />
                    </svg>
                  </div>
                  <div className="work-process-one__inner__content__item__info">
                    <h4 className="work-process-one__inner__content__item__info__title">
                      Become a Driver
                    </h4>
                    <p className="work-process-one__inner__content__item__info__text">
                      Complete your training and become a confident driver.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkProcess;
