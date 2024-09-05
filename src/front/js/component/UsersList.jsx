import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext"; 

export const UsersList = () => {
    const {store, actions} = useContext(Context)
	console.log(store.usersList)

    useEffect(()=>{
        actions.getUsersList()
    }, [])
	return (
        <div className="d-flex justify-content-center p-2">
			<select className="form-select mb-3 w-50" id="user-select">
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