import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import PageScrollTop from "./PageScrollTop";
import ErrorPage from "./ErrorPage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Socalmedia from "./Socalmedia";

const Contact = () => {
	return (
		<div>
			<Navbar />
			<Socalmedia />
			<>
				<PageScrollTop />
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

					<div class='contacts-section'>
						<div class='container'>
							<div class='row'>
								<div class='col-lg-6 col-md-6'>
									<div className='b-map  '>
										<iframe
											src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14040.353965632252!2d77.31583715131443!3d28.3863950905517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdcf4ae640965%3A0x650a5a585fe8b7e6!2sRAJPUT%20MOTORS!5e0!3m2!1sen!2sin!4v1696917633498!5m2!1sen!2sin'
											width='100%'
											height='600'
											style={{ border: "0" }}
											allowfullscreen=''
											loading='lazy'
											referrerpolicy='no-referrer-when-downgrade'></iframe>
									</div>
								</div>
								<div class='col-lg-6 col-md-6'>
									<div class='conatact-single-box'>
										<div class='adrs_mn'>
											<div class='contacts-icon'>
												<span class='fa fa-home'></span>
											</div>

											<div class='contact-title'>
												<h5>ADDRESS 1</h5>
											</div>

											<div class='contact-description'>
												<p>
												Plot No-6 Wazir Market, Bypass Road, Opposite Sector-9 CNG Pump,, Faridabad, 121006
												</p>
											</div>

										</div>


										<div class='adrs_mn'>
											<div class='contacts-icon'>
												<span class='fa fa-home'></span>
											</div>

											<div class='contact-title'>
												<h5>ADDRESS 2</h5>
											</div>

											<div class='contact-description'>
												<p>
												Shop no-G 40,Dlf centre point,DLF sector 11,Faridabad
												</p>
											</div>

										</div>

										<div class='adrs_mn'>
											<div class='contacts-icon'>
												<span class='fa fa-envelope'></span>
											</div>

											<div class='contact-title'>
												<h5> E-Mail Us </h5>
											</div>

											<div class='contact-description'>
												<p>Rajputmotorpvtltd@yahoo.com <br></br>motorrajput@yahoo.com</p>
												
												
											</div>
										</div>

										<div class='adrs_mn'>
											<div class='contacts-icon'>
												<span class='fa fa-phone'></span>
											</div>

											<div class='contact-title'>
												<h5> PHONE </h5>
											</div>

											<div class='contact-description'>
												<p>+91 9871888833 / +91 9311510061 / +91 9891400061</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
			<Footer />
		</div>
	);
};

export default Contact;
