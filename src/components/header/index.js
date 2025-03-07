import { useState } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <header className="main-header main-header--two sticky-header sticky-header--one-page">
      {isMobileNavVisible && <MobileNav toggleMobileNav={toggleMobileNav} />}
      <div className="container-fluid">
        <div className="main-header__inner">
          <div className="main-header__logo">
            <Link href="/">
              <img
                src="/assets/images/logo-dark.png"
                alt="Driving School "
                width="171"
              />
            </Link>
          </div>
          {/* <!-- /.main-header__logo --> */}

          <nav className="main-header__nav main-menu">
            <ul className="main-menu__list one-page-scroll-menu">
              <li className="dropdown megamenu scrollToLink current">
                <Link href="/">Home</Link>
                <ul>
                  <li>
                    <section className="home-showcase">
                      <div className="container">
                        {/* <!-- /.home-showcase__inner --> */}
                      </div>
                      {/* <!-- /.container --> */}
                    </section>
                  </li>
                </ul>
              </li>
              <li className="scrollToLink">
                <Link href="/about">About</Link>
              </li>
              <li className="scrollToLink">
                <Link href="/services">Services</Link>
              </li>
              <li className="scrollToLink">
                <Link href="/courses">Courses</Link>
              </li>

              <li className="scrollToLink">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          {/* <!-- /.main-header__nav --> */}

          <div className="main-header__right main-header__right--two">
            <div className="info-item">
              <Link
                href="tel:+8801775-338747"
                className="info-item__btn d-flex align-items-center"
              >
                <div className="icon">
                  <i className="icon-Call"></i>
                </div>
                <div className="content">
                  <span className="content__text">Call to Questions</span>
                  <h6 className="content__call">000 000 0000</h6>
                </div>
              </Link>
            </div>
            <div
              className="mobile-nav__btn mobile-nav__toggler"
              onClick={toggleMobileNav}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
