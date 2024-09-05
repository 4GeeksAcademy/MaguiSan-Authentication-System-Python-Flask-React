import React, {useContext, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
    const{store, actions} = useContext(Context)
    const navigate = useNavigate()
    const [data, setData] = useState({
        email:"",
        password:""
    })
    const handleData = (e) =>{
        let input_value = e.target.value
        let type = e.target.name
        setData({...data, [type]:input_value})
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
            console.log(data)
            await actions.login(data)
            navigate("/PrivateUser")
            setData({
                email:"",
                password:""
            })
        } catch (error) {
            console.error(error)
        }
    }
	return (
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
                    <button className="btn w-100 fw-semibold bg-success-subtle border border-black fw-bold" type="submit">Log In</button>
                </div>
            </form>
	);
};