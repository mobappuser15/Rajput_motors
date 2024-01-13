import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import toast from "react-hot-toast";
import Homepage from "./HomePage";
import Details from "./Details";
import ReactLoading from "react-loading";
import ErrorPage from "./ErrorPage";

const Navbar = ({ onHomeClick }) => {
	const navRef = useRef();
	const [page, setPage] = useState(false);
	const [refreshContact, setRefreshContact] = useState(false);
	const [refreshKey, setRefreshKey] = useState(0);
	const [shouldRefreshContact, setShouldRefreshContact] = useState(false); // Fl
	const refreshContactComponent = () => {
		if (!shouldRefreshContact) {
			setShouldRefreshContact(true);
			setRefreshKey(refreshKey + 6);
		}
	};

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	const reloadPage = () => {
		window.location.reload(); // Set loading state to false after the timeout
	};

	const resreshdatastcock = () => {
		if (onHomeClick) {
			// Display loading message while page is reloading
			<ReactLoading type='spin' color='#f76d2b' height={200} width={100} />;
			// toast.success("data loading");
			// alert("data loading");
			// Simulate reloading by setting a timeout
			setTimeout(() => {
				setRefreshContact(false); // Set loading state to false after the timeout
			}, 6000); // Change this timeout value as needed
		} else {
			setRefreshContact(false); // If not reloading, set loading state to false
		}
	};

	return (
		<header className=' fixed-top'>
			<Link
				className='logo_siz'
				to='/'
				onClick={() => {
					onHomeClick();
				}}>
				<img className='logo_siz3' src='images/logo/logo-1.png' />
			</Link>

			<div className='header_pos2'>
				<nav className='nv_rt' ref={navRef}>
					<Link
						href=''
						to='/'
						onClick={() => {
							showNavbar();
							onHomeClick();
							// refreshContactComponent();
						}}>
						<span>HOME</span>
					</Link>
					<Link
						to='/salecar'
						onClick={() => {
							showNavbar();
							// refreshContactComponent();
						}}>
						SELL CAR
					</Link>

					<Link
						to='/detailsdata'
						onClick={() => {
							showNavbar();
							onHomeClick();
							resreshdatastcock();
						}}>
						BUY CAR
					</Link>

					<Link
						to='/gellery'
						onClick={() => {
							showNavbar();
						}}>
						GALLERY
					</Link>
					<Link
						to='/about'
						onClick={() => {
							showNavbar();
							// refreshContactComponent();
						}}>
						ABOUT US
					</Link>
					<Link
						to='/contact'
						onClick={() => {
							showNavbar();
							// refreshContactComponent();
						}}>
						CONTACT US
					</Link>

					<button
						className='nav-btn nav-close-btn visible-xs'
						onClick={showNavbar}>
						<i class='fa-solid fa-xmark'></i>
					</button>
				</nav>
				<button className='nav-btn visible-xs' onClick={showNavbar}>
					<i class='fa-solid fa-bars'></i>
				</button>

				<div className='icon_rt'>
					<div className='b-topBarsocial-wrapper none'>
						<div className='b-topbar-social'>
							<ul>
								<li>
									<a href='' style={{ marginTop: "10px" }}>
										<span className='hedr_no'>
										<a href="mailto:rajputmotorpvtltd@yahoo.com"> <i class='fa-sharp fa fa-envelope iccnn_clr'></i>{" "}
											 rajputmotorpvtltd@yahoo.com</a>
										</span>
									</a>
								</li>

								<li>
									<a href='tel:9871888833' style={{ marginTop: "10px" }}>
										<span className='hedr_no'>
											<i class='fa-sharp fa-solid fa-phone iccnn_clr'></i> +91
											9871888833
										</span>
									</a>


									<a href='tel:9891400061' style={{ marginTop: "10px" }}>
										<span className='hedr_no'>
											<i class='fa-sharp fa-solid fa-phone iccnn_clr'></i> +91
											9891400061
										</span>
									</a>

								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
