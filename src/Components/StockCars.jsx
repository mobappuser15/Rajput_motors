import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./detail.css";
import Details from "./Details";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Slider from "react-slider";
import "./prizerange.css";
import ScrollTop from "./ScrollTop";

import { Typography, makeStyles, TablePagination } from "@material-ui/core";

const MIN = 50000;
const MAX = 6000000;

const StockCars = () => {
	const [openprice, setOpenprice] = useState(false);
	const [openyear, setOpenyear] = useState(false);
	const [opendriven, setOpendriven] = useState(false);
	const [openmanuf, setOpenmanuf] = useState(false);
	const [openbodytype, setOpenbodytype] = useState(false);
	const [openfueltype, setOpenfueltype] = useState(false);
	const [openTransmission, setOpenTransmission] = useState(false);
	const [stockdata, setStockdata] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);

	const [selectedValue, setSelectedValue] = useState(null);
	const [searchResults, setSearchResults] = useState([]);
	const [demo, setDemo] = useState([]);

	const [data, setData] = useState([]);
	const [model, setModel] = useState([]);
	const [source, setSource] = useState([]);
	const [varient, setVarient] = useState([]);
	const [vyear, setVechileYear] = useState([]);
	const [fueldata, setFuelData] = useState([]);
	const [transmission, setTransmission] = useState([]);
	const [selectbodytype, setselectbodytype] = useState([]);
	const [kmsDriven, setkmsDriven] = useState([]);
	const [selectedItem, setSelectedItem] = useState("");
	const [resourcedata, setResoucedata] = useState("");
	const [selecttype, setSelecttype] = useState("");
	const [selectmodel, setSelectmodel] = useState("");
	const [selectfuel, setSelectFuel] = useState("");
	const [selecttransmission, setSelecttransmission] = useState([]);
	const [selectextirecolor, setSelectextirecolor] = useState("");
	const [selectmfy, setSelectmfy] = useState("");
	const [selectverient, setSelectverient] = useState("");
	const [codemodel, setcodemodel] = useState("");
	const [codemake, setcodemake] = useState("");
	const [codevarient, setvarientdata] = useState([]);
	const [minRange, setMinRange] = useState("");
	const [maxRange, setMaxRange] = useState("");
	const [selectedMake, setSelectedMake] = useState([]);
	const [selectedModel, setSelectedModel] = useState("");
	const [selectedVariant, setSelectedVariant] = useState("");
	const [showdata, setShowdata] = useState(false);

	const [result, setResult] = useState("");
	const [makedatarequest, setMake] = useState([]);
	const [inputvalue, setInputvalue] = useState("");
	const [typedata, setDatatype] = useState([]);
	const [vmonth, setVechileMonth] = useState([]);
	const [extirecolor, setExtirearColor] = useState([]);
	const [selectmfm, setSelectmfm] = useState("");
	const [detailspage, setdetailspage] = useState(false);

	const [page, setPage] = React.useState(2);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [prizevalue, setprizevalue] = useState([MIN, MAX]);
	console.log(prizevalue, "prizevalue");

	const [pagenotFound, setpagenotFound] = useState();

	// All Stock Show
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
				budgetTo: 0,
				vehBrandCode: "",
				vehModelCode: "",
				vehFuel: "",
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
					console.log(stockdata, "data stcok");
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
		setdetailspage(product);
	};

	const navigate = useNavigate();

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
			budgetFrom: prizevalue[0],
			budgetTo: prizevalue[1],
			vehBrandCode: selectedItem,
			vehModelCode: selectmodel,
			vehVariantDesc: selectverient,
			vehFuel: selectfuel,
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);
				setShowdata(responseData?.UsedCarVehStockDetail);
				setpagenotFound(responseData?.UsedCarVehStockDetail);
				console.log("responseData stck search", responseData);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Data not found", error);
		}
	};

	const handleSaveData = (e) => {
		e.preventDefault();
		fetchData();
		// setSearchResults();
		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};

	const reloadPage = () => {
		window.location.reload();
	};

	// const singleProducthandle = (uniqueSerial) => {
	// 	const product = stockdata.find(
	// 		(item) => item.uniqueSerial === uniqueSerial
	// 	);
	// 	setSelectedProduct(product);
	// 	setdetailspage(product);

	// 	// navigate("/details");
	// };

	return (
		<>
			<ScrollTop />
			{showdata === false ? (
				<>
					{/* normal Stock */}
					<div className='col-xs-12 col-md-12  col-lg-9 col-xl-9 hidden-xs'>
						<div className='b-items'>
							<div className='container'>
								<div className='b-auto__main'></div>
								<Row xs={12} md={3} id='cardrow'>
									{stockdata?.map((item) => {
										const frontImage = item?.modelImages.find(
											(image) => image?.imageName === "Front"
										);
										if (frontImage) {
											return (
												<div key={frontImage.uri}>
													<Col>
														<div
															onClick={() =>
																singleProducthandle(item.uniqueSerial)
															}
															className=' card2 b-auto__main-item '>
															{/* {console.log(item.modelImages, "data image url")} */}
															<img
																style={{
																	aspectRatio: "2/2",
																	width: "100%",
																	// border: "3px solid gray",
																	// borderRadius: "20px",
																}}
																className=' img-responsive center-block'
																src={frontImage.uri}
																alt='nissan'
															/>

															<div
																className=' d-flex b-items__cars-one-info-title'
																style={{
																	fontSize: "16px",
																	marginLeft: "20px",
																	marginTop: "10px",
																}}>
																{" "}
																<div>{item.vehManufactureYear} </div>
																<div style={{ marginLeft: "5px" }}>
																	{" "}
																	{item.vehBrandCode}
																</div>{" "}
																<div style={{ marginLeft: "5px" }}>
																	{item.vehModelCode}{" "}
																</div>
															</div>

															<div
																id='textitem'
																className='d-flex'
																style={{
																	marginTop: "-4px",
																}}>
																<ul className='d-flex' style={{ fontSize: "" }}>
																	<div className='b'>
																		{item.vehOdometer} kms
																	</div>

																	<div
																		className=''
																		style={{ marginLeft: "15px" }}>
																		{item.exteriorColor}
																	</div>
																	<div
																		className=''
																		style={{ marginLeft: "15px" }}>
																		{item.vehFuelCode}
																	</div>

																	<div
																		className=''
																		style={{ marginLeft: "15px" }}>
																		{item.transmissionDesc}
																	</div>
																</ul>
															</div>

															<span
																style={{
																	marginLeft: "19px",
																}}
																className='d-flex ml-6'>
																<i className=''></i>{" "}
																<div
																	className='b-items__cars-one-info-title'
																	style={{ fontSize: "18px" }}>
																	Rs {item.vehSellPriceRecommended}
																</div>
															</span>
														</div>
													</Col>
												</div>
											);
										}
										return null;
									})}
								</Row>
							</div>
						</div>
					</div>
					{/* Apply pagination */}

					{/* phone View */}
				</>
			) : (
				/* Search Data   */
				<>
					<>
						{/* web view */}
						<div className=' col-xs-12 col-md-12  col-lg-9 col-xl-9 hidden-xs'>
							<div className='b-items'>
								<div className='container'>
									<div className='b-auto__main'></div>
									<Row xs={12} md={3} id='cardrow'>
										<div
											className=' fa fa-angle-right fa-2x visible-xs'
											style={{
												marginLeft: "-70px",
												marginTop: "100px",
											}}></div>

										{demo?.map((item) => (
											<div key={item.uniqueSerial}>
												{console.log(demo, "check demo search data")}

												<>
													<Col>
														<div
															onClick={() =>
																singleProducthandle(item.uniqueSerial)
															}
															className='card2 b-auto__main-item '>
															<div className=''>
																<div className=''>
																	<img
																		style={{
																			aspectRatio: "2/2",
																			width: "100%",
																		}}
																		// id='pic_hit1'
																		className=''
																		src={
																			item?.modelImages.length > 0 &&
																			item?.modelImages[0].uri
																		}
																		alt='jeep'
																	/>
																</div>

																<div
																	className=' d-flex b-items__cars-one-info-title'
																	style={{
																		fontSize: "16px",
																		marginLeft: "20px",
																	}}>
																	{" "}
																	<div>{item.vehManufactureYear} </div>
																	<div style={{ marginLeft: "5px" }}>
																		{" "}
																		{item.vehBrandCode}
																	</div>{" "}
																	<div style={{ marginLeft: "5px" }}>
																		{item.vehModelCode}{" "}
																	</div>
																</div>

																<div
																	id='textitem'
																	className='d-flex'
																	style={{
																		marginTop: "-4px",
																	}}>
																	<ul
																		className='d-flex'
																		style={{ fontSize: "" }}>
																		<div className='b'>
																			{item.vehOdometer} kms
																		</div>

																		<div
																			className=''
																			style={{ marginLeft: "15px" }}>
																			{item.exteriorColor}
																		</div>
																		<div
																			className=''
																			style={{ marginLeft: "15px" }}>
																			{item.vehFuelCode}
																		</div>

																		<div
																			className=''
																			style={{ marginLeft: "15px" }}>
																			{item.transmissionDesc}
																		</div>
																	</ul>
																</div>

																<span
																	style={{
																		marginLeft: "19px",
																	}}
																	className='d-flex ml-6'>
																	<i className=''></i>{" "}
																	<div
																		className='b-items__cars-one-info-title'
																		style={{ fontSize: "18px" }}>
																		Rs {item.vehSellPriceRecommended}
																	</div>
																</span>
															</div>
														</div>
													</Col>
												</>
											</div>
										))}
									</Row>
								</div>
							</div>
						</div>
						{/* phone View */}
					</>
				</>
			)}
		</>
	);
};

export default StockCars;
