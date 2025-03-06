import Link from "next/link";
import Image from "next/image";

const Corousel = () => {
  return (
    <div class="client-carousel client-carousel--base client-carousel--base-two">
      <div class="container">
        <div class="client-carousel__top text-center">
          <h3 class="client-carousel__title">2k + Brands Trust Us</h3>
        </div>

        <div
          class="client-carousel__two drivschol-owl__carousel owl-theme owl-carousel"
          data-owl-options='{
            "items": 5,
            "margin": 55,
            "smartSpeed": 700,
            "loop":true,
            "autoplay": 6000,
            "nav":false,
            "dots":false,
            "responsive":{
                "0":{
                    "items":1,
                    "margin": 0
                },
                "360":{
                    "items":2,
                    "margin": 0
                },
                "575":{
                    "items":3,
                    "margin": 30
                },
                "768":{
                    "items":3,
                    "margin": 40
                },
                "992":{
                    "items": 4,
                    "margin": 40
                },
                "1200":{
                    "items": 5,
                    "margin": 108
                }
            }
            }'
        >
          <div class="client-carousel__one__item">
            <img src="assets/images/resources/brand-2-1.png" alt="drivschol" />
          </div>
          {/* <!-- /.owl-slide-item--> */}
          <div class="client-carousel__one__item">
            <img src="assets/images/resources/brand-2-1.png" alt="drivschol" />
          </div>
          {/* <!-- /.owl-slide-item--> */}
          <div class="client-carousel__one__item">
            <img src="assets/images/resources/brand-2-1.png" alt="drivschol" />
          </div>
          {/* <!-- /.owl-slide-item--> */}
          <div class="client-carousel__one__item">
            <img src="assets/images/resources/brand-2-1.png" alt="drivschol" />
          </div>
          {/* <!-- /.owl-slide-item--> */}
          <div class="client-carousel__one__item">
            <img src="assets/images/resources/brand-2-1.png" alt="drivschol" />
          </div>
          {/* <!-- /.owl-slide-item--> */}
          <div class="client-carousel__one__item">
            <img src="assets/images/resources/brand-2-1.png" alt="drivschol" />
          </div>
          {/* <!-- /.owl-slide-item--> */}
          <div class="client-carousel__one__item">
            <img src="assets/images/resources/brand-2-1.png" alt="drivschol" />
          </div>
          {/* <!-- /.owl-slide-item--> */}
          <div class="client-carousel__one__item">
            <img src="assets/images/resources/brand-2-1.png" alt="drivschol" />
          </div>
          {/* <!-- /.owl-slide-item--> */}
          <div class="client-carousel__one__item">
            <img src="assets/images/resources/brand-2-1.png" alt="drivschol" />
          </div>
          {/* <!-- /.owl-slide-item--> */}
          <div class="client-carousel__one__item">
            <img src="assets/images/resources/brand-2-1.png" alt="drivschol" />
          </div>
          {/* <!-- /.owl-slide-item--> */}
        </div>
        {/* <!-- /.thm-owl__slider --> */}
      </div>
      {/* <!-- /.container --> */}
    </div>
  );
};
export default Corousel;
