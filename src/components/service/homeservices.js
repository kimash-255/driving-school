import Link from "next/link";
import Image from "next/image";

const HomeServices = () => {
  return (
    <section class="service-two" id="services">
      <div
        class="service-two__bg"
        style={{
          background: "url(assets/images/backgrounds/service-bg-2-1.jpg)",
        }}
      ></div>
      {/* <!-- /.service-two__bg --> */}
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div
              class="sec-title text-center wow fadeInUp"
              data-wow-duration="300ms"
            >
              <h6 class="sec-title__tagline">
                <i class="icon-left-arrow sec-title__img"></i>
                Our Service
                <i class="icon-right-arrow sec-title__img"></i>
              </h6>
              {/* <!-- /.sec-title__tagline --> */}

              <h3 class="sec-title__title">
                We’re Offering the Best <br />
                Services to You
              </h3>
              {/* <!-- /.sec-title__title --> */}
            </div>
            {/* <!-- /.sec-title --> */}
          </div>
          {/* <!-- /.col-12 --> */}
        </div>
        {/* <!-- /.row --> */}
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div
              class="service-two__single wow fadeInUp"
              data-wow-delay="300ms"
            >
              <Link href="/service" class="service-two__single__image">
                <img
                  src="assets/images/service/service-2-1.jpg"
                  alt="drivschol"
                />{" "}
              </Link>
              {/* <!-- /.service-two__single__image --> */}
              <div class="service-two__single__icon">
                <i class="icon-Expert"></i>
              </div>
              {/* <!-- /.service-two__single__image__icon --> */}
              <div class="service-two__single__content">
                <h4 class="service-two__single__content__title">
                  <Link href="/service">Instructor Training</Link>
                </h4>
                <p class="service-two__single__content__text">
                  There are many variations of passages of Lorem Ipsum
                  aagtilable but the
                </p>
                {/* <!-- /.service-two__single__text --> */}
              </div>
              {/* <!-- /.service-two__single__content --> */}
            </div>
            {/* <!-- /.service-two__single --> */}
          </div>
          {/* <!-- /.col-lg-3 col-md-6 col-sm-12 --> */}

          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div
              class="service-two__single wow fadeInUp"
              data-wow-delay="500ms"
            >
              <Link href="/service" class="service-two__single__image">
                <img
                  src="assets/images/service/service-2-2.jpg"
                  alt="drivschol"
                />{" "}
              </Link>
              {/* <!-- /.service-two__single__image --> */}
              <div class="service-two__single__icon">
                <i class="icon-certificate-1"></i>
              </div>
              {/* <!-- /.service-two__single__image__icon --> */}
              <div class="service-two__single__content">
                <h4 class="service-two__single__content__title">
                  <Link href="/service">Road Guidelines</Link>
                </h4>
                <p class="service-two__single__content__text">
                  There are many variations of passages of Lorem Ipsum
                  aagtilable but the
                </p>
                {/* <!-- /.service-two__single__text --> */}
              </div>
              {/* <!-- /.service-two__single__content --> */}
            </div>
            {/* <!-- /.service-two__single --> */}
          </div>
          {/* <!-- /.col-lg-3 col-md-6 col-sm-12 --> */}

          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div
              class="service-two__single wow fadeInUp"
              data-wow-delay="700ms"
            >
              <Link href="/service" class="service-two__single__image">
                <img
                  src="assets/images/service/service-2-3.jpg"
                  alt="drivschol"
                />{" "}
              </Link>
              {/* <!-- /.service-two__single__image --> */}
              <div class="service-two__single__icon">
                <i class="icon-license-1"></i>
              </div>
              {/* <!-- /.service-two__single__image__icon --> */}
              <div class="service-two__single__content">
                <h4 class="service-two__single__content__title">
                  <Link href="/service">Driving License</Link>
                </h4>
                <p class="service-two__single__content__text">
                  There are many variations of passages of Lorem Ipsum
                  aagtilable but the
                </p>
                {/* <!-- /.service-two__single__text --> */}
              </div>
              {/* <!-- /.service-two__single__content --> */}
            </div>
            {/* <!-- /.service-two__single --> */}
          </div>
          {/* <!-- /.col-lg-3 col-md-6 col-sm-12 --> */}

          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div
              class="service-two__single wow fadeInUp"
              data-wow-delay="800ms"
            >
              <Link href="/service" class="service-two__single__image">
                <img
                  src="assets/images/service/service-2-4.jpg"
                  alt="drivschol"
                />{" "}
              </Link>
              {/* <!-- /.service-two__single__image --> */}
              <div class="service-two__single__icon">
                <i class="icon-safety"></i>
              </div>
              {/* <!-- /.service-two__single__image__icon --> */}
              <div class="service-two__single__content">
                <h4 class="service-two__single__content__title">
                  <Link href="/service">Road Safety Guide</Link>
                </h4>
                <p class="service-two__single__content__text">
                  There are many variations of passages of Lorem Ipsum
                  aagtilable but the
                </p>
                {/* <!-- /.service-two__single__text --> */}
              </div>
              {/* <!-- /.service-two__single__content --> */}
            </div>
            {/* <!-- /.service-two__single --> */}
          </div>
          {/* <!-- /.col-lg-3 col-md-6 col-sm-12 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};
export default HomeServices;
