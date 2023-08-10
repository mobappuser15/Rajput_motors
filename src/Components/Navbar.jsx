import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const reloadPage = () => {
		window.location.reload();
		// toast.success("Page  Loading ! ");
	};

	return (
		<header className=' fixed-top'>
			<Link to='/'>
				<img onClick={reloadPage} className='' src='images/logo/logo-1.png' />
			</Link>
			<nav className='' ref={navRef}>
				<Link to='/' onClick={showNavbar}>
					HOME
				</Link>
				<Link to='/salecar' onClick={showNavbar}>
					SELL CAR
				</Link>
				<Link to='/detailsdata ' onClick={reloadPage} onClick={showNavbar}>
					BUY CAR
				</Link>
				<Link to='/about' onClick={showNavbar}>
					ABOUT US
				</Link>
				<Link to='/contact' onClick={showNavbar}>
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
								<a href='https://www.facebook.com/profile.php?id=100077481055938'>
									<img src='images/logo/fb.png' alt='fb' />
								</a>
							</li>
							<li>
								<a href='https://www.instagram.com/sushilcarbazzar/'>
									<img src='images/logo/instra.png' alt='fb' />
								</a>
							</li>
							<li>
								<a href='https://www.youtube.com/@sushilcarbazzar5502'>
									<img src='images/logo/ytb.png' alt='fb' />
								</a>
							</li>

							<li>
								<a href='#' style={{ marginTop: "10px" }}>
									<span className='no_top1'>
										<i class='fa-sharp fa-solid fa-phone'></i> +91 92509 22333
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
