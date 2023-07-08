import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./detail.css";
import Details from "./Details";

const ListTableTwo = () => {
	const [stockdata, setStockdata] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const url =
				"https://mobile.orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarVehStockDetail";
			const headers = {
				ApplicationMode: "ONLINE",
				EnvironmentType: "DEMO",
				BrandCode: "UC",
				CountryCode: "IN",
				"Content-Type": "application/json",
			};
			const data = {
				brandCode: "UC",
				countryCode: "IN",
				companyId: "SUSHIL",
				budgetFrom: 0,
				budgetTo: 2000000,
				vehBrandCode: "ALL",
				vehModelCode: "ALL",
				vehFuel: "ALL",
				loginCompanyID: "ORBIT",
				loginUserId: "SULTAN",
				loginIpAddress: "192.168.10.32",
			};

			try {
				const response = await fetch(url, {
					method: "POST",
					headers: headers,
					body: JSON.stringify(data),
				});

				if (response.ok) {
					const responseData = await response.json();
					setStockdata(responseData?.UsedCarVehStockDetail);
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);

	const singleProducthandle = (uniqueSerial) => {
		const product = stockdata.find(
			(item) => item.uniqueSerial === uniqueSerial
		);
		setSelectedProduct(product);
		// navigate("/details");
	};

	return (
		<div>
			{/* body stucture */}
			{selectedProduct ? (
				<Details selectedProduct={selectedProduct} />
			) : (
				<div></div>
			)}

			<div
				className='m-listTableTwo'
				data-scrolling-animations='true'
				data-equal-height='.b-items__cell'>
				<div id='page-preloader'>
					<span className='spinner'></span>
				</div>

				<section className='b-pageHeader'>
					<div className='container'>
						<h1 className='wow zoomInLeft' data-wow-delay='0.5s'>
							Auto Listings
						</h1>
						<div
							className='b-pageHeader__search wow zoomInRight'
							data-wow-delay='0.5s'>
							<h3>Your search returned 28 results</h3>
						</div>
					</div>
				</section>

				<div className='b-breadCumbs s-shadow'>
					<div className='container wow zoomInUp' data-wow-delay='0.5s'>
						<a href='home.html' className='b-breadCumbs__page'>
							Home
						</a>
						<span className='fa fa-angle-right'></span>
						<a href='listTableTwo.html' className='b-breadCumbs__page m-active'>
							Search Results
						</a>
					</div>
				</div>

				<div className='b-items'>
					<div className='container'>
						<div className='row'>
							<div
								className='col-lg-3 col-md-12 col-sm-4 col-xs-12'
								style={{ margingTop: "-60px" }}>
								<aside className=''>
									<div
										className=''
										style={{ margingTop: "-80px" }}
										data-wow-delay='0.5s'>
										<div className='b-items__aside-sell-img'>
											<h3>SELL YOUR CAR</h3>
										</div>
										<div className='b-items__aside-sell-info'>
											<p>
												Sell your car at the most competitive prices in the
												market. <br />
												Enter car details & get best price instantly.
											</p>
											<Link to='/salecar' className='btn m-btn'>
												REGISTER NOW<span className='fa fa-angle-right'></span>
											</Link>
										</div>
									</div>
								</aside>
							</div>

							{/* Cars Data Details */}

							<div className='col-lg-9 col-sm-8 col-md-12 col-xs-12'>
								<div className='row m-border' id='cardrow'>
									<div
										className='col-lg-12 col-md-12 col-xs-12 wow zoomInUp'
										data-wow-delay='0.5s'
										id='cardrow'>
										<Row
											xs={12}
											md={2}
											id='cardrow'
											style={{ margingTop: "20px" }}>
											{stockdata.map((item) => {
												const frontImage = item?.modelImages.find(
													(image) => image?.imageName === "Front"
												);
												if (frontImage) {
													return (
														<div className='' key={frontImage.uri} id='cardrow'>
															<Col>
																<div className='b-items__cars-one-img'>
																	<img
																		style={{
																			aspectRatio: "2/2",
																			border: "3px solid gray",
																			borderRadius: "20px",
																		}}
																		onClick={() =>
																			singleProducthandle(item.uniqueSerial)
																		}
																		id='pic_hit1'
																		className=''
																		src={frontImage.uri}
																		alt='jeep'
																	/>
																</div>
																<div className='b-items__cell-info'>
																	<div className='s-lineDownLeft b-items__cell-info-title'>
																		<div className='b-auto__main-item-info'>
																			<span className='m-price'>
																				<i className='fa fa-rupee'></i>{" "}
																				{item.vehSellPriceRecommended}
																			</span>
																		</div>
																		<h2 className=''>
																			<a>{item.vehBrandCode}</a> -{" "}
																			<Link>{item.vehModelCode}</Link>
																		</h2>
																	</div>

																	<div>
																		<div className='d-flex m-smallPadding'>
																			<div className='col-xs-5'>
																				<span className='b-items__cars-one-info-title'>
																					Model Year:
																				</span>
																				<span className='b-items__cars-one-info-title'>
																					Color:
																				</span>
																				<span className='b-items__cars-one-info-title'>
																					Kms:
																				</span>
																				<span className='b-items__cars-one-info-title'>
																					Fuel Type:
																				</span>
																			</div>
																			<div className='col-xs-7'>
																				<span className='b-items__cars-one-info-value'>
																					{item.vehManufactureYear}
																				</span>
																				<span className='b-items__cars-one-info-value'>
																					{item.exteriorColor}
																				</span>
																				<span className='b-items__cars-one-info-value'>
																					{item.vehOdometer} KM
																				</span>
																				<span className='b-items__cars-one-info-value'>
																					{item.vehFuelCode}
																				</span>
																			</div>
																		</div>
																	</div>
																	{/* <h5 className='b-items__cell-info-price'>
																<span style={{ color: "black" }}>Price:</span>
																<i className='fa fa-rupee'></i>25,00,000
															</h5> */}
																</div>
															</Col>
														</div>
													);
												}
												return null;
											})}
										</Row>

										<div
											className=' fa fa-arrow-right fa-3x visible-xs'
											style={{ marginTop: "90px" }}></div>
									</div>
								</div>
							</div>
						</div>

						{/* pagination section */}
						{/* <div className='b-items__pagination'>
							<div
								className='b-items__pagination-main wow zoomInUp'
								data-wow-delay='0.5s'>
								<a
									data-toggle='modal'
									data-target='#myModal'
									href='#'
									className='m-left'>
									<span className='fa fa-angle-left'></span>
								</a>
								<span className='m-active'>
									<a href='#'>1</a>
								</span>
								<span>
									<a href='#'>2</a>
								</span>
								<span>
									<a href='#'>3</a>
								</span>
								<span>
									<a href='#'>4</a>
								</span>
								<a href='#' className='m-right'>
									<span className='fa fa-angle-right'></span>
								</a>
							</div>
						</div> */}
					</div>
				</div>
			</div>

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
			{/* <!--b-features--> */}

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
								<a href='about.html' className='btn m-btn'>
									Read More<span className='fa fa-angle-right'></span>
								</a>
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

export default ListTableTwo;
