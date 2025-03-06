import Link from "next/link";
import Image from "next/image";

const HomeBlog = () => {
  return (
    <section class="blog-one" id="blog">
      <div class="container">
        <div
          class="sec-title text-center wow fadeInUp"
          data-wow-duration="300ms"
        >
          <h6 class="sec-title__tagline">
            <i class="icon-left-arrow sec-title__img"></i>
            Articles
            <i class="icon-right-arrow sec-title__img"></i>
          </h6>
          {/* <!-- /.sec-title__tagline --> */}

          <h3 class="sec-title__title">
            Latest News & Articles from <br />
            the Blog Posts
          </h3>
          {/* <!-- /.sec-title__title --> */}
        </div>
        {/* <!-- /.sec-title --> */}
        <div
          class="blog-one__carousel drivschol-owl__carousel drivschol-owl__carousel--with-shadow drivschol-owl__carousel--basic-nav owl-carousel owl-theme"
          data-owl-options='{
			"items": 1,
			"margin": 0,
			"loop": false,
			"smartSpeed": 700,
			"nav": true,
			"navText": ["<i class=\"fa fa-angle-left\"></i>" , "<i class=\"fa fa-angle-right\"></i>"],
			"dots": false,
			"autoplay": false,
			"responsive": {
				"0": {
					"items": 1
				},
				"775": {
					"items": 2,
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
              class="blog-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div class="blog-card__image">
                <div class="blog-card__image-item">
                  <img
                    src="assets/images/blog/blog-1-1.png"
                    alt="5 Ways That Can Develop Your Drving Skill"
                  />
                </div>
                <a href="blog-details-right.html" class="blog-card__image-link">
                  <span class="sr-only">
                    5 Ways That Can Develop Your Drving Skill
                  </span>
                </a>
                <div class="blog-card__date">
                  <h2 class="blog-card__date__month">31</h2>
                  <span class="blog-card__date__year">July 2023</span>
                  <img
                    class="date__shape"
                    src="assets/images/shapes/date.png"
                    alt
                  />
                </div>
              </div>
              {/* <!-- /.blog-card__image --> */}

              <div class="blog-card__content">
                <a href="blog-details-right.html" class="blog-card__meta">
                  <div class="blog-card__content-thumb">
                    <div class="author-img">
                      <img src="assets/images/blog/blog-author-1-1.png" alt />
                    </div>
                  </div>
                  <div class="blog-card__content-author">
                    <h6 class="author-name">Darrell Steward</h6>
                    <span class="author-title">Teacher</span>
                  </div>
                </a>
                <h3 class="blog-card__title">
                  <a href="blog-details-right.html">
                    5 Ways That Can Develop Your Drving Skill
                  </a>
                </h3>
                <a href="blog-details-right.html" class="blog-card__link">
                  Read more
                </a>
              </div>
              {/* <!-- /.blog-card__content --> */}
            </div>
            {/* <!-- /.blog-card --> */}
          </div>
          {/* <!-- /.item --> */}
          <div class="item">
            <div
              class="blog-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div class="blog-card__image">
                <div class="blog-card__image-item">
                  <img
                    src="assets/images/blog/blog-1-2.png"
                    alt="Five Ways That Can Develop Your Drving Skill"
                  />
                </div>
                <a href="blog-details-right.html" class="blog-card__image-link">
                  <span class="sr-only">
                    Five Ways That Can Develop Your Drving Skill
                  </span>
                </a>
                <div class="blog-card__date">
                  <h2 class="blog-card__date__month">02</h2>
                  <span class="blog-card__date__year">July 2023</span>
                  <img
                    class="date__shape"
                    src="assets/images/shapes/date.png"
                    alt
                  />
                </div>
              </div>
              {/* <!-- /.blog-card__image --> */}

              <div class="blog-card__content">
                <a href="blog-details-right.html" class="blog-card__meta">
                  <div class="blog-card__content-thumb">
                    <div class="author-img">
                      <img src="assets/images/blog/blog-author-1-2.png" alt />
                    </div>
                  </div>
                  <div class="blog-card__content-author">
                    <h6 class="author-name">Ralph Edwards</h6>
                    <span class="author-title">Teacher</span>
                  </div>
                </a>
                <h3 class="blog-card__title">
                  <a href="blog-details-right.html">
                    Five Ways That Can Develop Your Drving Skill
                  </a>
                </h3>
                <a href="blog-details-right.html" class="blog-card__link">
                  Read more
                </a>
              </div>
              {/* <!-- /.blog-card__content --> */}
            </div>
            {/* <!-- /.blog-card --> */}
          </div>
          {/* <!-- /.item --> */}
          <div class="item">
            <div
              class="blog-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div class="blog-card__image">
                <div class="blog-card__image-item">
                  <img
                    src="assets/images/blog/blog-1-3.png"
                    alt="Five Ways That Can Develop Your Drving Skill"
                  />
                </div>
                <a href="blog-details-right.html" class="blog-card__image-link">
                  <span class="sr-only">
                    Five Ways That Can Develop Your Drving Skill
                  </span>
                </a>
                <div class="blog-card__date">
                  <h2 class="blog-card__date__month">03</h2>
                  <span class="blog-card__date__year">July 2023</span>
                  <img
                    class="date__shape"
                    src="assets/images/shapes/date.png"
                    alt
                  />
                </div>
              </div>
              {/* <!-- /.blog-card__image --> */}

              <div class="blog-card__content">
                <a href="blog-details-right.html" class="blog-card__meta">
                  <div class="blog-card__content-thumb">
                    <div class="author-img">
                      <img src="assets/images/blog/blog-author-1-3.png" alt />
                    </div>
                  </div>
                  <div class="blog-card__content-author">
                    <h6 class="author-name">Albert Flores</h6>
                    <span class="author-title">Teacher</span>
                  </div>
                </a>
                <h3 class="blog-card__title">
                  <a href="blog-details-right.html">
                    Five Ways That Can Develop Your Drving Skill
                  </a>
                </h3>
                <a href="blog-details-right.html" class="blog-card__link">
                  Read more
                </a>
              </div>
              {/* <!-- /.blog-card__content --> */}
            </div>
            {/* <!-- /.blog-card --> */}
          </div>
          {/* <!-- /.item --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};
export default HomeBlog;
