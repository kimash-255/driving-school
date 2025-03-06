import Link from "next/link";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section class="testimonials-one" id="testimonial">
      <div
        class="testimonials-one__bg"
        style={{ background: "url(assets/images/shapes/bg-ture.jpg)" }}
      ></div>
      <div class="container">
        <div
          class="sec-title2 text-center wow fadeInUp"
          data-wow-duration="300ms"
        >
          <h6 class="sec-title2__tagline">
            <img
              src="assets/images/shapes/shape_left2.svg"
              alt="Our Feedbacks"
              class="sec-title2__img"
            />
            Our Feedbacks
            <img
              src="assets/images/shapes/shape_right2.svg"
              alt="Our Feedbacks"
              class="sec-title2__img"
            />
          </h6>
          {/* <!-- /.sec-title__tagline --> */}

          <h3 class="sec-title2__title">
            See What Students are <br />
            Talking About?
          </h3>
          {/* <!-- /.sec-title__title --> */}
        </div>
        {/* <!-- /.sec-title --> */}
        <div
          class="testimonials-one__carousel drivschol-owl__carousel drivschol-owl__carousel--with-shadow drivschol-owl__carousel--basic-nav owl-carousel"
          data-owl-options='{
			"items": 1,
			"margin": 30,
			"loop": false,
			"smartSpeed": 700,
			"nav": true,
			"navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
			"dots": false,
			"autoplay": false,
			"responsive": {
				"0": {
					"items": 1
				},
				"767": {
					"items": 1,
					"margin": 30
				},
				"992": {
					"items": 3,
					"margin": 30
				}
			}
		}'
        >
          <div class="item">
            <div
              class="testimonials-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <div class="testimonials-card__inner">
                <div class="testimonials-card__top">
                  <div class="testimonials-card__top__icon">
                    <i class="icon-quite"></i>
                  </div>
                  {/* <!-- /.testimonials-card__image --> */}
                  <div class="testimonials-card__top__rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  {/* <!-- /.testimonials-card__rating --> */}
                  <p class="testimonials-card__top__designation">
                    There are many variations of passages of Loriem Ipsum ies
                    available, but the majority have suffered alteturr adtion
                    form by injected humour
                  </p>
                  {/* <!-- /.testimonials-card__designation --> */}
                </div>
                {/* <!-- /.testimonials-card__top --> */}
                <div class="testimonials-card__author">
                  <div class="testimonials-card__author__image">
                    <img
                      src="assets/images/resources/testi-1-3.jpg"
                      alt="Savnah Nuyen"
                    />
                  </div>
                  {/* <!-- /.testimonials-card__author__image --> */}
                  <div class="testimonials-card__author__content">
                    <h5 class="testimonials-card__author__name">
                      <a href="team.html">Savnah Nuyen</a>
                    </h5>
                    {/* <!-- /.testimonials-card__author__name --> */}
                    <span class="testimonials-card__author__degeneration">
                      Student
                    </span>
                    {/* <!-- /.testimonials-card__author__name --> */}
                  </div>
                  {/* <!-- /.testimonials-card__author__content --> */}
                </div>
                {/* <!-- /.testimonials-card__author --> */}
              </div>
              {/* <!-- /.testimonials-card__inner --> */}
            </div>
            {/* <!-- /.testimonials-card --> */}
          </div>
          {/* <!-- /.item --> */}
          <div class="item">
            <div
              class="testimonials-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <div class="testimonials-card__inner">
                <div class="testimonials-card__top">
                  <div class="testimonials-card__top__icon">
                    <i class="icon-quite"></i>
                  </div>
                  {/* <!-- /.testimonials-card__image --> */}
                  <div class="testimonials-card__top__rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  {/* <!-- /.testimonials-card__rating --> */}
                  <p class="testimonials-card__top__designation">
                    There are many variations of passages of Loriem Ipsum ies
                    available, but the majority have suffered alteturr adtion
                    form by injected humour
                  </p>
                  {/* <!-- /.testimonials-card__designation --> */}
                </div>
                {/* <!-- /.testimonials-card__top --> */}
                <div class="testimonials-card__author">
                  <div class="testimonials-card__author__image">
                    <img
                      src="assets/images/resources/testi-1-2.jpg"
                      alt="Kathryn Murphy"
                    />
                  </div>
                  {/* <!-- /.testimonials-card__author__image --> */}
                  <div class="testimonials-card__author__content">
                    <h5 class="testimonials-card__author__name">
                      <a href="team.html">Kathryn Murphy</a>
                    </h5>
                    {/* <!-- /.testimonials-card__author__name --> */}
                    <span class="testimonials-card__author__degeneration">
                      Student
                    </span>
                    {/* <!-- /.testimonials-card__author__name --> */}
                  </div>
                  {/* <!-- /.testimonials-card__author__content --> */}
                </div>
                {/* <!-- /.testimonials-card__author --> */}
              </div>
              {/* <!-- /.testimonials-card__inner --> */}
            </div>
            {/* <!-- /.testimonials-card --> */}
          </div>
          {/* <!-- /.item --> */}
          <div class="item">
            <div
              class="testimonials-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <div class="testimonials-card__inner">
                <div class="testimonials-card__top">
                  <div class="testimonials-card__top__icon">
                    <i class="icon-quite"></i>
                  </div>
                  {/* <!-- /.testimonials-card__image --> */}
                  <div class="testimonials-card__top__rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  {/* <!-- /.testimonials-card__rating --> */}
                  <p class="testimonials-card__top__designation">
                    There are many variations of passages of Loriem Ipsum ies
                    available, but the majority have suffered alteturr adtion
                    form by injected humour
                  </p>
                  {/* <!-- /.testimonials-card__designation --> */}
                </div>
                {/* <!-- /.testimonials-card__top --> */}
                <div class="testimonials-card__author">
                  <div class="testimonials-card__author__image">
                    <img
                      src="assets/images/resources/testi-1-1.jpg"
                      alt="Theresa Webb"
                    />
                  </div>
                  {/* <!-- /.testimonials-card__author__image --> */}
                  <div class="testimonials-card__author__content">
                    <h5 class="testimonials-card__author__name">
                      <a href="team.html">Theresa Webb</a>
                    </h5>
                    {/* <!-- /.testimonials-card__author__name --> */}
                    <span class="testimonials-card__author__degeneration">
                      Student
                    </span>
                    {/* <!-- /.testimonials-card__author__name --> */}
                  </div>
                  {/* <!-- /.testimonials-card__author__content --> */}
                </div>
                {/* <!-- /.testimonials-card__author --> */}
              </div>
              {/* <!-- /.testimonials-card__inner --> */}
            </div>
            {/* <!-- /.testimonials-card --> */}
          </div>
          {/* <!-- /.item --> */}
        </div>
        {/* <!-- /.testimonials-one__carousel --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};
export default Testimonial;
