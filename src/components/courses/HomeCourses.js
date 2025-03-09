import Link from "next/link";
import Image from "next/image";

const CourseCard = ({ course }) => {
  return (
    <div className="col-lg-6">
      <div
        className="course-one__item wow fadeInUp"
        data-wow-delay={course.delay}
      >
        <div className="course-one__item__left">
          <div className="course-one__item__left__price">
            <div className="price__box">
              <span className="course-one__item__left__price__top">
                {course.lessons} <sub></sub>
              </span>
              <p className="course-one__item__left__price__text">Lessons</p>
            </div>
          </div>
          <h3 className="course-one__item__left__title">
            <Link href="/course">{course.title}</Link>
          </h3>
          <p className="course-one__item__left__text">{course.description}</p>
          <div className="course-one__item__left__author">
            <Link
              href="/course"
              className="course-one__item__left__author__card"
            >
              {/* <div className="course-one__item__left__author__thumb">
                <img
                  src={course.authorImage}
                  alt="course-one__item__left__author__thumb"
                />
              </div> */}
              <div className="course-one__item__left__author__content">
                <h6 className="course-one__item__left__author__name">
                  {/* {course.authorName} */}
                  Learn more
                </h6>
                <span className="course-one__item__left__author__degeneration">
                  {/* {course.authorTitle}
                   */}
                  About the course
                </span>
              </div>
            </Link>
            <div className="course-one__item__left__author__link">
              <Link
                className="course-one__item__left__author__link__btn"
                href="/course"
              >
                <i className="icon-arrow"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="course-one__item__right">
          <div className="course-one__item__session">
            <div className="course-one__item__session__shape">
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
            <p className="course-one__item__session__icon">
              <i className="icon-seminar-1"></i> {course.session}
            </p>
          </div>
          <Link href="/course" className="course-one__item__img">
            <img src={course.image} alt="course-one__item__img" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const HomeCourses = () => {
  const courses = [
    {
      lessons: 8,
      title: "In Class Driving Training",
      description:
        "Learn the theoretical aspects of driving in a classroom setting.",
      authorImage: "/assets/images/resources/testi-1-3.jpg",
      authorName: "John Doe",
      authorTitle: "Senior Instructor",
      session: "16 Hrs Session",
      image: "/assets/images/course/course-c-3-1.jpg",
      delay: "300ms",
    },
    {
      lessons: 6,
      title: "Behind the Wheels Training",
      description: "Practical driving sessions to enhance your driving skills.",
      authorImage: "/assets/images/resources/testi-1-7.jpg",
      authorName: "Jane Smith",
      authorTitle: "Lead Instructor",
      session: "20 Hrs Session",
      image: "/assets/images/course/course-c-3-2.jpg",
      delay: "500ms",
    },
  ];

  return (
    <section className="course-one course-two__home" id="course">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div
              className="sec-title text-center wow fadeInUp"
              data-wow-duration="300ms"
            >
              <h6 className="sec-title__tagline">
                <i className="icon-left-arrow sec-title__img"></i>
                See Our Course
                <i className="icon-right-arrow sec-title__img"></i>
              </h6>
              <h3 className="sec-title__title">
                Develop Your Driving Skill <br />
                to Join the Course
              </h3>
            </div>
          </div>
        </div>
        <div className="row gutter-x-60">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCourses;
