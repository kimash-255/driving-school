import Link from "next/link";
import Image from "next/image";

const HomeContact = () => {
  return (
    <section class="contact-three contact__three__home-two" id="contact">
      <div class="container-fluid p-0 m-0">
        <div class="contact-three__inner">
          <div
            class="contact-three__inner__bg jarallax"
            data-jarallax
            data-speed="0.3"
            data-imgPosition="50% -100%"
            style={{
              background: "url(assets/images/resources/conntact-2-1.png)",
            }}
          ></div>
          {/* <!-- /.contact-three__bg --> */}
          <div class="row p-0 m-0">
            <div class="col-md-6 p-0 m-0">
              <div
                class="contact-three__content wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div
                  class="sec-title text-start wow fadeInUp"
                  data-wow-duration="300ms"
                >
                  <h6 class="sec-title__tagline">
                    <i class="icon-left-arrow sec-title__img"></i>
                    Get in Touch
                    <i class="icon-right-arrow sec-title__img"></i>
                  </h6>
                  {/* <!-- /.sec-title__tagline --> */}

                  <h3 class="sec-title__title">
                    Feel Free to Write us Anytime
                  </h3>
                  {/* <!-- /.sec-title__title --> */}
                </div>
                {/* <!-- /.sec-title --> */}
                <form
                  class="contact-three__form contact-form-validated form-one wow fadeInUp"
                  data-wow-duration="1500ms"
                  action="inc/sendemail.php"
                >
                  <div class="form-one__group">
                    <div class="form-one__control">
                      <input type="text" name="name" placeholder="Your name" />
                    </div>
                    {/* <!-- /.form-one__control form-on --> */}

                    <div class="form-one__control">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                      />
                    </div>
                    {/* <!-- /.form-one__control form-one__control__full --> */}

                    <div class="form-one__control">
                      <input type="text" name="phone" placeholder="Phone" />
                    </div>
                    {/* <!-- /.form-one__control form-on --> */}

                    <div class="form-one__control">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                    {/* <!-- /.form-one__control form-on --> */}

                    <div class="form-one__control form-one__control__full">
                      <textarea
                        name="message"
                        placeholder="Write  a message"
                      ></textarea>
                      {/* <!-- /# --> */}
                    </div>
                    {/* <!-- /.form-one__control --> */}

                    <div class="form-one__control">
                      <button
                        type="submit"
                        class="drivschol-btn drivschol-btn--base2"
                      >
                        <span>Get in Touch</span>
                      </button>
                    </div>
                    {/* <!-- /.form-one__control --> */}
                  </div>
                  {/* <!-- /.form-one__group --> */}
                </form>
              </div>
              {/* <!-- /.contact-one__content --> */}
            </div>
            {/* <!-- /.col-xl-7 --> */}
            <div class="col-md-6 p-0 m-0">
              <div
                class="contact-three__location wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div class="contact-three__location__content">
                  <div class="contact-three__location__content__icon">
                    <svg
                      viewBox="0 0 55 63"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M46.3407 7.80439C41.3081 2.77164 34.6167 0 27.4994 0C20.3821 0 13.6905 2.77164 8.6579 7.80439C3.62515 12.8373 0.853516 19.5286 0.853516 26.6457C0.853516 41.0437 14.4672 53.0193 21.781 59.4529C22.7974 60.347 23.6751 61.1191 24.3743 61.7722C25.2504 62.5906 26.375 62.9999 27.4992 62.9999C28.6238 62.9999 29.7481 62.5906 30.6243 61.7722C31.3236 61.119 32.2013 60.347 33.2176 59.4529C40.5314 53.0192 54.1451 41.0437 54.1451 26.6457C54.145 19.5286 51.3735 12.8373 46.3407 7.80439ZM30.7801 56.6821C29.7414 57.5958 28.8445 58.3849 28.105 59.0755C27.7653 59.3926 27.2332 59.3928 26.8934 59.0755C26.154 58.3846 25.257 57.5957 24.2183 56.682C17.3424 50.6336 4.5437 39.375 4.5437 26.6459C4.5437 13.9882 14.8414 3.69055 27.4991 3.69055C40.1567 3.69055 50.4544 13.9882 50.4544 26.6459C50.4546 39.375 37.6559 50.6336 30.7801 56.6821Z"
                        fill="#111117"
                      />
                      <path
                        d="M27.5023 13.8926C21.0274 13.8926 15.7598 19.1601 15.7598 25.635C15.7598 32.1098 21.0274 37.3773 27.5023 37.3773C33.9771 37.3773 39.2447 32.1098 39.2447 25.635C39.2447 19.1601 33.9771 13.8926 27.5023 13.8926ZM27.5023 33.6868C23.0624 33.6868 19.4502 30.0746 19.4502 25.6348C19.4502 21.1951 23.0624 17.5829 27.5023 17.5829C31.9422 17.5829 35.5542 21.1951 35.5542 25.6348C35.5542 30.0746 31.9422 33.6868 27.5023 33.6868Z"
                        fill="#111117"
                      />
                    </svg>
                  </div>
                  {/* <!-- /.contact-three__location__content__icon --> */}
                  <h5 class="contact-three__location__content__text">
                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                  </h5>
                  <div class="contact-three__location__content__line">
                    <svg
                      width="468"
                      height="40"
                      viewBox="0 0 468 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="468" height="14" fill="#DA0D0E" />
                      <rect
                        x="120"
                        y="26"
                        width="348"
                        height="14"
                        fill="#DA0D0E"
                      />
                    </svg>
                  </div>
                  {/* <!-- /.contact-three__location__content__line --> */}
                </div>
                {/* <!-- /.contact-three__location__content --> */}
                <div class="contact-three__location__map">
                  <div class="google-map google-map__contact">
                    <iframe
                      title="template google map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                      class="map__contact"
                      allowfullscreen
                    ></iframe>
                  </div>
                  {/* <!-- /.google-map --> */}
                </div>
                {/* <!-- /.contact-three__location__map --> */}
              </div>
              {/* <!-- /.contact-three__location --> */}
            </div>
            {/* <!-- /.col-xl-5 --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.contact-one__inner --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};
export default HomeContact;
