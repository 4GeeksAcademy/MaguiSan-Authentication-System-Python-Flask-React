import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Private } from "../component/Private.jsx";
import { Navbar } from "../component/Navbar.jsx";
import { UsersList } from "../component/UsersList.jsx";

export const PrivateUser = () => {
	return (
		<div className="text-center mt-2">
			<div className="row">
				<div className="col-md-3">
					<Navbar/>
				</div>
				<div className="col-md-9">
					<h2 className="text-info-emphasis fst-italic fw-light display-1">Welcome!</h2>
					<Private/>
					<UsersList/>
				</div>
			</div>
		</div>
	);
};