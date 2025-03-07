import Link from "next/link";
import Image from "next/image";

const CourseCategory = () => {
  return (
    <section className="category-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="category-one__single wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div className="category-one__icon">
                <i className="icon-driving-license"></i>
              </div>
              <div className="category-one__content">
                <h5 className="category-one__content__title">
                  <Link href="/courses">Driving License</Link>
                </h5>
                <p className="category-one__content__text">
                  Get your driving license with our comprehensive courses
                  designed to help you pass the test with ease.
                </p>
                <Link href="/courses" className="category-one__btn">
                  <span className="icon-pluse"></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="category-one__single wow fadeInUp"
              data-wow-delay="700ms"
            >
              <div className="category-one__icon">
                <i className="icon-online-course-1"></i>
              </div>
              <div className="category-one__content">
                <h5 className="category-one__content__title">
                  <Link href="/courses">Course for Everyone</Link>
                </h5>
                <p className="category-one__content__text">
                  Our courses are tailored for all levels, whether you're a
                  beginner or looking to refresh your skills.
                </p>
                <Link href="/courses" className="category-one__btn">
                  <span className="icon-pluse"></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="category-one__single wow fadeInUp"
              data-wow-delay="900ms"
            >
              <div className="category-one__icon">
                <i className="icon-car-1"></i>
              </div>
              <div className="category-one__content">
                <h5 className="category-one__content__title">
                  <Link href="/courses">Driving Test</Link>
                </h5>
                <p className="category-one__content__text">
                  Prepare for your driving test with our expert instructors and
                  practical lessons.
                </p>
                <Link href="/courses" className="category-one__btn">
                  <span className="icon-pluse"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CourseCategory;
