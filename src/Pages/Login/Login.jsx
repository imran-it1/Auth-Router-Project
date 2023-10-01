import { Link, useNavigate } from "react-router-dom";
import loginSVG from "../../assets/SVG/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
	// Get data from context
	const { userLogin } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogin = (e) => {
		// Get Value
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		const checkbox = e.target.checkbox.checked;
		// Validation
		if (!checkbox) {
			toast.error("Please accept our Terms and Privacy Policy");
			return;
		}

		// user login
		userLogin(email, password)
			.then((response) => {
				const user = response.user;
				toast.success("Login Successfull!");
				console.log(user);
				// Reset Field
				e.target.reset();
				// Navigate to homepage after login
				navigate("/");
			})
			.catch((error) => {
				console.log(error.message);
				toast.error("Wrong email or password");
			});
	};

	return (
		<div className=" container mx-auto h-[85vh] mt-10">
			<div className=" h-full flex justify-between items-center">
				{/* Form */}
				<div className=" w-3/5">
					<div className=" w-1/2 mx-auto h-full flex flex-col gap-10 items-center justify-center">
						<div className=" text-center">
							<h1 className=" text-3xl font-bold mb-2">
								Welcome Back
							</h1>
							<p className=" text-gray-600 font-medium">
								Don&apos;t have an account?
								<Link to={"/register"}>
									<span className=" text-indigo-500 font-medium ml-1 hover:underline">
										Register
									</span>
								</Link>
							</p>
						</div>

						<form onSubmit={handleLogin} className="w-full">
							<div className=" mt-5">
								<label className="block font-semibold">
									Email
								</label>
								<input
									className="w-full text-gray-900 font-medium  border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									type="email"
									name="email"
									placeholder="example@gmail.com"
									required
								/>
							</div>
							<div className=" mt-5">
								<div className=" flex items-center justify-between">
									<label className="block font-semibold">
										Password
									</label>
									<label className="block font-semibold">
										<a
											href="#"
											className="underline text-indigo-500 text-sm font-medium"
										>
											Forget Password
										</a>
									</label>
								</div>
								<input
									className="w-full text-gray-900 font-medium  border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									type="password"
									name="password"
									placeholder="Enter your Password"
									required
								/>
							</div>
							<div className=" flex items-center mt-4">
								<input
									className="mr-2 rounded-sm focus:ring-indigo-500 border-gray-300 text-indigo-500"
									type="checkbox"
									name="checkbox"
								/>
								<label>
									I agree to the
									<a
										className="text-indigo-500 font-medium px-2"
										href="#"
									>
										Terms
									</a>
									and
									<a
										className="text-indigo-500 font-medium px-2"
										href="#"
									>
										Privacy Policy
									</a>
								</label>
							</div>

							<div className=" w-full text-center py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 mt-3  duration-300 ease-in-out">
								<input
									className=" text-white font-medium hover:cursor-pointer"
									type="submit"
									value="Log in"
								/>
							</div>

							{/* Copyright */}
							<div className=" flex justify-center mt-10">
								<p>Copyright &copy; Fun House.com</p>
							</div>
						</form>
					</div>
				</div>
				{/* Image */}
				<div className="w-2/5">
					<div className=" w-full h-full flex justify-center items-center">
						<img src={loginSVG} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
