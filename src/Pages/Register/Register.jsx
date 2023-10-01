import { Link } from "react-router-dom";
import registerImg from "../../assets/SVG/register.svg";
import google from "../../assets/SVG/google.svg";
import facebook from "../../assets/SVG/facebook.svg";
import twitter from "../../assets/SVG/twitter.svg";

const Register = () => {
	return (
		<div className=" container mx-auto h-[85vh] mt-10">
			<div className=" h-full flex justify-between items-center">
				{/* Form */}
				<div className=" w-3/5">
					<div className=" w-1/2 mx-auto h-full flex flex-col gap-10 items-center justify-center">
						<div className=" text-center">
							<h1 className=" text-3xl font-bold mb-2">
								Create Your Accout
							</h1>
							<p className=" text-gray-600 font-medium">
								Already register?
								<Link to={"/login"}>
									<span className=" text-indigo-500 font-medium ml-1 hover:underline">
										Log in
									</span>
								</Link>
							</p>
						</div>

						<form className="w-full">
							<div className=" mt-5">
								<label className="block font-semibold">
									Name
								</label>
								<input
									className="w-full  border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									type="text"
									name="name"
									placeholder="Enter your name"
								/>
							</div>
							<div className=" mt-5">
								<label className="block font-semibold">
									Email
								</label>
								<input
									className="w-full  border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									type="email"
									name="email"
									placeholder="example@gmail.com"
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
									className="w-full  border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									type="password"
									name="password"
									placeholder="Enter your Password"
								/>
							</div>
							<div className=" flex items-center mt-4">
								<input
									className="mr-2 rounded-sm focus:ring-indigo-500 border-gray-300 text-indigo-500"
									type="checkbox"
									name="term-and-privacy"
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

							<div className=" w-full text-center py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 mt-3 hover:cursor-pointer duration-300 ease-in-out">
								<input
									className=" text-white font-medium hover:cursor-pointer"
									type="submit"
									value="Sign Up"
								/>
							</div>

							<div className=" grid grid-cols-3 items-center mt-8">
								<hr />
								<p className=" text-center">Or Log in With</p>
								<hr />
							</div>

							{/* Social Login */}

							<div className=" grid grid-cols-3 gap-2 mt-5">
								{/* Google */}
								<button className=" bg-gray-100 hover:bg-indigo-100  duration-300 ease-in-out cursor-pointer rounded-md px-2 py-2 flex items-center justify-center gap-2">
									<img
										className="w-[20px] h-[20px]"
										src={google}
										alt="Google Logo"
									/>
									<span className="text-gray-900  text-base font-medium">
										Google
									</span>
								</button>
								{/* Facebook */}
								<button className=" bg-gray-100 hover:bg-indigo-100 duration-300 ease-in-out cursor-pointer rounded-md px-2 py-2 flex items-center justify-center gap-2">
									<img
										className="w-[20px] h-[20px]"
										src={facebook}
										alt="Google Logo"
									/>
									<span className=" text-gray-900 text-base font-medium">
										Facebook
									</span>
								</button>
								{/* Twitter */}
								<button className=" bg-gray-100 hover:bg-indigo-100 duration-300 ease-in-out cursor-pointer rounded-md px-2 py-2 flex items-center justify-center gap-2">
									<img
										className="w-[20px] h-[20px]"
										src={twitter}
										alt="Google Logo"
									/>
									<span className=" text-gray-900 text-base font-medium">
										Twitter
									</span>
								</button>
							</div>

							<div className=" flex justify-center mt-10">
								<p>Copyright &copy; Fun House.com</p>
							</div>
						</form>
					</div>
				</div>
				{/* Image */}
				<div className="w-2/5">
					<div className=" w-full h-full flex justify-center items-center">
						<img src={registerImg} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
