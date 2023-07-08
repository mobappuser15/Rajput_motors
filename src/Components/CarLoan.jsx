import React from "react";
import { Link } from "react-router-dom";

const CarLoan = () => {
	return (
		<>
			<div
				className='m-detail'
				data-scrolling-animations='true'
				data-equal-height='.b-auto__main-item'>
				<div id='page-preloader'>
					<span className='spinner'></span>
				</div>

				<div className='switcher-wrapper'>
					<div className='form_holder'>
						<div className='row'></div>
					</div>
				</div>
			</div>

			<section className='b-modal'>
				<div
					className='modal fade'
					id='myModal'
					tabindex='-1'
					role='dialog'
					aria-labelledby='myModalLabel'
					aria-hidden='true'>
					<div className='modal-dialog'>
						<div className='modal-content'>
							<div className='modal-header'>
								<button
									type='button'
									className='close'
									data-dismiss='modal'
									aria-hidden='true'>
									&times;
								</button>
								<h4 className='modal-title' id='myModalLabel'>
									Video
								</h4>
							</div>
							<div className='modal-body'>
								<iframe
									width='560'
									height='315'
									src='https://www.youtube.com/embed/a_ugz7GoHwY'
									allowfullscreen></iframe>
							</div>
							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-default'
									data-dismiss='modal'>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='b-pageHeader'>
				<div className='container'>
					<h1 className='wow zoomInLeft' data-wow-delay='0.5s'>
						Car Loan
					</h1>
				</div>
			</section>
			<div className='b-breadCumbs s-shadow wow zoomInUp' data-wow-delay='0.5s'>
				<div className='container'>
					<Link to='/' className='b-breadCumbs__page'>
						Home
					</Link>
					<span className='fa fa-angle-right'></span>
					<a href='insurance.html' className='b-breadCumbs__page m-active'>
						Car Loan
					</a>
				</div>
			</div>
			{/* brand details */}

			<section class='b-brands s-shadow'>
				<div class='container'>
					<h5 class='s-titleBg wow zoomInUp' data-wow-delay='0.5s'>
						FIND OUT EASY CAR LOAN
					</h5>
					<br />
					<h2 class='s-title wow zoomInUp' data-wow-delay='0.5s'>
						With the respective banks
					</h2>
					<div class=''>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/hdfc-loan.png' alt='brand' />
						</div>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/icici.png' alt='brand' />
						</div>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/bajaj-finance.png' alt='brand' />
						</div>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/citi-bank.png' alt='brand' />
						</div>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/kotak.png' alt='brand' />
						</div>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/bob.png' alt='brand' />
						</div>
					</div>
				</div>
			</section>
			{/* footer top section */}
			<div className='b-features'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-9 col-md-offset-3 col-xs-6 col-xs-offset-6'>
							<ul className='b-features__items'>
								<li
									className='wow zoomInUp'
									data-wow-delay='0.3s'
									data-wow-offset='100'>
									Low Prices, No Haggling
								</li>
								<li
									className='wow zoomInUp'
									data-wow-delay='0.3s'
									data-wow-offset='100'>
									Largest Car Dealership
								</li>
								<li
									className='wow zoomInUp'
									data-wow-delay='0.3s'
									data-wow-offset='100'>
									Multipoint Safety Check
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* footer section  */}
			<div className='b-info'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-3 col-xs-6'>
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
								<a href='about.html' className='btn m-btn'>
									Read More<span className='fa fa-angle-right'></span>
								</a>
							</aside>
						</div>
						<div className='col-md-3 col-xs-6'>
							<div className='b-info__latest'>
								<h3>LATEST AUTOS</h3>
								<div
									className='b-info__latest-article wow zoomInUp'
									data-wow-delay='0.3s'>
									<div className='b-info__latest-article-photo m-audi'></div>
									<div className='b-info__latest-article-info'>
										<h6>
											<a href='detail.html'>HYUNDAI CRETA S PLUS</a>
										</h6>
										<p>
											<span className='fa fa-tachometer'></span> 33,000 KM
										</p>
									</div>
								</div>
								<div
									className='b-info__latest-article wow zoomInUp'
									data-wow-delay='0.3s'>
									<div className='b-info__latest-article-photo m-audiSpyder'></div>
									<div className='b-info__latest-article-info'>
										<h6>
											<a href='#'>MERCEDES BENZ A-CLASS</a>
										</h6>
										<p>
											<span className='fa fa-tachometer'></span> 8,000 KM
										</p>
									</div>
								</div>
								<div
									className='b-info__latest-article wow zoomInUp'
									data-wow-delay='0.3s'>
									<div className='b-info__latest-article-photo m-aston'></div>
									<div className='b-info__latest-article-info'>
										<h6>
											<a href='#'>VOLVO XC40 T4 R-DESIGN</a>
										</h6>
										<p>
											<span className='fa fa-tachometer'></span> 20,000 KM
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className='col-md-3 col-xs-6'>
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
		</>
	);
};

