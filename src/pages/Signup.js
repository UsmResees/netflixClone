import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext"

const Signup = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")
	const {user, signUp} = UserAuth()                                     //Need help
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await signUp(email, password)
			navigate("/")
		} catch (error) {
			setError(error.message)
		}
	}

	return (
	<>
		<div className="w-full h-screen">
			<img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/ec9e1d98-e04b-437a-9479-ea531261184f/US-en-20230123-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/ec9e1d98-e04b-437a-9479-ea531261184f/US-en-20230123-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/ec9e1d98-e04b-437a-9479-ea531261184f/US-en-20230123-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/ec9e1d98-e04b-437a-9479-ea531261184f/US-en-20230123-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="/" />
			<div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
			<div className="fixed w-full px-4 py-24 z-50">
				<div className="max-w-[450px] h-[660px] mx-auto bg-black/75 text-white">
					<div className="max-w-[320px] mx-auto py-16">
						<h1 className="text-3xl font-bold" >Sign Up</h1>
						<form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
						{error ? <p className="pt-3 text-red-500  font-semibold rounded ">Please enter a valid email address</p> : null}
		{/*help	*/}		<input onChange={(e) => setEmail(e.target.value)} className="p-3 my-2 bg-gray-800 rounded" type="email" placeholder="Email" autoComplete="email" />
							<input onChange={(e) => setPassword(e.target.value)} className="p-3 my-2 bg-gray-800 rounded" type="password" placeholder="Password" autoComplete="current-password" />
							<button className="bg-red-600 py-3 my-6 rounded font-bold ">Sign Up</button>
							<div className="flex justify-between items-center text-sm text-gray-600">
								<p><input className="mr-2" type="checkbox" />Remember me</p>
								<p>Need Help?</p>
							</div>
							<p className="py-10">
							<span className="text-gray-600">Already subscribed to Netflix? </span>{' '}
							<Link to="/login">Sign In </Link>
							 </p>
						</form>
					</div>
				</div>
			</div>
		</div>
	</>
	)
}

export default Signup

//whats the point of <> </>


//very big problem with signing up