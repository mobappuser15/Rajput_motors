import React from "react";
import { Link } from "react-router-dom";
import ScrollTop from "./ScrollTop";

const Insurance = () => {
	return (
		<>
			<ScrollTop />
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
						Car Insurance
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
						Car Insurance
					</a>
				</div>
			</div>
			{/* brand details */}

			<section className='b-brands s-shadow'>
				<div className='container'>
					<h5 className='s-titleBg wow zoomInUp' data-wow-delay='0.5s'>
						Buying Car Insurance
					</h5>
					<br />
					<h2 className='s-title wow zoomInUp' data-wow-delay='0.5s'>
						with the respective car insurance companies
					</h2>
					<div className='d-flex'>
						<div className='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/tata.png' alt='brand' />
						</div>
						<div className='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/bharti.png' alt='brand' />
						</div>
						<div className='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/bajaj.png' alt='brand' />
						</div>
						<div className='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/hdfc.png' alt='brand' />
						</div>
						<div className='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/iffco.png' alt='brand' />
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

export default Insurance;
