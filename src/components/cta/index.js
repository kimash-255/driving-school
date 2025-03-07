import Link from "next/link";
import Image from "next/image";

const Cta = () => {
  return (
    <section class="cta-two">
      <div
        class="cta-two__bg"
        style={{ background: "url(assets/images/resources/cta.svg)" }}
      ></div>
      {/* <!-- /.cta-bg --> */}
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <div class="cta-two__thumb wow fadeInUp" data-wow-delay="300ms">
              <img
                src="/assets/images/resources/cta-car-2-1.png"
                alt="cta-two__thumb"
              />
            </div>
          </div>
          <div class="col-lg-5">
            <div class="cta-two__content wow fadeInUp" data-wow-delay="500ms">
              <h3 class="cta-two__title">
                Book Your First Driving Lesson Today
              </h3>
              {/* <!-- /.cta-two__title --> */}
              <Link
                href="/contact"
                class="drivschol-btn cta-two__btn drivschol-btn--base2"
              >
                <span>Book Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.container --> */}
      <div class="cta-two__shape-line">
        <img src="/assets/images/shapes/line-cta.png" alt />
      </div>
      {/* <!-- /.cta-two__shape-line --> */}
    </section>
  );
};
export default Cta;
