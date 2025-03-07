import Link from "next/link";
import Image from "next/image";

const Benefits = () => {
  return (
    <section class="benefits-one">
      <div class="container">
        <div class="row align-items-end">
          <div class="col-xl-5">
            <div class="benefits-one__left">
              <div class="benefits-one__left__content">
                <div class="benefits-one__left__content__head">
                  <div
                    class="sec-title text-start wow fadeInUp"
                    data-wow-duration="300ms"
                  >
                    <h6 class="sec-title__tagline">
                      <i class="icon-left-arrow sec-title__img"></i>
                      Our Benefits
                      <i class="icon-right-arrow sec-title__img"></i>
                    </h6>
                    {/* <!-- /.sec-title__tagline --> */}

                    <h3 class="sec-title__title">
                      Improve Your Driving Skills with Our Courses
                    </h3>
                    {/* <!-- /.sec-title__title --> */}
                  </div>
                  {/* <!-- /.sec-title --> */}
                </div>
                {/* <!-- /.benefits-one__left__content__head --> */}
                <p
                  class="benefits-one__left__content__text wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  Our driving courses are designed to help you become a safer
                  and more confident driver. Learn essential skills and best
                  practices to navigate the roads with ease.
                </p>
                {/* <!-- /.benefits-one__left__content__text --> */}
                <div class="benefits-one__left__content__box">
                  <ul class="benefits-one__left__content__box__list list-unstyled">
                    <li class="benefits-one__left__content__box__list__item">
                      Don’t Over Speeding
                    </li>
                    {/* <!-- /.benefits-one__left__content__box__list__item --> */}
                    <li class="benefits-one__left__content__box__list__item">
                      Be Extra Careful in Bad Weather
                    </li>
                    {/* <!-- /.benefits-one__left__content__box__list__item --> */}
                    <li class="benefits-one__left__content__box__list__item">
                      Don't Follow Too Closely
                    </li>
                    {/* <!-- /.benefits-one__left__content__box__list__item --> */}
                    <li class="benefits-one__left__content__box__list__item">
                      Avoid All Distractions
                    </li>
                    {/* <!-- /.benefits-one__left__content__box__list__item --> */}
                    <li class="benefits-one__left__content__box__list__item">
                      Wear Your Seat Belt
                    </li>
                    {/* <!-- /.benefits-one__left__content__box__list__item --> */}
                  </ul>
                  {/* <!-- /.benefits-one__left__content__box__list --> */}
                </div>
                {/* <!-- /.benefits-one__left__content__box --> */}
              </div>
              {/* <!-- /.benefits-one__left__content --> */}
            </div>
            {/* <!-- /.benefits-one__left --> */}
          </div>
          {/* <!-- /.col-xl-6 --> */}
          <div class="col-xl-7">
            <div
              class="benefits-one__thumb wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div class="benefits-one__thumb__item">
                <img src="/assets/images/resources/car-2-1.png" alt="car" />
              </div>
              {/* <!-- /.benefits-one__thumb__item --> */}
              <div class="benefits-one__thumb__cta">
                <span class="benefits-one__thumb__cta__text">
                  <img src="/assets/images/shapes/location-car.png" alt />
                  We’re near to your locations, Start learning driving course
                </span>
                {/* <!-- /.benefits-one__thumb__cta__text --> */}
                <Link
                  href="/contact"
                  class="benefits-one__thumb__cta__btn drivschol-btn"
                >
                  Start Learning
                </Link>
                {/* <!-- /.benefits-one__thumb__cta__btn --> */}
              </div>
              {/* <!-- /.benefits-one__thumb__cta --> */}
            </div>
            {/* <!-- /.benefits-one__thumb --> */}
          </div>
          {/* <!-- /.col-xl-6 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
      <span class="benefits-one__element">
        <svg
          width="68"
          height="552"
          viewBox="0 0 68 552"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="507"
            transform="matrix(-1 0 0 1 68 45)"
            fill="#DA0D0E"
          />
          <rect
            width="24"
            height="550"
            transform="matrix(-1 0 0 1 24 0)"
            fill="#DA0D0E"
          />
        </svg>{" "}
      </span>
      {/* <!-- /.benefits-one__element --> */}
    </section>
  );
};
export default Benefits;
