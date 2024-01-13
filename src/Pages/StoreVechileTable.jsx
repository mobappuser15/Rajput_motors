import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chip, Stack } from "@mui/material";
import ReactLoading from "react-loading";
import "./admin.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Table from "react-bootstrap/Table";
import DataUpload from "./DataUpload";
import { useNavigate } from "react-router-dom";
import styled from "./../Components/Item";
const StoreVechileTable = ({
	detailspage,
	setDetailspage,
	company,
	username,
}) => {
	const [dataapi, setdataapi] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [uploadData, setuploaddata] = useState(null);
	const [uniquekey, setUniquekey] = useState();
	const [selectkmsvalue, setselectkmsvalue] = useState();
	const [textBox1Value, setTextBox1Value] = useState("");
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

	// Handler for the first text box onChange event
	const handleTextBox1Change = (event) => {
		const value = event.target.value;
		setTextBox1Value(value);
	};

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
				dataType: "VEH_IMG_UPLOAD",
				dataPeriodType: "TODAY",
				dateFrom: "2023-09-14T00:00:00",
				dateTo: "2023-09-14T00:00:00",
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
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);

	const navigate = useNavigate();

	const singleProducthandle = (uniqueSerial, vehOdometer) => {
		const product = dataapi.find(
			(itemdata) => itemdata.uniqueSerial === uniqueSerial,
			(itemdata) => itemdata.vehOdometer === vehOdometer
		);
		setSelectedProduct(product);
		setUniquekey(product.uniqueSerial);
		setuploaddata(product.uniqueSerial);
		setselectkmsvalue(product.vehOdometer);
		navigate(
			`/dataupload?uniquekey=${product.uniqueSerial}&vehOdometer=${product.vehOdometer}`
		);
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
			itemdata.uniqueSerial
				.toString()
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			itemdata.branchName.toLowerCase().includes(searchTerm.toLowerCase()) ||
			itemdata.vehBrand.description
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			itemdata.vehModel.description
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			itemdata.vehExteriorColor.description
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			itemdata.vehOwnerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
			itemdata.vehOdometer.toString().includes(searchTerm)
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
							Stock Dtails
						</span>
					</Link>{" "}
					<span
						id='booking-count'
						className=' text-left text-right '
						style={{ color: "white" }}>
						Total Stock No: {totalItems}{" "}
						<ReactHTMLTableToExcel
							id='test-table-xls-button'
							className='export btn '
							table='table-to-xls5'
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
											class='bi bi-search input-search'
											value={searchTerm}
											onChange={handleSearchChange}
											placeholder='Search...'></input>
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
							<table id='table-to-xls5' className=''>
								<thead className='thead_byer'>
									<tr>
										<th class='' style={{ width: "" }}>
											Lead Id
										</th>

										<th class='' style={{ width: "" }}>
											Branch
										</th>

										<th class='' style={{ width: "" }}>
											{" "}
											Name
										</th>

										<th class='' style={{ width: "" }}>
											Company
										</th>

										<th class='' style={{ width: "" }}>
											Brand
										</th>
										<th class='' style={{ width: "" }}>
											Model
										</th>
										<th class='' style={{ width: "" }}>
											Variant
										</th>
										<th class='' style={{ width: "" }}>
											Color
										</th>

										<th class='' style={{ width: "" }}>
											Email
										</th>

										<th class='' style={{ width: "" }}>
											Odometer
										</th>

										<th class='' style={{ width: "" }}>
											MF. Year
										</th>

										<th class='' style={{ width: "" }}>
											Phone No.
										</th>

										<th class='' style={{ border: "none", width: "" }}>
											Created Date
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
												<tr
													key={itemdata.vehOwnerSerial}
													onClick={() =>
														singleProducthandle(itemdata.uniqueSerial)
													}>
													<td class='' style={{ width: "" }}>
														<Link style={{ color: "red" }}>
															{itemdata.uniqueSerial}
														</Link>
													</td>

													<td class='' style={{ width: "" }}>
														{itemdata.branchName}
													</td>

													<td class='' style={{ width: "" }}>
														{itemdata.vehOwnerName}
													</td>

													<td class='' style={{ width: "" }}>
														{itemdata.dlrCompanyId}
													</td>

													{/* <td class='' style={{ width: "" }}>
														{itemdata.vehBrand.description}
													</td> */}

													<td class='' style={{ width: "" }}>
														{itemdata.vehBrand
															? itemdata.vehBrand.description
															: ""}
													</td>

													{/* <td class='' style={{ width: "" }}>
														{itemdata.vehModel.description}
													</td> */}

													<td class='' style={{ width: "" }}>
														{itemdata.vehModel
															? itemdata.vehModel.description
															: ""}
													</td>

													<td class='' style={{ width: "" }}>
														{itemdata.vehVariant
															? itemdata.vehVariant.description
															: ""}
													</td>
													<td class='' style={{ width: "" }}>
														{itemdata.vehExteriorColor
															? itemdata.vehExteriorColor.description
															: ""}
													</td>

													<td class='' style={{ width: "" }}>
														{itemdata.vehOwnerEmail}
													</td>

													<td class='' style={{ width: "" }}>
														{itemdata.vehOdometer}
													</td>

													<td class='' style={{ width: "" }}>
														{itemdata.vehManufactureYear.description}
													</td>

													<td class='' style={{ width: "" }}>
														{itemdata.vehOwnerMobile}
													</td>

													<td class='' style={{ width: "" }}>
														{itemdata.createDate &&
															formatDate(itemdata.createDate)}
													</td>
												</tr>
											))}
										</>
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

export default StoreVechileTable;