// const Insurance = () => {
//   return
//   (
//   // <>

//   // <div className="m-detail" data-scrolling-animations="true" data-equal-height=".b-auto__main-item">
//   //     <div id="page-preloader"><span className="spinner"></span></div>

//   //     <div className="switcher-wrapper">

//   //             <div className="form_holder">
//   //                 <div className="row">

//   //                     </div>
//   //                 </div>
//   //             </div>
//   //         </div>

//   //     <section className="b-modal">
//   //         <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
//   //             <div className="modal-dialog">
//   //                 <div className="modal-content">
//   //                     <div className="modal-header">
//   //                         <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
//   //                         <h4 className="modal-title" id="myModalLabel">Video</h4>
//   //                     </div>
//   //                     <div className="modal-body">
//   //                         <iframe width="560" height="315" src="https://www.youtube.com/embed/a_ugz7GoHwY" allowfullscreen></iframe>
//   //                     </div>
//   //                     <div className="modal-footer">
//   //                         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
//   //                     </div>
//   //                 </div>
//   //             </div>
//   //         </div>
//   //     </section>
//   //     <nav className="nav_b  navbar navbar-inverse navbar-fixed-top">
//   //         <div className="container">
//   //             <div className="row">
//   //                 <div className="col-sm-2 col-xs-3">
//   //                     <div className="b-nav__logo wow slideInLeft" data-wow-delay="0.3s">

//   //                         <img src="images/logo/logo-1.png"/>
//   //                     </div>
//   //                 </div>
//   //                 <div className="col-sm-2 visible-xs">
//   //                     <div className="b-topBarsocial-wrapper none">
//   //                         <div className="b-topbar-social">
//   //                             <a href="#"><span className="fa fa-facebook-square"></span></a>

//   //                             <a href="#"><span className="fa fa-instagram"></span></a>
//   //                             <a href="#"><span className="fa fa-youtube-square"></span></a>
//   //                         </div>
//   //                     </div>
//   //                 </div>
//   //                 <div className="col-sm-8">
//   //                     <div className="b-nav__list wow slideInRight" data-wow-delay="0.3s">
//   //                         <div className="navbar-header">
//   //                             <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav">
//   //                                 <span className="sr-only">Toggle navigation</span>
//   //                                 <span className="icon-bar"></span>
//   //                                 <span className="icon-bar"></span>
//   //                                 <span className="icon-bar"></span>
//   //                             </button>
//   //                         </div>
//   //                         <div className="collapse navbar-collapse navbar-main-slide" id="nav">
//   //                             <ul className="navbar-nav-menu">
//   //                                     <a className="dropdown-toggle" data-toggle='dropdown' href="home.html">Home <span className="fa fa-caret-down"></span></a>
//   //                                     <ul className="dropdown-menu h-nav">
//   //                                         <li><a href="home.html">Home Page 1</a></li>
//   //                                         <li><a href="home-2.html">Home Page 2</a></li>
//   //                                     </ul>

//   //                                  <li><a href="index.html">HOME</a></li>
//   //                                 <li><a href="about.html">ABOUT US</a></li>
//   //                                 <li><a href="submit1.html">SELL A CAR</a></li>
//   //                                 <li><a href="listTableTwo.html">BUY CAR</a></li>
//   //                                  <li><a href="gallery.html">GALLERY</a></li>
//   //                                 <li><a href="contacts.html">CONTACT US</a></li>
//   //                             </ul>
//   //                         </div>
//   //                     </div>
//   //                 </div>
//   //                 <div className="col-sm-2 hidden-xs">
//   //                     <div className="b-topBarsocial-wrapper">
//   //                         <div className="b-topbar-social">
//   //                             <a href="https://www.facebook.com/profile.php?id=100077481055938"><span className="fa fa-facebook-square"></span></a>

//   //                             <a href="https://www.instagram.com/sushilcarbazzar/"><span className="fa fa-instagram"></span></a>
//   //                             <a href="https://www.youtube.com/@sushilcarbazzar5502"><span className="fa fa-youtube-square"></span></a>
//   //                         </div>
//   //                     </div>
//   //                 </div>

