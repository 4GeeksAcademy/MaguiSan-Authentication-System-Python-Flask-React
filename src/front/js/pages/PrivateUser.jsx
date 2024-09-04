import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Private } from "../component/Private.jsx";

export const PrivateUser = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
            <Private/>
            <Link to="/">
                <button className="btn btn-primary">App...</button>
            </Link>
		</div>
	);
};