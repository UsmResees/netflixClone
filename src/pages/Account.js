import React from "react";
import SavedShows from "../Components/SavedShows"

const Account = () => {
	return (
		<>
			<div className="w-full	bg-gradient-to-r from-black text-white">
				<img className=" w-full h-[550px] object-cover  bg-gradient-to-r from-black" src="https://images.lifestyleasia.com/wp-content/uploads/2019/11/01120945/netflix-image.jpg" alt="/" />
			<div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
			<div className="absolute top-[20%] p-4 md:p-8">
				<h1 className="text-gray-100 text-3xl md:text-7xl font-bold font-sans">My Shows</h1>
			</div>
			</div>	
			<SavedShows />
		</>
	)
}

export default Account