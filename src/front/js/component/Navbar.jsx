import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const{store, actions} = useContext(Context)
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
	const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    
    const handleOut = () =>{
        actions.logout()
        navigate("/")
    }
    const handleIn = () =>{
        navigate("/")
    }
	return (
        <nav className="nav flex-column text-start">
            {token?
            <ul className="list-group text-center fw-bold">
                <li className="list-group-item"><a className="nav-link active text-info-emphasis fw-bold fs-3" aria-current="page" href="#">MageeksApp</a></li>
                <li className="list-group-item"><a className="nav-link" href="#"><img src="https://picsum.photos/200/200" className="rounded-circle p-2" alt="" /></a></li>
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item"><a className="nav-link" href="#" onClick={handleOut}>Log Out</a></li>
            </ul>:
            <ul className="list-group text-center fw-bold">
                <li className="list-group-item"><a className="nav-link active text-info-emphasis fw-bold fs-3" aria-current="page" href="#">MageeksApp</a></li>
                <li className="list-group-item"><a className="nav-link" href="#"><img src="https://picsum.photos/200/200?blur" className="rounded-circle p-2" alt="" /></a></li>
                <li className="list-group-item"><a className="nav-link" href="#" onClick={handleIn}>Sign In</a></li>
            </ul>}
        </nav>
	);
};