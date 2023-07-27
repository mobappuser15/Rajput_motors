import React, { useState, useEffect } from "react";
import axios from "axios";
import Submit4 from "./Submit4";
import { Link, useNavigate } from "react-router-dom";
import Searchdata from "./Searchdata";
import ScrollTop from "./ScrollTop";

const Submit1 = () => {
	const [num1, setNum1] = useState(1);
	const [num2, setNum2] = useState(3);
	const [captcha, setCaptcha] = useState("");
	const [result, setResult] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [makedatarequest, setMake] = useState([]);
	const [inputvalue, setInputvalue] = useState("");
	const [selectedValue, setSelectedValue] = useState(null);
	const [searchResults, setSearchResults] = useState([]);
	const [data, setData] = useState([]);
	const [model, setModel] = useState([]);
	const [source, setSource] = useState([]);
	const [typedata, setDatatype] = useState([]);
	const [varient, setVarient] = useState([]);
	const [vyear, setVechileYear] = useState([]);
	const [vmonth, setVechileMonth] = useState([]);
	const [extirecolor, setExtirearColor] = useState([]);
	const [fueldata, setFuelData] = useState([]);
	const [transmission, setTransmission] = useState([]);

	const [selectedItem, setSelectedItem] = useState("");
	const [resourcedata, setResoucedata] = useState("");
	const [selecttype, setSelecttype] = useState("");
	const [selectmodel, setSelectmodel] = useState("");
	const [selectfuel, setSelectFuel] = useState("");
	const [selecttransmission, setSelecttransmission] = useState("");
	const [selectextirecolor, setSelectextirecolor] = useState("");
	const [selectmfy, setSelectmfy] = useState("");
	const [selectmfm, setSelectmfm] = useState("");
	const [selectverient, setSelectverient] = useState("");
	const [codemodel, setcodemodel] = useState("");
	const [codemake, setcodemake] = useState("");
	const [codevarient, setvarientdata] = useState([]);
	const [errors, setErrors] = useState({
		selectedItem: false,
		selectverient: false,
		selectmfy: false,
		selectfuel: false,
		selecttransmission: false,
		selectmodel: false,
		selectextirecolor: false,
		selecttype: false,
		selectmfm: false,
	});

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
				// // console.log(generalList, "fuel list data");
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
		// setSelectedItem(event.target.value);
		// setcodemodel(event.target.value);

		const { name, value } = event.target;

		// Update the field value
		switch (name) {
			case "selectedItem":
				setSelectedItem(value);
				break;
			// case "selectverient":
			// 	setSelectVerient(value);
			// 	break;
			// Add cases for other fields here
			default:
				break;
		}

		// Clear the error message when the user starts typing in the field
		setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
		// // console.log(event.target.value, "check console");
	};
	// const handleSelectChange1 = (event) => {
	// 	setResoucedata(event.target.value);
	// 	console.log(event.target.value, "source value");
	// };
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
	const handleSelectChange4 = (event) => {
		setSelectFuel(event.target.value);
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
	};
	const navigate = useNavigate();

	const handleSaveData = (e) => {
		e.preventDefault();
		const isValid = isFormValid();

		if (isValid) {
			// Proceed to next step or perform other actions when the form is valid
			const AllData = {
				mfdMonth: selectmfm,
				source: resourcedata,
				brand: selectedItem,
				model: selectmodel,
				exteriorColor: selectextirecolor,
				variantCode: selectverient,
				regnFormat: selecttransmission,
				regn1: selecttype,
				mfdYear: selectmfy,
				fuel: selectfuel,
			};
			console.log(AllData);
			localStorage.setItem("data", JSON.stringify(AllData));
			// Navigate to the next step
			// navigate('/submit2');
			console.log("Form is valid. Proceed to the next step.");
		} else {
			// Show validation error message or prevent the form from proceeding
			console.log("Please fill all required fields.");
			// alert("Please fill all required fields.");
		}
	};

	function isFormValid() {
		// Perform validation checks for all the required fields
		// Return true if all required fields are filled, otherwise false
		const isValid =
			selectedItem.trim() !== "" &&
			// selectverient.trim() !== "" &&
			// // Add validation checks for other required fields here
			// // For example:
			// selectmfy.trim() !== "" &&
			// selectfuel.trim() !== "" &&
			// selecttransmission.trim() !== "" &&
			// selectmodel.trim() !== "" &&
			// selectextirecolor.trim() !== "" &&
			// selecttype.trim() !== "" &&
			// selectmfm.trim() !== "";

			// Update the error state for each field
			setErrors({
				selectedItem: selectedItem.trim() === "",
				// selectverient: selectverient.trim() === "",
				// selectmfy: selectmfy.trim() === "",
				// selectfuel: selectfuel.trim() === "",
				// selecttransmission: selecttransmission.trim() === "",
				// selectmodel: selectmodel.trim() === "",
				// selectextirecolor: selectextirecolor.trim() === "",
				// selecttype: selecttype.trim() === "",
				// selectmfm: selectmfm.trim() === "",
			});

		return isValid;
	}

	return (
		<div style={{ margingTop: "40px" }}>
			<ScrollTop />
			{/* header section */}
			<div class='m-submit1' data-scrolling-animations='true'>
				<section class='b-pageHeader'>
					<div class='container'>
						<h1 class=''>Submit Your Vehicle</h1>
					</div>
				</section>

				<div class='b-breadCumbs s-shadow'>
					<div class='container  '>
						<Link to='/' className='b-breadCumbs__page'>
							Home
						</Link>
						<span class='fa fa-angle-right'></span>
						<a href='submit1.html' class='b-breadCumbs__page m-active'>
							{" "}
							Submit a Vehicle
						</a>
					</div>
				</div>
			</div>

			{/* body section */}

			<div class='b-submit'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-3 col-md-4 col-sm-5 col-xs-6'>
							<aside class='b-submit__aside'>
								<div class='b-submit__aside-step m-active  '>
									<h3>Step 1</h3>
									<div class='b-submit__aside-step-inner m-active clearfix'>
										<div class='b-submit__aside-step-inner-icon'>
											<span class='fa fa-car'></span>
										</div>
										<div class='b-submit__aside-step-inner-info'>
											<h4>Add YOUR Vehicle</h4>
											<p>Select your vehicle &amp; add info</p>
											<div class='b-submit__aside-step-inner-info-triangle'></div>
										</div>
									</div>
								</div>
								<div class='b-submit__aside-step  '>
									<h3>Step 2</h3>
									<div class='b-submit__aside-step-inner clearfix'>
										<div class='b-submit__aside-step-inner-icon'>
											<span class='fa fa-user'></span>
										</div>
										<div class='b-submit__aside-step-inner-info'>
											<h4>Contact details</h4>
											<p>Choose vehicle specifications</p>
										</div>
									</div>
								</div>
							</aside>
						</div>

						<div class='col-lg-9 col-md-8 col-sm-7 col-xs-6'>
							<div class='b-submit__main'>
								<header class='s-headerSubmit s-lineDownLeft  '>
									<h2 class=''>Add Your Vehicle Details</h2>
								</header>
								{/*  form section */}

								<form class='s-submit clearfix' onSubmit={handleSaveData}>
									<div class='row'>
										<div class='col-md-6 col-xs-12'>
											<div class='b-submit__main-element  '>
												<label style={{ color: "black" }}>
													Make <span>*</span>
												</label>
												<div class='s-relative'>
													<select
														class='m-select'
														value={selectedItem}
														onChange={handleSelectChange}>
														<option value=''>Select item</option>
														{data.map((item, index) => (
															<option key={index} value={item.code}>
																{item.description}
															</option>
														))}
													</select>
													<span class='fa fa-caret-down'></span>
													{errors.selectedItem && (
														<span style={{ color: "red" }}>
															Please select an item.
														</span>
													)}
												</div>
											</div>
											<div class='b-submit__main-element  '>
												<label style={{ color: "black" }}>
													Variant <span>*</span>
												</label>
												<div class='s-relative'>
													<select
														class='m-select'
														value={selectverient}
														onChange={handleSelectChange9}>
														<option value=''>Select item</option>
														{varient.map((item, index) => (
															<option key={index} value={item.code}>
																{item.description}
															</option>
														))}
													</select>
													<span class='fa fa-caret-down'></span>
												</div>
											</div>

											<div class='b-submit__main-element  '>
												<label style={{ color: "black" }}>
													Year of MF. <span>*</span>
												</label>
												<div class='s-relative'>
													<select
														class='m-select'
														value={selectmfy}
														onChange={handleSelectChange7}>
														<option value=''>Select item</option>
														{vyear.map((item, index) => (
															<option key={index} value={item.code}>
																{item.description}
															</option>
														))}
													</select>
													<span class='fa fa-caret-down'></span>
												</div>
											</div>

											<div class='b-submit__main-element  '>
												<label style={{ color: "black" }}>
													Fuel <span>*</span>
												</label>
												<div class='s-relative'>
													<select
														class='m-select'
														value={selectfuel}
														onChange={handleSelectChange4}>
														<option value=''>Select item</option>
														{fueldata.map((item, index) => (
															<option key={index} value={item.code}>
																{item.description}
															</option>
														))}
													</select>
													<span class='fa fa-caret-down'></span>
												</div>
											</div>

											<div class='b-submit__main-element  '>
												<label style={{ color: "black" }}>
													Transmission <span>*</span>
												</label>
												<div class='s-relative'>
													<select
														class='m-select'
														value={selecttransmission}
														onChange={handleSelectChange5}>
														<option value=''>Select item</option>
														{transmission.map((item, index) => (
															<option key={index} value={item.code}>
																{item.description}
															</option>
														))}
													</select>
													<span class='fa fa-caret-down'></span>
												</div>
											</div>
										</div>
										<div class='col-md-6 col-xs-12'>
											<div class='b-submit__main-element  '>
												<label style={{ color: "black" }}>
													Model <span>*</span>
												</label>
												<div class='s-relative'>
													<select
														class='m-select'
														value={selectmodel}
														onChange={handleSelectChange3}>
														<option value=''>Select item</option>
														{model.map((item, index) => (
															<option key={index} value={item.code}>
																{item.description}
															</option>
														))}
													</select>
													<span class='fa fa-caret-down'></span>
												</div>
											</div>
											<div class='b-submit__main-element  '>
												<label style={{ color: "black" }}>
													Exterior Color <span>*</span>
												</label>
												<div class='s-relative'>
													<select
														class='m-select'
														value={selectextirecolor}
														onChange={handleSelectChange6}>
														<option value=''>Select item</option>
														{extirecolor.map((item, index) => (
															<option key={index} value={item.code}>
																{item.description}
															</option>
														))}
													</select>
													<span class='fa fa-caret-down'></span>
												</div>
											</div>
											<div class='b-submit__main-element  '>
												<label style={{ color: "black" }}>
													Type <span>*</span>
												</label>
												<div class='s-relative'>
													<select
														class='m-select'
														value={selecttype}
														onChange={handleSelectChange2}>
														<option value=''>Select item</option>
														{typedata.map((item, index) => (
															<option key={index} value={item.code}>
																{item.description}
															</option>
														))}
													</select>
													<span class='fa fa-caret-down'></span>
												</div>
											</div>

											<div class='b-submit__main-element  '>
												<label style={{ color: "black" }}>
													Month of MF. <span>*</span>
												</label>
												<div class='s-relative'>
													<select
														class='m-select'
														name='source'
														value={selectmfm}
														onChange={handleSelectChange8}>
														<option value=''>Select item</option>
														{vmonth.map((item, index) => (
															<option key={index} value={item.code}>
																{item.description}
															</option>
														))}
													</select>
													<span class='fa fa-caret-down'></span>
												</div>
											</div>

											<button
												id='procedbtn'
												// onClick={isFormValid}
												// to='/submit2'
												type='submit'
												class='btn m-btn  '>
												Save &amp; PROCEED to next step
												<span
													id='arrowiconbtn'
													class='fa fa-check'
													aria-hidden='true'></span>
											</button>
										</div>
									</div>
									{/*  captcha code */}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <Searchdata /> */}
			{/* footer section */}
			<div class='b-info'>
				<div class='container'>
					<div class='row'>
						<div class='col-md-3 col-xs-12'>
							<aside class='b-info__aside  '>
								<article class='b-info__aside-article'>
									<h3>OPENING HOURS</h3>
									<div class='b-info__aside-article-item'>
										<h6>Sales Department</h6>
										<p>
											Mon-Sat : 8:00am - 5:00pm
											<br /> Sunday is closed
										</p>
									</div>
								</article>
								<article class='b-info__aside-article'>
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

						<div class='col-md-5 col-xs-12'>
							<address class='b-info__contacts  '>
								<p>contact us</p>
								<div class='b-info__contacts-item'>
									<span class='fa fa-map-marker'></span>
									<ol>
										Plot No, 5 Block A1 Sector 11 DLF Faridabad, 11-12 Dividing
										Road Pincode 121006
									</ol>
								</div>
								<div class='b-info__contacts-item'>
									<span class='fa fa-map-marker'></span>
									<em>
										<ol>Spaze Boulevard, Sector-47, Gurugram</ol>
									</em>
								</div>
								<div class='b-info__contacts-item'>
									<span class='fa fa-phone'></span>
									<ol>
										+91 92509 22333
										<br />
										+91 98114 36332
									</ol>
								</div>

								<div class='b-info__contacts-item'>
									<span class='fa fa-envelope'></span>
									<em>
										<ol>sushilcarbazar@gmail.com</ol>
									</em>
								</div>
							</address>
							<address class='b-info__map'>
								<a href='contacts.html'>Open Location Map</a>
							</address>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Submit1;
