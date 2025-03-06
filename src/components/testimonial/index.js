import Link from "next/link";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="testimonials-one" id="testimonial">
      <div
        className="testimonials-one__bg"
        style={{ backgroundImage: "url(/assets/images/shapes/bg-ture.jpg)" }}
      ></div>
      <div className="container">
        <div
          className="sec-title2 text-center wow fadeInUp"
          data-wow-duration="300ms"
        >
          <h6 className="sec-title2__tagline">
            <Image
              src="/assets/images/shapes/shape_left2.svg"
              alt="Our Feedbacks"
              width={20}
              height={20}
              className="sec-title2__img"
            />
            Our Feedbacks
            <Image
              src="/assets/images/shapes/shape_right2.svg"
              alt="Our Feedbacks"
              width={20}
              height={20}
              className="sec-title2__img"
            />
          </h6>
          <h3 className="sec-title2__title">
            See What Students are <br /> Talking About?
          </h3>
        </div>

        <div className="testimonials-one__carousel owl-carousel">
          {testimonials.map((testimonial, index) => (
            <div className="item" key={index}>
              <div
                className="testimonials-card wow fadeInUp"
                data-wow-duration="1500ms"
              >
                <div className="testimonials-card__inner">
                  <div className="testimonials-card__top">
                    <div className="testimonials-card__top__icon">
                      <i className="icon-quite"></i>
                    </div>
                    <div className="testimonials-card__top__rating">
                      {[...Array(5)].map((_, i) => (
                        <i className="fa fa-star" key={i}></i>
                      ))}
                    </div>
                    <p className="testimonials-card__top__designation">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="testimonials-card__author">
                    <div className="testimonials-card__author__image">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="testimonials-card__author__content">
                      <h5 className="testimonials-card__author__name">
                        <Link href="/team">{testimonial.name}</Link>
                      </h5>
                      <span className="testimonials-card__author__degeneration">
                        Student
                      </span>
                    </div>
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

const testimonials = [
  {
    name: "Savnah Nuyen",
    image: "/assets/images/resources/testi-1-3.jpg",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration by injected humour.",
  },
  {
    name: "Kathryn Murphy",
    image: "/assets/images/resources/testi-1-2.jpg",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration by injected humour.",
  },
  {
    name: "Theresa Webb",
    image: "/assets/images/resources/testi-1-1.jpg",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration by injected humour.",
  },
];

export default Testimonial;
