import React from "react";
function ErrorPage() {
  return (
    <div>
      <div ClassName="m-404" data-scrolling-animations="true">
        <div id="page-preloader">
          <span ClassName="spinner"></span>
        </div>

        <div ClassName="switcher-wrapper">
          <div ClassName="demo_changer">
            <div ClassName="demo-icon customBgColor">
              <i ClassName="fa fa-cog fa-spin fa-2x"></i>
            </div>
            <div ClassName="form_holder">
              <div ClassName="row">
                <div ClassName="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div ClassName="predefined_styles">
                    <div ClassName="skin-theme-switcher">
                      <h4>Color</h4>
                      <a
                        href="#"
                        data-switchcolor="color1"
                        ClassName="styleswitch"
                        style={{ backgroundColor: "#f76d2b" }}
                      >
                        {" "}
                      </a>
                      <a
                        href="#"
                        data-switchcolor="color2"
                        ClassName="styleswitch"
                        style={{ backgroundColor: "#de483d" }}
                      >
                        {" "}
                      </a>
                      <a
                        href="#"
                        data-switchcolor="color3"
                        ClassName="styleswitch"
                        style={{ backgroundColor: "#228dcb" }}
                      >
                        {" "}
                      </a>
                      <a
                        href="#"
                        data-switchcolor="color4"
                        ClassName="styleswitch"
                        style={{ backgroundColor: "#00bff3" }}
                      >
                        {" "}
                      </a>
                      <a
                        href="#"
                        data-switchcolor="color5"
                        ClassName="styleswitch"
                        style={{ backgroundColor: "#2dcc70" }}
                      >
                        {" "}
                      </a>
                      <a
                        href="#"
                        data-switchcolor="color6"
                        ClassName="styleswitch"
                        style={{ backgroundColor: "#6054c2" }}
                      >
                        {" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header
          id="this-is-top"
          ClassName="b-topBar wow slideInDown"
          data-wow-delay="0.7s"
        >
          <div ClassName="container">
            <div ClassName="row">
              <div ClassName="col-md-4 col-xs-6">
                <div ClassName="b-topBar__addr">
                  <span ClassName="fa fa-map-marker"></span>
                  202 W 7TH ST, LOS ANGELES, CA 90014
                </div>
              </div>
              <div ClassName="col-md-2 col-xs-6">
                <div ClassName="b-topBar__tel">
                  <span ClassName="fa fa-phone"></span>
                  1-800- 624-5462
                </div>
              </div>
              <div ClassName="col-md-4 col-xs-6">
                <nav ClassName="b-topBar__nav">
                  <ul>
                    <li>
                      <a href="#">Cart</a>
                    </li>
                    <li>
                      <a href="#">Register</a>
                    </li>
                    <li>
                      <a href="#">Sign in</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div ClassName="col-md-2 col-xs-6">
                <div ClassName="b-topBar__lang">
                  <div ClassName="dropdown">
                    <a
                      href="#"
                      ClassName="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Language
                    </a>
                    <a
                      ClassName="m-langLink dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      <span ClassName="b-topBar__lang-flag m-en"></span>EN
                      <span ClassName="fa fa-caret-down"></span>
                    </a>
                    <ul ClassName="dropdown-menu h-lang">
                      <li>
                        <a
                          ClassName="m-langLink dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          <span ClassName="b-topBar__lang-flag m-en"></span>EN
                        </a>
                      </li>
                      <li>
                        <a
                          ClassName="m-langLink dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          <span ClassName="b-topBar__lang-flag m-es"></span>ES
                        </a>
                      </li>
                      <li>
                        <a
                          ClassName="m-langLink dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          <span ClassName="b-topBar__lang-flag m-de"></span>DE
                        </a>
                      </li>
                      <li>
                        <a
                          ClassName="m-langLink dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          <span ClassName="b-topBar__lang-flag m-fr"></span>FR
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <nav ClassName="b-nav">
          <div ClassName="container">
            <div ClassName="row">
              <div ClassName="col-sm-3 col-xs-4">
                <div
                  ClassName="b-nav__logo wow slideInLeft"
                  data-wow-delay="0.3s"
                >
                  <h3>
                    <a href="home.html">
                      Auto<span>Club</span>
                    </a>
                  </h3>
                  <h2>
                    <a href="home.html">AUTO DEALER TEMPLATE</a>
                  </h2>
                </div>
              </div>
              <div ClassName="col-sm-9 col-xs-8">
                <div
                  ClassName="b-nav__list wow slideInRight"
                  data-wow-delay="0.3s"
                >
                  <div ClassName="navbar-header">
                    <button
                      type="button"
                      ClassName="navbar-toggle"
                      data-toggle="collapse"
                      data-target="#nav"
                    >
                      <span ClassName="sr-only">Toggle navigation</span>
                      <span ClassName="icon-bar"></span>
                      <span ClassName="icon-bar"></span>
                      <span ClassName="icon-bar"></span>
                    </button>
                  </div>
                  <div
                    ClassName="collapse navbar-collapse navbar-main-slide"
                    id="nav"
                  >
                    <ul ClassName="navbar-nav-menu">
                      <li ClassName="dropdown">
                        <a
                          ClassName="dropdown-toggle"
                          data-toggle="dropdown"
                          href="home.html"
                        >
                          Home <span ClassName="fa fa-caret-down"></span>
                        </a>
                        <ul ClassName="dropdown-menu h-nav">
                          <li>
                            <a href="home.html">Home Page 1</a>
                          </li>
                          <li>
                            <a href="home-2.html">Home Page 2</a>
                          </li>
                        </ul>
                      </li>
                      <li ClassName="dropdown">
                        <a
                          ClassName="dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          Grid <span ClassName="fa fa-caret-down"></span>
                        </a>
                        <ul ClassName="dropdown-menu h-nav">
                          <li>
                            <a href="listings.html">listing 1</a>
                          </li>
                          <li>
                            <a href="listingsTwo.html">listing 2</a>
                          </li>
                          <li>
                            <a href="listTable.html">listing 3</a>
                          </li>
                          <li>
                            <a href="listTableTwo.html">listing 4</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="compare.html">compare</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="article.html">Services</a>
                      </li>
                      <li ClassName="dropdown">
                        <a
                          ClassName="dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          Blog <span ClassName="fa fa-caret-down"></span>
                        </a>
                        <ul ClassName="dropdown-menu h-nav">
                          <li>
                            <a href="blog.html">Blog 1</a>
                          </li>
                          <li>
                            <a href="blogTwo.html">Blog 2</a>
                          </li>
                          <li>
                            <a href="404.html">Page 404</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="submit1.html">Shop</a>
                      </li>
                      <li>
                        <a href="contacts.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <section ClassName="b-pageHeader">
          <div ClassName="container">
            <h1 ClassName="wow zoomInUp" data-wow-delay="0.7s">
              Error 404 Page
            </h1>
          </div>
        </section>

        <div ClassName="b-breadCumbs s-shadow">
          <div ClassName="container">
            <a href="home.html" ClassName="b-breadCumbs__page">
              Home
            </a>
            <span ClassName="fa fa-angle-right"></span>
            <a href="404.html" ClassName="b-breadCumbs__page m-active">
              Page Not Found
            </a>
          </div>
        </div>

        <section ClassName="b-error s-shadow">
          <div ClassName="container">
            <h1 ClassName="wow zoomInUp" data-wow-delay="0.7s">
              Error
            </h1>
            <img
              ClassName="img-responsive center-block wow zoomInUp"
              data-wow-delay="0.7s"
              src="images/backgrounds/404.png"
              alt="404"
            />
            <h2 ClassName="s-lineDownCenter wow zoomInUp" data-wow-delay="0.7s">
              page not found
            </h2>
            <p ClassName="wow zoomInUp" data-wow-delay="0.7s">
              The page you are looking for is not available and might have been
              removed, its name changed or is temprarily unavailable.
            </p>
            <h3 ClassName="s-title wow zoomInUp" data-wow-delay="0.7s">
              TRY to finD a page
            </h3>
            <form ClassName="b-blog__aside-search" action="/" method="post">
              <div>
                <input type="text" name="search" value="" />
                <button type="submit">
                  <span ClassName="fa fa-search"></span>
                </button>
              </div>
            </form>
          </div>
          <img
            alt="audi"
            src="images/backgrounds/404Bg.jpg"
            ClassName="img-responsive center-block b-error-img"
          />
        </section>

        <div ClassName="b-features">
          <div ClassName="container">
            <div ClassName="row">
              <div ClassName="col-md-9 col-md-offset-3 col-xs-6 col-xs-offset-6">
                <ul ClassName="b-features__items">
                  <li
                    ClassName="wow zoomInUp"
                    data-wow-delay="0.3s"
                    data-wow-offset="100"
                  >
                    Low Prices, No Haggling
                  </li>
                  <li
                    ClassName="wow zoomInUp"
                    data-wow-delay="0.3s"
                    data-wow-offset="100"
                  >
                    Largest Car Dealership
                  </li>
                  <li
                    ClassName="wow zoomInUp"
                    data-wow-delay="0.3s"
                    data-wow-offset="100"
                  >
                    Multipoint Safety Check
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div ClassName="b-info">
          <div ClassName="container">
            <div ClassName="row">
              <div ClassName="col-md-3 col-xs-6">
                <aside
                  ClassName="b-info__aside wow zoomInLeft"
                  data-wow-delay="0.3s"
                >
                  <article ClassName="b-info__aside-article">
                    <h3>OPENING HOURS</h3>
                    <div ClassName="b-info__aside-article-item">
                      <h6>Sales Department</h6>
                      <p>
                        Mon-Sat : 8:00am - 5:00pm
                        <br />
                        Sunday is closed
                      </p>
                    </div>
                    <div ClassName="b-info__aside-article-item">
                      <h6>Service Department</h6>
                      <p>
                        Mon-Sat : 8:00am - 5:00pm
                        <br />
                        Sunday is closed
                      </p>
                    </div>
                  </article>
                  <article ClassName="b-info__aside-article">
                    <h3>About us</h3>
                    <p>
                      Vestibulum varius od lio eget conseq uat blandit, lorem
                      auglue comm lodo nisl non ultricies lectus nibh mas lsa
                      Duis scelerisque aliquet. Ante donec libero pede porttitor
                      dacu msan esct venenatis quis.
                    </p>
                  </article>
                  <a href="about.html" ClassName="btn m-btn">
                    Read More<span ClassName="fa fa-angle-right"></span>
                  </a>
                </aside>
              </div>
              <div ClassName="col-md-3 col-xs-6">
                <div ClassName="b-info__latest">
                  <h3>LATEST AUTOS</h3>
                  <div
                    ClassName="b-info__latest-article wow zoomInUp"
                    data-wow-delay="0.3s"
                  >
                    <div ClassName="b-info__latest-article-photo m-audi"></div>
                    <div ClassName="b-info__latest-article-info">
                      <h6>
                        <a href="detail.html">MERCEDES-AMG GT S</a>
                      </h6>
                      <p>
                        <span ClassName="fa fa-tachometer"></span> 35,000 KM
                      </p>
                    </div>
                  </div>
                  <div
                    ClassName="b-info__latest-article wow zoomInUp"
                    data-wow-delay="0.3s"
                  >
                    <div ClassName="b-info__latest-article-photo m-audiSpyder"></div>
                    <div ClassName="b-info__latest-article-info">
                      <h6>
                        <a href="#">AUDI R8 SPYDER V-8</a>
                      </h6>
                      <p>
                        <span ClassName="fa fa-tachometer"></span> 35,000 KM
                      </p>
                    </div>
                  </div>
                  <div
                    ClassName="b-info__latest-article wow zoomInUp"
                    data-wow-delay="0.3s"
                  >
                    <div ClassName="b-info__latest-article-photo m-aston"></div>
                    <div ClassName="b-info__latest-article-info">
                      <h6>
                        <a href="#">ASTON MARTIN VANTAGE</a>
                      </h6>
                      <p>
                        <span ClassName="fa fa-tachometer"></span> 35,000 KM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div ClassName="col-md-3 col-xs-6">
                <div ClassName="b-info__twitter">
                  <h3>from twitter</h3>
                  <div
                    ClassName="b-info__twitter-article wow zoomInUp"
                    data-wow-delay="0.3s"
                  >
                    <div ClassName="b-info__twitter-article-icon">
                      <span ClassName="fa fa-twitter"></span>
                    </div>
                    <div ClassName="b-info__twitter-article-content">
                      <p>
                        Duis scelerisque aliquet ante donec libero pede
                        porttitor dacu
                      </p>
                      <span>20 minutes ago</span>
                    </div>
                  </div>
                  <div
                    ClassName="b-info__twitter-article wow zoomInUp"
                    data-wow-delay="0.3s"
                  >
                    <div ClassName="b-info__twitter-article-icon">
                      <span ClassName="fa fa-twitter"></span>
                    </div>
                    <div ClassName="b-info__twitter-article-content">
                      <p>
                        Duis scelerisque aliquet ante donec libero pede
                        porttitor dacu
                      </p>
                      <span>20 minutes ago</span>
                    </div>
                  </div>
                  <div
                    ClassName="b-info__twitter-article wow zoomInUp"
                    data-wow-delay="0.3s"
                  >
                    <div ClassName="b-info__twitter-article-icon">
                      <span ClassName="fa fa-twitter"></span>
                    </div>
                    <div ClassName="b-info__twitter-article-content">
                      <p>
                        Duis scelerisque aliquet ante donec libero pede
                        porttitor dacu
                      </p>
                      <span>20 minutes ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div ClassName="col-md-3 col-xs-6">
                <address
                  ClassName="b-info__contacts wow zoomInUp"
                  data-wow-delay="0.3s"
                >
                  <p>contact us</p>
                  <div ClassName="b-info__contacts-item">
                    <span ClassName="fa fa-map-marker"></span>
                    <em>
                      202 W 7th St, Suite 233 Los Angeles, California 90014 USA
                    </em>
                  </div>
                  <div ClassName="b-info__contacts-item">
                    <span ClassName="fa fa-phone"></span>
                    <em>Phone: 1-800- 624-5462</em>
                  </div>
                  <div ClassName="b-info__contacts-item">
                    <span ClassName="fa fa-fax"></span>
                    <em>FAX: 1-800- 624-5462</em>
                  </div>
                  <div ClassName="b-info__contacts-item">
                    <span ClassName="fa fa-envelope"></span>
                    <em>Email: info@domain.com</em>
                  </div>
                </address>
                <address ClassName="b-info__map">
                  <a href="contacts.html">Open Location Map</a>
                </address>
              </div>
            </div>
          </div>
        </div>

        <footer ClassName="b-footer">
          <a id="to-top" href="#this-is-top">
            <i ClassName="fa fa-chevron-up"></i>
          </a>
          <div ClassName="container">
            <div ClassName="row">
              <div ClassName="col-xs-4">
                <div
                  ClassName="b-footer__company wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <div ClassName="b-nav__logo">
                    <h3>
                      <a href="home.html">
                        Auto<span>Club</span>
                      </a>
                    </h3>
                  </div>
                  <p>
                    &copy; 2015 Designed by Templines &amp; Powered by
                    WordPress.
                  </p>
                </div>
              </div>
              <div ClassName="col-xs-8">
                <div
                  ClassName="b-footer__content wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <div ClassName="b-footer__content-social">
                    <a href="#">
                      <span ClassName="fa fa-facebook-square"></span>
                    </a>
                    <a href="#">
                      <span ClassName="fa fa-twitter-square"></span>
                    </a>
                    <a href="#">
                      <span ClassName="fa fa-google-plus-square"></span>
                    </a>
                    <a href="#">
                      <span ClassName="fa fa-instagram"></span>
                    </a>
                    <a href="#">
                      <span ClassName="fa fa-youtube-square"></span>
                    </a>
                    <a href="#">
                      <span ClassName="fa fa-skype"></span>
                    </a>
                  </div>
                  <nav ClassName="b-footer__content-nav">
                    <ul>
                      <li>
                        <a href="home.html">Home</a>
                      </li>
                      <li>
                        <a href="404.html">Pages</a>
                      </li>
                      <li>
                        <a href="listings.html">Inventory</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="404.html">Services</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="listTable.html">Shop</a>
                      </li>
                      <li>
                        <a href="contacts.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ErrorPage;
