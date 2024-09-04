import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";

export const Form = () => {
    const{store, actions} = useContext(Context)
    
    // const handleSubmit = (e)=>{
    //     e.preventDefault()

    // }

    // useEffect(()=>{
    //     
    // },[])

    return(
        // <div className="p-2 w-75">
            // {/* onSubmit={handleSubmit} */}
            <form className="row g-3 text-start">
                <div className="col-md-12">
                    <label htmlFor="fullName" className="form-label fw-semibold">Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Name Last name" onChange={(e) => store.contactList.name(e.target.value)} required/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="emailAdd" className="form-label fw-semibold">Email</label>
                    <input type="email" className="form-control" id="emailAdd" placeholder="name@gmail.com"/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="passAdd" className="form-label fw-semibold">Password</label>
                    <input type="password" className="form-control" id="passAdd" placeholder="Ejm. M4ge3k$"/>
                </div>
                <div className="col-md-12">
                    {/* onClick={()=>actions.addContact()} */}
                    <button className="btn w-100 fw-semibold bg-success-subtle border border-black fw-bold" type="submit" >Register</button>
                </div>
            </form>
        // </div>
    );
};