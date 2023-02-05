import React, { useEffect, useState } from "react"
import Request from "../Requests"
import axios from "axios"

const Main = () => {
	const [movies, setMovies] = useState([])

	const movie = movies[Math.floor(Math.random() * movies.length)]

	useEffect(() => {
		axios.get(Request.requestPopular).then((response) => {
			setMovies(response.data.results)
		})
	},[])

	

	const truncateString = (str,num) => {
		if(str?.length > num) {
			return str.slice(0, num) + "..."
		} else {
			return str;
		}
	}


	return (
		<div className="w-full h-[600px] text-white">
			<div className="w-full h-full">
				<div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
					<img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
				<div className="absolute w-full top-[17%] p-4 md:p-8">
				<h2 className="text-3xl md:text-5xl font-bold">{movie?.title}</h2>
					<div className="my-5">
						<button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">Play</button>
						<button className="border text-white border-gray-300 ml-4 py-2 px-5">Watch Later</button>
					</div>
					<p className="underline text-gray-400 text-sm">Released: {movie?.release_date}</p>
					<p className="my-2 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
					{truncateString(movie?.overview, 150)}</p>
				</div>
			</div>
		</div>
	)
}

export default Main