import React, { useState } from "react";
import "./singup.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Signup({ loggedIn }) {
	const [company, setCompany] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const onSubmit = (e) => {
		e.preventDefault();

		const loginType = loggedIn ? " CDB_ADMIN " : "CDB_USER";

		const data = {
			loginCountryCode: "IN",
			deviceScreenSize: "4.59",
			appVersion: "V000",
			loginType: "CDB_USER",
			deviceOs: "Android",
			ipAddress: "",
			deviceOsVersion: "27",
			firebase: "",
			deviceId: "",
			versionCode: "RAJPUT",
			loginMacAddress: "7C:46:85:53:E2:33",
			loginBrandCode: "UC",
			loginPassword: password,
			loginUserId: username,
			deviceMobile: "",
			loginCompanyId: company,
			appReleasePhase: "DEMO",
		};

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
			.then((data) => {
				toast.success(data.loginNotValidReason);
				localStorage.setItem("token", data.accessToken);
				navigate("/admin");
			})
			.catch((error) => {
				console.error("Error:", error);
			});

	};

	return (
		<div className='logn_mn'>
			<div className='container'>
				<div className='row'>
					<div className='col-6 col-sm-6 col-xs-12  fm_centr'>
						<form className='form1' onSubmit={onSubmit}>
							<div className='form_front1'>
								<div className='form_details1'>
									<img
										className='logoimagelogin'
										src='images/logo/logo-1.png'
										alt='logo img'
									/>
								</div>
								<p className='login_tex1'>Login</p>
								{/* <div className='' style={{ color: "white" }}>
								<input class='check' type='checkbox' id='checkbox_toggle' />
								<div class='checkbox'>
									<label for='checkbox_toggle' class='slide'>
										<label for='checkbox_toggle' class='toggle'></label>
										<label for='checkbox_toggle' class='text'>
											Admin
										</label>
										<label for='checkbox_toggle' class='text'>
											User
										</label>
									</label>
								</div>
							</div> */}
								{/* slection users */}

								<input
									type='text'
									className='input1'
									placeholder='Company Id'
									name='company'
									onChange={(e) => setCompany(e.target.value)}
								/>
								<input
									type='text'
									name='username'
									onChange={(e) => setUsername(e.target.value)}
									className='input1'
									placeholder='User Id'
								/>
								<input
									type='password'
									name='password'
									onChange={(e) => setPassword(e.target.value)}
									className='input1'
									placeholder=' Password'
								/>
								<button className='btn1'>Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Signup;
