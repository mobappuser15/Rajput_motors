import React from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

const Contact = ({ loading }) => {
	return (
		<div>
			<>
				<div className='m-contacts'>
					<section className='b-pageHeader'>
						<div className='container'>
							<h1 className='  '>Contact Us</h1>
						</div>
					</section>

					<div className='b-breadCumbs s-shadow  '>
						<div className='container'>
							<Link to='/' className='b-breadCumbs__page'>
								Home
							</Link>
							<span className='fa fa-angle-right'></span>
							<Link
								href='contacts.html'
								className='b-breadCumbs__page m-active'>
								Contact Us
							</Link>
						</div>
					</div>

					<div className='b-map  '>
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
											<h2 className='s-titleDet  '>Contact Us</h2>
											<address className='b-contacts__address-info-main  '>
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
															<p style={{ color: "black" }}>
																+91 92509 22333 / +91 98114 36332
															</p>
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
															<p style={{ color: "black" }}>
																sushilcarbazar@gmail.com
															</p>
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
								<aside className='b-info__aside  '>
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
											Established in the year 2002, Sushil Car Bazar is one of
											the top & most trusted dealership for preowned luxury
											car.In over 17 years of business history we have always
											had a customer oriented approach & total customer
											satisfaction has been our motive.
										</p>
									</article>
								</aside>
							</div>

							<div className='col-md-5 col-xs-12'>
								<address className='b-info__contacts'>
									<p>contact us</p>
									<div className='b-info__contacts-item'>
										<span className='fa fa-map-marker'></span>
										<ol>
											Plot No, 5 Block A1 Sector 11 DLF Faridabad, 11-12
											Dividing Road Pincode 121006
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
		</div>
	);
};

export default Contact;
