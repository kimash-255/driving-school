import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer class="main-footer background-black-2">
      <div class="main-footer__shape">
        <svg
          width="1800"
          height="527"
          viewBox="0 0 1800 527"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <g style="mix-blend-mode: luminosity" opacity="0.05">
            <path
              id="dot-1"
              d="M1265.35 413.982H449.836C445.928 413.982 442.813 410.811 442.813 406.96C442.813 403.109 445.985 399.938 449.836 399.938H1265.35C1269.26 399.938 1272.37 403.109 1272.37 406.96C1272.37 410.811 1269.26 413.982 1265.35 413.982Z"
              fill="black"
            />
            <path
              id="dot-2"
              d="M1091.32 57.8184H400.396C396.488 57.8184 393.373 54.647 393.373 50.7959C393.373 46.9449 396.544 43.7734 400.396 43.7734H1091.32C1095.23 43.7734 1098.34 46.9449 1098.34 50.7959C1098.34 54.647 1095.23 57.8184 1091.32 57.8184Z"
              fill="#7F7F7F"
            />
            <path
              id="dot-3"
              d="M950.643 14.8897H366.982C363.075 14.8897 359.96 11.7183 359.96 7.86722C359.96 4.01618 363.131 0.844727 366.982 0.844727H950.643C954.55 0.844727 957.665 4.01618 957.665 7.86722C957.665 11.7183 954.55 14.8897 950.643 14.8897Z"
              fill="#7F7F7F"
            />
            <path
              id="dot-4"
              d="M1124.67 444.623H424.294V458.668H1124.67V444.623Z"
              fill="#7F7F7F"
            />
            <path
              id="dot-5"
              d="M1068.61 507.37H393.77C389.862 507.37 386.747 504.199 386.747 500.348C386.747 496.497 389.919 493.325 393.77 493.325H1068.61C1072.52 493.325 1075.63 496.497 1075.63 500.348C1075.63 504.199 1072.52 507.37 1068.61 507.37Z"
              fill="black"
            />
            <path
              id="dot-6"
              d="M1588.9 322.637H365.737L281.354 364.772H1504.51L1588.9 322.637Z"
              fill="#7F7F7F"
            />
            <path
              id="dot-7"
              d="M1701.37 266.396H478.152L393.769 308.531H1616.99L1701.37 266.396Z"
              fill="black"
            />
            <path
              id="dot-8"
              d="M1307.54 322.637H84.3832L0 364.772H1223.16L1307.54 322.637Z"
              fill="black"
            />
            <path
              id="dot-9"
              d="M1420.02 266.396H196.799L112.473 308.531H1335.63L1420.02 266.396Z"
              fill="#7F7F7F"
            />
            <path
              id="dot-10"
              d="M1687.04 50.7969H1363.78L1279.4 92.8752H1602.72L1687.04 50.7969Z"
              fill="black"
            />
            <path
              id="dot-11"
              d="M1799.8 210.161H717.259L492.199 252.296H1715.42L1799.8 210.161Z"
              fill="#7F7F7F"
            />
            <path
              id="dot-12"
              d="M885.797 139.823L801.414 181.958H660.737L745.121 139.823H885.797Z"
              fill="#7F7F7F"
            />
            <path
              id="dot-13"
              d="M1068.67 139.823L984.282 181.958H843.605L927.989 139.823H1068.67Z"
              fill="black"
            />
            <path
              id="dot-14"
              d="M1251.53 139.823L1167.15 181.958H1026.47L1110.86 139.823H1251.53Z"
              fill="#7F7F7F"
            />
            <path
              id="dot-15"
              d="M1434.4 139.823L1350.02 181.958H1209.34L1293.73 139.823H1434.4Z"
              fill="black"
            />
            <path
              id="dot-16"
              d="M1617.27 139.823L1532.89 181.958H1392.21L1476.59 139.823H1617.27Z"
              fill="#7F7F7F"
            />
            <path
              id="dot-17"
              d="M1518.45 210.161H295.23L210.903 252.296H1434.06L1518.45 210.161Z"
              fill="black"
            />
            <path
              id="dot-18"
              d="M1701.37 526.458H1349.73C1345.83 526.458 1342.71 523.287 1342.71 519.436C1342.71 515.585 1345.88 512.413 1349.73 512.413H1701.37C1705.28 512.413 1708.39 515.585 1708.39 519.436C1708.39 523.287 1705.22 526.458 1701.37 526.458Z"
              fill="black"
            />
            <path
              id="dot-19"
              d="M1784.45 14.8897H1033.55C1029.64 14.8897 1026.53 11.7183 1026.53 7.86722C1026.53 4.01618 1029.64 0.844727 1033.55 0.844727H1784.45C1788.36 0.844727 1791.47 4.01618 1791.47 7.86722C1791.47 11.7183 1788.3 14.8897 1784.45 14.8897Z"
              fill="black"
            />
          </g> */}

          {/* <g
            style="mix-blend-mode: luminosity"
            opacity="0.05"
            clip-path="url(#clip0_276_5864)"
          >
            <path
              id="dot-20"
              d="M129.512 160.57C161.383 150.894 179.378 117.201 169.706 85.3156C160.034 53.4303 126.357 35.4265 94.4862 45.1031C62.6156 54.7796 44.6201 88.4722 54.2922 120.358C63.9643 152.243 97.6413 170.247 129.512 160.57Z"
               fill="white"
            />
            <path
              id="dot-21"
              d="M112 139.371C102.241 139.371 93.075 135.565 86.1728 128.676C79.2706 121.77 75.4824 112.601 75.4824 102.837C75.4824 93.0729 79.2867 83.9031 86.1728 76.9977C100.411 62.7534 123.573 62.7534 137.811 76.9977C144.713 83.9031 148.501 93.0729 148.501 102.837C148.501 112.601 144.697 121.77 137.811 128.676C130.925 135.581 121.759 139.371 112 139.371ZM112 70.3172C103.669 70.3172 95.3383 73.4969 88.9979 79.8402C82.8501 85.9908 79.4632 94.1649 79.4632 102.853C79.4632 111.541 82.8501 119.715 88.9979 125.865C101.679 138.552 122.321 138.552 135.002 125.865C141.15 119.715 144.537 111.541 144.537 102.853C144.537 94.1649 141.15 85.9908 135.002 79.8402C128.662 73.4808 120.331 70.3172 112 70.3172Z"
              fill="black"
            />
            <path
              id="dot-22"
              d="M112 189.845C89.7203 189.845 67.4406 181.366 50.474 164.391C34.0531 147.947 25 126.091 25 102.837C25 79.5835 34.0531 57.7271 50.49 41.2826C84.4072 7.34981 139.609 7.34981 173.526 41.2826C189.963 57.7271 199.016 79.5835 199.016 102.837C199.016 126.091 189.963 147.947 173.526 164.391C156.559 181.366 134.28 189.845 112 189.845ZM112 19.8277C90.7315 19.8277 69.4791 27.9215 53.2991 44.109C37.6166 59.7987 28.9808 80.6594 28.9808 102.837C28.9808 125.015 37.6166 145.875 53.2991 161.565C85.6753 193.956 138.341 193.956 170.701 161.565C186.383 145.875 195.019 125.031 195.019 102.837C195.019 80.6434 186.383 59.7987 170.701 44.109C154.521 27.9215 133.252 19.8277 112 19.8277Z"
              fill="#7F7F7F"
            />
          </g> */}

          <defs>
            <clipPath id="clip0_276_5864">
              <rect
                width="174"
                height="174"
                fill="white"
                transform="translate(25 15.8447)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      {/* <!-- /.main-footer__shape --> */}

      <div class="main-footer__top">
        <div class="container">
          <div class="main-footer__inner">
            <Link href="index.html" class="main-footer__inner-logo">
              <img
                src="assets/images/logo-light.png"
                width="174"
                alt="Drivschol HTML Template"
              />
            </Link>
            <div class="main-footer__inner-social">
              {/* <!-- social link--> */}
              <Link href="https://facebook.com">
                <i class="fab fa-facebook-f" aria-hidden="true"></i>
              </Link>
              <Link href="https://twitter.com">
                <i class="icon-twitter" aria-hidden="true"></i>
              </Link>
              <Link href="https://pinterest.com">
                <i class="icon-pinterest" aria-hidden="true"></i>
              </Link>
              <Link href="https://instagram.com">
                <i class="icon-Instagram" aria-hidden="true"></i>
              </Link>
            </div>
            {/* <!-- /.footer-widget__social --> */}
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.main-footer__top --> */}

      <div class="main-footer__middle">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-xl-2">
              <div class="footer-widget">
                <div class="footer-widget--links">
                  <ul class="list-unstyled footer-widget__links">
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                  {/* <!-- /.list-unstyled footer-widget__links --> */}
                </div>
                {/* <!-- /.footer-widget --> */}
              </div>
              {/* <!-- /.footer-widget --> */}
            </div>
            {/* <!-- /.col-md-6 --> */}

            <div class="col-md-6 col-xl-2">
              <div class="footer-widget">
                <div class="footer-widget--links footer-widget--links2">
                  <ul class="list-unstyled footer-widget__links">
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                  </ul>
                  {/* <!-- /.list-unstyled footer-widget__links --> */}
                </div>
                {/* <!-- /.footer-widget --> */}
              </div>
              {/* <!-- /.footer-widget --> */}
            </div>
            {/* <!-- /.col-md-6 --> */}

            <div class="col-md-6 col-xl-3">
              <div class="footer-widget">
                <div class="footer-widget--gallry">
                  <div class="footer-widget__grid">
                    <Link
                      href="assets/images/gallery/gallery-2-1.jpg"
                      class="footer-widget__grid-item popup-gallery"
                      style={{
                        background:
                          "url(assets/images/gallery/gallery-2-1.jpg)",
                      }}
                    ></Link>
                    <Link
                      href="assets/images/gallery/gallery-2-2.jpg"
                      class="footer-widget__grid-item popup-gallery"
                      style={{
                        background:
                          "url(assets/images/gallery/gallery-2-2.jpg)",
                      }}
                    ></Link>
                    <Link
                      href="assets/images/gallery/gallery-2-3.jpg"
                      class="footer-widget__grid-item popup-gallery"
                      style={{
                        background:
                          "url(assets/images/gallery/gallery-2-3.jpg)",
                      }}
                    ></Link>
                    <Link
                      href="assets/images/gallery/gallery-2-4.jpg"
                      class="footer-widget__grid-item popup-gallery"
                      style={{
                        background:
                          "url(assets/images/gallery/gallery-2-4.jpg)",
                      }}
                    ></Link>
                    <Link
                      href="assets/images/gallery/gallery-2-5.jpg"
                      class="footer-widget__grid-item popup-gallery"
                      style={{
                        background:
                          "url(assets/images/gallery/gallery-2-5.jpg)",
                      }}
                    ></Link>
                    <Link
                      href="assets/images/gallery/gallery-2-6.jpg"
                      class="footer-widget__grid-item popup-gallery"
                      style={{
                        background:
                          "url(assets/images/gallery/gallery-2-6.jpg)",
                      }}
                    ></Link>
                  </div>
                </div>
              </div>
              {/* <!-- /.footer-widget --> */}
            </div>
            {/* <!-- /.col-md-6 --> */}

            <div class="col-md-6 col-xl-4 offset-xl-1">
              <div class="footer-widget footer-widget__right">
                <div class="footer-widget--about">
                  <ul class="list-unstyled footer-widget__info">
                    <li>
                      <i class="icon-map-pin" aria-hidden="true"></i>
                      <Link href="https://www.google.com/maps">
                        6391 Elgin St. Celina, Delaware 10299
                      </Link>
                    </li>
                    <li>
                      <i class="icon-telephone-call-1" aria-hidden="true"></i>
                      <Link href="tel:+8801775-338747">(303) 555-0105</Link>
                    </li>
                    <li>
                      <i class="icon-envelope" aria-hidden="true"></i>
                      <Link href="mailto:michael.mitc@example.com">
                        michael.mitc@example.com
                      </Link>
                    </li>
                  </ul>
                  {/* <!-- /.list-unstyled --> */}
                </div>

                <form
                  action="#"
                  data-url="MAILCHIMP_FORM_URL"
                  class="footer-widget__newsletter mc-form"
                >
                  <input type="text" name="EMAIL" placeholder="Email address" />
                  <button type="submit">
                    submit <span class="sr-only">submit</span>
                    {/* <!-- /.sr-only --> */}
                  </button>
                </form>
                {/* <!-- /.footer-widget__newsletter mc-form --> */}
                <div class="mc-form__response"></div>
                {/* <!-- /.mc-form__response --> */}
                <h6 class="footer-widget__update">
                  Subscribe to Get Latest Updates on Daily Basis
                </h6>
              </div>
              {/* <!-- /.footer-widget --> */}
            </div>
            {/* <!-- /.col-md-6 --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.main-footer__middle --> */}

      <div class="main-footer__bottom">
        <div class="container">
          <div class="main-footer__bottom__inner">
            <p class="main-footer__copyright">
              &copy; Copyright <span class="dynamic-year"></span> by Driving
              School
            </p>
          </div>
          {/* <!-- /.main-footer__inner --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.main-footer__bottom --> */}
    </footer>
  );
};
export default Footer;
