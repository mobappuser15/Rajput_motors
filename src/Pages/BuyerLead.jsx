import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chip, Stack } from "@mui/material";
import "./admin.css";
import "./table.css";
import ReactLoading from "react-loading";
import Table from "react-bootstrap/Table";
import DataUpload from "./DataUpload";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useNavigate } from "react-router-dom";

const BuyerLead = ({
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
	const [searchTerm, setSearchTerm] = useState("");

	const itemsperpage = 15;
	const totalItems = dataapi.length;
	const totalPage = Math.ceil(totalItems / itemsperpage);

	const onPageChange = (page) => {
		setCurrentPage(page);
	};

	const Startindex = (currentpage - 1) * itemsperpage;
	const EndIndex = Startindex + itemsperpage;
	var currentData = dataapi.slice(Startindex, EndIndex);

	const currentDate = new Date();

	const formattedCurrentDate = `${currentDate.getFullYear()}-${String(
		currentDate.getMonth() + 1
	).padStart(2, "0")}-${String(currentDate.getDate()).padStart(
		2,
		"0"
	)}T${String(currentDate.getHours()).padStart(2, "0")}:${String(
		currentDate.getMinutes()
	).padStart(2, "0")}:${String(currentDate.getSeconds()).padStart(2, "0")}`;

	// console.log(formattedCurrentDate);

	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarBuyerLeads";
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
			vehMake: "ALL_BRANDS",
			vehModels: "ALL_MODELS",
			prospectStatus: "ACTIVE_PROSPECT",
			dateFrom: "2001-01-01T00:00:00",
			dateTo: formattedCurrentDate,
			loginCompanyId: "RAJPUT",
			loginCompanyAccessProfile: "DEALER_RETAIL",
			loginEmpHierarchialGroup: "L0",
			loginEmpCode: "E10001",
			loginJobTypeCode: "MGT",
			loginUserId: "VICKY",
			loginIpAddress: "7C:46:85:53:E2:33",
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
				const generalList = jsonData?.UsedCarBuyerLeads;
				setdataapi(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	},[]);

	// console.log(dataapi, "respo data list lead status api dele");
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
			loginUserId: "VICKY",
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

	// console.log(dataapi, "buyer lead sdfh");

	const singleProducthandle = (uniqueSerial) => {
		const product = dataapi.find(
			(itemdata) => itemdata.uniqueSerial === uniqueSerial
		);
		setSelectedProduct(product);
		setuploaddata(product.uniqueSerial);
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

		// Pad the day with a leading zero if needed
		const formattedDay = day < 10 ? `0${day}` : day;

		// Get the month name from the array
		const formattedMonth = monthNames[monthIndex];

		return `${formattedDay}-${formattedMonth}-${year}`;
	};

	const filteredData = dataapi.filter((itemdata) => {
		return (
			(itemdata.prospectNo &&
				itemdata.prospectNo
					.toString()
					.toLowerCase()
					.includes(searchTerm.toLowerCase())) ||
			itemdata.prospectLocation
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			itemdata.mobileNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
			itemdata.custFirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
			itemdata.vehMake.description
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			(itemdata.vehModel &&
				itemdata.vehModel.description
					.toLowerCase()
					.includes(searchTerm.toLowerCase())) ||
			(itemdata.vehVariant &&
				itemdata.vehVariant.description
					.toLowerCase()
					.includes(searchTerm.toLowerCase())) ||
			(itemdata.vehExteriorColor &&
				itemdata.vehExteriorColor.description
					.toLowerCase()
					.includes(searchTerm.toLowerCase())) ||
			(itemdata.openedOn &&
				formatDate(itemdata.openedOn)
					.toLowerCase()
					.includes(searchTerm.toLowerCase())) ||
			(itemdata.projectedClosureDate &&
				formatDate(itemdata.projectedClosureDate)
					.toLowerCase()
					.includes(searchTerm.toLowerCase()))
		);
	});
	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className=' hedr_mb_wo'>
			<div className=' col-xl-12 bg-dark' id='header'>
				<div className='row row-cols-md-2 m-2 p-4 row-cols-lg-2 row-cols-xl-2 font-weight-bold'>
					<Link style={{ color: "white", marginLeft: "-20px" }} to='/admin'>
						<span
							className=' text-left text-light '
							style={{ marginLeft: "10px" }}>
							Buyer Leads
						</span>
					</Link>{" "}
					<span
						id='booking-count'
						className=' text-left text-right '
						style={{ color: "white" }}>
						Total Buyer Leads: {totalItems}{" "}
						<ReactHTMLTableToExcel
							id='test-table-xls-button'
							className='export btn '
							table='table-to-xls2'
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
						<div>
							<br></br>
							<div className='tableFixHead'>
								<table id='table-to-xls2' className=''>
									<thead className=''>
										<tr>
											<th className='' style={{ width: "" }}>
												Lead Id
											</th>

											<th className=''  style={{ width: "" }}>
												Branch
											</th>

											<th className='' style={{ width: "" }}>
												{" "}
												Phone No.
											</th>

											<th className='' style={{ width: "" }}>
												{" "}
												Name
											</th>

											<th className='' style={{ width: "" }}>
												{" "}
												Brand
											</th>

											<th className='' style={{ width: "" }}>
												{" "}
												Model
											</th>
											<th className='' style={{ width: "" }}>
												{" "}
												Variant
											</th>
											<th className='' style={{ width: "" }}>
												{" "}
												Color
											</th>

											<th className='' style={{ width: "" }}>
												{" "}
												Created Date
											</th>

											<th className='' style={{ width: "" }}>
												Close Date
											</th>
										</tr>
									</thead>

									<tbody>
										{filteredData.length === 0 ? (
											<>
												<div className='tex_nodata '>
										No Lead Found
									</div>
											</>
										) : (
											<>
												{filteredData.map((itemdata) => (
													<tr key={itemdata.vehOwnerSerial} className=''>
														<td className='' style={{ width: "" }}>
															{itemdata.prospectNo}
														</td>

														<td className='' style={{ width: "" }}>
															{itemdata.prospectLocation}
														</td>

														<td className=''  style={{ width: "" }}>
															{itemdata.mobileNo}
														</td>

														<td className='' style={{ width: "" }}>
															{itemdata.custFirstName}
														</td>

														<td className='' style={{ width: "" }}>
															{itemdata.vehMake.description}
														</td>

														<td
															className=''
															onClick={() =>
																singleProducthandle(itemdata.uniqueSerial)
															}
															style={{ width: "" }}>
															{itemdata.vehModel
																? itemdata.vehModel.description
																: ""}
														</td>

														<td
															className=''
															onClick={() =>
																singleProducthandle(itemdata.uniqueSerial)
															}
															style={{ width: "" }}>
															{itemdata.vehVariant
																? itemdata.vehVariant.description
																: ""}
														</td>

														<td
															className=''
															onClick={() =>
																singleProducthandle(itemdata.uniqueSerial)
															}
															style={{ width: "" }}>
															{itemdata.vehExteriorColor
																? itemdata.vehExteriorColor.description
																: ""}
														</td>

														<td className='' style={{ width: "" }}>
															{itemdata.openedOn &&
																formatDate(itemdata.openedOn)}
														</td>

														<td className='' style={{ width: "" }}>
															{itemdata.projectedClosureDate &&
																formatDate(itemdata.projectedClosureDate)}
														</td>
													</tr>
												))}
											</>
										)}
									</tbody>
								</table>
							</div>
						</div>
					</>
				</>
			</div>
		</div>
	);
};

export default BuyerLead;
