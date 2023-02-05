import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")
	const {user, logIn} = UserAuth()                                     //Need help
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError("")                     //help setError?
		try {
			await logIn(email, password)
			navigate("/")
		} catch (error) {
			console.log(error)
			setError(error.message)
		}
	}



	return (
		<div className="w-full h-screen">
			<img className="hidden sm:block absolute w-full h-full object-cover" src="https://images.lifestyleasia.com/wp-content/uploads/2019/11/01120945/netflix-image.jpg" alt="/" />
			<div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
			<div className="fixed w-full px-4 py-24 z-50">
				<div className="max-w-[450px] h-[660px] mx-auto bg-black/75 text-white">
					<div className="max-w-[320px] mx-auto py-16">
						<h1 className="text-3xl font-bold" >Sign In</h1>
						<form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
						{error ? <p className="pt-3 text-red-500  font-semibold rounded ">User not found</p> : null}
							<input onChange={(e) => setEmail(e.target.value)} className="p-3 my-2 bg-gray-800 rounded" type="email" placeholder="Email" autoComplete="email" />
							<input onChange={(e) => setPassword(e.target.value)} className="p-3 my-2 bg-gray-800 rounded" type="password" placeholder="Password" autoComplete="current-password" />
							<button className="bg-red-600 py-3 my-6 rounded font-bold ">Sign In</button>
							<div className="flex justify-between items-center text-sm text-gray-600">
								<p><input className="mr-2" type="checkbox" />Remember me</p>
								<p>Need Help?</p>
							</div>
							<p className="py-10">
							<span className="text-gray-600">New to Netflix? </span>{' '}
							<Link to="/signup">Sign Up </Link>
							 </p>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login