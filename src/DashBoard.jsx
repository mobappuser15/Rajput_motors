import React, { useState } from "react";
import Signup from "./Components/Signup";
import Admin from "./Pages/Admin";
import HomePage from "./Components/HomePage";

export default function DashBoard() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [loginType, setLoginType] = useState("");

	const handleSignup = (data) => {
		// Perform the API call and handle response

		fetch(
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/Login/GetLoginInfoV2",
			{
				method: "POST",
				headers: {
					ApplicationMode: "ONLINE",
					EnvironmentType: "DEMO",
					BrandCode: "UC",
					CountryCode: "IN",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		)
			.then((response) => response.json())
			.then((response) => {
				if (response.success) {
					if (data.loginType === "CDB_ADMIN") {
						setLoggedIn(true);
						setLoginType("admin");
					} else if (data.loginType === "USER") {
						setLoggedIn(true);
						setLoginType("user");
					} else {
						// Handle unknown login type
						console.error("Unknown login type:", data.loginType);
					}
				} else {
					// Handle error response
					console.error(response.error);
				}
			})
			.catch((error) => {
				// Handle fetch error
				console.error(error);
			});
	};

	return (
		<div>
			{!loggedIn ? (
				<Signup handleSignup={handleSignup} />
			) : loginType === "CDB_ADMIN" ? (
				<Admin />
			) : loginType === "CDB_USER" ? (
				<HomePage />
			) : null}
		</div>
	);
}
