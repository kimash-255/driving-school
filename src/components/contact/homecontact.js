const HomeContact = () => {
  return (
    <section class="contact-one">
      <div class="container">
        <div class="contact-one__inner">
          <div class="row">
            <div class="col-12">
              <div
                class="sec-title  text-center wow fadeInUp animated"
                data-wow-delay="300ms"
              >
                <h6 class="sec-title__tagline">
                  <i class="icon-left-arrow sec-title__img"></i>
                  Contact with Us
                  <i class="icon-right-arrow sec-title__img"></i>
                </h6>

                <h3 class="sec-title__title">Feel Free to Write us Anytime</h3>
              </div>
            </div>
          </div>

          <form
            class="contact-one__form contact-form-validated form-one"
            action="inc/sendemail.php"
            novalidate="novalidate"
          >
            <div
              class="form-one__group wow fadeInUp animated"
              data-wow-delay="300ms"
            >
              <div class="contact-one__form__control">
                <input type="text" name="name" placeholder="Your Name" />
              </div>

              <div class="contact-one__form__control">
                <input type="email" name="email" placeholder="Email Address" />
              </div>

              <div class="contact-one__form__control">
                <input type="text" name="phone" placeholder="Phone" />
              </div>

              <div class="contact-one__form__control ">
                <input
                  type="text"
                  name="massage"
                  placeholder="Write a Message"
                />
              </div>

              <div class="contact-one__form__control form-one__control__full">
                <textarea
                  name="message"
                  placeholder="Write A Message"
                ></textarea>
              </div>

              <div class="contact-one__form__control form-one__control__full text-center">
                <button
                  type="submit"
                  class="drivschol-btn drivschol-btn--base2"
                >
                  <span>Send a Message</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default HomeContact;
