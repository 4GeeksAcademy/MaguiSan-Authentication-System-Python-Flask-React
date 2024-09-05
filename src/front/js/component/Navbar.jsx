import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const{store, actions} = useContext(Context)
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const handleOut = () =>{
        if (token) {
            actions.logout()
            navigate("/")
        } else {
            alert("First, log in to an account")
        }
    }
	return (
        <nav className="nav flex-column text-start">
            <ul className="list-group text-center fw-bold">
                <li className="list-group-item"><a className="nav-link active text-info-emphasis fw-bold fs-3" aria-current="page" href="#">MageeksApp</a></li>
                <li className="list-group-item"><a className="nav-link" href="#"><img src="https://picsum.photos/200/200" className="rounded-circle p-2" alt="" /></a></li>
                <li className="list-group-item"></li>
                <li className="list-group-item"><a className="nav-link" href="#">Sign In</a></li>
                <li className="list-group-item"><a className="nav-link" href="#" onClick={handleOut}>Log Out</a></li>
            </ul>
        </nav>
	);
};