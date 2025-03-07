import React from "react";
import { useRouter } from "next/router";
import courses from "@/data/courses.json";
import Link from "next/link";

export async function getStaticPaths() {
  const paths = courses?.map((course) => ({
    params: { slug: course.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const course = courses?.find((c) => c.slug === params.slug);
  const otherCourses = courses?.filter((c) => c.slug !== params.slug);
  return { props: { course, otherCourses } };
}

const CourseDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const course = courses?.find((c) => c.slug === slug);
  const otherCourses = courses?.filter((c) => c.slug !== slug);
  const currentCourse = course;

  return (
    <section className="course-details-one">
      <div className="container">
        <div className="row gutter-x-15">
          <div className="col-12">
            <div
              className="course-details-one__inner wow fadeInUp animated"
              data-wow-delay="300ms"
            >
              <div className="course-details-one__inner__top">
                <div className="course-details-one__inner__top__left">
                  <div className="course-details-one__inner__top__left__author">
                    <img
                      src={currentCourse?.instructorImage}
                      alt="Instructor"
                    />
                  </div>
                  <div className="course-details-one__inner__top__left__content">
                    <h5 className="course-details-one__inner__top__left__content__name">
                      <Link href="#">{currentCourse?.instructor}</Link>
                    </h5>
                    <p className="course-details-one__inner__top__left__content__designation">
                      {currentCourse?.instructorTitle}
                    </p>
                  </div>
                </div>
                <div className="course-details-one__inner__top__right">
                  <div className="course-details-one__inner__top__right__bye">
                    <div className="course-details-one__inner__top__right__bye__price">
                      <span>${currentCourse?.price}</span> Per Person
                    </div>
                  </div>
                  <div className="course-details-one__inner__top__right__link">
                    <Link
                      className="course-details-one__inner__top__right__btn drivschol-btn"
                      href="/contact."
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="course-details">
              <div className="course-details__single">
                <div
                  className="course-details__image wow fadeInUp animated"
                  data-wow-delay="300ms"
                >
                  <img src={currentCourse?.image} alt="Course Image" />
                </div>
                <h3
                  className="course-details__title wow fadeInUp animated"
                  data-wow-delay="300ms"
                >
                  {currentCourse?.title}
                </h3>
                <div
                  className="course-details__text wow fadeInUp animated"
                  data-wow-delay="400ms"
                >
                  {currentCourse?.description}
                </div>
                <div
                  className="course-details__text wow fadeInUp animated"
                  data-wow-delay="500ms"
                >
                  {currentCourse?.content}
                </div>
              </div>

              <div className="course-details__single course-details__single__two">
                <div
                  className="course-details__single__image wow fadeInUp animated"
                  data-wow-delay="300ms"
                >
                  <div className="benefit__image">
                    <img
                      src="/assets/images/course/course-c-1-2.jpg"
                      alt="Benefit Image"
                    />
                  </div>
                </div>
                <div
                  className="course-details__benefit wow fadeInUp animated"
                  data-wow-delay="500ms"
                >
                  <h3 className="course-details__benefit__title">
                    Benefits of this Driving Course
                  </h3>
                  <ul className="course-details__benefit__nav">
                    {currentCourse?.benefits?.map((benefit, index) => (
                      <li
                        key={index}
                        className="course-details__benefit__nav__item"
                      >
                        <i className="fa fa-check-circle"></i> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="course-sidebar">
              <div className="course-sidebar__single__two">
                <h3 className="course-sidebar__single__two__title">
                  Course Features
                </h3>
                <ul className="list-unstyled course-sidebar__nav">
                  <li className="course-sidebar__nav__item">
                    <h6 className="course-sidebar__nav__item__left">
                      <i className="course-sidebar__nav__item__icon icon-training"></i>{" "}
                      Duration:
                    </h6>
                    <span className="course-sidebar__nav__item__right">
                      {currentCourse?.session}
                    </span>
                  </li>
                  <li className="course-sidebar__nav__item">
                    <h6 className="course-sidebar__nav__item__left">
                      <i className="course-sidebar__nav__item__icon icon-video-lesson"></i>{" "}
                      Lessons:
                    </h6>
                    <span className="course-sidebar__nav__item__right">
                      {currentCourse?.lessons}
                    </span>
                  </li>
                  <li className="course-sidebar__nav__item">
                    <h6 className="course-sidebar__nav__item__left">
                      <i className="course-sidebar__nav__item__icon icon-education_2"></i>{" "}
                      Students:
                    </h6>
                    <span className="course-sidebar__nav__item__right">
                      {currentCourse?.students}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="course-sidebar__single">
                <h3 className="course-sidebar__title">Latest Courses</h3>
                <ul className="course-sidebar__nav__two list-unstyled">
                  {otherCourses?.map((course) => (
                    <li
                      key={course.slug}
                      className="course-sidebar__nav__two__item"
                    >
                      <div className="course-sidebar__nav__two__item__image">
                        <img src={course.image} alt="Course Image" />
                      </div>
                      <div className="course-sidebar__nav__two__item__content">
                        <p className="course-sidebar__nav__two__item__content__name">
                          <span>by </span> {course.instructor}
                        </p>
                        <h5 className="course-sidebar__nav__two__item__content__title">
                          <Link href={`/courses/${course.slug}`}>
                            {course.title}
                          </Link>
                        </h5>
                        <span className="course-sidebar__nav__two__item__content__price">
                          ${course.price}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="course-sidebar__single">
                <div className="course-sidebar__contact">
                  <h3 className="course-sidebar__contact__title">
                    We’re an Experienced &amp; Digital System Driving School
                  </h3>
                  <ul className="list-unstyled course-sidebar__contact__list">
                    <li className="course-sidebar__contact__list__item">
                      <i className="fa fa-check-circle"></i> Professional
                      Instructors
                    </li>
                    <li className="course-sidebar__contact__list__item">
                      <i className="fa fa-check-circle"></i> Flexible Schedule
                    </li>
                  </ul>
                  <div className="course-sidebar__contact__info">
                    <Link
                      href="tel:+"
                      className="course-sidebar__contact__info__btn d-flex align-items-center"
                    >
                      <div className="course-sidebar__contact__info__icon">
                        <i className="icon-Call"></i>
                      </div>
                      <div className="course-sidebar__contact__info__content">
                        <span className="course-sidebar__contact__info__text">
                          Call for Questions
                        </span>
                        <h6 className="course-sidebar__contact__info__call">
                          000 000 0000
                        </h6>
                      </div>
                    </Link>
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

export default CourseDetail;
