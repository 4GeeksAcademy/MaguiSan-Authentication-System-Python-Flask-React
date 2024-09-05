import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";

export const Form = () => {
    const{store, actions} = useContext(Context)
    // Espacio de memoria para guardar toda la informacion ingresada
    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    })
    // Guardando los datos por cada cambio en name, email y password
    const handleData = (e) =>{
        let input_value = e.target.value
        let type = e.target.name
        setData({...data, [type]:input_value})
    }
    // Enviando los datos para ejecutarse en actions
    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            console.log(data)
            await actions.signUp(data)
            //Limpiar los inputs
            setData({
                name:"",
                email:"",
                password:""
            })
        }catch(e){
            console.error(e)
        }
    }
    return(
            <form className="row g-3 text-start" onSubmit={handleSubmit}>
                <div className="col-md-12">
                    <label htmlFor="nameAdd" className="form-label fw-semibold">Name</label>
                    <input value={data.name} name="name" type="text" className="form-control" id="nameAdd" placeholder="Name" onChange={handleData} required/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="emailAdd" className="form-label fw-semibold">Email</label>
                    <input value={data.email} name="email" type="email" className="form-control" id="emailAdd" placeholder="name@gmail.com" onChange={handleData} required/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="passAdd" className="form-label fw-semibold">Password</label>
                    <input value={data.password} name="password" type="password" className="form-control" id="passAdd" placeholder="Ejm. M4ge3k$" onChange={handleData} required/>
                </div>
                <div className="col-md-12">
                    <button  type="submit" className="btn w-100 fw-semibold bg-success-subtle border border-black fw-bold">Register</button>
                </div>
            </form>
    );
};