import React, { useState, useEffect } from "react";
import CarLoan from "./CarLoan";
import Gellery from "./Gellery";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./detail.css";
import PageScrollTop from "./PageScrollTop";
import toast from "react-hot-toast";
import ReactLoading from "react-loading";
import { useLocation } from "react-router-dom";
import Details from "./Details";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Socalmedia from "./Socalmedia";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 4 },
	{ width: 1200, itemsToShow: 4 },
];

const breakPoints3 = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 4 },
	{ width: 1200, itemsToShow: 4 },
];

const breakPoints2 = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 1, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 2 },
	{ width: 1200, itemsToShow: 2 },
];

export default function HomePage() {
	const [detailspage, setDetailspage] = useState(false);
	const [stockdata, setStockdata] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [result, setResult] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [makedatarequest, setMake] = useState([]);
	const [inputvalue, setInputvalue] = useState("");
	const [selectedValue, setSelectedValue] = useState(null);
	const [searchResults, setSearchResults] = useState([]);
	const [demo, setDemo] = useState([]);
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
	const [codemodel, setcodemodel] = useState("");
	const [codemake, setcodemake] = useState("");
	const [codevarient, setvarientdata] = useState([]);
	const [minRange, setMinRange] = useState("");
	const [maxRange, setMaxRange] = useState("");
	const [selectedMake, setSelectedMake] = useState("");
	const [selectedModel, setSelectedModel] = useState("");
	const [selectedVariant, setSelectedVariant] = useState("");
	const [showdata, setShowdata] = useState(false);
	const [methu, setMethu] = useState([]);
	var [homepage, setHomepage] = useState(false);
	const handleHomeClick = () => {
		setDetailspage(false);
	};

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
			companyId: "RAJPUT",
			calledBy: "MAKE",
			loginUserId: "VICKY",
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
			companyId: "RAJPUT",
			calledBy: "MODEL",
			vehMake: codemodel,

			loginUserId: "VICKY",
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
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemodel]);


	const handleSelectChange = (event) => {
		setSelectedItem(event.target.value);
		setcodemodel(event.target.value);
	};
	const handleSelectChange3 = (event) => {
		setSelectmodel(event.target.value);
		setcodemodel(event.target.value);
		setcodemake(event.target.value);
	};

	const handleSelectChangeminprize = (event) => {
		setMinRange(event.target.value);
	};

	const handleSelectChangemaxnprize = (event) => {
		setMaxRange(event.target.value);
	};

	const navigate = useNavigate();

	// stock details

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
					setStockdata(responseData?.UsedCarVehStockDetail);
					setMethu(responseData?.UsedCarVehStockDetail);
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
	

	let { paramData } = useParams();

	const singleProducthandle = (uniqueSerial, vehOdometer) => {
		const product = stockdata.find(
			(item) => item.uniqueSerial === uniqueSerial,
			(item) => item.vehOdometer === vehOdometer
		);

		navigate(
			`/detailsparticular/${product.uniqueSerial}/${product.vehOdometer}`
		);
		setSelectedProduct(product);
		setDetailspage((prevDetailspage) => !prevDetailspage);
	};

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
			budgetFrom: minRange,
			budgetTo: maxRange,
			vehBrandCode: selectedItem,
			vehModelCode: selectmodel,
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const filterDataCars = (e) => {
		e.preventDefault();
		fetchData();
		// setSearchResults();
		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};

	const reSet = () => {

		setDemo(stockdata);
	};

	

	const reloadPage = () => {
		window.location.reload(false);
		// toast.success("meaage");
	};

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			navigate("/");
		}
	}, []);

	const Amountdatamax = [
		{
			id: 100000,
			img: " 1 Lac",
		},
		{
			id: 500000,
			img: " 5 Lac",
		},
		{
			id: 1000000,
			img: " 10 Lac",
		},
		{
			id: 1100000,
			img: " 11 Lac",
		},

		{
			id: 1500000,
			img: "15 Lac",
		},

		{
			id: 2000000,
			img: " 20 Lac",
		},

		{
			id: 2500000,
			img: "25 Lac",
		},

		{
			id: 3000000,
			img: "30 Lac",
		},
		{
			id: 4000000,
			img: "40  Lac",
		},

		{
			id: 5000000,
			img: "50 Lac",
		},

		{
			id: 6000000,
			img: "60  Lac",
		},
		{
			id: 7000000,
			img: "70 Lac",
		},
	];
	const Amountdatamin = [
		{
			id: 100000,
			img: " 1 Lac",
		},
		{
			id: 500000,
			img: " 5 Lac",
		},
		{
			id: 1000000,
			img: " 10 Lac",
		},
		{
			id: 1100000,
			img: " 11 Lac",
		},

		{
			id: 1500000,
			img: "15 Lac",
		},

		{
			id: 2000000,
			img: " 20 Lac",
		},

		{
			id: 2500000,
			img: "25 Lac",
		},

		{
			id: 3000000,
			img: "30 Lac",
		},
		{
			id: 4000000,
			img: "40  Lac",
		},

		{
			id: 5000000,
			img: "50 Lac",
		},

		{
			id: 6000000,
			img: "60  Lac",
		},
		{
			id: 7000000,
			img: "70 Lac",
		},
	];
	const reset = () => {
		setShowdata(false);
		setSelectedItem("");
		setSelectmodel("");
		setMinRange("");
		setMaxRange("");
		setStockdata(methu);
	};

	const fetchData1 = async () => {
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
			budgetFrom: "",
			budgetTo: "",
			vehBrandCode: "HYUNDAI",
			vehModelCode: "",
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};
	const fetchData2 = async () => {
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
			budgetFrom: "",
			budgetTo: "",
			vehBrandCode: "MARUTI",

			vehModelCode: "",
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const fetchData3 = async () => {
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
			budgetFrom: "",
			budgetTo: "",
			vehBrandCode: "HONDA",
			vehModelCode: "",
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const fetchData4 = async () => {
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
			budgetFrom: "",
			budgetTo: "",
			vehBrandCode: "TATA",
			vehModelCode: "",
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const fetchData5 = async () => {
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
			budgetFrom: "",
			budgetTo: "",
			vehBrandCode: "MAHINDRA",
			vehModelCode: "",
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const fetchData6 = async () => {
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
			budgetFrom: minRange,
			budgetTo: maxRange,
			vehBrandCode: "RENAULT",
			vehModelCode: selectmodel,
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const fetchData7 = async () => {
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
			budgetFrom: minRange,
			budgetTo: maxRange,
			vehBrandCode: "TOYOTA",
			vehModelCode: selectmodel,
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const fetchData8 = async () => {
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
			budgetFrom: minRange,
			budgetTo: maxRange,
			vehBrandCode: "FORD",
			vehModelCode: selectmodel,
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const fetchData9 = async () => {
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
			budgetFrom: minRange,
			budgetTo: maxRange,
			vehBrandCode: "KIA",
			vehModelCode: selectmodel,
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const fetchData10 = async () => {
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
			budgetFrom: minRange,
			budgetTo: maxRange,
			vehBrandCode: "NISSAN",
			vehModelCode: selectmodel,
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const fetchData11 = async () => {
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
			budgetFrom: minRange,
			budgetTo: maxRange,
			vehBrandCode: "MG",
			vehModelCode: selectmodel,
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const fetchData12 = async () => {
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
			budgetFrom: minRange,
			budgetTo: maxRange,
			vehBrandCode: "MERC",
			vehModelCode: selectmodel,
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};
	const fetchData13 = async () => {
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
			budgetFrom: minRange,
			budgetTo: maxRange,
			vehBrandCode: "AUDI",
			vehModelCode: selectmodel,
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};
	const fetchData14 = async () => {
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
			budgetFrom: minRange,
			budgetTo: maxRange,
			vehBrandCode: "BMW",
			vehModelCode: selectmodel,
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};
	const fetchData15 = async () => {
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
			budgetFrom: minRange,
			budgetTo: maxRange,
			vehBrandCode: "VOLVO",
			vehModelCode: selectmodel,
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const fetchData18 = async () => {
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
			budgetFrom: minRange,
			budgetTo: maxRange,
			vehBrandCode: "VW",
			vehModelCode: selectmodel,
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const filterDataCars18 = (e) => {
		e.preventDefault();
		fetchData18();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};
	const filterDataCars1 = (e) => {
		e.preventDefault();
		fetchData1();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};
	const filterDataCars2 = (e) => {
		e.preventDefault();
		fetchData2();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};
	const filterDataCars3 = (e) => {
		e.preventDefault();
		fetchData3();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};
	const filterDataCars4 = (e) => {
		e.preventDefault();
		fetchData4();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};
	const filterDataCars5 = (e) => {
		e.preventDefault();
		fetchData5();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};
	const filterDataCars6 = (e) => {
		e.preventDefault();
		fetchData6();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};
	const filterDataCars7 = (e) => {
		e.preventDefault();
		fetchData7();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};

	const filterDataCars8 = (e) => {
		e.preventDefault();
		fetchData8();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};

	const filterDataCars9 = (e) => {
		e.preventDefault();
		fetchData9();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};

	const filterDataCars10 = (e) => {
		e.preventDefault();
		fetchData10();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};

	const filterDataCars11 = (e) => {
		e.preventDefault();
		fetchData11();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};

	const filterDataCars12 = (e) => {
		e.preventDefault();
		fetchData12();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};

	const filterDataCars13 = (e) => {
		e.preventDefault();
		fetchData13();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};

	const filterDataCars14 = (e) => {
		e.preventDefault();
		fetchData14();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};

	const filterDataCars15 = (e) => {
		e.preventDefault();
		fetchData15();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};

	const fetchData16 = async () => {
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
			budgetFrom: minRange,
			budgetTo: maxRange,
			vehBrandCode: "VW",
			vehModelCode: selectmodel,
			vehFuel: "",
			loginCompanyID: "RAJPUT",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const filterDataCars16 = (e) => {
		e.preventDefault();
		fetchData1();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};

	return (
		<div className=''>
			<Navbar onHomeClick={handleHomeClick} />
			<Socalmedia />

			<PageScrollTop />

			<>
				<div>
					<div
						className='m-home'
						data-scrolling-animations='true'
						data-equal-height='.b-auto__main-item'>
						<section class='jk-slider'>
							<div
								id='carousel-example'
								class='carousel slide'
								data-ride='carousel'>
								<ol class='carousel-indicators'>
									<li
										data-target='#carousel-example'
										data-slide-to='0'
										class='active'></li>
									<li data-target='#carousel-example' data-slide-to='1'></li>
									<li data-target='#carousel-example' data-slide-to='2'></li>
									<li data-target='#carousel-example' data-slide-to='3'></li>
									<li data-target='#carousel-example' data-slide-to='4'></li>
								</ol>

								<div class='carousel-inner'>
									<div class='serc_sec1'>
										<div class='container'>
											<div class='row'>
												<div class='col-md-12'>
													<section className='b-search' id='search_sect'>
														<div className='container'>
															<div className='row'>
																<div
																	className='b-search__main'
																	style={{
																		marginTop: "0px",
																		borderRadius: "30px",
																	}}>
																	{/* <span className='sins_tx'>Since 1980</span>
																	<h4 onClick={reloadPage}>
																		RAJPUT
																		<span className='mtr_spn'> MOTORS</span>
																	</h4>
																	<p>
																		Your Trusted Partner for New and Pre-Owned
																		Cars
																	</p> */}

																	<form
																		id='form1'
																		className='b-search__main-form'
																		onSubmit={filterDataCars}>
																		<div className='row'>
																			<div className=' col-md-12 col-xs-12'>
																				<div>
																					<div
																						className='col-xs-12 col-md-3 col-lg-3'
																						id='searchdata'>
																						<Select
																							className='selectdataf'
																							value={selectedItem}
																							onChange={handleSelectChange}
																							displayEmpty>
																							<MenuItem
																								value=''
																								className='selectoption'>
																								Select Make
																							</MenuItem>
																							{data.map((item, index) => (
																								<MenuItem
																									className='selectoption'
																									key={index}
																									value={item.code}>
																									{item.description}
																								</MenuItem>
																							))}
																						</Select>

																						<div class='col-xs-12 col-md-3 col-lg-3'></div>
																					</div>
																					<div
																						className='col-xs-12 col-md-3 col-lg-3'
																						id='searchdata'>
																						<Select
																							className='selectdataf'
																							value={selectmodel}
																							onChange={handleSelectChange3}
																							displayEmpty
																							inputProps={{
																								"aria-label": "Without label",
																							}}>
																							<MenuItem
																								value=''
																								className='selectoption'>
																								Select Model
																							</MenuItem>
																							{model.map((item, index) => (
																								<MenuItem
																									className='selectoption'
																									key={index}
																									value={item.code}>
																									{item.description}
																								</MenuItem>
																							))}
																						</Select>
																					</div>

																					<div
																						className='col-xs-12 col-md-3 col-lg-3 '
																						id='searchdata'>
																						<Select
																							className='selectdataf'
																							value={minRange}
																							onChange={
																								handleSelectChangeminprize
																							}
																							displayEmpty
																							inputProps={{
																								"aria-label": "Without label",
																							}}>
																							<MenuItem
																								value=''
																								className='selectoption'>
																								Select Min Price
																							</MenuItem>
																							{Amountdatamin.map(
																								(item, index) => (
																									<MenuItem
																										className='selectoption'
																										key={index}
																										value={item.id}>
																										{item.img}
																									</MenuItem>
																								)
																							)}
																						</Select>
																					</div>

																					<div
																						className='col-xs-12 col-md-3 col-lg-3'
																						id='searchdata'>
																						<Select
																							className='selectdataf'
																							value={maxRange}
																							onChange={
																								handleSelectChangemaxnprize
																							}
																							displayEmpty
																							inputProps={{
																								"aria-label": "Without label",
																							}}>
																							<MenuItem
																								value=''
																								className='selectoption'>
																								Select Max Price
																							</MenuItem>
																							{Amountdatamax.map(
																								(item, index) => (
																									<MenuItem
																										className='selectoption'
																										key={index}
																										value={item.id}>
																										{item.img}
																									</MenuItem>
																								)
																							)}
																						</Select>
																					</div>
																				</div>
																			</div>
																			<div className='col-md-12 col-xs-12'>
																				<div className='b-search__main-form-submit '>
																					<button
																						style={{
																							backgroundColor: "#7d0000",
																							textAlign: "center",
																						}}
																						type='submit'
																						id='searcgbtn'
																						className='  btn btn-lg'>
																						<span
																							style={{
																								backgroundColor: "#7d0000",
																							}}>
																							Search
																						</span>
																					</button>

																					<button
																						style={{
																							marginLeft: "40px",
																							backgroundColor: "#696969",
																							textAlign: "start",
																							color: "white",
																						}}
																						id='searcgbtn'
																						onClick={reset}
																						type='reset'
																						className='btn    btn-lg'>
																						<span>Reset</span>
																					</button>
																				</div>
																			</div>
																		</div>
																	</form>
																</div>
															</div>
														</div>
													</section>
												</div>
											</div>
										</div>
									</div>

									<div class='item active '>
										<a href='#'>
											<div className='d1'></div>
										</a>
										<div class='hero'>
											<hgroup> </hgroup>
										</div>
									</div>

									<div class='item sl2'>
										<a href='#'>
											<div className='d6'></div>
										</a>
										<div class='hero'>
											<hgroup></hgroup>
										</div>
									</div>

									<div class='item sl2'>
										<a href='#'>
											<div className='d2'></div>
										</a>
										<div class='hero'>
											<hgroup></hgroup>
										</div>
									</div>
									<div class='item'>
										<a href='#'>
											<div className='d3'></div>
										</a>
										<div class='hero'>
											<hgroup></hgroup>
										</div>
									</div>

									<div class='item'>
										<a href='#'>
											<div className='d4'></div>
										</a>
										<div class='hero'>
											<hgroup></hgroup>
										</div>
									</div>

									<div class='item'>
										<a href='#'>
											<div className='d5'></div>
										</a>
										<div class='hero'>
											<hgroup></hgroup>
										</div>
									</div>
								</div>

								<a
									class='left carousel-control'
									href='#carousel-example'
									data-slide='prev'>
									<span
										class='glyphicon fa fa-angle-left lft_aro'
										style={{ marginLeft: "50%" }}></span>
								</a>

								<a
									class='right carousel-control'
									href='#carousel-example'
									data-slide='next'>
									<span class='glyphicon fa fa-angle-right lft_aro'></span>
								</a>
							</div>
						</section>

						<div className='serc_mobile'>
							<div class='col-md-12'>
								<section className='b-search' id='search_sect'>
									<div className='container'>
										<div className='row'>
											<div
												className='b-search__main serc_pos'
												style={{
													marginTop: "0px",
													borderRadius: "30px",
													backgroundColor: "white",
												}}>
												<h4 onClick={reloadPage}>RAJPUT MOTORS</h4>

												<form
													id='form1'
													className='b-search__main-form'
													onSubmit={filterDataCars}>
													<div className='row'>
														<div className=' col-md-12 col-xs-12'>
															<div>
																<div
																	className='col-xs-12 col-md-3 col-lg-3'
																	id='searchdata'>
																	<Select
																		className='selectdataf'
																		value={selectedItem}
																		onChange={handleSelectChange}
																		displayEmpty>
																		<MenuItem value='' className='selectoption'>
																			Select Make
																		</MenuItem>
																		{data.map((item, index) => (
																			<MenuItem
																				className='selectoption'
																				key={index}
																				value={item.code}>
																				{item.description}
																			</MenuItem>
																		))}
																	</Select>

																	<div class='col-xs-12 col-md-3 col-lg-3'></div>
																</div>
																<div
																	className='col-xs-12 col-md-3 col-lg-3'
																	id='searchdata'>
																	<Select
																		className='selectdataf'
																		value={selectmodel}
																		onChange={handleSelectChange3}
																		displayEmpty
																		inputProps={{
																			"aria-label": "Without label",
																		}}>
																		<MenuItem value='' className='selectoption'>
																			Select Model
																		</MenuItem>
																		{model.map((item, index) => (
																			<MenuItem
																				className='selectoption'
																				key={index}
																				value={item.code}>
																				{item.description}
																			</MenuItem>
																		))}
																	</Select>
																</div>

																<div
																	className='col-xs-12 col-md-3 col-lg-3 '
																	id='searchdata'>
																	<Select
																		className='selectdataf'
																		value={minRange}
																		onChange={handleSelectChangeminprize}
																		displayEmpty
																		inputProps={{
																			"aria-label": "Without label",
																		}}>
																		<MenuItem value='' className='selectoption'>
																			Select Min Price
																		</MenuItem>
																		{Amountdatamin.map((item, index) => (
																			<MenuItem
																				className='selectoption'
																				key={index}
																				value={item.id}>
																				{item.img}
																			</MenuItem>
																		))}
																	</Select>
																</div>

																<div
																	className='col-xs-12 col-md-3 col-lg-3'
																	id='searchdata'>
																	<Select
																		className='selectdataf'
																		value={maxRange}
																		onChange={handleSelectChangemaxnprize}
																		displayEmpty
																		inputProps={{
																			"aria-label": "Without label",
																		}}>
																		<MenuItem value='' className='selectoption'>
																			Select Max Price
																		</MenuItem>
																		{Amountdatamax.map((item, index) => (
																			<MenuItem
																				className='selectoption'
																				key={index}
																				value={item.id}>
																				{item.img}
																			</MenuItem>
																		))}
																	</Select>
																</div>
															</div>
														</div>
														<div className='col-md-12 col-xs-12'>
															<div className='b-search__main-form-submit '>
																<button
																	style={{
																		backgroundColor: "#7d0000",
																		textAlign: "center",
																	}}
																	type='submit'
																	id='searcgbtn'
																	className='  btn btn-lg'>
																	<span
																		style={{
																			backgroundColor: "#7d0000",
																		}}>
																		Search
																	</span>
																</button>

																<button
																	style={{
																		marginLeft: "40px",
																		backgroundColor: "#696969",
																		textAlign: "start",
																		color: "white",
																	}}
																	id='searcgbtn'
																	onClick={reset}
																	type='reset'
																	className='btn    btn-lg'>
																	<span>Reset</span>
																</button>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>

						{/* filter form search bar */}

						{showdata === false ? (
							<>
								{/* vechile Stock home data on sale section */}

								<section
									className='b-homeAuto  hidden-xs  '
									style={{ marginTop: "0" }}>
									<div className='container'>
										<div className='col-xs-12   visible-xs-horizental-scroll'>
											<div className='b-homeAuto__latest'>
												<h5
													className='s-titleBg '
													style={{ fontFamily: "Segoe UI" }}>
													GIVING OUR CUSTOMERS BEST DEALS
												</h5>
												<br />

												<h2
													className='s-title tx_clr'
													// '0.9s'
													style={{ fontFamily: "Segoe UI" }}>
													Discover the Perfect Car
												</h2>

												<div className='bag_clr1' id='cardrow'>
													<Row xs={12} md={4} id='cardrow'>
														{stockdata.length === 0 ? (
															<>
																<div
																	className='loader hidden-xs'
																	style={{ marginLeft: "600px" }}>
																	<PageScrollTop />
																	<ReactLoading
																		type='spin'
																		color='#7d0000'
																		height={200}
																		width={100}
																	/>
																</div>

																<div className='loader visible-xs'>
																	<ReactLoading
																		style={{ marginLeft: "-300px" }}
																		type='spin'
																		color='#7d0000'
																		height={200}
																		width={50}
																	/>
																</div>
															</>
														) : (
															<>
																{stockdata
																	?.filter(
																		(item) =>
																			item.programCode ===
																			"SHORT_LIST_WEBSITE_HOME_PAGE"
																	)

																	.map((item) => (
																		<div
																			class='cd_wd5'
																			key={item.uniqueSerial}
																			id='cardrow'>
																			<Col>
																				<div
																					onClick={() => {
																						singleProducthandle(
																							item.uniqueSerial
																						);
																						setHomepage(true);
																					}}
																					className=' card2 b-auto__main-item hidden-xs '>
																					{item?.modelImages.length === 0 ? (
																						<>
																							<img
																								className=' img-responsive center-block'
																								src='images/logo/defaulimag.png'
																								style={{
																									aspectRatio: "2/2",
																									width: "100%",
																								}}
																							/>
																						</>
																					) : (
																						<>
																							<img
																								style={{
																									aspectRatio: "2/2",
																									width: "100%",
																								}}
																								className=' img-responsive center-block'
																								src={
																									item?.modelImages.length >
																										0 &&
																									item?.modelImages[0].uri
																								}
																								alt='nissan'
																							/>

																							{item?.bookingFlag === "Y" ? (
																								<>
																									<div className='bokd_pic'>
																										<img
																											className=''
																											src='images/booked.png'
																										/>
																									</div>
																								</>
																							) : (
																								<p
																									className='newtext2'
																									style={{ color: "white" }}>
																									<i class='fa fa-check-circle ver_icn'></i>{" "}
																									<></>
																								</p>
																							)}
																							{/* <div className='bokd_pic'>
																								<img
																									className=''
																									src='images/booked.png'
																								/>
																							</div> */}
																						</>
																					)}
																					<div class='desi_tx'>
																						<div
																							className=' d-flex b-items__cars-one-info-title dis_tx1'
																							style={{
																								fontSize: "16px",
																								marginLeft: "0px",
																								marginTop: "10px",
																							}}>
																							{" "}
																							<li class='desi_ret1'>
																								{item.vehManufactureYear}{" "}
																							</li>
																							<li
																								class='desi_ret1'
																								style={{ marginLeft: "5px" }}>
																								{" "}
																								{item.vehBrandCode}
																							</li>{" "}
																							<li
																								class='desi_ret1'
																								style={{ marginLeft: "5px" }}>
																								{item.vehModelCode}{" "}
																							</li>
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
																							marginLeft: "20px",
																						}}
																						className='d-flex ml-6'>
																						<i className=''></i>{" "}
																						<div
																							className='b-items__cars-one-info-title pric1'
																							style={{ fontSize: "21px" }}>
																							<i class='fa-solid fa-indian-rupee-sign'></i>{" "}
																							{item.vehSellPriceRecommended}
																						</div>
																					</span>
																				</div>
																				{/* phone View */}

																				<div
																					style={{ borderRadius: "20px" }}
																					onClick={() =>
																						singleProducthandle(
																							item.uniqueSerial
																						)
																					}
																					className='  visible-xs'>
																					<div className=''>
																						<div className=''>
																							<img
																								style={{
																									marginLeft: "10px",
																									height: "165px",
																									aspectRatio: " 2 / 2",
																									width: "70%",
																									borderRadius: "10px",
																								}}
																								className=' img-responsive center-block '
																								src={
																									item?.modelImages.length >
																										0 &&
																									item?.modelImages[0].uri
																								}
																								alt='nissan'
																							/>
																						</div>
																						<div className=''>
																							<div
																								className=' d-flex b-items__cars-one-info-title'
																								style={{
																									fontSize: "16px",
																									marginLeft: "20px",
																									marginTop: "5px",
																								}}>
																								{" "}
																								<li>
																									{item.vehManufactureYear}{" "}
																								</li>
																								<li
																									style={{
																										marginLeft: "5px",
																									}}>
																									{" "}
																									{item.vehBrandCode}
																								</li>{" "}
																								<li
																									style={{
																										marginLeft: "5px",
																									}}>
																									{item.vehModelCode}{" "}
																								</li>
																							</div>
																							<br />

																							<div
																								className='d-flex'
																								style={{
																									marginTop: "-20px",
																								}}>
																								<ul className='d-flex'>
																									<li className='b'>
																										{item.vehOdometer}
																									</li>

																									<li
																										className=''
																										style={{
																											marginLeft: "15px",
																										}}>
																										{item.exteriorColor}
																									</li>
																									<li
																										className=''
																										style={{
																											marginLeft: "15px",
																										}}>
																										{item.vehFuelCode}
																									</li>

																									<li
																										className=''
																										style={{
																											marginLeft: "15px",
																										}}>
																										{item.transmissionDesc}
																									</li>
																								</ul>
																							</div>

																							<span
																								style={{
																									marginLeft: "20px",
																									marginTop: "-5px",
																								}}
																								className='d-flex ml-6'>
																								<i className=''></i>{" "}
																								<div
																									className='b-items__cars-one-info-title'
																									style={{
																										fontSize: "15px",
																									}}>
																									Rs{" "}
																									{item.vehSellPriceRecommended}
																								</div>
																							</span>
																						</div>
																					</div>
																				</div>
																			</Col>
																		</div>
																	))}
															</>
														)}
													</Row>

													{/* testing details */}
												</div>
											</div>
										</div>
									</div>
									<div className='clearfix'></div>
								</section>
								{/* phone view */}

								<section
									className='b-homeAuto   visible-xs'
									style={{ marginTop: "0px" }}>
									<div className='container'>
										<div className=''>
											<div className='b-homeAuto__latest'>
												<h5
													className='s-titleBg '
													style={{ fontFamily: "Segoe UI" }}>
													GIVING OUR CUSTOMERS BEST DEALS
												</h5>
												<br />

												<h2
													className='s-title'
													// '0.9s'
													style={{ fontFamily: "Segoe UI" }}>
													LATEST VEHICLES ON SALE
												</h2>

												<div className='row cd_full1' id='cardrow'>
													{/* testing details */}
													{stockdata
														?.filter(
															(item) =>
																item.programCode ===
																"SHORT_LIST_WEBSITE_HOME_PAGE"
														)

														.map((item) => (
															<div className='vehicles_mn'>
																<div key={item.uniqueSerial}>
																	<div>
																		{/* phone View */}

																		<div
																			style={{ borderRadius: "20px" }}
																			onClick={() =>
																				singleProducthandle(item.uniqueSerial)
																			}
																			className='  visible-xs'>
																			<div className=''>
																				<div className='moble_res1'>
																					{item?.modelImages.length === 0 ? (
																						<>
																							<img
																								className=' img-responsive center-block'
																								src='images/logo/defaulimag.png'
																								style={{
																									marginLeft: "0px",

																									aspectRatio: " 3/4",
																									width: "100%",
																									maxHeight: "230px",
																									objectFit: "cover",
																									borderRadius: "10px",
																								}}
																							/>
																						</>
																					) : (
																						<>
																							<img
																								style={{
																									marginLeft: "0px",

																									aspectRatio: " 3/4",
																									width: "100%",
																									maxHeight: "230px",
																									objectFit: "cover",
																									borderRadius: "10px",
																								}}
																								className=' img-responsive center-block '
																								src={
																									item?.modelImages.length >
																										0 &&
																									item?.modelImages[0].uri
																								}
																								alt='nissan'
																							/>

																							{item?.bookingFlag === "Y" ? (
																								<>
																									<div className='bokd_pic'>
																										<img
																											className=''
																											src='images/booked.png'
																										/>
																									</div>
																								</>
																							) : (
																								<p
																									className='newtext2'
																									style={{ color: "white" }}>
																									<i class='fa fa-check-circle ver_icn'></i>{" "}
																									<></>
																								</p>
																							)}
																						</>
																					)}
																				</div>
																				<div className=''>
																					<div
																						className=' d-flex b-items__cars-one-info-title  '
																						style={{
																							fontSize: "16px",
																							marginLeft: "5px",
																							marginTop: "5px",
																						}}>
																						{" "}
																						<div class='desi_tx'>
																							<ul>
																								<li>
																									{item.vehManufactureYear}{" "}
																								</li>
																								<li
																									style={{
																										marginLeft: "5px",
																									}}>
																									{" "}
																									{item.vehBrandCode}
																								</li>{" "}
																								<li
																									style={{
																										marginLeft: "5px",
																									}}>
																									{item.vehModelCode}{" "}
																								</li>
																							</ul>
																						</div>
																					</div>
																					<br />

																					<div
																						className='d-flex'
																						style={{
																							marginTop: "-20px",
																							marginLeft: "-16px",
																						}}>
																						<ul className='d-flex clr_ull1'>
																							<li className='b'>
																								{item.vehOdometer}
																							</li>

																							<li
																								className=''
																								style={{
																									marginLeft: "5px",
																								}}>
																								{item.exteriorColor}
																							</li>
																							<li
																								className=''
																								style={{
																									marginLeft: "5px",
																								}}>
																								{item.vehFuelCode}
																							</li>

																							<li
																								className=''
																								style={{
																									marginLeft: "5px",
																								}}>
																								{item.transmissionDesc}
																							</li>
																						</ul>
																					</div>

																					<span
																						style={{
																							marginLeft: "10px",
																							marginTop: "-5px",
																						}}
																						className='d-flex ml-6'>
																						<i className=''></i>{" "}
																						<div
																							className='b-items__cars-one-info-title rt_wd2'
																							style={{ fontSize: "15px" }}>
																							<i class='fa fa-rupee'></i>{" "}
																							{item.vehSellPriceRecommended}
																						</div>
																					</span>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														))}
												</div>
												<br />
											</div>
										</div>
									</div>
									<div className='clearfix'></div>
								</section>
							</>
						) : (
							<>
								{/* Search Stock data on sale section */}

								<section
									className='b-homeAuto hidden-xs'
									style={{ marginTop: "0px" }}>
									<div className='container'>
										<div className='col-xs-12   visible-xs-horizental-scroll'>
											<div className='b-homeAuto__latest'>
												<h5
													className='s-titleBg  '
													style={{ fontFamily: "Segoe UI" }}>
													GIVING OUR CUSTOMERS BEST DEALS
												</h5>
												<br />

												<h2
													className='s-title  '
													style={{ fontFamily: "Segoe UI" }}>
													LATEST VEHICLES ON SALE Search
												</h2>

												<div className=' bag_clr1' id='cardrow'>
													<Row xs={12} md={4} id='cardrow'>
														{demo.length === 0 ? (
															<div className='notdatafound23'>
																<h2>Vehicle Not Available</h2>
															</div>
														) : (
															<>
																{demo?.map((item) => (
																	<div
																		class='cd_wd5'
																		key={item.uniqueSerial}
																		id='cardrow'>
																		<Col>
																			<div
																				onClick={() =>
																					singleProducthandle(item.uniqueSerial)
																				}
																				className=' card2 b-auto__main-item '>
																				{item?.modelImages.length === 0 ? (
																					<>
																						<img
																							style={{ width: "100%" }}
																							className='  img-responsive center-block'
																							src='images/logo/defaulimag.png'
																							alt='nissan'
																						/>
																					</>
																				) : (
																					<>
																						<img
																							style={{ width: "100%" }}
																							className='  img-responsive center-block'
																							src={
																								item?.modelImages.length > 0 &&
																								item?.modelImages[0].uri
																							}
																							alt='nissan'
																						/>
																						{item?.bookingFlag === "Y" ? (
																							<>
																								<div className='bokd_pic'>
																									<img
																										className=''
																										src='images/booked.png'
																									/>
																								</div>
																							</>
																						) : (
																							<p
																								className='newtext2'
																								style={{ color: "white" }}>
																								<i class='fa fa-check-circle ver_icn'></i>{" "}
																								<></>
																							</p>
																						)}
																					</>
																				)}

																				<div class='desi_tx'>
																					<div
																						className=' d-flex b-items__cars-one-info-title dis_tx1'
																						style={{
																							fontSize: "16px",
																							marginLeft: "20px",
																						}}>
																						{" "}
																						<li>{item.vehManufactureYear} </li>
																						<li style={{ marginLeft: "5px" }}>
																							{" "}
																							{item.vehBrandCode}
																						</li>{" "}
																						<li style={{ marginLeft: "5px" }}>
																							{item.vehModelCode}{" "}
																						</li>
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
																						marginLeft: "20px",
																					}}
																					className='d-flex ml-6'>
																					<i className=''></i>{" "}
																					<div
																						className='b-items__cars-one-info-title'
																						style={{ fontSize: "18px" }}>
																						<i class='fa fa-rupee'></i>{" "}
																						{item.vehSellPriceRecommended}
																					</div>
																				</span>
																			</div>
																		</Col>
																	</div>
																))}
															</>
														)}
													</Row>

													{/* testing details */}
												</div>
											</div>
										</div>
									</div>
									<div className='clearfix'></div>
								</section>

								{/* phone View */}

								<section
									className='b-homeAuto   visible-xs'
									style={{ marginTop: "-38px" }}>
									<div className='container'>
										<div className=''>
											<div className='b-homeAuto__latest'>
												<h5
													className='s-titleBg '
													style={{ fontFamily: "Segoe UI" }}>
													GIVING OUR CUSTOMERS BEST DEALS
												</h5>
												<br />

												<h2
													className='s-title'
													// '0.9s'
													style={{ fontFamily: "Segoe UI" }}>
													LATEST VEHICLES ON SALE
												</h2>

												<div className='row cd_full1' id='cardrow'>
													{demo.length === 0 ? (
														<div className='notdatafound23'>
															<h2>vehicle Not Available</h2>
														</div>
													) : (
														<>
															{demo?.map((item) => (
																<div
																	className=' bag_clr2'
																	style={{
																		width: "80%",
																		borderRadius: "15px",
																		marginLeft: "15px",
																		height: "70%",
																		padding: "2px",
																	}}>
																	<div key={item.uniqueSerial}>
																		<div>
																			{/* phone View */}

																			<div
																				style={{ borderRadius: "20px" }}
																				onClick={() =>
																					singleProducthandle(item.uniqueSerial)
																				}
																				className='  visible-xs'>
																				<div className=''>
																					<div className=''>
																						{item?.modelImages.length === 0 ? (
																							<>
																								<img
																									style={{
																										marginLeft: "0px",

																										aspectRatio: " 3/4",
																										width: "100%",
																										maxHeight: "230px",
																										objectFit: "cover",
																										borderRadius: "10px",
																									}}
																									className=' img-responsive center-block '
																									src='images/logo/defaulimag.png'
																									alt='nissan'
																								/>
																							</>
																						) : (
																							<>
																								<img
																									style={{
																										marginLeft: "0px",

																										aspectRatio: " 3/4",
																										width: "100%",
																										maxHeight: "230px",
																										objectFit: "cover",
																										borderRadius: "10px",
																									}}
																									className=' img-responsive center-block '
																									src={
																										item?.modelImages.length >
																											0 &&
																										item?.modelImages[0].uri
																									}
																									alt='nissan'
																								/>
																								{item?.bookingFlag === "Y" ? (
																									<>
																										<div className='bokd_pic'>
																											<img
																												className=''
																												src='images/booked.png'
																											/>
																										</div>
																									</>
																								) : (
																									<p
																										className='newtext2'
																										style={{ color: "white" }}>
																										<i class='fa fa-check-circle ver_icn'></i>{" "}
																										<></>
																									</p>
																								)}
																							</>
																						)}
																					</div>
																					<div className=''>
																						<div
																							className=' d-flex b-items__cars-one-info-title'
																							style={{
																								fontSize: "16px",
																								marginLeft: "5px",
																								marginTop: "5px",
																							}}>
																							{" "}
																							<div class='desi_tx'>
																								<ul>
																									<li>
																										{item.vehManufactureYear}{" "}
																									</li>
																									<li
																										style={{
																											marginLeft: "5px",
																										}}>
																										{" "}
																										{item.vehBrandCode}
																									</li>{" "}
																									<li
																										style={{
																											marginLeft: "5px",
																										}}>
																										{item.vehModelCode}{" "}
																									</li>
																								</ul>
																							</div>
																						</div>
																						<br />

																						<div
																							className='d-flex'
																							style={{
																								marginTop: "-20px",
																								marginLeft: "-16px",
																							}}>
																							<ul className='d-flex clr_ull1'>
																								<li className='b'>
																									{item.vehOdometer}
																								</li>

																								<li
																									className=''
																									style={{
																										marginLeft: "5px",
																									}}>
																									{item.exteriorColor}
																								</li>
																								<li
																									className=''
																									style={{
																										marginLeft: "5px",
																									}}>
																									{item.vehFuelCode}
																								</li>

																								<li
																									className=''
																									style={{
																										marginLeft: "5px",
																									}}>
																									{item.transmissionDesc}
																								</li>
																							</ul>
																						</div>

																						<span
																							style={{
																								marginLeft: "10px",
																								marginTop: "-5px",
																							}}
																							className='d-flex ml-6'>
																							<i className=''></i>{" "}
																							<div
																								className='b-items__cars-one-info-title'
																								style={{ fontSize: "15px" }}>
																								<i class='fa fa-rupee'></i>{" "}
																								{item.vehSellPriceRecommended}
																							</div>
																						</span>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															))}
														</>
													)}
												</div>
												<br />
											</div>
										</div>
									</div>
									<div className='clearfix'></div>
								</section>
							</>
						)}

						<div class='brand_mn'>
							<div class='container'>
								<h2 class='s-title wow zoomInUp brd_padg bard_padd'>
									Explore Popular Brands
								</h2>

								<ul>
									{data
										?.filter((item) => item.code === "HYUNDAI")
										.map((item, index) => (
											<li key={index} onClick={filterDataCars1}>
												<a
													href=''
													class='PopularBrands__brand styles__forGTM'
													data-category='popular_brands'
													data-label='hyundai'
													data-index='50+'>
													<div class='PopularBrands__content'>
														<img className='' src='images/logo/br1.png' />
														<p
															value={selectedItem}
															onChange={handleSelectChange}>
															{item.description}
														</p>
													</div>
												</a>
											</li>
										))}
									{data
										?.filter((item) => item.code === "MARUTI")
										.map((item, index) => (
											<a href=''>
												{" "}
												<li onClick={filterDataCars2}>
													<a
														class='PopularBrands__brand styles__forGTM'
														data-category='popular_brands'
														data-label='hyundai'
														data-index='50+'>
														<div class='PopularBrands__content'>
															<img className='' src='images/logo/br2.png' />
															<p>{item.description}</p>
														</div>
													</a>
												</li>
											</a>
										))}

									{data
										?.filter((item) => item.code === "HONDA")
										.map((item, index) => (
											<a href=''>
												{" "}
												<li onClick={filterDataCars3}>
													<a
														class='PopularBrands__brand styles__forGTM'
														data-category='popular_brands'
														data-label='hyundai'
														data-index='50+'>
														<div class='PopularBrands__content'>
															<img className='' src='images/logo/br3.png' />
															<p>{item.description}</p>
														</div>
													</a>
												</li>
											</a>
										))}
									{data
										?.filter((item) => item.code === "TATA")
										.map((item, index) => (
											<a href=''>
												{" "}
												<li onClick={filterDataCars4}>
													<a
														class='PopularBrands__brand styles__forGTM'
														data-category='popular_brands'
														data-label='hyundai'
														data-index='50+'>
														<div class='PopularBrands__content'>
															<img className='' src='images/logo/br4.png' />
															<p>{item.description}</p>
														</div>
													</a>
												</li>
											</a>
										))}

									{data
										?.filter((item) => item.code === "MAHINDRA")
										.map((item, index) => (
											<a href=''>
												{" "}
												<li onClick={filterDataCars5}>
													<a
														class='PopularBrands__brand styles__forGTM'
														data-category='popular_brands'
														data-label='hyundai'
														data-index='50+'>
														<div class='PopularBrands__content'>
															<img className='' src='images/logo/br5.png' />
															<p>{item.description}</p>
														</div>
													</a>
												</li>
											</a>
										))}

									{data
										?.filter((item) => item.code === "RENAULT")
										.map((item, index) => (
											<a href=''>
												{" "}
												<li onClick={filterDataCars6}>
													<a
														class='PopularBrands__brand styles__forGTM'
														data-category='popular_brands'
														data-label='hyundai'
														data-index='50+'>
														<div class='PopularBrands__content'>
															<img className='' src='images/logo/br6.png' />
															<p>{item.description}</p>
														</div>
													</a>
												</li>
											</a>
										))}

									{data
										?.filter((item) => item.code === "TOYOTA")
										.map((item, index) => (
											<a href=''>
												{" "}
												<li onClick={filterDataCars7}>
													<a
														class='PopularBrands__brand styles__forGTM'
														data-category='popular_brands'
														data-label='hyundai'
														data-index='50+'>
														<div class='PopularBrands__content'>
															<img className='' src='images/logo/br7.png' />
															<p>{item.description}</p>
														</div>
													</a>
												</li>
											</a>
										))}

									{data
										?.filter((item) => item.code === "FORD")
										.map((item, index) => (
											<a href=''>
												{" "}
												<li onClick={filterDataCars8}>
													<a
														class='PopularBrands__brand styles__forGTM'
														data-category='popular_brands'
														data-label='hyundai'
														data-index='50+'>
														<div class='PopularBrands__content'>
															<img className='' src='images/logo/br8.png' />
															<p>{item.description}</p>
														</div>
													</a>
												</li>
											</a>
										))}

									{data
										?.filter((item) => item.code === "KIA")
										.map((item, index) => (
											<a href=''>
												{" "}
												<li onClick={filterDataCars9}>
													<a
														class='PopularBrands__brand styles__forGTM'
														data-category='popular_brands'
														data-label='hyundai'
														data-index='50+'>
														<div class='PopularBrands__content'>
															<img className='' src='images/logo/br9.png' />
															<p>{item.description}</p>
														</div>
													</a>
												</li>
											</a>
										))}
									{data
										?.filter((item) => item.code === "NISSAN")
										.map((item, index) => (
											<a href=''>
												{" "}
												<li onClick={filterDataCars10}>
													<a
														class='PopularBrands__brand styles__forGTM'
														data-category='popular_brands'
														data-label='hyundai'
														data-index='50+'>
														<div class='PopularBrands__content'>
															<img className='' src='images/logo/br10.png' />
															<p>{item.description}</p>
														</div>
													</a>
												</li>
											</a>
										))}
									{data
										?.filter((item) => item.code === "VW")
										.map((item, index) => (
											<a href=''>
												{" "}
												<li onClick={filterDataCars16}>
													<a
														class='PopularBrands__brand styles__forGTM'
														data-category='popular_brands'
														data-label='hyundai'
														data-index='50+'>
														<div class='PopularBrands__content'>
															<img className='' src='images/logo/br11.png' />
															<p>Volkswagen</p>
														</div>
													</a>
												</li>
											</a>
										))}
									{data
										?.filter((item) => item.code === "MG")
										.map((item, index) => (
											<a href=''>
												{" "}
												<li onClick={filterDataCars11}>
													<a
														class='PopularBrands__brand styles__forGTM'
														data-category='popular_brands'
														data-label='hyundai'
														data-index='50+'>
														<div class='PopularBrands__content'>
															<img className='' src='images/logo/br12.png' />
															<p>{item.description} Motors</p>
														</div>
													</a>
												</li>
											</a>
										))}
									{data
										?.filter((item) => item.code === "MERC")
										.map((item, index) => (
											<a href=''>
												{" "}
												<li onClick={filterDataCars12}>
													<a
														class='PopularBrands__brand styles__forGTM'
														data-category='popular_brands'
														data-label='hyundai'
														data-index='50+'>
														<div class='PopularBrands__content'>
															<img className='' src='images/logo/merc.jpg' />
															<p>{item.description}</p>
														</div>
													</a>
												</li>
											</a>
										))}

									{data
										?.filter((item) => item.code === "AUDI")
										.map((item, index) => (
											<a href=''>
												{" "}
												<li onClick={filterDataCars13}>
													<a
														class='PopularBrands__brand styles__forGTM'
														data-category='popular_brands'
														data-label='hyundai'
														data-index='50+'>
														<div class='PopularBrands__content'>
															<img className='' src='images/logo/audi.jpg' />
															<p>{item.description}</p>
														</div>
													</a>
												</li>
											</a>
										))}
									{data
										?.filter((item) => item.code === "BMW")
										.map((item, index) => (
											<a href=''>
												{" "}
												<li onClick={filterDataCars14}>
													<a
														class='PopularBrands__brand styles__forGTM'
														data-category='popular_brands'
														data-label='hyundai'
														data-index='50+'>
														<div class='PopularBrands__content'>
															<img className='' src='images/logo/bmw.jpg' />
															<p>{item.description}</p>
														</div>
													</a>
												</li>
											</a>
										))}
									{data
										?.filter((item) => item.code === "VOLVO")
										.map((item, index) => (
											<a href=''>
												{" "}
												<li onClick={filterDataCars15}>
													<a
														class='PopularBrands__brand styles__forGTM'
														data-category='popular_brands'
														data-label='hyundai'
														data-index='50+'>
														<div class='PopularBrands__content'>
															<img className='' src='images/logo/volvo.png' />
															<p>{item.description}</p>
														</div>
													</a>
												</li>
											</a>
										))}
								</ul>
							</div>
						</div>

						<section class='about'>
							<div class='container'>
								<div class='box-container'>
									<img className='' src='images/About.png' />
									<div class='content'>
										<div class='text'>
											<div class='heading'>
												<span>know about us</span>
											</div>
											<h3>We make your drive memorable.</h3>
											<p>
												Rajput Motor Pvt Ltd is more than just a car dealership;
												it's a trusted partner in your automotive journey. We
												invite you to visit our showroom and experience the
												Rajput Motor difference.
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>

						<section className='b-featured hidden-xs'>
							<div className='container-fluid'>
								<div className='container'>
									<div className='pupler_tx'>
										<h5
											className='s-titleBg '
											style={{ fontFamily: "Segoe UI" }}>
											Drive away with a great deal today
										</h5>
										<br />

										<h2
											className='s-title tx_clr cr_clr1'
											// '0.9s'
											style={{ fontFamily: "Segoe UI" }}>
											Popular Listings
										</h2>
									</div>
								</div>

								<div className='carousel-wrapper'>
									<Carousel breakPoints={breakPoints}>
										{stockdata
											?.filter(
												(item) =>
													item.programCode ===
													"SHORT_LIST_WEBSITE_EXCLUSIVE_OFFERS"
											)
											.map((item) => (
												<div key={item.uniqueSerial}>
													<div>
														<div
															onClick={() =>
																singleProducthandle(item.uniqueSerial)
															}
															className=' card3 b-auto__main-item1 '>
															{item?.modelImages.length === 0 ? (
																<>
																	{" "}
																	<img
																		src='images/logo/defaulimag.png'
																		style={{
																			aspectRatio: "/2",
																			width: "100%",
																		}}
																	/>
																</>
															) : (
																<>
																	{item?.modelImages.some(
																		(image) => image.imageName === "Front"
																	) && (
																		<img
																			style={{
																				aspectRatio: "/2",
																				width: "100%",
																			}}
																			// className='hidden-xs '
																			src={
																				item?.modelImages.find(
																					(image) => image.imageName === "Front"
																				)?.uri
																			}
																			alt='nissan'
																		/>
																	)}
																</>
															)}
															<div class='desi_tx2'>
																<div
																	className=' d-flex b-items__cars-one-info-title  hidden-xs dis_tx1'
																	style={{
																		fontSize: "16px",
																		marginLeft: "20px",
																		color: "white",
																	}}>
																	{" "}
																	<li class='desi_ret2'>
																		{item.vehManufactureYear}{" "}
																	</li>
																	<li
																		class='desi_ret2'
																		style={{ marginLeft: "0px" }}>
																		{" "}
																		{item.vehBrandCode}
																	</li>{" "}
																	<li
																		class='desi_ret2'
																		style={{ marginLeft: "0px" }}>
																		{item.vehModelCode}{" "}
																	</li>
																</div>
															</div>
															<div
																id='textitem'
																className='d-flex  hidden-xs'
																style={{
																	marginTop: "-4px",
																	color: "white",
																}}>
																<ul
																	className='d-flex tx_uper'
																	style={{ fontSize: "" }}>
																	<li className='b'>{item.vehOdometer} kms</li>

																	<li
																		className=''
																		style={{ marginLeft: "15px" }}>
																		{item.exteriorColor}
																	</li>
																	<li
																		className=''
																		style={{ marginLeft: "15px" }}>
																		{item.vehFuelCode}
																	</li>

																	<li
																		className=''
																		style={{ marginLeft: "15px" }}>
																		{item.transmissionDesc}
																	</li>
																</ul>
															</div>
															<span
																style={{
																	marginLeft: "20px",
																	color: "white",
																}}
																className='d-flex ml-6  hidden-xs'>
																<i className=''></i>{" "}
																<div
																	className='b-items__cars-one-info-title'
																	style={{
																		fontSize: "21px",
																		color: "white",
																	}}>
																	<i class='fa fa-rupee'></i>{" "}
																	{item.vehSellPriceRecommended}
																</div>
															</span>
															<div
																className='visible-xs'
																style={{ marginLeft: "5px", color: "white" }}>
																{" "}
																{item.vehBrandCode}
															</div>{" "}
														</div>
													</div>
												</div>
											))}
									</Carousel>
								</div>

								{/* slide checking */}
							</div>
						</section>

						<section className='b-featured visible-xs'>
							<div className='container-fluid'>
								<h2 className='s-title tx_clr cr_clr1'>Popular Listings </h2>

								<div
									id='carouselExampleIndicators'
									class='carousel slide'
									data-ride='carousel'>
									<ol class=''></ol>
									<div class='carousel-inner'>
										<div class='carousel-item active'>
											<div className='row ' id='cardrow'>
												{/* testing details */}
												{stockdata
													?.filter(
														(item) =>
															item.programCode ===
															"SHORT_LIST_WEBSITE_EXCLUSIVE_OFFERS"
													)

													.map((item) => (
														<div
															className=''
															style={{
																width: "80%",
																borderRadius: "15px",
																marginLeft: "15px",
																height: "70%",
																padding: "2px",
															}}>
															<div key={item.uniqueSerial}>
																<div>
																	{/* phone View */}

																	<div
																		style={{ borderRadius: "20px" }}
																		onClick={() =>
																			singleProducthandle(item.uniqueSerial)
																		}
																		className='  visible-xs clr_mol1'>
																		<div className=''>
																			<div className=''>
																				{item?.modelImages.length === 0 ? (
																					<>
																						<img
																							style={{
																								marginLeft: "0px",

																								aspectRatio: " 3/4",
																								width: "100%",
																								maxHeight: "230px",
																								objectFit: "cover",
																								borderRadius: "10px",
																							}}
																							className=' img-responsive center-block '
																							src='images/logo/defaulimag.png'
																							alt='nissan'
																						/>
																					</>
																				) : (
																					<>
																						<img
																							style={{
																								marginLeft: "0px",

																								aspectRatio: " 3/4",
																								width: "100%",
																								maxHeight: "230px",
																								objectFit: "cover",
																								borderRadius: "10px",
																							}}
																							className=' img-responsive center-block '
																							src={
																								item?.modelImages.length > 0 &&
																								item?.modelImages[0].uri
																							}
																							alt='nissan'
																						/>
																					</>
																				)}
																			</div>
																			<div className=''>
																				<div class='desi_tx2'>
																					<div
																						className=' d-flex b-items__cars-one-info-title dis_tx1'
																						style={{
																							fontSize: "16px",
																							marginLeft: "5px",
																							marginTop: "5px",
																							color: "white",
																						}}>
																						{" "}
																						<li class='desi_ret2'>
																							{item.vehManufactureYear}{" "}
																						</li>
																						<li
																							class='desi_ret2'
																							style={{ marginLeft: "5px" }}>
																							{" "}
																							{item.vehBrandCode}
																						</li>{" "}
																						<li
																							class='desi_ret2'
																							style={{ marginLeft: "5px" }}>
																							{item.vehModelCode}{" "}
																						</li>
																					</div>
																				</div>

																				<br />

																				<div
																					className='d-flex tx_uper'
																					style={{
																						marginTop: "-20px",
																						marginLeft: "-16px",
																						color: "white",
																					}}>
																					<div className='slid_lii'>
																						<ul className='d-flex'>
																							<li className='b'>
																								{item.vehOdometer}
																							</li>

																							<li
																								className=''
																								style={{
																									marginLeft: "0px",
																								}}>
																								{item.exteriorColor}
																							</li>
																							<li
																								className=''
																								style={{
																									marginLeft: "0px",
																								}}>
																								{item.vehFuelCode}
																							</li>

																							<li
																								className=''
																								style={{
																									marginLeft: "0px",
																								}}>
																								{item.transmissionDesc}
																							</li>
																						</ul>
																					</div>
																				</div>

																				<span
																					style={{
																						marginLeft: "10px",
																						marginTop: "-5px",
																					}}
																					className='d-flex ml-6'>
																					<i className=''></i>{" "}
																					<div
																						className='b-items__cars-one-info-title'
																						style={{
																							fontSize: "15px",
																							color: "white",
																						}}>
																						<i class='fa fa-rupee'></i>{" "}
																						{item.vehSellPriceRecommended}
																					</div>
																				</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													))}
											</div>
										</div>
									</div>
								</div>

								{/* slide checking */}
							</div>
						</section>

						<div className='container'>
							<div className='row'>
								<div className='col-md-6'>
									<div class='info-group block-table block-table_md'>
										<div class='info-group__section'>
											<section class='b-info b-info_mod-a area-bg area-bg_op_80 area-bg_prim parallax'>
												<h2 class='b-info__title'>
													<strong class='b-info__title_lg'>
														ARE YOU LOOKING FOR A CAR?
													</strong>
												</h2>
												<div class='b-info__desc'>
													Search Our Inventory With Thousands Of Cars And More
													Cars Are Adding On Daily Basis
												</div>
												<Link to='/detailsdata' className='btn btn-white'>
													{" "}
													Click for More{" "}
												</Link>
											</section>
										</div>
									</div>
								</div>

								<div className='col-md-6'>
									<div class='info-group block-table block-table_md'>
										<section class='b-info b-info_mod-b area-bg area-bg_op_80 area-bg_dark-2 parallax'>
											<div class='area-bg__inner'>
												<h2 class='b-info__title'>
													<strong class='b-info__title_lg'>
														DO YOU WANT TO SELL A CAR?
													</strong>
												</h2>
												<div class='b-info__desc'>
													{" "}
													Simply fill out a form with all the necessary
													information and we'll take care of the rest.
												</div>
												<Link to='/salecar' className='btn btn-white'>
													{" "}
													Click for More{" "}
												</Link>
											</div>
										</section>
									</div>
								</div>
							</div>
						</div>

						<section className='gallery_mn gallery_mn2'>
							<div className='container'>
								<div className='row'>
									<div className='gallery_pic'>
										<h4>Gallery</h4>
										<div className='gallery_wd row'>
											<div class='col-md-8 col-sm-6 col-xs-12 gr_wd2'>
												<img className='' src='images/gallery/g6.jpg' />
											</div>
											<div class='col-md-4 col-sm-6 col-xs-12 gr_wd2'>
												<img className='' src='images/gallery/g27.jpg' />
											</div>
											<div class='col-md-4 col-sm-6 col-xs-12'>
												<img className='' src='images/gallery/g3.png' />
											</div>
											<div class='col-md-4 col-sm-6 col-xs-12'>
												<img className='' src='images/gallery/g4.png' />
											</div>

											<div class='col-md-4 col-sm-6 col-xs-12'>
												<img className='' src='images/gallery/g5.png' />
											</div>
										</div>
									</div>

									<div className='view_btn'>
										<Link to='/gellery'>View More</Link>
									</div>
								</div>
							</div>
						</section>

						<section class='section section-xl bg-gray-800'>
							<div class='container'>
								<div class='row row-50 row-lg-80 justify-content-center align-items-center align-items-lg-start text-start'>
									<div class='col-md-7 text-center coun_mng'>
										<img className='sli_pic2' src='images/slider_count.jpg' />

										<div class='text-width-extra-small wow fadeInUp'>
											<h3 class='title-decoration-lines-left'>
												42+ Years of Experience
											</h3>
											<p class='text-gray-500 text-down'>
												With more than 42+ years of experience, our team offers
												quality pre owend car services
											</p>
											<div class='view_btn'>
												<Link to='/detailsdata'>Find a car</Link>
											</div>
										</div>
									</div>

									<div class='col-md-5 text-center'>
										<div class='row justify-content-center border-2-column'>
											<div class='col-9 col-sm-6'>
												<div class='counter-amy'>
													<div class='counter-amy-number'>
														<span class='counter animated'>
															<span class='fa fa-car icn_sz2'></span> 200
														</span>
													</div>
													<h6 class='counter-amy-title'>VEHICLES IN STOCK</h6>
												</div>
											</div>
											<div class='col-9 col-sm-6'>
												<div class='counter-amy'>
													<div class='counter-amy-number'>
														<span class='counter animated'>
															<span class='fa fa-users icn_sz2'></span> 3100
														</span>
													</div>
													<h6 class='counter-amy-title'>
														HAPPY CUSTOMER REVIEWS
													</h6>
												</div>
											</div>
											<div class='col-9 col-sm-6'>
												<div class='counter-amy'>
													<div class='counter-amy-number'>
														<span class='counter animated'>
															<span class='fa fa-building-o icn_sz2'></span> 2
														</span>
													</div>
													<h6 class='counter-amy-title'>DEALER BRANCHES</h6>
												</div>
											</div>
											<div class='col-9 col-sm-6'>
												<div class='counter-amy'>
													<div class='counter-amy-number'>
														<span class='counter animated'>16</span>
													</div>
													<h6 class='counter-amy-title'>BRANDS</h6>
												</div>
											</div>
										</div>
									</div>

									<div class='col-lg-6 col-xl-12 align-self-center'>
										<div class='row row-30 justify-content-center'>
											<div class='col-sm-6 col-md-5 col-lg-6 col-xl-3 wow fadeInLeft'></div>
											<div
												class='col-sm-6 col-md-5 col-lg-6 col-xl-3 wow fadeInLeft'
												data-wow-delay='.1s'></div>
											<div
												class='col-sm-6 col-md-5 col-lg-6 col-xl-3 wow fadeInLeft'
												data-wow-delay='.2s'></div>
											<div
												class='col-sm-6 col-md-5 col-lg-6 col-xl-3 wow fadeInLeft'
												data-wow-delay='.3s'></div>
										</div>
									</div>
								</div>
							</div>
						</section>

						<section className='b-brands s-shadow'>
							<div className='container'>
								<h2 className='s-title wow zoomInUp brd_padg'>
									BRANDS WE OFFER
								</h2>

								<div className='brnd_bdr '>
									<div className='b-brands__brand wow fadeIn'>
										<img src='images/logo/mg.jpg' alt='brand' />
									</div>
									<div className='b-brands__brand wow rotateIn'>
										<img src='images/logo/kia.png' alt='brand' />
									</div>
									<div className='b-brands__brand wow rotateIn'>
										<img src='images/logo/volvo.png' alt='brand' />
									</div>
									<div className='b-brands__brand wow rotateIn'>
										<img src='images/logo/merc.jpg' alt='brand' />
									</div>
									<div className='b-brands__brand wow rotateIn'>
										<img src='images/logo/audi.jpg' alt='brand' />
									</div>
									<div className='b-brands__brand wow rotateIn'>
										<img src='images/logo/hunda.jpg' alt='brand' />
									</div>

									<div className='b-brands__brand wow rotateIn'>
										<img src='images/logo/bmw.jpg' alt='brand' />
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</>

			<Footer />
		</div>
	);
}
