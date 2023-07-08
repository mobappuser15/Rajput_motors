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

export default function App({ isLoggedIn }) {
	return (
		<div className=''>
			{" "}
			<ScrollTop />
			<div style={{ postion: "fixed" }}>
				{" "}
				<Navbar />{" "}
			</div>{" "}
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
