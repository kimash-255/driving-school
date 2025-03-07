import Link from "next/link";
import Image from "next/image";
import services from "@/data/services.json"; // Import the JSON file

const HomeServices = () => {
  return (
    <section className="service-page" id="services">
      {/* <div
        className="service-two__bg"
        style={{
          background: "url(assets/images/backgrounds/service-bg-2-1.jpg)",
        }}
      ></div> */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="sec-title text-center wow fadeInUp"
              data-wow-duration="300ms"
            >
              <h6 className="sec-title__tagline">
                <i className="icon-left-arrow sec-title__img"></i>
                Our Services
                <i className="icon-right-arrow sec-title__img"></i>
              </h6>
              <h3 className="sec-title__title">
                We’re Offering the Best <br />
                Services to You
              </h3>
            </div>
          </div>
        </div>
        <div className="row gutter-y-30">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <div
                class="service-card service-card-one  wow fadeInUp animated animated"
                data-wow-delay={`${300 + index * 200}ms`}
              >
                <div class="service-card__image">
                  <img src={service.image} alt={service.title} />
                </div>

                <div class="service-card__content">
                  <h3 class="service-card__title">
                    <Link href={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p class="service-card__text">{service.description}</p>
                </div>

                <div class="service-card__bth">
                  <Link
                    class="drivschol-btn drivschol-btn--base2"
                    href={`/services/${service.slug}`}
                  >
                    Read More <i class="fas fa-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
