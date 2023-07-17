import React from "react";
import { Link } from "react-router-dom";
import Gellery from "./Gellery";
import toast from "react-hot-toast";
import MdPhone from "@mui/icons-material/Phone";

const Navbar = () => {
	const reloadPage = () => {
		window.location.reload();
		toast.success("Page  Loading ! ");
	};
	console.log(reloadPage, "reloadPage");

	return <div></div>;
};

export default Navbar;
