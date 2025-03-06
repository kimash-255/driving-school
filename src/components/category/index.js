import Link from "next/link";
import Image from "next/image";

const CourseCategory = () => {
  return (
    <section class="category-one">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div
              class="category-one__single wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div class="category-one__icon">
                <i class="icon-driving-license"></i>
              </div>
              <div class="category-one__content">
                <h5 class="category-one__content__title">
                  <Link href="/service">Driving License</Link>
                </h5>
                <p class="category-one__content__text">
                  Lorem Ipsum is simply dummy typesetting industry.
                </p>
                {/* <!-- /.category-one__text --> */}
                {/* <!-- category-title --> */}
                <Link href="/service" class="category-one__btn">
                  <span class="icon-pluse"></span>
                </Link>
                {/* <!-- category-btn --> */}
              </div>
            </div>
            {/* <!-- /.category-one__single --> */}
          </div>
          {/* <!-- /.col-md-4 --> */}

          <div class="col-lg-4 col-md-6 col-sm-12">
            <div
              class="category-one__single wow fadeInUp"
              data-wow-delay="700ms"
            >
              <div class="category-one__icon">
                <i class="icon-online-course-1"></i>
              </div>
              <div class="category-one__content">
                <h5 class="category-one__content__title">
                  <Link href="/course">Course for Everyone</Link>
                </h5>
                <p class="category-one__content__text">
                  Lorem Ipsum is simply dummy typesetting industry.
                </p>
                {/* <!-- /.category-one__text --> */}
                {/* <!-- category-title --> */}
                <Link href="/course" class="category-one__btn">
                  <span class="icon-pluse"></span>
                </Link>
                {/* <!-- category-btn --> */}
              </div>
            </div>
            {/* <!-- /.category-one__single --> */}
          </div>
          {/* <!-- /.col-md-4 --> */}

          <div class="col-lg-4 col-md-6 col-sm-12">
            <div
              class="category-one__single wow fadeInUp"
              data-wow-delay="900ms"
            >
              <div class="category-one__icon">
                <i class="icon-car-1"></i>
              </div>
              <div class="category-one__content">
                <h5 class="category-one__content__title">
                  <Link href="/service">Driving Test</Link>
                </h5>
                <p class="category-one__content__text">
                  Lorem Ipsum is simply dummy typesetting industry.
                </p>
                {/* <!-- /.category-one__text --> */}
                {/* <!-- category-title --> */}
                <Link href="/service" class="category-one__btn">
                  <span class="icon-pluse"></span>
                </Link>
                {/* <!-- category-btn --> */}
              </div>
            </div>
            {/* <!-- /.category-one__single --> */}
          </div>
          {/* <!-- /.col-md-4 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};
export default CourseCategory;
