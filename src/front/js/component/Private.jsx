import React from "react";
import { Link } from "react-router-dom";

export const Private = () => {

	return (
        <div className="text-center p-2">
			<img src="https://picsum.photos/200/300/?blur" className="rounded-4 p-2" alt="" />
			<img src="https://picsum.photos/200/300" className="rounded-4 p-2" alt="" />
			<img src="https://picsum.photos/200/300?grayscale" className="rounded-4 p-2" alt="" />
			<h2>Lista de usuarios</h2>
			{/* <div className="row">
				<div className="col">
					<select className="form-select mb-3" id="user-select" value={name} onChange={(e) => setName(e.target.value)}>
						<option className="text-center">-----select user-----</option>
						{
							usersList.map((item, index) => (
								<option key={index}>{item.name}</option>
							))
						}
					</select>
				</div>
				<div className="col">
					<button className="border-1 rounded p-1 m-1 shadow-sm" onClick={deleteUser}>Delete User</button>
					<button className="border-1 rounded p-1 m-1 shadow-sm" onClick={getTasksList}>Get Task</button>
				</div>
			</div> */}
			
        </div>
	);
};