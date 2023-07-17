// import "./styles.css";
import About from "./Components/About";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	useLocation,
	Navigate,
} from "react-router-dom";
import Gellery from "./Components/Gellery";
import Contact from "./Components/Contact";
import Submit1 from "./Components/Submit1";
import ListTableTwo from "./Components/ListTableTwo";
import Details from "./Components/Details";
import Insurance from "./Components/Insurance";
import Navbar from "./Components/Navbar";
import EmiCalculator from "./Components/EmiCalculator";
import Submit2 from "./Components/Submit2";
import { Toaster } from "react-hot-toast";
import HomePage from "./Components/HomePage";
import StockCars from "./Components/StockCars";
import Notification from "./Components/Notification";
import ScrollTop from "./Components/ScrollTop";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import DashBoard from "./DashBoard";
import Admin from "./Pages/Admin";
import CarLoan from "./Components/CarLoan";
import "./App.css";
import AddVechil from "./Pages/AddVechil";
import StoreVechileTable from "./Pages/StoreVechileTable";
import AdminDash from "./Pages/AdminDash";
import { Header, Container } from "react-bootstrap";

export default function App({ isLoggedIn }) {
	const reloadPage = () => {
		window.location.reload();
		// toast.success("Page  Loading ! ");
	};
	console.log(reloadPage, "reloadPage");
	return (
		<div className=''>
			{" "}
			<ScrollTop />{" "}
			<nav className='nav_b  b navbar-inverse fixed-top    '>
				
					<div className='row'>
						<div className='col-sm-2 col-xs-3'>
							<div
								className='b-nav__logo '

								// style={{ marginLeft: "-220px" }}
							>
								<img onClick={reloadPage} src='images/logo/logo-1.png' />
							</div>
						</div>

						<div className='col-sm-2 visible-xs'>
							<div className='b-topBarsocial-wrapper none'>
								<div className='b-topbar-social'>
									<a href='#'>
										<span className='fa fa-facebook-square'></span>
									</a>

									<a href='#'>
										<span className='fa fa-instagram'></span>
									</a>
									<a href='#'>
										<span className='fa fa-youtube-square'></span>
									</a>
									<a href='#' style={{ marginTop: "10px" }}>
										<span className=''>
											<i class='fa-sharp fa-solid fa-phone'></i> +91 92509 22333
										</span>
									</a>
								</div>
							</div>
						</div>
						<div className='col-sm-6' style={{ marginTop: "-20px" }}>
							<div className='b-nav__list '>
								<div className='navbar-header'>
									<button
										type='button'
										className='navbar-toggle'
										style={{ marginLeft: "220px" }}
										data-toggle='collapse'
										data-target='#nav'>
										<span className='sr-only'>Toggle navigation</span>
										<span className='icon-bar'></span>
										<span className='icon-bar'></span>
										<span className='icon-bar'></span>
									</button>
								</div>
								<div className='collapse navbar-collapse' id='nav'>
									<ul className='navbar-nav-menu' onClick={reloadPage}>
										<li>
											<Link to='/' variant='body2'>
												Home
											</Link>
										</li>

										<li>
											<Link to='/salecar'>SELL CAR</Link>
										</li>
										<li>
											<Link to='/buycar'>BUY CAR</Link>
										</li>
										<li>
											<Link to='/detailsdata'>Gallery</Link>
										</li>

										<li>
											<Link to='/about'>ABOUT US</Link>
										</li>

										<li>
											<Link to='/contact'>CONTACT US</Link>
										</li>

										{/* <li>
											<Link to='/login'>login</Link>
										</li> */}
									</ul>
								</div>
							</div>
						</div>
						<div className='col-sm-3 hidden-xs'>
							<div className='b-topBarsocial-wrapper'>
								<div className='b-topbar-social'>
									<a href='https://www.facebook.com/profile.php?id=100077481055938'>
										<span className='fa fa-facebook-square'></span>
									</a>{" "}
									<a href='https://www.instagram.com/sushilcarbazzar/'>
										<span className='fa fa-instagram'></span>
									</a>
									<a href='https://www.youtube.com/@sushilcarbazzar5502'>
										<span className='fa fa-youtube-square'></span>
									</a>
									<a href='#'>
										<span
											className='fa-sharp fa-solid fa-phone text-white'
											style={{ marginTop: "15px" }}>
											+91 92509 22333
										</span>
									</a>
								</div>
							</div>
						</div>

						<nav class='navbar navbar-light bg-light fixed-top visible-xs'>
							<div class='container-fluid'>
							<div
								className='b-nav__logo '

								// style={{ marginLeft: "-220px" }}
							>
								<img onClick={reloadPage} src='images/logo/logo-1.png' />
							</div>
								<button
									class='navbar-toggler'
									type='button'
									data-bs-toggle='offcanvas'
									data-bs-target='#offcanvasNavbar'
									aria-controls='offcanvasNavbar'>
									<span class='navbar-toggler-icon'></span>
								</button>
								<div style={{width:"60%", backgroundColor:"black"}} 
									class='offcanvas offcanvas-end'
									tabindex='-1'
									id='offcanvasNavbar'
									aria-labelledby='offcanvasNavbarLabel'>
									<div class='offcanvas-header'>
										<h5 class='offcanvas-title' id='offcanvasNavbarLabel'>
											Offcanvas
										</h5>
										<button
											type='button'
											class='btn-close text-reset'
											data-bs-dismiss='offcanvas'
											aria-label='Close'></button>
									</div>
									<div class='offcanvas-body'>
										<ul class='navbar-nav justify-content-end flex-grow-1 pe-3'>
											<li class='nav-item'>
												<a class='nav-link active' aria-current='page' href='#'>
													Home
												</a>
											</li>
											<li class='nav-item'>
												<a class='nav-link' href='#'>
													Link
												</a>
											</li>
											<li class='nav-item dropdown'>
												<a
													class='nav-link dropdown-toggle'
													href='#'
													id='offcanvasNavbarDropdown'
													role='button'
													data-bs-toggle='dropdown'
													aria-expanded='false'>
													Dropdown
												</a>
												<ul
													class='dropdown-menu'
													aria-labelledby='offcanvasNavbarDropdown'>
													<li>
														<a class='dropdown-item' href='#'>
															Action
														</a>
													</li>
													<li>
														<a class='dropdown-item' href='#'>
															Another action
														</a>
													</li>
													<li>
														<hr class='dropdown-divider' />
													</li>
													<li>
														<a class='dropdown-item' href='#'>
															Something else here
														</a>
													</li>
												</ul>
											</li>
										</ul>
										
									</div>
								</div>
							</div>
						</nav>
					</div>
				
			</nav>
			
			<Routes>
				<Route exact path='/hjjkk' element={<Signup />} exact />
				<Route exact path='/admin' element={<AdminDash />} exact />
				<Route
					exact
					path='/dashboard'
					element={isLoggedIn ? <DashBoard /> : <Navigate to='/homepage' />}
					exact
				/>
				<Route exact path='/' element={<HomePage />} exact />
				<Route path='/insurence' element={<Insurance />} />{" "}
				<Route path='/about' element={<About />} />{" "}
				<Route path='/salecar' element={<Submit1 />} />{" "}
				<Route path='/buycar' element={<ListTableTwo />} />{" "}
				<Route path='/notification' element={<Notification />} />{" "}
				<Route path='/contact' element={<Contact />} />{" "}
				<Route path='/detailsdata' element={<StockCars />} />{" "}
				<Route path='/details' element={<Details />} />{" "}
				<Route path='/emical' element={<EmiCalculator />} />{" "}
				<Route path='/submit2' element={<Submit2 />} />{" "}
				<Route path='/carloans' element={<CarLoan />} />{" "}
				<Route path='/Addvechils' element={<AddVechil />} />{" "}
				<Route path='/stocktable' element={<StoreVechileTable />} />{" "}
			</Routes>{" "}
			<Footer />
		</div>
	);
}
