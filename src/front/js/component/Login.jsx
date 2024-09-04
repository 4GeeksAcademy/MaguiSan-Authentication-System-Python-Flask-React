import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
    const{store, actions} = useContext(Context)
    // console.log(actions.login({
    //     "email": "msr@msr.com",
    //     "password": "msr"
    // }))
    const [data, setData] = useState({
        email:"",
        password:""
    })
    const handleData = (e) =>{
        let input_value = e.target.value
        let type = e.target.name
        setData({...data, [type]:input_value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        try {
            console.log(data)
            actions.login(data)
            setData({
                email:"",
                password:""
            })
        } catch (error) {
            console.error(error)
        }
    }
	return (
        // <div className="p-2 w-75">
            <form className="row g-3 text-start" onSubmit={handleSubmit}>
                <div className="col-md-12">
                    <label htmlFor="email" className="form-label fw-semibold">Email</label>
                    <input value={data.email} name="email" type="email" className="form-control" id="email" placeholder="name@gmail.com" onChange={handleData} required/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="pass" className="form-label fw-semibold">Password</label>
                    <input value={data.password} name="password" type="password" className="form-control" id="pass" placeholder="Ejm. M4ge3k$" onChange={handleData} required/>
                </div>
                <div className="col-md-12">
                    <Link to="/PrivateUser">
                        {/* <button className="btn btn-link fw-semibold text-success-emphasis">Access token...</button> */}
                        <button className="btn w-100 fw-semibold bg-success-subtle border border-black fw-bold" type="submit" >Log In</button>
                    </Link>
                </div>
            </form>
        // </div>
	);
};