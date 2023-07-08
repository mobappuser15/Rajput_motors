import React, { useEffect, useState } from "react";
import axios from "axios";

const MyComponent = () => {
	const [data, setData] = useState(null);
	const [source, setSource] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.post(
					"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster",
					{
						brandCode: "UC",
						countryCode: "IN",
						companyId: "SUSHIL",
						calledBy: "MAKE",
						loginUserId: "RAVI",
						loginIpAddress: "180.151.78.50",
					},
					{
						headers: {
							"Content-Type": "application/json",
							ApplicationMode: "ONLINE",
							EnvironmentType: "DEMO",
							BrandCode: "UC",
							CountryCode: "IN",
						},
					}
				);

				setData(response.data);
				console.log(response.data, "check ");
			} catch (error) {
				setError(error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.post(
					"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster",
					{
						brandCode: "UC",
						countryCode: "IN",
						companyId: "SUSHIL",
						calledBy: "SOURCE",
						loginUserId: "RAVI",
						loginIpAddress: "180.151.78.50",
					},
					{
						headers: {
							"Content-Type": "application/json",
							ApplicationMode: "ONLINE",
							EnvironmentType: "DEMO",
							BrandCode: "UC",
							CountryCode: "IN",
						},
					}
				);

				setSource(response.data);
				console.log(response.data, "check Source ");
			} catch (error) {
				setError(error);
			}
		};

		fetchData();
	}, []);

	if (error) {
		return <p>Error occurred: {error.message}</p>;
	}

	return (
		<div>
			<h2>Data from API</h2>
			{/* {data !== null ? (
				data.map((item) => <p key={item.id}>{item.name}</p>)
			) : (
				<p>Loading data...</p>
			)} */}
		</div>
	);
};

export default MyComponent;
