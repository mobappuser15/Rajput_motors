// import React, { useState, useEffect } from "react";
// import Item from "./Item";
// import Details from "./Details";

// const Footer = () => {
// 	const [stockdata, setStockdata] = useState([]);
// 	const [selectedProduct, setSelectedProduct] = useState(null);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const url =
// 				"https://mobile.orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarVehStockDetail";
// 			const headers = {
// 				ApplicationMode: "ONLINE",
// 				EnvironmentType: "DEMO",
// 				BrandCode: "UC",
// 				CountryCode: "IN",
// 				"Content-Type": "application/json",
// 			};
// 			const data = {
// 				brandCode: "UC",
// 				countryCode: "IN",
// 				companyId: "SUSHIL",
// 				budgetFrom: 0,
// 				budgetTo: 2000000,
// 				vehBrandCode: "ALL",
// 				vehModelCode: "HECTOR",
// 				vehFuel: "PETROL",
// 				loginCompanyID: "ORBIT",
// 				loginUserId: "SULTAN",
// 				loginIpAddress: "192.168.10.32",
// 			};

// 			try {
// 				const response = await fetch(url, {
// 					method: "POST",
// 					headers: headers,
// 					body: JSON.stringify(data),
// 				});

// 				if (response.ok) {
// 					const responseData = await response.json();
// 					setStockdata(responseData?.UsedCarVehStockDetail);
// 				} else {
// 					throw new Error(
// 						`Request failed with status code: ${response.status}`
// 					);
// 				}
// 			} catch (error) {
// 				console.error("Error:", error);
// 			}
// 		};

// 		fetchData();
// 	}, []);
// 	const singleProducthandle = (uniqueSerial) => {
// 		const product = stockdata.find(
// 			(item) => item.uniqueSerial === uniqueSerial
// 		);
// 		setSelectedProduct(product);
// 		// navigate("/details");
// 	};

// 	return (
// 		<div>
// 			{selectedProduct ? (
// 				<Details selectedProduct={selectedProduct} />
// 			) : (
// 				<div></div>
// 			)}
// 			<div className='b-info'>
// 				<div className='container'>
// 					<div className='row'>
// 						<div className='col-md-3 col-xs-6'>
// 							<aside
// 								className='b-info__aside wow zoomInLeft'
// 								data-wow-delay='0.3s'>
// 								<article className='b-info__aside-article'>
// 									<h3>OPENING HOURS</h3>
// 									<div className='b-info__aside-article-item'>
// 										<h6>Sales Department</h6>
// 										<p>
// 											Mon-Sat : 8:00am - 5:00pm
// 											<br /> Sunday is closed
// 										</p>
// 									</div>
// 								</article>
// 								<article className='b-info__aside-article'>
// 									<h3>About us</h3>
// 									<p>
// 										Established in the year 2002, Sushil Car Bazar is one of the
// 										top & most trusted dealership for preowned luxury car.In
// 										over 17 years of business history we have always had a
// 										customer oriented approach & total customer satisfaction has
// 										been our motive
// 									</p>
// 								</article>
// 								<a href='about.html' className='btn m-btn'>
// 									Read More<span className='fa fa-angle-right'></span>
// 								</a>
// 							</aside>
// 						</div>
// 						<div className='col-md-3 col-xs-6'>
// 							{/* datta */}
// 							<div
// 								className='b-info__latest'
// 								onClick={() => singleProducthandle(item.uniqueSerial)}>
// 								<h3>LATEST AUTOS</h3>

// 								{stockdata && stockdata?.map((item) => (
// 										<div key={item.uniqueSerial}>
// 											<div
// 												className='b-info__latest-article wow zoomInUp'
// 												data-wow-delay='0.3s'>
// 												<div className='b-info__latest-article-photo m-audi'></div>
// 												<div className='b-info__latest-article-info'>
// 													<h6>
// 														<a href='detail.html'>{item.vehBrandCode}</a>
// 													</h6>
// 													<p>
// 														<span className='fa fa-tachometer'></span> 33,000 KM
// 													</p>
// 												</div>
// 											</div>

// 											<div
// 												className='b-info__latest-article wow zoomInUp'
// 												data-wow-delay='0.3s'>
// 												<div className='b-info__latest-article-photo m-audiSpyder'></div>
// 												<div className='b-info__latest-article-info'>
// 													<h6>
// 														<a href='#'>MERCEDES BENZ A-CLASS</a>
// 													</h6>
// 													<p>
// 														<span className='fa fa-tachometer'></span> 8,000 KM
// 													</p>
// 												</div>
// 											</div>
// 											<div
// 												className='b-info__latest-article wow zoomInUp'
// 												data-wow-delay='0.3s'>
// 												<div className='b-info__latest-article-photo m-aston'></div>
// 												<div className='b-info__latest-article-info'>
// 													<h6>
// 														<a href='#'>VOLVO XC40 T4 R-DESIGN</a>
// 													</h6>
// 													<p>
// 														<span className='fa fa-tachometer'></span> 20,000 KM
// 													</p>
// 												</div>
// 											</div>
// 										</div>
// 									))}
// 							</div>
// 						</div>

// 						<div className='col-md-3 col-xs-6'>
// 							<address
// 								className='b-info__contacts wow zoomInUp'
// 								data-wow-delay='0.3s'>
// 								<p>contact us</p>
// 								<div className='b-info__contacts-item'>
// 									<span className='fa fa-map-marker'></span>
// 									<ol>
// 										Plot No, 5 Block A1 Sector 11 DLF Faridabad, 11-12 Dividing
// 										Road Pincode 121006
// 									</ol>
// 								</div>
// 								<div className='b-info__contacts-item'>
// 									<span className='fa fa-map-marker'></span>
// 									<em>
// 										<ol>Spaze Boulevard, Sector-47, Gurugram</ol>
// 									</em>
// 								</div>
// 								<div className='b-info__contacts-item'>
// 									<span className='fa fa-phone'></span>
// 									<ol>
// 										+91 92509 22333
// 										<br />
// 										+91 98114 36332
// 									</ol>
// 								</div>

// 								<div className='b-info__contacts-item'>
// 									<span className='fa fa-envelope'></span>
// 									<em>
// 										<ol>sushilcarbazar@gmail.com</ol>
// 									</em>
// 								</div>
// 							</address>
// 							<address className='b-info__map'>
// 								<a href='contacts.html'>Open Location Map</a>
// 							</address>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

import React from "react";

function Footer() {
	return <div></div>;
}

export default Footer;