//   //             </div>
//   //         </div>
//   //     </nav>
//   //     <section className="b-pageHeader">
//   //         <div className="container">
//   //             <h1 className="wow zoomInLeft" data-wow-delay="0.5s">Car Insurance</h1>
//   //         </div>
//   //     </section>
//   //     <div className="b-breadCumbs s-shadow wow zoomInUp" data-wow-delay="0.5s">
//   //         <div className="container">
//   //             <a href="index.html" className="b-breadCumbs__page">Home</a>
//   //             <span className="fa fa-angle-right"></span>
//   //             <a href="insurance.html" className="b-breadCumbs__page m-active">
//   //                 Car Insurance
//   //                 </a>
//   //         </div>
//   //       </div>
//   //     <section className="b-brands s-shadow">
//   //         <div className="container">
//   //             <h5 className="s-titleBg wow zoomInUp" data-wow-delay="0.5s">Buying Car Insurance</h5><br />
//   //             <h2 className="s-title wow zoomInUp" data-wow-delay="0.5s">with the respective car insurance companies</h2>
//   //             <div className="">
//   //                 <div className="b-brands__brand wow rotateIn" data-wow-delay="0.5s">
//   //                     <img src="media/brands/tata.png" alt="brand" />
//   //                 </div>
//   //                 <div className="b-brands__brand wow rotateIn" data-wow-delay="0.5s">
//   //                     <img src="media/brands/bharti.png" alt="brand" />
//   //                 </div>
//   //                 <div className="b-brands__brand wow rotateIn" data-wow-delay="0.5s">
//   //                     <img src="media/brands/bajaj.png" alt="brand" />
//   //                 </div>
//   //                 <div className="b-brands__brand wow rotateIn" data-wow-delay="0.5s">
//   //                     <img src="media/brands/hdfc.png" alt="brand" />
//   //                 </div>
//   //                 <div className="b-brands__brand wow rotateIn" data-wow-delay="0.5s">
//   //                     <img src="media/brands/iffco.png" alt="brand" />
//   //                 </div>

//   //             </div>
//   //         </div>
//   //     </section>
//   //     <div className="b-features">
//   //         <div className="container">
//   //             <div className="row">
//   //                 <div className="col-md-9 col-md-offset-3 col-xs-6 col-xs-offset-6">
//   //                     <ul className="b-features__items">
//   //                         <li className="wow zoomInUp" data-wow-delay="0.3s" data-wow-offset="100">Low Prices, No Haggling</li>
//   //                         <li className="wow zoomInUp" data-wow-delay="0.3s" data-wow-offset="100">Largest Car Dealership</li>
//   //                         <li className="wow zoomInUp" data-wow-delay="0.3s" data-wow-offset="100">Multipoint Safety Check</li>
//   //                     </ul>
//   //                 </div>
//   //             </div>
//   //         </div>
//   //     </div>
//   //     <div className="b-info">
//   //         <div className="container">
//   //             <div className="row">
//   //                 <div className="col-md-3 col-xs-6">
//   //                     <aside className="b-info__aside wow zoomInLeft" data-wow-delay="0.3s">
//   //                         <article className="b-info__aside-article">
//   //                             <h3>OPENING HOURS</h3>
//   //                             <div className="b-info__aside-article-item">
//   //                                 <h6>Sales Department</h6>
//   //                                 <p>
//   //                                     Mon-Sat : 8:00am - 5:00pm<br />
//   //                                     Sunday is closed
//   //                                 </p>
//   //                             </div>

