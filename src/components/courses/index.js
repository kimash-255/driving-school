import Link from "next/link";
import Image from "next/image";

const Courses = () => {
  return (
    <section class="course-one course-two__home" id="course">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div
              class="sec-title text-center wow fadeInUp"
              data-wow-duration="300ms"
            >
              <h6 class="sec-title__tagline">
                <i class="icon-left-arrow sec-title__img"></i>
                See Our Course
                <i class="icon-right-arrow sec-title__img"></i>
              </h6>
              {/* <!-- /.sec-title__tagline --> */}

              <h3 class="sec-title__title">
                Develop Your Driving Skill <br />
                to Join the Course
              </h3>
              {/* <!-- /.sec-title__title --> */}
            </div>
            {/* <!-- /.sec-title --> */}
          </div>
          {/* <!-- /.col-12 --> */}
        </div>
        {/* <!-- /.row --> */}
        <div class="row gutter-x-60">
          <div class="col-lg-6">
            <div class="course-one__item wow fadeInUp" data-wow-delay="300ms">
              <div class="course-one__item__left">
                <div class="course-one__item__left__price">
                  <div class="price__box">
                    <span class="course-one__item__left__price__top">
                      40 <sub>$</sub>
                    </span>
                    <p class="course-one__item__left__price__text">
                      Per Person
                    </p>
                  </div>
                  {/* <!-- /.price__box --> */}
                </div>
                {/* <!-- /.course-one__item__left__price__content --> */}
                <h3 class="course-one__item__left__title">
                  <Link href="/course">Standard Driving Course</Link>
                </h3>
                {/* <!-- /.course-one__item__left__title --> */}
                <p class="course-one__item__left__text">
                  There are many variations of passages of Lorem Ipsum
                  aagtilable but the majority have suffered
                </p>
                {/* <!-- /.course-one__item__left__text --> */}
                <div class="course-one__item__left__author">
                  <Link
                    href="/course"
                    class="course-one__item__left__author__card"
                  >
                    <div class="course-one__item__left__author__thumb">
                      <img
                        src="assets/images/resources/testi-1-3.jpg"
                        alt="course-one__item__left__author__thumb"
                      />
                    </div>
                    {/* <!-- /.course-one__item__left__author__thumb --> */}
                    <div class="course-one__item__left__author__content">
                      <h6 class="course-one__item__left__author__name">
                        Guy Hawkins
                      </h6>
                      <span class="course-one__item__left__author__degeneration">
                        Instructor
                      </span>
                    </div>
                    {/* <!-- /.course-one__item__left__author__name -->  */}
                  </Link>
                  {/* <!-- /.course-one__item__left__author__content --> */}
                  <div class="course-one__item__left__author__link">
                    <Link
                      class="course-one__item__left__author__link__btn"
                      href="/course"
                    >
                      <i class="icon-arrow"></i>
                    </Link>
                  </div>
                  {/* <!-- /.course-one__item__right__link --> */}
                </div>
                {/* <!-- /.course-one__item__left__author --> */}
              </div>
              {/* <!-- /.course-one__item__left --> */}
              <div class="course-one__item__right">
                <div class="course-one__item__session">
                  <div class="course-one__item__session__shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="113"
                      height="21"
                      viewBox="0 0 113 21"
                      fill="none"
                    >
                      <path
                        d="M9.42657 0L9.46074 20.4271H0.999014L0.964844 0H9.42657Z"
                        fill="#EC2526"
                      />
                      <path
                        d="M24.243 0L24.268 20.4271H15.8154L15.7812 0H24.243Z"
                        fill="#EC2526"
                      />
                      <path
                        d="M39.0502 0L39.0844 20.4271H30.6227L30.5977 0H39.0502Z"
                        fill="#EC2526"
                      />
                      <path
                        d="M53.866 0L53.9002 20.4271H45.4385L45.4043 0H53.866Z"
                        fill="#EC2526"
                      />
                      <path
                        d="M68.6805 0L68.7055 20.4271H60.2529L60.2188 0H68.6805Z"
                        fill="#EC2526"
                      />
                      <path
                        d="M83.4897 0L83.5239 20.4271H75.0621L75.0371 0H83.4897Z"
                        fill="#EC2526"
                      />
                      <path
                        d="M98.3055 0L98.3396 20.4271H89.8779L89.8438 0H98.3055Z"
                        fill="#EC2526"
                      />
                      <path
                        d="M112.305 0L112.34 20.4271H103.878L103.844 0H112.305Z"
                        fill="#EC2526"
                      />
                    </svg>
                  </div>
                  {/* <!-- /.course-one__item__session__shape --> */}
                  <p class="course-one__item__session__icon">
                    <i class="icon-seminar-1"></i> 16 Hours Session
                  </p>
                  {/* <!-- /.course-one__item__session__icon --> */}
                </div>
                {/* <!-- /.course-one__item__session --> */}
                <Link
                  href="/course"
                  class="course-one__item__img course-one__item__img__two"
                >
                  <img
                    src="assets/images/course/course-c-3-1.jpg"
                    alt="course-one__item__img"
                  />{" "}
                </Link>
                {/* <!-- /.course-one__item__img --> */}
              </div>
              {/* <!-- /.course-one__item__left --> */}
            </div>
            {/* <!-- /.course-one__item --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}

          <div class="col-lg-6">
            <div class="course-one__item wow fadeInUp" data-wow-delay="500ms">
              <div class="course-one__item__left">
                <div class="course-one__item__left__price">
                  <div class="price__box">
                    <span class="course-one__item__left__price__top">
                      60 <sub>$</sub>
                    </span>
                    <p class="course-one__item__left__price__text">
                      Per Person
                    </p>
                  </div>
                  {/* <!-- /.price__box --> */}
                </div>
                {/* <!-- /.course-one__item__left__price__content --> */}
                <h3 class="course-one__item__left__title">
                  <Link href="/course">Defensive Driving Course</Link>
                </h3>
                {/* <!-- /.course-one__item__left__title --> */}
                <p class="course-one__item__left__text">
                  There are many variations of passages of Lorem Ipsum
                  aagtilable but the majority have suffered
                </p>
                {/* <!-- /.course-one__item__left__text --> */}
                <div class="course-one__item__left__author">
                  <Link
                    href="/course"
                    class="course-one__item__left__author__card"
                  >
                    <div class="course-one__item__left__author__thumb">
                      <img
                        src="assets/images/resources/testi-1-7.jpg"
                        alt="course-one__item__left__author__thumb"
                      />
                    </div>
                    {/* <!-- /.course-one__item__left__author__thumb --> */}
                    <div class="course-one__item__left__author__content">
                      <h6 class="course-one__item__left__author__name">
                        Sara Albert
                      </h6>
                      <span class="course-one__item__left__author__degeneration">
                        Instructor
                      </span>
                    </div>
                    {/* <!-- /.course-one__item__left__author__name -->  */}
                  </Link>
                  {/* <!-- /.course-one__item__left__author__content --> */}
                  <div class="course-one__item__left__author__link">
                    <Link
                      class="course-one__item__left__author__link__btn"
                      href="/course"
                    >
                      <i class="icon-arrow"></i>
                    </Link>
                  </div>
                  {/* <!-- /.course-one__item__right__link --> */}
                </div>
                {/* <!-- /.course-one__item__left__author --> */}
              </div>
              {/* <!-- /.course-one__item__left --> */}
              <div class="course-one__item__right">
                <div class="course-one__item__session">
                  <div class="course-one__item__session__shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="113"
                      height="21"
                      viewBox="0 0 113 21"
                      fill="none"
                    >
                      <path
                        d="M9.42657 0L9.46074 20.4271H0.999014L0.964844 0H9.42657Z"
                        fill="#EC2526"
                      />
                      <path
                        d="M24.243 0L24.268 20.4271H15.8154L15.7812 0H24.243Z"
                        fill="#EC2526"
                      />
                      <path
                        d="M39.0502 0L39.0844 20.4271H30.6227L30.5977 0H39.0502Z"
                        fill="#EC2526"
                      />
                      <path
                        d="M53.866 0L53.9002 20.4271H45.4385L45.4043 0H53.866Z"
                        fill="#EC2526"
                      />
                      <path
                        d="M68.6805 0L68.7055 20.4271H60.2529L60.2188 0H68.6805Z"
                        fill="#EC2526"
                      />
                      <path
                        d="M83.4897 0L83.5239 20.4271H75.0621L75.0371 0H83.4897Z"
                        fill="#EC2526"
                      />
                      <path
                        d="M98.3055 0L98.3396 20.4271H89.8779L89.8438 0H98.3055Z"
                        fill="#EC2526"
                      />
                      <path
                        d="M112.305 0L112.34 20.4271H103.878L103.844 0H112.305Z"
                        fill="#EC2526"
                      />
                    </svg>
                  </div>
                  {/* <!-- /.course-one__item__session__shape --> */}
                  <p class="course-one__item__session__icon">
                    <i class="icon-seminar-1"></i> 16 Hours Session
                  </p>
                  {/* <!-- /.course-one__item__session__icon --> */}
                </div>
                {/* <!-- /.course-one__item__session --> */}
                <Link href="/course" class="course-one__item__img">
                  <img
                    src="assets/images/course/course-c-3-2.jpg"
                    alt="course-one__item__img"
                  />{" "}
                </Link>
                {/* <!-- /.course-one__item__img --> */}
              </div>
              {/* <!-- /.course-one__item__left --> */}
            </div>
            {/* <!-- /.course-one__item --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};
export default Courses;
