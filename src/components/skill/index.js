import Link from "next/link";
import Image from "next/image";

const Skill = () => {
  return (
    <section class="develop-skill develop-skill--two">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div
              class="develop-skill__left wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div
                class="develop-skill__left__item"
                style={{
                  background: "url(assets/images/resources/developer-1-1.png)",
                }}
              >
                <div class="develop-skill__left__item__inner">
                  <div class="d-block d-md-flex align-items-end justify-content-between">
                    <div class="develop-skill__left__item__inner__item">
                      <i class="develop-skill__left__item__inner__item__icon icon-trophy"></i>
                      {/* <!-- /.develop-skill__left__item__inner__item__icon --> */}
                      <span class="develop-skill__left__item__inner__item__text">
                        Award Winning Driving School in Town
                      </span>
                      {/* <!-- /.develop-skill__left__item__inner__item__text --> */}
                    </div>
                    {/* <!-- / --> */}
                    <div class="develop-skill__left__item__inner__link">
                      <Link
                        href="/about"
                        class="develop-skill__left__item__inner__link__btn"
                      >
                        <i class="icon-arrow"></i>
                      </Link>
                    </div>
                    {/* <!-- /.develop-skill__left__item__inner__item --> */}
                  </div>
                  {/* <!-- /.develop-skill__left__item__inner__item --> */}
                </div>
                {/* <!-- /.develop-skill__left__item__inner --> */}
              </div>
              {/* <!-- /.develop-skill__left__item --> */}
            </div>
            {/* <!-- /.develop-skill__left --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}

          <div class="col-lg-6">
            <div class="develop-skill__right">
              <div class="develop-skill__right__head">
                <div
                  class="sec-title wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="000ms"
                >
                  <h6 class="sec-title__tagline">
                    <i class="icon-left-arrow sec-title__img"></i>
                    Develop Skill
                    <i class="icon-right-arrow sec-title__img"></i>
                  </h6>
                  {/* <!-- /.sec-title__tagline --> */}

                  <h3 class="sec-title__title">
                    Why You Should Choose Our Drivschol?
                  </h3>
                  {/* <!-- /.sec-title__title --> */}
                </div>
                {/* <!-- /.sec-title --> */}
                <p class="develop-skill__right__head__text">
                  There are many variations of passages of Lorem Ipsum
                  avagtilable, but the majority have suffered alteration in some
                  form, by injected hudfdfmour, or randomised words
                </p>
                {/* <!-- /.develop-skill__right__head__text --> */}
              </div>
              {/* <!-- /.develop-skill__right__head --> */}
              <div class="develop-skill__right__content">
                <div
                  class="develop-skill__right__content__item wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div class="develop-skill__right__content__item__icon">
                    <div class="icon">
                      <i class="icon-online-learning-1-1"></i>
                    </div>
                    {/* <!-- /.icon --> */}
                  </div>
                  {/* <!-- /.develop-skill__right__content__item__icon --> */}
                  <div class="develop-skill__right__content__item__content">
                    <h4 class="develop-skill__right__content__item__content__title">
                      Online Traffic School
                    </h4>
                    {/* <!-- /.develop-skill__right__content__item__content__title --> */}
                    <p class="develop-skill__right__content__item__content__text">
                      There are many variations of passages of Lorem Ipsum
                      avagtilable, but the majority
                    </p>
                    {/* <!-- /.develop-skill__right__content__item__content__text --> */}
                  </div>
                  {/* <!-- /.develop-skill__right__content__item__content --> */}
                </div>
                {/* <!-- /.develop-skill__right__content__item --> */}
                <div
                  class="develop-skill__right__content__item wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div class="develop-skill__right__content__item__icon">
                    <div class="icon">
                      <i class="icon-instructor-1-1"></i>
                    </div>
                    {/* <!-- /.icon --> */}
                  </div>
                  {/* <!-- /.develop-skill__right__content__item__icon --> */}
                  <div class="develop-skill__right__content__item__content">
                    <h4 class="develop-skill__right__content__item__content__title">
                      Expert Instructor
                    </h4>
                    {/* <!-- /.develop-skill__right__content__item__content__title --> */}
                    <p class="develop-skill__right__content__item__content__text">
                      There are many variations of passages of Lorem Ipsum
                      avagtilable, but the majority
                    </p>
                    {/* <!-- /.develop-skill__right__content__item__content__text --> */}
                  </div>
                  {/* <!-- /.develop-skill__right__content__item__content --> */}
                </div>
                {/* <!-- /.develop-skill__right__content__item --> */}
              </div>
              {/* <!-- /.develop-skill__right__content --> */}
            </div>
            {/* <!-- /.develop-skill__right --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
      <div class="develop-skill__shape-one">
        <img
          src="assets/images/shapes/about-cercle-1-1.png"
          alt="develop-skill__shape-one"
        />
      </div>
      {/* <!-- /.develop-skill__shape-one --> */}
      <div class="develop-skill__shape-two">
        <img
          src="assets/images/shapes/about-cercle-1-2.png"
          alt="develop-skill__shape-one"
        />
      </div>
      {/* <!-- /.develop-skill__shape-one --> */}
      <div class="develop-skill__shape-three">
        <img
          src="assets/images/shapes/about-cercle-1-3.png"
          alt="develop-skill__shape-one"
        />
      </div>
      {/* <!-- /.develop-skill__shape-one --> */}
      <div class="develop-skill__shape-fore">
        <img
          src="assets/images/shapes/about-cercle-1-4.png"
          alt="develop-skill__shape-one"
        />
      </div>
      {/* <!-- /.develop-skill__shape-one --> */}
    </section>
  );
};
export default Skill;
