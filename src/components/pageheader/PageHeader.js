import React from "react";

const PageHeader = ({ title }) => {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{
          backgroundImage:
            "url(/assets/images/backgrounds/page-header-bg-1-1.webp)",
        }}
      ></div>
      <div className="container">
        <h2 className="page-header__title">{title}</h2>
        <ul className="drivschol-breadcrumb list-unstyled">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <span>{title}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PageHeader;
