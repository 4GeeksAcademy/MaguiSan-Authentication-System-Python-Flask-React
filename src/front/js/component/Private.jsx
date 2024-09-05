import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Private = () => {
	const token = localStorage.getItem("token")
	return (
        <div className="text-center p-2">
			<img src="https://picsum.photos/200/200/?blur" className="rounded-4 p-2" alt="" />
			<img src="https://picsum.photos/200/200" className="rounded-4 p-2" alt="" />
			<img src="https://picsum.photos/200/200?grayscale" className="rounded-4 p-2" alt="" />
        </div>
	);
};