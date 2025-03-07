import Link from "next/link";
import React from "react";

const MobileNav = ({ toggleMobileNav }) => {
  return (
    <div class="mobile-nav__wrapper expanded">
      <div class="mobile-nav__overlay mobile-nav__toggler"></div>

      <div class="mobile-nav__content">
        <span
          class="mobile-nav__close mobile-nav__toggler"
          onClick={toggleMobileNav}
        >
          <i class="fa fa-times"></i>
        </span>

        <div class="logo-box">
          <Link href="/" aria-label="logo image">
            <img
              src="assets/images/logo-light.png"
              width="155"
              alt="logo drivschol"
            />
          </Link>
        </div>

        <div class="mobile-nav__container">
          <ul class="main-menu__list">
            <li>
              {" "}
              <Link href="/">Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/about">About</Link>{" "}
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <ul class="mobile-nav__contact list-unstyled">
          <li>
            <i class="fa fa-envelope"></i>
            <Link href="mailto:needhelp@drivschol.com">
              needhelp@drivschol.com
            </Link>
          </li>
          <li>
            <i class="fa fa-phone-alt"></i>
            <Link href="tel:666-888-0000">666 888 0000</Link>
          </li>
        </ul>
        <div class="mobile-nav__social">
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
      </div>
    </div>
  );
};

export default MobileNav;
