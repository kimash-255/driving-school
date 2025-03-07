import Link from "next/link";
import Image from "next/image";
import courses from "@/data/courses.json"; // Import the JSON file

const Courses = () => {
  return (
    <section className="service-page" id="courses">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="sec-title text-center wow fadeInUp"
              data-wow-duration="300ms"
            >
              <h6 className="sec-title__tagline">
                <i className="icon-left-arrow sec-title__img"></i>
                Our Courses
                <i className="icon-right-arrow sec-title__img"></i>
              </h6>
              <h3 className="sec-title__title">
                We’re Offering the Best <br />
                courses to You
              </h3>
            </div>
          </div>
        </div>
        <div className="row gutter-y-30">
          {courses.map((course, index) => (
            <div key={index} className="col-md-6 col-sm-12">
              <div
                className="course-card wow fadeInUp animated"
                data-wow-delay={`${300 + index * 200}ms`}
              >
                <Link href={`/courses/${course.slug}`}>
                  <img src={course.image} alt={course.title} />
                </Link>
                <div className="course-card__content">
                  <div className="course-card__thumbnail">
                    <a className="course-card__session">
                      <i className="icon-training"></i>
                      <span>{course.duration}</span>
                    </a>
                    <div className="course-card__meta">
                      <h4 className="course-card__meta-price">
                        ${course.price}
                      </h4>
                      <span className="course-card__meta-class">
                        PER PERSON
                      </span>
                    </div>
                    <h3 className="course-card__title">
                      <Link href={`/courses/${course.slug}`}>
                        {course.title}
                      </Link>
                    </h3>
                    <p className="course-card__designation">
                      {course.description}
                    </p>
                  </div>

                  <div className="course-card__bottom">
                    <div className="course-card__author">
                      <div className="course-card__author-image">
                        <img
                          src={course.instructorImage}
                          alt={course.instructor}
                        />
                      </div>
                      <div className="course-card__author-content">
                        <h5 className="course-card__author-name">
                          <Link href="#">{course.instructor}</Link>
                        </h5>
                        <p className="course-card__author-designation">
                          {course.instructorTitle}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="course-card__bottom-btns"
                    >
                      <i className="icon-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
