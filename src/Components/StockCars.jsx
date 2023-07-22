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

	const [prizevalue, setprizevalue] = useState([MIN, MAX]);

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

	const bodyType = [
		{
			id: 1,
			img: "Hatchback",
		},
		{
			id: 2,
			img: "Sedan",
		},
		{
			id: 3,
			img: "SUV/MUV",
		},

		{
			id: 4,
			img: "Convertible",
		},
	];

	// make list
	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
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
			calledBy: "MAKE",
			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData?.generalMasterList[0].generalList;
				setData(generalList);
				console.log(generalList, "checkmakelist");
				console.log(jsonData, "jsondata");
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// model list

	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
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
			calledBy: "MODEL",
			vehMake: codemodel,

			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData?.generalMasterList[0].generalList;
				setModel(generalList);
				console.log(generalList, "MODELLIST");
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemodel]);
	// Lead Type list
	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
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
			calledBy: "LEAD_TYPE",
			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData?.generalMasterList[0].generalList;
				setDatatype(generalList);
				console.log(generalList, "LEAD LIST");
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// varient list
	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
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

			calledBy: "VARIANT",
			vehMake: codemodel,
			vehModel: codemake,

			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData?.generalMasterList[0].generalList;
				setVarient(generalList);
				console.log(generalList, "varient list");
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemake, codemodel]);
	// year list
	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
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
			calledBy: "MF_YEAR",
			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData?.generalMasterList[0].generalList;
				setVechileYear(generalList);
				// // console.log(generalList, "year list");
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// month list
	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
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
			calledBy: "MONTH",
			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData?.generalMasterList[0].generalList;
				setVechileMonth(generalList);
				// // console.log(generalList, "month list");
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// fuel list
	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
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
			calledBy: "FUEL",
			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData?.generalMasterList[0].generalList;
				setFuelData(generalList);
				console.log(generalList, "fuel list data");
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	//  TRANSMISSION list
	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
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
			calledBy: "TRANSMISSION",
			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData?.generalMasterList[0].generalList;
				setTransmission(generalList);
				// // console.log(generalList, "transmission list");
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// extier color list

	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
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
			calledBy: "EXT_COLOR",

			vehMake: codemodel,
			vehModel: codemake,
			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData?.generalMasterList[0].generalList;
				setExtirearColor(generalList);
				// // console.log(generalList, "EXTERICR COLOR list");
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemodel, codemake]);

	const handleSelectChange = (event) => {
		setSelectedItem(event.target.value);
		setcodemodel(event.target.value);
		// // console.log(event.target.value, "check console");
	};

	const handleSelectChange4 = (event) => {
		setSelectFuel(event.target.value);
		console.log(event.target.value, "fuleeeeeeeeee");
	};

	const handleSelectChange2 = (event) => {
		setSelecttype(event.target.value);
	};
	const handleSelectChange3 = (event) => {
		setSelectmodel(event.target.value);
		// setcodemodel(event.target.value);
		setcodemake(event.target.value);
		// // // console.log(setcodemake, "setcodemake");

		// // console.log(event.target.value, "check con");
	};

	const handleSelectChange5 = (event) => {
		setSelecttransmission(event.target.value);
	};
	const handleSelectChange6 = (event) => {
		setSelectextirecolor(event.target.value);
	};
	const handleSelectChange7 = (event) => {
		setSelectmfy(event.target.value);
	};
	const handleSelectChange8 = (event) => {
		setSelectmfm(event.target.value);
	};
	const handleSelectChange9 = (event) => {
		setSelectverient(event.target.value);
		console.log(event.target.value, "price range");
	};

	const handleSelectBodyType = (event) => {
		setselectbodytype(event.target.value);
	};

	const handleSelectKmsType = (event) => {
		setkmsDriven(event.target.value);
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

	return (
		<>
			<ScrollTop />
			{detailspage === false ? (
				<div>
					{/* body stucture */}
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

								{/* Add total counter stock number  */}

								{/* <div
							className='b-pageHeader__search wow zoomInRight'
							data-wow-delay='0.5s'>
							<h3>Your search returned 28 results</h3>
						</div> */}
							</div>
						</section>

						<div className='b-breadCumbs s-shadow'>
							<div className='container ' data-wow-delay='0.5s'>
								<Link to='/' className='b-breadCumbs__page'>
									Home
								</Link>
								<span className='fa fa-angle-right'></span>
								<a
									href='listTableTwo.html'
									className='b-breadCumbs__page m-active'>
									Buy Car
								</a>
							</div>
						</div>

						{/* filter section */}

						{/* body details cars */}
						<div className='row' id='wid_siz'>
							<div className=' drup_mn1 visible-xs '>
								<div className='prise_mn'>
									<div className='prizetext'>
										<div className='textprize' style={{ color: "white" }}>
											<span>{prizevalue[0]}</span>
											<span className='rsarr'>RS</span> -
											<span> {prizevalue[1]}</span>
											<span className='rsarr'>RS</span>
										</div>
									</div>

									<div onClick={handleSaveData}>
										<Slider
											className={"prizeslider"}
											onChange={setprizevalue}
											value={prizevalue}
											min={MIN}
											max={MAX}
										/>
									</div>
								</div>

								<ul id='cardrow'>
									<li>
										<select
											id='selectdata2'
											onClick={handleSaveData}
											class=''
											value={selectedItem}
											onChange={handleSelectChange}>
											<option value=''>Brand</option>
											{data.map((item, index) => (
												<option key={index} value={item.code}>
													{item.description}
												</option>
											))}
										</select>
									</li>
									<li>
										<select
											onClick={handleSaveData}
											id='selectdata2'
											class=''
											value={selectmodel}
											onChange={handleSelectChange3}>
											<option value=''> Model </option>
											{model.map((item, index) => (
												<option key={index} value={item.code}>
													{item.description}
												</option>
											))}
										</select>
									</li>

									<li>
										<select
											id='selectdata2'
											class=''
											onClick={handleSaveData}
											value={selectfuel}
											onChange={handleSelectChange4}>
											<option value=''> Fuel-type</option>
											{fueldata.map((item, index) => (
												<option key={index} value={item.code}>
													{item.description}
												</option>
											))}
										</select>
									</li>
								</ul>
							</div>

							<form
								id='viewform'
								class='s-submit clearfix hidden-xs'
								onSubmit={handleSaveData}
								style={{
									backgroundColor: "black",
									width: "20%",
									height: "30%",
								}}>
								<div class='row'>
									<div class='col-xs-12 col-md-12'>
										<div className='prise_mn'>
											<div className='prizetext'>
												<div className='textprize' style={{ color: "white" }}>
													<span>{prizevalue[0]}</span>
													<span className='rsarr'>RS</span> -
													<span> {prizevalue[1]}</span>
													<span className='rsarr'>RS</span>
												</div>
											</div>

											<div onClick={handleSaveData}>
												<Slider
													className={"prizeslider"}
													onChange={setprizevalue}
													value={prizevalue}
													min={MIN}
													max={MAX}
												/>
											</div>
										</div>

										<br />

										<div class='col-xs-12 col-md-12 col-lg-12 col-xl-12'>
											<div class=''>
												<select
													onClick={handleSaveData}
													id='selectdata'
													class=''
													value={selectedItem}
													onChange={handleSelectChange}>
													<option value=''>Brand</option>
													{data.map((item, index) => (
														<option key={index} value={item.code}>
															{item.description}
														</option>
													))}
												</select>
												<span class='fa fa-caret'></span>
											</div>
										</div>

										<div
											class='col-xs-12 col-md-12 col-lg-12 col-xl-12'
											data-wow-delay='0.5s'>
											<div class=''>
												<select
													id='selectdata'
													class=''
													onClick={handleSaveData}
													value={selectmodel}
													onChange={handleSelectChange3}>
													<option value=''> Model </option>
													{model.map((item, index) => (
														<option key={index} value={item.code}>
															{item.description}
														</option>
													))}
												</select>
												<span class='fa fa-caret-d'></span>
											</div>
										</div>

										<div
											data-wow-delay='0.5s'
											className='col-xs-12 col-md-12 col-lg-12 col-xl-12'>
											<div class='s-relative'>
												<select
													id='selectdata'
													class=''
													value={selectfuel}
													onChange={handleSelectChange4}>
													<option value=''> Fuel-type</option>
													{fueldata.map((item, index) => (
														<option key={index} value={item.code}>
															{item.description}
														</option>
													))}
												</select>
												<span class='fa fa-caret-'></span>
											</div>
										</div>

										<br />
										<br />
										<br />
										<br />

										<div
											id='fliterbutton'
											className=''
											style={{ alignItems: "center" }}>
											<button
												style={{
													color: "black",
													// marginTop: "20px",

													backgroundColor: "#f76d2b",
												}}
												onClick={reloadPage}
												// type='submit'
												className='btn-sm btnn1 '>
												Clear Filter
											</button>
											<br />
											<br />

											{/* <button
										className='btn-sm '
										style={{
											color: "black",

											marginLeft: "20px",

											backgroundColor: "orangered",
										}}
										type='submit'>
										Filter
									</button> */}
										</div>
									</div>
								</div>
							</form>

							{showdata === false ? (
								<>
									{/* normal Stock */}
									<div className='col-xs-12 col-md-12  col-lg-9 col-xl-9 '>
										<div className='b-items'>
											<div className='container'>
												<div className='b-auto__main'></div>
												<Row xs={12} md={3} id=''>
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

																			<div class='rate_ts_mn'>
																				<ul>
																					<li>{item.vehOdometer} KMS</li>
																					<li>{item.exteriorColor}</li>
																					<li>{item.vehFuelCode}</li>
																					<li>{item.transmissionDesc}</li>
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

																			{/* <div
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
																			</span> */}
																		</div>
																	</Col>
																</div>
															);
														}
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
										<div className=' col-xs-12 col-md-12  col-lg-9 col-xl-9 '>
											<div className='b-items'>
												<div className='container'>
													<div className='b-auto__main'></div>
													<Row xs={12} md={3} id=''>
														{demo.length === 0 ? (
															<div className='notdatafound'>
																<p>vehicle Not Available</p>
																<img
																	src='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg?size=626&ext=jpg'
																	alt='imph'
																/>
															</div>
														) : (
															<>
																{demo?.map((item) => (
																	<div key={item.uniqueSerial}>
																		{console.log(
																			demo,
																			"check demo search data"
																		)}

																		<>
																			<Col>
																				<div
																					onClick={() =>
																						singleProducthandle(
																							item.uniqueSerial
																						)
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
																									item?.modelImages.length >
																										0 &&
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
																							<div>
																								{item.vehManufactureYear}{" "}
																							</div>
																							<div
																								style={{ marginLeft: "5px" }}>
																								{" "}
																								{item.vehBrandCode}
																							</div>{" "}
																							<div
																								style={{ marginLeft: "5px" }}>
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
																									style={{
																										marginLeft: "15px",
																									}}>
																									{item.exteriorColor}
																								</div>
																								<div
																									className=''
																									style={{
																										marginLeft: "15px",
																									}}>
																									{item.vehFuelCode}
																								</div>

																								<div
																									className=''
																									style={{
																										marginLeft: "15px",
																									}}>
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
																								Rs{" "}
																								{item.vehSellPriceRecommended}
																							</div>
																						</span>
																					</div>
																				</div>
																			</Col>
																		</>
																	</div>
																))}
															</>
														)}
													</Row>
												</div>
											</div>
										</div>
										{/* phone View */}
									</>
								</>
							)}
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
												Established in the year 2002, Sushil Car Bazar is one of
												the top & most trusted dealership for preowned luxury
												car.In over 17 years of business history we have always
												had a customer oriented approach & total customer
												satisfaction has been our motive.
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
				</div>
			) : (
				<>
					{selectedProduct ? (
						<Details selectedProduct={selectedProduct} />
					) : (
						<div></div>
					)}
				</>
			)}
		</>
	);
};

export default StockCars;
