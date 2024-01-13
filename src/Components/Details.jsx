import React, { useState, useEffect } from "react";
import "./detail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import toast from "react-hot-toast";
import PageScrollTop from "./PageScrollTop";
import Navbar from "./Navbar";
import Footer from "./Footer";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 3 },
];

const breakPointss = [
	{ width: 768, itemsToShow: 2 },
	{ width: 1200, itemsToShow: 2 },
];

function Details({ selectedProduct }) {
	const { uniquekey, vehOdometer } = useParams();
	const [selectedImageIndex, setSelectedImageIndex] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [stockdata, setStockdata] = useState([]);
	const [email, setemail] = useState("");
	const [mobile, setmobile] = useState("");
	const [contactName, setcontactName] = useState("");
	const [pincode, setpincode] = useState("");
	const [selectedImage, setSelectedImage] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
	const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
	const [userAnswer, setUserAnswer] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const [changeimage, setchangeimage] = useState();
	const [zoom, setZoom] = useState(null);
	const [mobileError, setMobileError] = useState("");
	const [pincodeError, setPincodeError] = useState("");
	const [captchaError, setCaptchaError] = useState("");
	const [modalOpen, setModalOpen] = useState(false);
	const [captchaValid, setCaptchaValid] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [fomshow, setformshow] = useState(false);

	const showform = () => {
		setformshow(!fomshow);
	};

	const generateNumbers = () => {
		setNum1(Math.floor(Math.random() * 10));
		setNum2(Math.floor(Math.random() * 10));
	};

	const resetCaptcha = () => {
		setNum1(Math.floor(Math.random() * 10));
		setNum2(Math.floor(Math.random() * 10));
		setUserAnswer("");
		setCaptchaValid(false); // Clear captcha validation
	};

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
				companyId: "RAJPUT",
				budgetFrom: 0,
				budgetTo: 0,
				vehBrandCode: "",
				vehModelCode: "",
				vehFuel: "",
				loginCompanyID: "ORBIT",
				loginUserId: "VICKY",
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
					responseData.UsedCarVehStockDetail.map((item) => {
						item.uniqueSerial == uniquekey && setStockdata(item);
					});
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`()
					);
				}
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		let formIsValid = true;

		if (mobile.length !== 10) {
			setMobileError("Please enter 10 digit mobile number");
			formIsValid = false;
		} else {
			setMobileError("");
		}

		if (pincode.length !== 6) {
			setPincodeError("Please enter Pincode");
			formIsValid = false;
		} else {
			setPincodeError("");
		}

		if (parseInt(userAnswer) !== num1 + num2) {
			setCaptchaError("Captcha answer is incorrect");
			formIsValid = false;
		} else {
			setCaptchaError("");
			setCaptchaValid(true);
		}

		if (formIsValid && captchaValid) {
			setModalOpen(true);
		}
	};

	const handleImageClick = (image) => {
		setIsModalOpen(image);
	};

	const navigate = useNavigate();

	const reloadPage = () => {
		window.location.reload();
	};

	const HandleDataSave = (e) => {
		e.preventDefault();

		const Datasecond = {
			brandCode: "UC",
			countryCode: "IN",
			companyId: "RAJPUT",
			branchCode: "FBD01",
			prospectLocation: "FBD01",
			title: "",
			entity: "I",
			firstName: contactName,
			middleName: "",
			LastName: "",
			suffix: "",
			regnState: "",
			regnCity: "",
			pincode: pincode,
			email: email,
			contactName: contactName,
			mobile: mobile,
			assembly: "CKD",
			edition: "STD",
			source: "",
			usage: "02",
			refFrom: "10",
			firstAction: "",
			actionDate: "2020-11-10",
			actionComment: "Test",
			campaign: 0,
			dealerCompanyDocket: "0",
			corporateFlag: "N",
			dealType: "OEM_SELECT",
			approveFlag: "N",
			corporateComment: "",
			salesperson: "E20003",
			projectedClosureDate: "2020-11-15",
			hour: "2020-11-10T14:57:54.853Z",
			demoVehModel: "",
			demoVehVariant: "",
			demoVehChassisNo: "",
			make: stockdata.vehBrandCode,
			subModel: stockdata.vehVariantCode,
			model: stockdata.vehModelCode,
			qty: 1,
			color: stockdata.exteriorColor,
			interiorColor: "STD",
			style: "STD",
			my: stockdata.vehManufactureYear,
			vy: stockdata.vehManufactureYear,
			ActiveRate: "HOT",
			userId: "VICKY",
			slotMins: "2020-11-10T14:30:00.853Z",
			slotCount: 1,
			valueString:
				"CUST_JOB_TYPE,SALARIED;PUR_INTENTION,LESS_THAN_2W;COMP_MODELS,AUDIA3;",
			testDriveZone: "GGN",
			teamCode: "A",
			createIP: "180.151.78.50", //ip to be implemented
		};

		fetch(
			"https://mobile.orbitsys.com/OrbitsysSmbApiDemo/Prospect/SaveNewProspect",
			{
				method: "POST",
				headers: {
					ApplicationMode: "ONLINE",
					EnvironmentType: "DEMO",
					BrandCode: "UC",
					CountryCode: "IN",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(Datasecond),
			}
		)
			.then((response) => response.json())
			.then((data) => {
				toast.success(data.result);
				navigate("/");
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	const handleInputChange = (event) => {
		const newValue = event.target.value;
		const numericValue = newValue.replace(/[^0-9]/g, ""); // Remove non-numeric characters

		if (numericValue.length <= 10) {
			setmobile(numericValue);
			setMobileError("");
		}
	};

	const handleInputChange1 = (event) => {
		const newValue1 = event.target.value;
		const numericValue1 = newValue1.replace(/[^0-9]/g, ""); // Remove non-numeric characters

		if (numericValue1.length <= 6) {
			setpincode(numericValue1);
			setMobileError("");
			setPincodeError("");
		}
	};

	const isMobile =
		/iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		);

	let whatsappLink;
	if (isMobile) {
		// Mobile device
		whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
			`Hi Rajput Motors, I want to know more about ${window.location.href}`
		)}`;
	} else {
		// Desktop
		whatsappLink = `https://web.whatsapp.com/send?text=${encodeURIComponent(
			`Hi Rajput Motors, I want to know more about ${window.location.href}`
		)}`;
	}

	return (
		<>
			<PageScrollTop />
			<Navbar />
			<div
				style={{ position: "top" }}
				className='m-listTableTwo'
				data-scrolling-animation='true'
				data-equal-height='.b-tems_cell'>
				<section className='b-pageHeader'>
					<div className='container'>
						<h1 className='wow ' data-wow-delay='0.5s'>
							Vehicle Details
						</h1>
					</div>
				</section>

				<div className='b-breadCumbs s-shadow'>
					<div className='container '>
						<Link to='/' className='b-breadCumbs__page' onClick={reloadPage}>
							Home
						</Link>
						<span className='fa fa-angle-right'></span>
						<a className='b-breadCumbs__page m-active'>Details</a>
					</div>
				</div>
				<div className='carousel-wrapper cor_mn'>
					<Carousel breakPoints={breakPoints}>
						{stockdata.modelImages &&
							stockdata.modelImages.map((item, index) => (
								<div key={item.uniqueSerial}>
									<a
										id='slider_img'
										className='' // Use className instead of class
										href='#'
										data-toggle='modal'
										data-title={item.uri}
										data-target='#image-gallery'>
										<img
											className='card'
											src={item.uri}
											onClick={(e) => {
												setZoom(index);
											}}
											alt='Another alt text'
											style={{ aspectRatio: "4/4" }}
										/>
									</a>
								</div>
							))}
					</Carousel>
				</div>

				<div class=''>
					<div class='row'>
						<div
							class='modal fade bac_bg_clr '
							id='image-gallery'
							tabindex='-1'
							role='dialog'
							aria-labelledby='myModalLabel'
							aria-hidden='true'>
							<div class='modal-dialog modal-lg mdl_wd'>
								<div class='modal-content bdl_cl_non'>
									<div class='modal-header hd_pd2'>
										<h4 class='modal-title' id='image-gallery-title'></h4>
										<button
											type='button'
											class='close cls_btn'
											data-dismiss='modal'>
											<span aria-hidden='true'>×</span>
											<span class='sr-only'>Close</span>
										</button>
									</div>

									<section className='b-slider'>
										<div
											id='carouselExampleFade'
											class='carousel slide carousel-fade'
											data-bs-ride='carousel'>
											<Carousel breakPointss={breakPointss}>
												{stockdata.modelImages &&
													stockdata.modelImages.map((item, i) => (
														<div
															className={"carousel-item active"}
															key={item.uniqueSerial}>
															{zoom != 0 ? (
																<>
																	<img
																		src={[zoom].uri}
																		alt='...'
																		className=''
																	/>
																	<>{setZoom(0)}</>
																</>
															) : (
																<>
																	<img src={item.uri} alt='...' className='' />
																</>
															)}
														</div>
													))}
											</Carousel>
										</div>
									</section>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className='b-detail s-shadow'>
					<div className='container'>
						<div className='b-detail__main bac_clr_mn'>
							<div className=''>
								<div className='col-md-12 col-xs-12'>
									<div className='b-detail__main-info'>
										<div
											className='b-detail__main-info-images wow '
											data-wow-delay='0.5s'>
											<div className='row m-smallPadding'>
												<div className='col-xs-12'>
													<div className=''>
														<h1>
															{stockdata.vehBrandCode}
															<a href={whatsappLink} target='_blank'>
																<i
																	id='whatsup_icon'
																	className='fa fa-whatsapp fa-2x'>
																	{" "}
																</i>
															</a>{" "}
															<p className='wts_tx2'>
																Enquire more on WhatsApp
															</p>
														</h1>
													</div>

													<aside className='b-detail__main-aside'>
														<div
															className='b-detail__main-aside-desc wow '
															data-wow-delay='0.5s'>
															<h2
																className='s-titleDet'
																style={{ marginTop: "40px" }}>
																Description
															</h2>

															<div className='detl_mn'>
																<ul>
																	<li>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Make
																		</h4>
																	</li>
																	<li>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehBrandCode}
																		</p>
																	</li>

																	<li>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Model
																		</h4>
																	</li>
																	<li>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehModelCode}
																		</p>
																	</li>

																	<li>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Model
																		</h4>
																	</li>
																	<li>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehModelCode}
																		</p>
																	</li>

																	<li>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Fuel Code
																		</h4>
																	</li>
																	<li>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehFuelCode}
																		</p>
																	</li>

																	<li>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Variant Code
																		</h4>
																	</li>
																	<li>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehVariantCode}
																		</p>
																	</li>

																	<li>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Variant Description
																		</h4>
																	</li>
																	<li>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehVariantDesc}
																		</p>
																	</li>

																	<li>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Exterior Color
																		</h4>
																	</li>
																	<li>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.exteriorColor}
																		</p>
																	</li>

																	<li>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Prize
																		</h4>
																	</li>
																	<li>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehSellPriceRecommended}
																		</p>
																	</li>

																	<li>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Transmission
																		</h4>
																	</li>
																	<li>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.transmissionDesc}
																		</p>
																	</li>

																	<li>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Kilometres
																		</h4>
																	</li>
																	<li>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehOdometer} KM
																		</p>
																	</li>

																	<li>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Owner Serial No.
																		</h4>
																	</li>
																	<li>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehOwnerSerial}
																		</p>
																	</li>

																	<li>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Manufacture Year
																		</h4>
																	</li>
																	<li>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehManufactureYear}
																		</p>
																	</li>

																	<li>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Registration No.
																		</h4>
																	</li>
																	<li>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.VehRegn1}
																		</p>
																	</li>
																</ul>
															</div>
														</div>
													</aside>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className=''>
									<div className='col-md-12 col-xs-12 en_pdg'>
										<aside className='b-detail__main-aside'>
											<div
												className='b-detail__main-aside-desc wow zoomInUp'
												data-wow-delay='0.5s'>
												<h2 className='s-titleDet'>
													INQUIRE ABOUT THIS VEHICLE
												</h2>
												<div className='b-detail__main-aside-about-call'>
													<span className='fa fa-phone'></span>
													<div> +91 9871888833</div>
													<p>Call the seller 24/7 and they would help you.</p>
												</div>
												<div className='b-detail__main-aside-about-seller dtl_clr1'>
													<p>Seller Info</p>
												</div>
												<div className='b-detail__main-aside-about-form'>
													<div className='b-detail__main-aside-about-form-links'>
														{/* <button class="btn_call form_display" onClick ={showform}>Reserve Now</button>  */}

														<button
															class='btn_call form_display'
															onClick={showform}>
															Reserve Now
														</button>

														<a
															class='btn_wht'
															href='https://api.whatsapp.com/send/?phone=9871888833&text= Hello RAJPUT Gallery+Team%2C+I+would+like+to+know+more&type=phone_number&app_absent=0'
															target='_blank'>
															Whatsapp
														</a>

														<a
															href='#'
															className='j-tab m-active s-lineDownCenter in_siz'
															data-to='#form1'>
															GENERAL INQUIRY
														</a>
													</div>
													{fomshow && (
														<form
															class='form_display'
															id='form1'
															style={{ fontSize: "15px" }}>
															<div class='col-md-6 col-sm-6 col-xs-12'>
																Name <span style={{ color: "red" }}>*</span>
																<input
																	className='phone_number'
																	type='text'
																	placeholder='Please Enter Name'
																	name='contactName'
																	onChange={(e) =>
																		setcontactName(e.target.value)
																	}
																/>
															</div>

															<div class='col-md-6 col-sm-6 col-xs-12'>
																Email <span style={{ color: "red" }}>*</span>
																<input
																	className='phone_number'
																	type='email'
																	placeholder=' Please Enter Email Id'
																	onChange={(e) => setemail(e.target.value)}
																	name='email'
																/>
															</div>

															<div class='col-md-6 col-sm-6 col-xs-12'>
																Mobile No.{" "}
																<span style={{ color: "red" }}>*</span>
																<input
																	className='phone_number'
																	type='text'
																	placeholder='Please Enter Phone No.'
																	name='mobile'
																	value={mobile}
																	onChange={handleInputChange}
																/>
																{mobileError && (
																	<span style={{ color: "red" }}>
																		{mobileError}
																	</span>
																)}
															</div>

															<div class='col-md-6 col-sm-6 col-xs-12'>
																Pincode <span style={{ color: "red" }}>*</span>
																<input
																	className='phone_number'
																	type='text'
																	placeholder=' Please Enter Pincode'
																	name='pincode'
																	value={pincode}
																	onChange={
																		// 	(e) => {
																		// 	setpincode(e.target.value);
																		// 	setPincodeError(""); // Clear the error when the user starts typing
																		// }

																		handleInputChange1
																	}
																/>
																{pincodeError && (
																	<span style={{ color: "red" }}>
																		{pincodeError}
																	</span>
																)}
															</div>

															<form>
																<div class='col-md-6 col-sm-6 col-xs-12'>
																	<span
																		className='d-flex'
																		style={{
																			fontWeight: "600",
																			marginTop: "0",
																			height: "15px",
																			color: "green",
																		}}>
																		<span
																			style={{
																				fontSize: "25px",
																				marginLeft: "5px",
																				marginTop: "20px",
																				color: "red",
																				fontWeight: "800px ",
																			}}>
																			{num1} + {num2} = ?
																		</span>
																		<i
																			style={{
																				marginLeft: "15px",
																				marginTop: "30px",
																				fontSize: "19px",
																			}}
																			onClick={resetCaptcha}
																			class='fa fa-refresh fa-2x'
																			aria-hidden='true'></i>
																	</span>
																</div>

																<label
																	style={{
																		color: "black",
																		marginTop: "10px",
																	}}></label>
																<div class='col-md-6 col-sm-6 col-xs-12'>
																	<div
																		className=''
																		style={{ marginTop: "-30px" }}>
																		Captcha{" "}
																		<span style={{ color: "red" }}>*</span>
																		<input
																			className='phone_number'
																			placeholder='Please Enter Captcha'
																			type='number'
																			value={userAnswer}
																			onChange={(event) =>
																				setUserAnswer(event.target.value)
																			}></input>
																	</div>
																</div>
															</form>

															{captchaValid && (
																<span style={{ color: "red" }}>
																	{captchaValid}
																</span>
															)}
															<button
																id='inq_btn'
																style={{
																	backgroundColor: "#c1272d Color:#fff",
																}}
																type='button'
																data-toggle='modal'
																onClick={handleSubmit}
																href='#ignismyModal'
																className='btn m-btn'>
																RAISE ENQUIRY
																<span
																	id='arrowiconbtn'
																	className='fa fa-ticket fa-5x'></span>
															</button>
															{/* popup message */}
															{!mobileError && captchaValid && (
																<div className=''>
																	<div className='row'>
																		<div
																			className='modal fade'
																			id='ignismyModal'
																			role='dialog'>
																			<div
																				className='modal-dialog mod_top_spc'
																				style={{ margingTop: "90px" }}>
																				<div className='modal-content'>
																					<div className='modal-header mdl_hd'>
																						<button
																							type='button'
																							className='close cls_btn'
																							data-dismiss='modal'
																							aria-label=''>
																							<span>×</span>
																						</button>
																						<hr />
																					</div>

																					<div className='modal-body'>
																						<div className='thank-you-pop'>
																							<img
																								style={{
																									width: "50px",
																									marginLeft: "200px",
																								}}
																								src='http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png'
																								alt=''
																							/>
																							<h4
																								style={{
																									marginTop: "10px",
																									marginLeft: "150px",
																								}}>
																								Are you sure to raise enquiry?
																							</h4>
																							<p></p>
																							<div className='d-flex flx_mn_btn '>
																								<button
																									onClick={HandleDataSave}
																									style={{
																										backgroundColor: " green",
																										width: "60px",
																										color: "white",
																										fontSize: "15px",
																										margin: "5px",
																									}}
																									type='submit'
																									className='btn'
																									data-dismiss='modal'>
																									Yes
																								</button>

																								<button
																									style={{
																										backgroundColor: "#c1272d",
																										width: "60px",
																										color: "white",
																										fontSize: "15px",
																										margin: "5px",
																									}}
																									type='button'
																									className='close no_btn'
																									data-dismiss='modal'
																									aria-label=''>
																									No
																								</button>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															)}
														</form>
													)}
												</div>
											</div>
										</aside>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
}
export default Details;
