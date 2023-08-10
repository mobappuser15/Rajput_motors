import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./detail.css";
import styled from "./Item";
import "./about.css";
import ReactLoading from "react-loading";

function About({ reloadPage }) {
	// Simulate page loading effect for demonstration purposes

	return (
		<div className=''>
			<>
				<div className='m-about'>
					<section className='b-pageHeader'>
						<div className='container'>
							<h1 className=' '>About Us</h1>
						</div>
					</section>
					<div className='b-breadCumbs s-shadow'>
						<div className='container'>
							<Link to='/' className='b-breadCumbs__page '>
								Home
							</Link>
							<span className='fa fa-angle-right'></span>
							<Link to='/about' className='b-breadCumbs__page m-active'>
								About Us
							</Link>
						</div>
					</div>
					<section className='b-best'>
						<div className='container'>
							<div className='row'>
								<div className='col-sm-6 col-xs-12'>
									<div className='b-best__info'>
										<div className='s-lineDownLeft b-best__info-head'>
											<h2 className=' '>
												The Best &amp; the Largest Auto Dealer
											</h2>
										</div>

										<p className=' '>
											Established in the year 2002, Sushil Car Bazar is one of
											the top & most trusted dealership for preowned luxury
											car.In over 17 years of business history we have always
											had a customer oriented approach & total customer
											satisfaction has been our motive.
											<br />
											We tend to deliver the very best quality vehicle at the
											foremost competitive cost. Sushil Car bazar is a one stop
											solution to sell yourPremium/ Luxury car at best price.
											<br />
										</p>
									</div>
								</div>
								<div className='col-sm-6 col-xs-12'>
									<img
										id='aboutlogo_img'
										className='img-responsive center-block  '
										alt='best'
										src='images/about/shushil.jpeg'></img>

									<span className='m-price   hidden-xs'>
										Mr. Sushil Bansal MD
									</span>

									<span
										className='m-price visible-xs'
										style={{
											textAlign: "center",
											fontWeight: "bold",
											color: "",
											marginLeft: "70px",
											fontSize: "20px",

											// backgroundColor: "#f76d2b",
										}}>
										Mr. Sushil Bansal MD
									</span>
								</div>
							</div>
						</div>
					</section>

					<div className='abc'>
						<div className='container'>
							<div className='row'>
								<div className='col-md-4 col-sm-6'>
									<div className='box'>
										<div className='box-heading'>
											<h3 className='title'>WE OFFER</h3>
											<p>Low Prices, No Haggling</p>
										</div>
										<div className='boxContent'>
											<p className='description'>
												Gurgaon-based dealer-networking solutions provider is
												enabling new OEMs to expand swiftly by using its
												cost-efficient, fully integrated offerings for managing
												sales and aftersales operations.
											</p>
										</div>
									</div>
								</div>
								<div className='col-md-4 col-sm-6'>
									<div className='box'>
										<div className='box-heading'>
											<h3 className='title'>WE ARE THE</h3>
											<p>Largest Car Dealership</p>
											<p></p>
										</div>
										<div className='boxContent'>
											<p className='description'>
												We offer IT services and ready-to-use Web hosted
												software systems for a number of verticals which can be
												customized easily to meet your specific needs
											</p>
										</div>
									</div>
								</div>
								<div className='col-md-4 col-sm-6 '>
									<div className='box'>
										<div className='box-heading'>
											<h3 className='title'>OUR CUSTOMERS GET</h3>
											<p>Multipoint Safety Check</p>
										</div>
										a
										<div className='boxContent'>
											<p className='description'>
												We can assist you in the outsourcing of critical
												business operations backed by our in-house IT support.
												We will assist you for any outsourced business process
												for your organization.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<section className='b-more'>
						<div className='container'>
							<div className='row'>
								<div className='col-sm-6 col-xs-12'>
									<div className='b-more__why  '>
										<h2 className='s-title'>WHY SUSHIL CARS</h2>
										<p>
											Sushil Cars is one of the pre-owned cars suppliers in the
											geography who recommends and supplies cars as per your
											requirement and budget. We don’t sell cars only; we always
											try to give appropriate cars as per customers’ need.{" "}
										</p>
									</div>
								</div>

								<div className='col-sm-6 col-xs-12'>
									<div className='b-more__info  '>
										<h2 className='s-title'>MORE INFO</h2>
										<div className='b-more__info-block'>
											<div className='b-more__info-block-title'>
												Fair Price for Everyone
												<a className='j-more'>
													<span className='fa fa-angle-left'></span>
												</a>
											</div>
											<div className='b-more__info-block-inside j-inside'>
												<p>
													We understand the value of your hard earned money and
													that’s why we keep pricing fair. Everything which is
													related to money is crystal clear and no hidden
													charges.{" "}
												</p>
											</div>
										</div>
										<div className='b-more__info-block'>
											<div className='b-more__info-block-title'>
												Large Number of Vehicles
												<a className='j-more'>
													<span className='fa fa-angle-left'></span>
												</a>
											</div>
											<div className='b-more__info-block-inside j-inside'>
												<p>
													CWe have large numbers of cars with us, whether you
													consider the make, brands, fuel, structure, segments,
													seating capacity & others.{" "}
												</p>
											</div>
										</div>
										<div className='b-more__info-block'>
											<div className='b-more__info-block-title'>
												Auto Loan Available
												<a className='j-more'>
													<span className='fa fa-angle-left'></span>
												</a>
											</div>
											<div className='b-more__info-block-inside j-inside'>
												<p>
													As your pre-owned cars partner we understand the value
													of your finances and that’s why we have all the
													possible loan options for you.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<div className='b-features'>
						<div className='container'>
							<div className='row'>
								<div className='col-md-9 col-md-offset-3 col-xs-6 col-xs-offset-6'>
									<ul className='b-features__items'>
										<li className=' '>Low Prices, No Haggling</li>
										<li className=' '>Largest Car Dealership</li>
										<li className=' '>Multipoint Safety Check</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		</div>
	);
}
export default About;
