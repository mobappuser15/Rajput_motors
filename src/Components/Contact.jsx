import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<div>
			{/* <nav className="nav_b   navbar-inverse ">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-xs-3">
              <div
                className="b-nav__logo wow slideInLeft"
                data-wow-delay="0.3s"
                // style={{ marginLeft: "-220px" }}
              >
                <img src="images/logo/logo-1.png" />
              </div>
            </div>
            <div className="col-sm-2 visible-xs">
              <div className="b-topBarsocial-wrapper none">
                <div className="b-topbar-social">
                  <a href="#">
                    <span className="fa fa-facebook-square"></span>
                  </a>

                  <a href="#">
                    <span className="fa fa-instagram"></span>
                  </a>
                  <a href="#">
                    <span className="fa fa-youtube-square"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div
                className="b-nav__list wow slideInRight"
                data-wow-delay="0.3s"
              >
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    style={{ marginLeft: "220px" }}
                    data-toggle="collapse"
                    data-target="#nav"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div
                  className="collapse navbar-collapse navbar-main-slide"
                  id="nav"
                >
                  <ul className="navbar-nav-menu">
                    <li>
                      <Link to="/" variant="body2">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">ABOUT US</Link>
                    </li>
                    <li>
                      <Link to="/salecar">SELL A CAR</Link>
                    </li>
                    <li>
                      <Link to="/buycar">BUY CAR</Link>
                    </li>
                    <li>
                      <Link to="/gallery">GALLERY</Link>
                    </li>
                    <li>
                      <Link to="contact">CONTACT US</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-2 hidden-xs">
              <div className="b-topBarsocial-wrapper">
                <div className="b-topbar-social">
                  <a href="https://www.facebook.com/profile.php?id=100077481055938">
                    <span className="fa fa-facebook-square"></span>
                  </a>

                  <a href="https://www.instagram.com/sushilcarbazzar/">
                    <span className="fa fa-instagram"></span>
                  </a>
                  <a href="https://www.youtube.com/@sushilcarbazzar5502">
                    <span className="fa fa-youtube-square"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav> */}

			<div className='m-contacts' data-scrolling-animations='true'>
				<div id='page-preloader'>
					<span className='spinner'></span>
				</div>

				{/* <nav className="nav_b  navbar navbar-inverse navbar-fixed-top">
    <div className="container">
        <div className="row">
            <div className="col-sm-2 col-xs-3">
                <div className="b-nav__logo wow slideInLeft" data-wow-delay="0.3s">
                  
                    <img src="images/logo/logo-1.png">
                </div>
            </div>
            <div className="col-sm-2 visible-xs">
                <div className="b-topBarsocial-wrapper none">
                    <div className="b-topbar-social">
                        <a href="#"><span className="fa fa-facebook-square"></span></a>
                       
                        <a href="#"><span className="fa fa-instagram"></span></a>
                        <a href="#"><span className="fa fa-youtube-square"></span></a>
                    </div>
                </div>
            </div>                
            <div className="col-sm-8">
                <div className="b-nav__list wow slideInRight" data-wow-delay="0.3s">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse navbar-main-slide" id="nav">
                        <ul className="navbar-nav-menu">
                             <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle='dropdown' href="home.html">Home <span className="fa fa-caret-down"></span></a>
                                <ul className="dropdown-menu h-nav">
                                    <li><a href="home.html">Home Page 1</a></li>
                                    <li><a href="home-2.html">Home Page 2</a></li>
                                </ul>
                            </li> -->
                             <li><a href="index.html">HOME</a></li>
                            <li><a href="about.html">ABOUT US</a></li>
                            <li><a href="submit1.html">SELL A CAR</a></li>
                            <li><a href="listTableTwo.html">BUY CAR</a></li>
                             <li><a href="gallery.html">GALLERY</a></li>
                            <li><a href="contacts.html">CONTACT US</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-sm-2 hidden-xs">
                <div className="b-topBarsocial-wrapper">
                    <div className="b-topbar-social">
                        <a href="https://www.facebook.com/profile.php?id=100077481055938"><span className="fa fa-facebook-square"></span></a>
                   
                        <a href="https://www.instagram.com/sushilcarbazzar/"><span className="fa fa-instagram"></span></a>
                        <a href="https://www.youtube.com/@sushilcarbazzar5502"><span className="fa fa-youtube-square"></span></a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</nav> */}

				<section className='b-pageHeader'>
					<div className='container'>
						<h1 className=' wow zoomInLeft' data-wow-delay='0.5s'>
							Contact Us
						</h1>
						<div
							className='b-pageHeader__search wow zoomInRight'
							data-wow-delay='0.5s'>
							<h3>Get In Touch With Us Now</h3>
						</div>
					</div>
				</section>

				<div
					className='b-breadCumbs s-shadow wow zoomInUp'
					data-wow-delay='0.5s'>
					<div className='container'>
						<a href='home.html' className='b-breadCumbs__page'>
							Home
						</a>
						<span className='fa fa-angle-right'></span>
						<a href='contacts.html' className='b-breadCumbs__page m-active'>
							Contact Us
						</a>
					</div>
				</div>

				<div className='b-map wow zoomInUp' data-wow-delay='0.5s'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.260289159302!2d77.31289557530695!3d28.381205295449664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd7af5cf47bd%3A0x46d511fe688ab78c!2sSUSHIL%20CAR%20BAZAR!5e0!3m2!1sen!2sin!4v1681724827680!5m2!1sen!2sin'
						width='100%'
						height='450'
						style={{ border: "0" }}
						allowfullscreen=''
						loading='lazy'
						referrerpolicy='no-referrer-when-downgrade'></iframe>
				</div>

				<section className='b-contacts s-shadow'>
					<div className='container'>
						<div className='row'>
							<div className='col-xs-6'>
								<div className='b-contacts__address'>
									<div className='b-contacts__address-info'>
										<h2
											className='s-titleDet wow zoomInUp'
											data-wow-delay='0.5s'>
											Contact Us
										</h2>
										<address
											className='b-contacts__address-info-main wow zoomInUp'
											data-wow-delay='0.5s'>
											<div className='b-contacts__address-info-main-item'>
												<span className='fa fa-home'></span>
												ADDRESS-1
												<p style={{ color: "black" }}>
													Plot No, 5 Block A1 Sector 11 DLF Faridabad ,11-12
													Dividing Road Pincode 121006
												</p>{" "}
												<span className='fa fa-home'></span>
												ADDRESS-2
												<p style={{ color: "black" }}>
													Spaze Boulevard, Sector-47, Gurugram
												</p>
											</div>
											<div className='b-contacts__address-info-main-item'>
												<div className='row'>
													<div className='col-lg-3 col-md-4 col-xs-12'>
														<span className='fa fa-phone'></span>
														PHONE
													</div>
													<div className='col-lg-9 col-md-8 col-xs-12'>
														<em style={{ color: "black" }}>
															+91 92509 22333 / +91 98114 36332
														</em>
													</div>
												</div>
											</div>
											<div className='b-contacts__address-info-main-item'></div>
											<div className='b-contacts__address-info-main-item'>
												<div className='row'>
													<div className='col-lg-3 col-md-4 col-xs-12'>
														<span className='fa fa-envelope'></span>
														EMAIL
													</div>
													<div className='col-lg-9 col-md-8 col-xs-12'>
														<em style={{ color: "black" }}>
															sushilcarbazar@gmail.com
														</em>
													</div>
												</div>
											</div>
										</address>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className='b-info'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-3 col-xs-12'>
							<aside
								className='b-info__aside wow zoomInLeft'
								data-wow-delay='0.3s'>
								<article className='b-info__aside-article'>
									<h3>OPENING HOURS</h3>
									<div className='b-info__aside-article-item'>
										<h6>Sales Department</h6>
										<p>
											Mon-Sat : 8:00am - 5:00pm
											<br />
											Sunday is closed
										</p>
									</div>
								</article>
								<article className='b-info__aside-article'>
									<h3>About us</h3>
									<p>
										Established in the year 2002, Sushil Car Bazar is one of the
										top & most trusted dealership for preowned luxury car.In
										over 17 years of business history we have always had a
										customer oriented approach & total customer satisfaction has
										been our motive.
									</p>
								</article>
								<Link to='/about' className='btn m-btn'>
									Read More
									<span
										style={{ paddingLeft: "7px !important" }}
										id='arrowiconbtn'
										className='fa fa-angle-right'></span>
								</Link>
							</aside>
						</div>

						<div className='col-md-5 col-xs-12'>
							<address
								className='b-info__contacts wow zoomInUp'
								data-wow-delay='0.3s'>
								<p>contact us</p>
								<div className='b-info__contacts-item'>
									<span className='fa fa-map-marker'></span>
									<ol>
										Plot No, 5 Block A1 Sector 11 DLF Faridabad, 11-12 Dividing
										Road Pincode 121006
									</ol>
								</div>
								<div className='b-info__contacts-item'>
									<span className='fa fa-map-marker'></span>
									<em>
										<ol>Spaze Boulevard, Sector-47, Gurugram</ol>
									</em>
								</div>
								<div className='b-info__contacts-item'>
									<span className='fa fa-phone'></span>
									<ol>
										+91 92509 22333
										<br />
										+91 98114 36332
									</ol>
								</div>

								<div className='b-info__contacts-item'>
									<span className='fa fa-envelope'></span>
									<em>
										<ol>sushilcarbazar@gmail.com</ol>
									</em>
								</div>
							</address>
							<address className='b-info__map'>
								<a href='contacts.html'>Open Location Map</a>
							</address>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
