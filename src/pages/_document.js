import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <head>
        {/* <!-- ========== Meta Tags ========== --> */}
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="layerdrops" />
        <meta
          name="description"
          content="Drivschol is a modern and versatile driving HTML template. It is specially designed for driving school, car driving, driving classes, training center, online school, education system, online courses, traffic school and all other education school and online driving courses business and websites."
        />

        {/* <!-- ======== Page title ============ --> */}
        <title>Driving School</title>

        {/* <!-- ========== Favicon Icon ========== --> */}
        <link
          rel="shortcut icon"
          href="assets/images/favicons/apple-touch-icon.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/images/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="assets/images/favicons/site.webmanifest" />

        {/* <!-- ===========  All Font ================= --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Urbanist:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* <!-- ===========  All Stylesheet ================= --> */}
        {/* <!--  Bootstrap css plugins --> */}
        <link
          rel="stylesheet"
          href="assets/vendors/bootstrap/css/bootstrap.min.css"
        />
        {/* <!--  bootstrap-select css plugins --> */}
        <link
          rel="stylesheet"
          href="assets/vendors/bootstrap-select/bootstrap-select.min.css"
        />
        {/* <!--  animate css plugins --> */}
        <link rel="stylesheet" href="assets/vendors/animate/animate.min.css" />
        {/* <!--  fontawesome css plugins --> */}
        <link
          rel="stylesheet"
          href="assets/vendors/fontawesome/css/all.min.css"
        />
        {/* <!--  jquery-ui css plugins --> */}
        <link rel="stylesheet" href="assets/vendors/jquery-ui/jquery-ui.css" />
        {/* <!--  jarallax css plugins --> */}
        <link rel="stylesheet" href="assets/vendors/jarallax/jarallax.css" />
        {/* <!--  magnific-popup css plugins --> */}
        <link
          rel="stylesheet"
          href="assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css"
        />
        {/* <!--  nouislider css plugins --> */}
        <link
          rel="stylesheet"
          href="assets/vendors/nouislider/nouislider.min.css"
        />
        {/* <!--  nouislider css plugins --> */}
        <link
          rel="stylesheet"
          href="assets/vendors/nouislider/nouislider.pips.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendors/tiny-slider/tiny-slider.css"
        />
        {/* <!--  nouislider css plugins --> */}
        <link
          rel="stylesheet"
          href="assets/vendors/drivschol-icons/style.css"
        />
        {/* <!--  nouislider css plugins --> */}
        <link
          rel="stylesheet"
          href="assets/vendors/owl-carousel/css/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendors/owl-carousel/css/owl.theme.default.min.css"
        />

        {/* <!-- template styles --> */}
        <link rel="stylesheet" href="assets/css/drivschol.css" />
      </head>
      <body className="antialiased">
        <Main />
        <NextScript>
          <script
            src="assets/vendors/jquery/jquery-3.7.0.min.js"
            async
          ></script>
          {/* <!--  Bootstrap js plugins --> */}
          <script
            src="assets/vendors/bootstrap/js/bootstrap.bundle.min.js"
            async
          ></script>
          <script
            src="assets/vendors/bootstrap-select/bootstrap-select.min.js"
            async
          ></script>
          {/* <!--  jarallax js plugins --> */}
          <script src="assets/vendors/jarallax/jarallax.min.js" async></script>
          {/* <!--  jquery-ui js plugins --> */}
          <script src="assets/vendors/jquery-ui/jquery-ui.js" async></script>
          {/* <!--  jquery-ajaxchimp js plugins --> */}
          <script
            src="assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"
            async
          ></script>
          {/* <!--  jquery-appear js plugins --> */}
          <script
            src="assets/vendors/jquery-appear/jquery.appear.min.js"
            async
          ></script>
          {/* <!-- jquery-circle-progress js plugins --> */}
          <script
            src="assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js"
            async
          ></script>
          {/* <!--  magnific-popup js plugins --> */}
          <script
            src="assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"
            async
          ></script>
          {/* <!--  validate js plugins --> */}
          <script
            src="assets/vendors/jquery-validate/jquery.validate.min.js"
            async
          ></script>
          {/* <!--  nouislider js plugins --> */}
          <script
            src="assets/vendors/nouislider/nouislider.min.js"
            async
          ></script>
          {/* <!--  tiny-slider js plugins --> */}
          <script
            src="assets/vendors/tiny-slider/tiny-slider.js"
            async
          ></script>
          {/* <!--  wnumb js plugins --> */}
          <script src="assets/vendors/wnumb/wNumb.min.js" async></script>
          {/* <!--  owl-carousel js plugins --> */}
          <script
            src="assets/vendors/owl-carousel/js/owl.carousel.min.js"
            async
          ></script>
          {/* <!--  Bootstrap js plugins --> */}
          <script src="assets/vendors/wow/wow.js" async></script>
          {/* <!--  wow js plugins --> */}
          <script
            src="assets/vendors/imagesloaded/imagesloaded.min.js"
            async
          ></script>
          {/* <!--  isotope js plugins --> */}
          <script src="assets/vendors/isotope/isotope.js" async></script>
          {/* <!--  countdown js plugins --> */}
          <script
            src="assets/vendors/countdown/countdown.min.js"
            async
          ></script>
          {/* <!--  jquery-circleType js plugins --> */}
          <script
            src="assets/vendors/jquery-circleType/jquery.circleType.js"
            async
          ></script>
          <script
            src="assets/vendors/jquery-lettering/jquery.lettering.min.js"
            async
          ></script>
        </NextScript>
      </body>
    </Html>
  );
}
