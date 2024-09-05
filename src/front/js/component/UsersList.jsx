import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; 

export const UsersList = () => {
    const {store, actions} = useContext(Context)
	console.log(store.usersList)

    useEffect(()=>{
        actions.getUsersList()
    }, [])
	return (
        <div className="text-center p-2">
			<select className="form-select mb-3" id="user-select">
				<option className="text-center">-----Users List-----</option>
				{
					store.usersList.map((item, index) => (
						<option key={index}>{item.name}</option>
					))
				}
			</select>
        </div>
	);
};