//   //                         </article>
//   //                         <article className="b-info__aside-article">
//   //                             <h3>About us</h3>
//   //                             <p>
//   //                               Established in the year 2002, Sushil Car Bazar is one of the top & most trusted dealership for preowned luxury car.In over 17 years of business history we have always had a customer oriented approach & total customer satisfaction has been our motive.
//   //                             </p>
//   //                         </article>
//   //                         <a href="about.html" className="btn m-btn">Read More<span className="fa fa-angle-right"></span></a>
//   //                     </aside>
//   //                 </div>
//   //                      <div className="col-md-3 col-xs-6">
//   //                     <div className="b-info__latest">
//   //                         <h3>LATEST AUTOS</h3>
//   //                         <div className="b-info__latest-article wow zoomInUp" data-wow-delay="0.3s">
//   //                             <div className="b-info__latest-article-photo m-audi"></div>
//   //                             <div className="b-info__latest-article-info">
//   //                                 <h6><a href="detail.html">HYUNDAI CRETA S PLUS</a></h6>
//   //                                 <p><span className="fa fa-tachometer"></span> 33,000 KM</p>
//   //                             </div>
//   //                         </div>
//   //                         <div className="b-info__latest-article wow zoomInUp" data-wow-delay="0.3s">
//   //                             <div className="b-info__latest-article-photo m-audiSpyder"></div>
//   //                             <div className="b-info__latest-article-info">
//   //                                 <h6><a href="#">MERCEDES BENZ A-CLASS</a></h6>
//   //                                 <p><span className="fa fa-tachometer"></span> 8,000 KM</p>
//   //                             </div>
//   //                         </div>
//   //                         <div className="b-info__latest-article wow zoomInUp" data-wow-delay="0.3s">
//   //                             <div className="b-info__latest-article-photo m-aston"></div>
//   //                             <div className="b-info__latest-article-info">
//   //                                 <h6><a href="#">VOLVO XC40 T4 R-DESIGN</a></h6>
//   //                                 <p><span className="fa fa-tachometer"></span> 20,000 KM</p>
//   //                             </div>
//   //                         </div>
//   //                     </div>
//   //                 </div>

//   //                 <div className="col-md-3 col-xs-6">
//   //                     <address className="b-info__contacts wow zoomInUp" data-wow-delay="0.3s">
//   //                         <p>contact us</p>
//   //                         <div className="b-info__contacts-item">
//   //                             <span className="fa fa-map-marker"></span>
//   //                             <ol>Plot No, 5 Block A1 Sector 11 DLF Faridabad, 11-12 Dividing Road Pincode 121006</ol>

//   //                         </div>
//   //                         <div className="b-info__contacts-item">
//   //                             <span className="fa fa-map-marker"></span>
//   //                             <em><ol>Spaze Boulevard, Sector-47, Gurugram</ol>
//   //                             </em>
//   //                         </div>
//   //                         <div className="b-info__contacts-item">
//   //                             <span className="fa fa-phone"></span>
//   //                            <ol>+91 92509 22333<br />+91 98114 36332</ol>
//   //                         </div>

//   //                         <div className="b-info__contacts-item">
//   //                             <span className="fa fa-envelope"></span>
//   //                             <em><ol>sushilcarbazar@gmail.com</ol></em>
//   //                         </div>
//   //                     </address>
//   //                     <address className="b-info__map">
//   //                         <a href="contacts.html">Open Location Map</a>
//   //                     </address>
//   //                 </div>
//   //             </div>
//   //         </div>
//   //       </div>
//   //        <footer className="b-footer">
//   //         <a id="to-top" href="#this-is-top"><i className="fa fa-chevron-up"></i></a>
//   //         <div className="container">
//   //             <div className="row">
//   //                 <div className="col-xs-4">
//   //                     <div className="b-footer__company wow slideInLeft" data-wow-delay="0.3s">
//   //                         <div className="b-nav__logo">
//   //                           <img src="images/logo/logo-1.png" />
//   //                         </div>

//   //                     </div>
//   //                 </div>
//   //                 <div className="col-xs-8">
//   //                     <div className="b-footer__content wow slideInRight" data-wow-delay="0.3s">
//   //                         <div className="b-footer__content-social">
//   //                             <a href="https://www.facebook.com/profile.php?id=100077481055938"><span className="fa fa-facebook-square"></span></a>

//   //                            <a href=" https://www.instagram.com/sushilcarbazzar/"><span className="fa fa-instagram"></span></a>
//   //                             <a href="https://www.youtube.com/@sushilcarbazzar5502"><span className="fa fa-youtube-square"></span></a>

//   //                         </div>
//   //                         <nav className="b-footer__content-nav">
//   //                             <ul>
//   //                                       <li><a href="index.html">HOME</a></li>
//   //                                 <li><a href="about.html">ABOUT US</a></li>
//   //                                 <li><a href="submit1.html">SELL A CAR</a></li>
//   //                                 <li><a href="listTableTwo.html">BUY CAR</a></li>
//   //                                  <li><a href="gallery.html">GALLERY</a></li>
//   //                                 <li><a href="contacts.html">CONTACT US</a></li>
//   //                             </ul>
//   //                         </nav>
//   //                     </div>
//   //                 </div>
//   //             </div>
//   //         </div>
//   //     </footer>
//   // </>

//  <><h1>hello</h1>

//  {console.log("hello user")}
//  </>

//   )
// }

export default CarLoan;
