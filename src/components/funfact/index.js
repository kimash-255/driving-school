import Link from "next/link";
import Image from "next/image";

const FunFact = () => {
  return (
    <section class="funfact-one">
      <div
        class="funfact-one__bg jarallax"
        data-jarallax
        data-speed="0.3"
        data-imgPosition="50% -100%"
        // style={{
        //   background: "url(asset/images/backgrounds/funfact-bg-1-1.jpg)",
        // }}
      ></div>
      <div class="container">
        <ul class="list-unstyled funfact-one__list">
          <li
            class="funfact-one__left__content wow fadeInUp"
            data-wow-delay="300ms"
          >
            <span class="funfact-one__left__content__subtitle">
              <img
                src="/assets/images/logo2.png"
                alt="Are You Ready to Learn"
              />
              Are You Ready to Learn?
            </span>
            {/* <!-- /.funfact-one__item__subtitle --> */}
            <h3 class="funfact-one__left__content__title">
              Our Students Pass the Driving Test.
            </h3>
            {/* <!-- /.funfact-one__item__title --> */}
            <div class="funfact-one__left__content__link">
              <Link
                href=""
                class="funfact-one__left__content__link__btn drivschol-btn drivschol-btn--base2"
              >
                <span>Learn More</span>
              </Link>
            </div>
            {/* <!-- /.funfact-one__item__btn --> */}
          </li>
          {/* <!-- /.funfact-one__item --> */}

          <li
            class="funfact-one__item count-box wow fadeInUp"
            data-wow-delay="500ms"
          >
            <div class="funfact-one__icon">
              <div
                class="funfact-one__item__hover"
                style={{
                  background: "url(assets/images/gallery/course-1-1.jpg)",
                }}
              ></div>
              <i class="icon-Student"></i>
            </div>
            {/* <!-- /.funfact-one__icon --> */}
            <div class="funfact-one__content">
              <h3 class="funfact-one__count">
                <span
                  class="count-text"
                  data-stop="30.3"
                  data-speed="1500"
                ></span>
                <span>200+</span>
              </h3>
              {/* <!-- /.funfact-one__count --> */}
              <p class="funfact-one__text">Student Enrolled</p>
              {/* <!-- /.funfact-one__text --> */}
            </div>
            {/* <!-- /.funfact-one__content --> */}
          </li>
          {/* <!-- /.funfact-one__item --> */}

          <li
            class="funfact-one__item count-box wow fadeInUp"
            data-wow-delay="700ms"
          >
            <div class="funfact-one__icon">
              <div
                class="funfact-one__item__hover"
                style={{
                  background: "url(assets/images/gallery/course-1-2.jpg)",
                }}
              ></div>
              <i class="icon-rating-1"></i>
            </div>
            {/* <!-- /.funfact-one__icon --> */}
            <div class="funfact-one__content">
              <h3 class="funfact-one__count">
                <span
                  class="count-text"
                  data-stop="88.9"
                  data-speed="1500"
                ></span>
                <span>100%</span>
              </h3>
              {/* <!-- /.funfact-one__count --> */}
              <p class="funfact-one__text">Satisfaction Rate</p>
              {/* <!-- /.funfact-one__text --> */}
            </div>
            {/* <!-- /.funfact-one__content --> */}
          </li>
          {/* <!-- /.funfact-one__item --> */}

          <li
            class="funfact-one__item count-box wow fadeInUp"
            data-wow-delay="900ms"
          >
            <div class="funfact-one__icon">
              <div
                class="funfact-one__item__hover"
                style={{
                  background: "url(assets/images/gallery/course-1-3.jpg)",
                }}
              ></div>
              <i class="icon-instructor-1"></i>
            </div>
            {/* <!-- /.funfact-one__icon --> */}
            <div class="funfact-one__content">
              <h3 class="funfact-one__count">
                <span
                  class="count-text"
                  data-stop="6.30"
                  data-speed="1500"
                ></span>
                <span>2+</span>
              </h3>
              {/* <!-- /.funfact-one__count --> */}
              <p class="funfact-one__text">Top Instructor</p>
              {/* <!-- /.funfact-one__text --> */}
            </div>
            {/* <!-- /.funfact-one__content --> */}
          </li>
          {/* <!-- /.funfact-one__item --> */}
        </ul>
        {/* <!-- /.list-unstyled funfact-one__list --> */}
      </div>
      {/* <!-- /.container --> */}
      <div class="funfact-one__element">
        <img src="/assets/images/shapes/fun-fact-1-1.png" alt />
      </div>
      {/* <!-- /.funfact-one__element --> */}
    </section>
  );
};
export default FunFact;
