import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Private } from "../component/Private.jsx";
import { Navbar } from "../component/Navbar.jsx";


export const PrivateUser = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-2">
			<div className="row">
				<div className="col-1">
					<Navbar/>
				</div>
				<div className="col">
					<Private/>
				</div>
			</div>
            <Link to="/">
                <button className="btn btn-primary">App...</button>
            </Link>
		</div>
	);
};