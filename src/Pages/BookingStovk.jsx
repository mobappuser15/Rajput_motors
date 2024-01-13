import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Chip, Stack } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import "./admin.css";
import "./table.css";
import ReactLoading from "react-loading";
import Table from "react-bootstrap/Table";
import DataUpload from "./DataUpload";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const BookingStovk = ({
	detailspage,
	setDetailspage,
	company,
	username,
	uniquekey,
}) => {
	const [dataapi, setdataapi] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [uploadData, setuploaddata] = useState(null);
	const [currentpage, setCurrentPage] = useState(1);

	const itemsperpage = 15;
	const totalItems = dataapi.length;
	const totalPage = Math.ceil(totalItems / itemsperpage);

	const onPageChange = (page) => {
		setCurrentPage(page);
	};
	const [searchTerm, setSearchTerm] = useState("");
	const Startindex = (currentpage - 1) * itemsperpage;
	const EndIndex = Startindex + itemsperpage;
	var currentData = dataapi.slice(Startindex, EndIndex);

	useEffect(() => {
		const fetchData = async () => {
			const url =
				"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarLeadsByStatus";
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
				branchCode: "FBD01",
				dataGroup: "STOCK",
				dataType: "VEH_ORDER",
				dataPeriodType: "TODAY",
				dateFrom: "2023-09-19T00:00:00",
				dateTo: "2023-09-19T00:00:00",
				loginCompanyId: "RAJPUT",
				loginCompanyAccessProfile: "DEALER_RETAIL",
				loginEmpHierarchialGroup: "L0",
				loginEmpCode: "E10001",
				loginJobTypeCode: "MGT",
				loginUserId: "VICKY",
				loginIpAddress: "7C:46:85:53:E2:33",
			};

			try {
				const response = await fetch(url, {
					method: "POST",
					headers: headers,
					body: JSON.stringify(data),
				});

				if (response.ok) {
					const responseData = await response.json();
					setdataapi(responseData.usedCarLeads);
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`()
					);
				}
			} catch (error) {
				// console.error("Error:", error);
			}
		};

		fetchData();
	}, []);

	const navigate = useNavigate();

	useEffect(() => {
		// Define the URL, headers, and parameters
		const apiUrl =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarDocModule";
		const headers = {
			ApplicationMode: "ONLINE",
			EnvironmentType: "DEMO",
			BrandCode: "UC",
			CountryCode: "IN",
			loginCompanyId: "RAJPUT",
			loginUserId: "Manish",
			loginIpAddress: "7C:46:85:53:E2:33",
		};
		const queryParams = {
			uniqueSerial: uniquekey,
			docModule: "UC",
		};

		// Create an array of URLSearchParams from the queryParams object
		const searchParams = new URLSearchParams(queryParams);

		// Construct the final URL by appending the query parameters
		const finalUrl = `${apiUrl}?${searchParams.toString()}`;

		// Make the API call using fetch
		fetch(finalUrl, {
			method: "GET",
			headers: headers,
		})
			.then((response) => response.json())
			.then((data) => {
				// Add default values to handle missing properties
				// const { yourExpectedProperty = defaultValue } = data;
				setuploaddata(data.UsedCarDocSubModules);
				// setSelectedProduct(data.UniqueSerial);
			})
			.catch((error) => console.error("Error:", error));
	}, []);


	const singleProducthandle = (uniqueSerial) => {
		const product = dataapi.find(
			(itemdata) => itemdata.uniqueSerial === uniqueSerial
		);
		setSelectedProduct(product);
		setuploaddata(product.uniqueSerial);
		// navigate("/bookingform");
		navigate(`/bookingform?uniqueSerial=${product.uniqueSerial}`);
	};

	const singleProducthandle1 = (uniqueSerial, vehOdometer) => {
		const product = dataapi.find(
			(itemdata) => itemdata.uniqueSerial === uniqueSerial,
			(itemdata) => itemdata.vehOdometer === vehOdometer
		);
		setSelectedProduct(product);
		// setUniquekey(product.uniqueSerial);/
		// setuploaddata(product.uniqueSerial);
		// setselectkmsvalue(product.vehOdometer);
		navigate(
			`/dataupload?uniquekey=${product.uniqueSerial}&vehOdometer=${product.vehOdometer}`
		);
		ImageuploadBack();
	};
	const ImageuploadBack = async () => {
		// e.preventDefault();

		try {
			const priceData = {
				brandCode: "UC",
				countryCode: "IN",
				companyId: "RAJPUT",
				uniqueSerial: "uniqueSerial",
				priceSerial: 0,
				jobTypeCode: "",
				closureType: "I",
				closureContractType: "",
				vehEvaluatedTradeInPrice: "0",
				vehRefurbishmentCost: "0",
				vehLandedValueToUs: "0",
				vehCustomerExpectedPrice: "0",
				vehOurOfferToCustomer: "0",
				vehInsuValue: "0",
				vehChallanValue: "0",
				vehHypValue: "0",
				vehEstimateResaleValue: "0",
				vehReadyByDateTime: "",
				amountOem: "0",
				amountDealer: "price",
				closureReasonCode: "",
				closureTPAgency: "",
				closureComment: "",
				loginUserId: "MANISH",
				loginCompanyID: "RAJPUT",
				loginIpAddress: "7C:46:85:53:E2:33",
			};

			const response = await fetch(
				"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/SaveVehPriceData",
				{
					method: "POST",
					headers: {
						ApplicationMode: "ONLINE",
						EnvironmentType: "DEMO",
						BrandCode: "UC",
						CountryCode: "IN",
						"Content-Type": "application/json",
					},
					body: JSON.stringify(priceData),
				}
			);

			const dataResult = await response.json();

			if (response.ok) {
			} else {
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const formatDate = (inputDate) => {
		const monthNames = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];

		const date = new Date(inputDate);
		const day = date.getDate();
		const monthIndex = date.getMonth();
		const year = date.getFullYear().toString().slice(-2);

		const formattedDay = day < 10 ? `0${day}` : day;

		const formattedMonth = monthNames[monthIndex];

		return `${formattedDay}-${formattedMonth}-${year}`;
	};

	const filteredData1 = dataapi.filter((itemdata) => {
		for (const key in itemdata) {
			if (itemdata.hasOwnProperty(key) && typeof itemdata[key] === "string") {
				if (itemdata[key].toLowerCase().includes(searchTerm.toLowerCase())) {
					return true;
				}
			}
		}
		return false;
	});


	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const singleProducthandle2 = (uniqueSerial, vehOdometer) => {
		const product = dataapi.find(
			(item) => item.uniqueSerial === uniqueSerial,
			(item) => item.vehOdometer === vehOdometer
		);

		localStorage.setItem("cardetails", JSON.stringify(product));

		setSelectedProduct(product);
		navigate(
			`/editdata?uniquekey=${product.uniqueSerial}&vehOdometer=${product.vehOdometer}`
		);
	};

	return (
		<div className='hedr_mb_wo'>
			<div className=' col-xl-12 bg-dark' id='header'>
				<div className='row row-cols-md-2 m-2 p-4 row-cols-lg-2 row-cols-xl-2 font-weight-bold'>
					<Link style={{ color: "white", marginLeft: "-20px" }} to='/admin'>
						<ArrowBackIcon style={{ fontSize: "20px" }} />
						<span
							className=' text-left text-light '
							style={{ marginLeft: "10px" }}>
							Vehicle Booking{" "}
						</span>
					</Link>{" "}
					<span
						id='booking-count'
						className=' text-left text-right '
						style={{ color: "white" }}>
						{totalItems}{" "}
						<ReactHTMLTableToExcel
							id='test-table-xls-button'
							className='export btn '
							table='table-to-xls4'
							filename='tablexls'
							sheet='tablexls'
							buttonText={
								<>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='25'
										height='25'
										fill='green'
										class='bi bi-arrow-down-circle-fill'
										viewBox='0 0 16 16'>
										<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z' />
									</svg>
								</>
							}
						/>{" "}
					</span>
				</div>
			</div>

			<div class='search_mn'>
				<div class='container'>
					<div class='row'>
						<div class='search-text'>
							<div class=' text-center'>
								<div class='form'>
									<form id='search-form' class='form-search form-horizontal'>
										<input
											type='text'
											class='input-search'
											value={searchTerm}
											onChange={handleSearchChange}
											placeholder='Search'></input>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='wid_fixd'>
				<>
					<>
						<br></br>
						<div className='tableFixHead'>
							<table id='table-to-xls4'>
								<thead>
									<tr>
										<th style={{ width: "" }}>Lead Id</th>

										<th style={{ width: "" }}>Name</th>

										<th style={{ width: "" }}> Brand</th>

										<th style={{ width: "" }}>Model</th>

										<th style={{ width: "" }}>Variant</th>
										<th style={{ width: "" }}>Color</th>
										<th style={{ width: "" }}>Odometer</th>
										<th style={{ width: "" }}>MF. Year</th>

										<th style={{ width: "" }}>Insurance Date</th>

										<th style={{ width: "" }}>Registration No.</th>

										<th style={{ width: "" }}>Created Date</th>
										<th>Image Upload</th>

										<th style={{ border: "none" }}>Edit</th>
									</tr>
								</thead>

								<tbody>
									{filteredData1.length === 0 ? (
										<tr>
											<td colSpan='13'>
												<div style={{ marginLeft: "600px", marginTop: "10px" }}>
													<div className='loader hidden-xs'>
														<ReactLoading
															type='spin'
															color='#c1272d'
															height={200}
															width={100}
														/>
													</div>
												</div>
											</td>
										</tr>
									) : (
										filteredData1.map((itemdata) => (
											<tr key={itemdata.vehOwnerSerial}>
												<td
													onClick={() =>
														singleProducthandle(itemdata.uniqueSerial)
													}>
													<Link style={{ color: "red" }}>
														{itemdata.uniqueSerial}
													</Link>
												</td>

												<td
													onClick={() =>
														singleProducthandle(itemdata.uniqueSerial)
													}>
													{itemdata.vehOwnerName}
												</td>

												<td
													onClick={() =>
														singleProducthandle(itemdata.uniqueSerial)
													}>
													{itemdata.vehBrand.description}
												</td>

												<td
													onClick={() =>
														singleProducthandle(itemdata.uniqueSerial)
													}>
													{itemdata.vehModel
														? itemdata.vehModel.description
														: ""}
												</td>

												<td
													onClick={() =>
														singleProducthandle(itemdata.uniqueSerial)
													}>
													{itemdata.vehVariant
														? itemdata.vehVariant.description
														: ""}
												</td>

												<td
													onClick={() =>
														singleProducthandle(itemdata.uniqueSerial)
													}>
													{itemdata.vehExteriorColor
														? itemdata.vehExteriorColor.description
														: ""}
												</td>

												<td
													onClick={() =>
														singleProducthandle(itemdata.uniqueSerial)
													}>
													{itemdata.vehOdometer}
												</td>

												<td
													onClick={() =>
														singleProducthandle(itemdata.uniqueSerial)
													}>
													{itemdata.vehManufactureYear.description}
												</td>

												<td
													onClick={() =>
														singleProducthandle(itemdata.uniqueSerial)
													}>
													{itemdata.insuranceDatetime &&
														formatDate(itemdata.insuranceDatetime)}
												</td>
												<td
													onClick={() =>
														singleProducthandle(itemdata.uniqueSerial)
													}>
													{itemdata.vehRegnNo}
												</td>

												<td
													onClick={() =>
														singleProducthandle(itemdata.uniqueSerial)
													}>
													{itemdata.createDate &&
														formatDate(itemdata.createDate)}
												</td>

												<td>
													<button
														style={{
															border: "none",
															borderRadius: "10px",
															backgroundColor: "green",
														}}>
														<UploadIcon
															style={{
																color: "white",
															}}
															onClick={() =>
																singleProducthandle1(itemdata.uniqueSerial)
															}
														/>
													</button>
												</td>
												<td
													onClick={() =>
														singleProducthandle2(itemdata.uniqueSerial)
													}>
													<EditIcon />
												</td>
											</tr>
										))
									)}
								</tbody>
							</table>
						</div>
					</>
				</>
			</div>
		</div>
	);
};

export default BookingStovk;
