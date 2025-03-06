import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header class="main-header main-header--two sticky-header sticky-header--one-page">
      <div class="container-fluid">
        <div class="main-header__inner">
          <div class="main-header__logo">
            <Link href="/">
              <img
                src="assets/images/logo-dark.png"
                alt="Driving School "
                width="171"
              />
            </Link>
          </div>
          {/* <!-- /.main-header__logo --> */}

          <nav class="main-header__nav main-menu">
            <ul class="main-menu__list one-page-scroll-menu">
              <li class="dropdown megamenu scrollToLink current">
                <Link href="/">Home</Link>
                <ul>
                  <li>
                    <section class="home-showcase">
                      <div class="container">
                        {/* <!-- /.home-showcase__inner --> */}
                      </div>
                      {/* <!-- /.container --> */}
                    </section>
                  </li>
                </ul>
              </li>
              <li class="scrollToLink">
                <Link href="/about">About</Link>
              </li>
              <li class="scrollToLink">
                <Link href="/services">Services</Link>
              </li>
              {/* <li class="scrollToLink">
                <Link href="/course">Course</Link>
              </li> */}
              {/* <li class="scrollToLink">
                <Link href="/testimonial">Testimonial</Link>
              </li> */}
              {/* <li class="scrollToLink">
                <Link href="/blog">Blog</Link>
              </li> */}
              <li class="scrollToLink">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          {/* <!-- /.main-header__nav --> */}

          <div class="main-header__right main-header__right--two">
            <div class="info-item">
              <Link
                href="tel:+8801775-338747"
                class="info-item__btn d-flex align-items-center"
              >
                <div class="icon">
                  <i class="icon-Call"></i>
                </div>
                <div class="content">
                  <span class="content__text">Call to Questions</span>
                  <h6 class="content__call">(303) 555-0105</h6>
                </div>
              </Link>
            </div>
            <div class="info-item">
              <Link href="#" class="search-toggler info-item__btn">
                <i class="icon-search"></i>
                <span class="sr-only">Search</span>
              </Link>
            </div>
            <div class="info-item">
              <Link href="cart.html" class="info-item__btn">
                <i class="icon-trolley-cart"></i>
              </Link>
            </div>
            <div class="mobile-nav__btn mobile-nav__toggler">
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* <!-- /.mobile-nav__toggler --> */}
          </div>
          {/* <!-- /.main-header__right --> */}
        </div>
        {/* <!-- /.main-header__inner --> */}
      </div>
      {/* <!-- /.container-fluid --> */}
    </header>
  );
};
export default Header;
