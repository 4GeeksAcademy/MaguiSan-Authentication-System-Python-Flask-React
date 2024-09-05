import React from "react";

export const Private = () => {
	const token = localStorage.getItem("token")
	const name = localStorage.getItem("name")
	return (
		<div className="text-center p-2">
			{token ?
				<div>
					<h2 className="text-info-emphasis fst-italic fw-light display-1">Welcome {name}!</h2>
					<img src="https://picsum.photos/200/200/?blur" className="rounded-4 p-2" alt="" />
					<img src="https://picsum.photos/200/200" className="rounded-4 p-2" alt="" />
					<img src="https://picsum.photos/200/200?grayscale" className="rounded-4 p-2" alt="" />
				</div> : <h3 className="text-info-emphasis fst-italic fw-light display-5">Sign in to see photos and users</h3>
			}
		</div>
	);
};