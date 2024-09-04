import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {

	return (
        // <div className="p-2 w-75">
        //     {/* onSubmit={handleSubmit} */}
            <form className="row g-3 text-start">
                <div className="col-md-12">
                    <label htmlFor="email" className="form-label fw-semibold">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="name@gmail.com"/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="pass" className="form-label fw-semibold">Password</label>
                    <input type="password" className="form-control" id="pass" placeholder="Ejm. M4ge3k$"/>
                </div>
                <div className="col-md-12">
                    {/* onClick={()=>actions.addContact()} */}
                    <button className="btn w-100 fw-semibold bg-success-subtle border border-black fw-bold" type="submit" >Login</button>
                    <Link to="/PrivateUser">
                        <button className="btn btn-link fw-semibold text-success-emphasis">Access token...</button>
                    </Link>
                </div>
            </form>
        // </div>
	);
};