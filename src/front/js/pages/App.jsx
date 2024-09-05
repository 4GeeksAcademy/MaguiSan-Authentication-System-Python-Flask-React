import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Login } from "../component/Login.jsx";

export const App = () => {
	return (
		<div className="text-center mt-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="https://picsum.photos/200/400/?blur" className="rounded-4 p-1" alt="" />
                        <img src="https://picsum.photos/300/400" className="rounded-4 p-1" alt="" />
                    </div>
                    <div className="col">
                        <h2 className="display-1 text-info-emphasis">MageeksApp</h2>
                        <Login/>
                        <div className="text-center">
                            <p className="mt-4 mb-0">Don't have an account?</p>
                            <Link to="/SignUp">
				                <button className="btn btn-link fw-semibold text-info-emphasis p-0">Sign up</button>
			                </Link>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
};