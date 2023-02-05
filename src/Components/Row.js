import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie.js"


const Row = ({title, fetchURL, rowID}) => {
	const [movies, setMovies] = useState([])
	const [like, setLike] = useState(false)

	useEffect(() => { //useEffect executes everything inside of it when something in it has changed and dependency// 
		axios.get(fetchURL).then((response) => {
			setMovies(response.data.results)
		})
	},[fetchURL])

	const slideLeft = () => {
		var slider = document.getElementById('slider' + rowID);
		slider.scrollLeft = slider.scrollLeft - 600;
	};

	const slideRight = () => {
		var slider = document.getElementById('slider' + rowID);
		slider.scrollLeft = slider.scrollLeft + 600;
	};

	return (
		<>
		<h2 className="text-red-600 font-bold md:text-xl p-3 pl-4 text-transform: uppercase">{title}</h2>
		<div className="relative flex items-center group">
			<MdChevronLeft
			onClick={slideLeft}
			className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
			<div id={'slider' + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
				{movies.map((item, id) => (
					<Movie item={item}/>
				))}
			</div>
			<MdChevronRight 
			onClick={slideRight}
			className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
		</div>				
		</>

	)
}


export default Row