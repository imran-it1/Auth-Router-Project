import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import avatar from "../../../assets/images/avatar.jpeg";
const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleSignOut = () => {
		logOut()
			.then(() => {
				toast.success("Sign Out Successful");
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	const links = (
		<>
			<li className=" mx-5 text-black font-semibold px-2 py-2 rounded-md bg-transparent duration-300 ease-in-out transition-all hover:bg-gray-100">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? "text-indigo-600" : ""
					}
				>
					Home
				</NavLink>
			</li>
			<li className=" mx-5 text-black font-semibold px-2 py-2 rounded-md bg-transparent duration-300 ease-in-out transition-all hover:bg-gray-100">
				<NavLink
					to="/products"
					className={({ isActive }) =>
						isActive ? "text-indigo-600" : ""
					}
				>
					Products
				</NavLink>
			</li>
			<li className=" mx-5 text-black font-semibold px-2 py-2 rounded-md bg-transparent duration-300 ease-in-out transition-all hover:bg-gray-100">
				<NavLink
					to="/shop"
					className={({ isActive }) =>
						isActive ? "text-indigo-600" : ""
					}
				>
					Shop
				</NavLink>
			</li>

			<li className=" mx-5 text-black font-semibold px-2 py-2 rounded-md bg-transparent duration-300 ease-in-out transition-all hover:bg-gray-100">
				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive ? "text-indigo-600" : ""
					}
				>
					About
				</NavLink>
			</li>

			{user && (
				<>
					{" "}
					<li className=" mx-5 text-black font-semibold px-2 py-2 rounded-md bg-transparent duration-300 ease-in-out transition-all hover:bg-gray-100">
						<NavLink
							to="/profile"
							className={({ isActive }) =>
								isActive ? "text-indigo-600" : ""
							}
						>
							Profile
						</NavLink>
					</li>
					<li className=" mx-5 text-black font-semibold px-2 py-2 rounded-md bg-transparent duration-300 ease-in-out transition-all hover:bg-gray-100">
						<NavLink
							to="/dashboard"
							className={({ isActive }) =>
								isActive ? "text-indigo-600" : ""
							}
						>
							Dashboard
						</NavLink>
					</li>
				</>
			)}
		</>
	);

	return (
		<div className=" shadow-md py-5">
			<nav className=" container mx-auto flex items-center justify-between">
				{/* Logo */}
				<div>
					<Link to={"/"} className=" text-2xl font-extrabold">
						Fun House
					</Link>
				</div>
				{/* links */}
				<div>
					<ul className="flex items-center">{links}</ul>
				</div>
				{/* Button */}

				<div className=" flex items-center gap-5">
					{user ? (
						<>
							<p className=" font-medium text-gray-600">
								{user.email}
							</p>
							<div className="w-8 h-8 avatar online">
								<div className="rounded-full">
									{user ? (
										<img
											src={user.photoURL}
											alt="User Profile"
										/>
									) : (
										<img src={avatar} />
									)}
								</div>
							</div>
							<Link
								onClick={handleSignOut}
								to={"/login"}
								className=" px-3 py-2 border border-indigo-500 hover:border-transparent hover:bg-indigo-500 hover:text-white rounded-sm
									 font-medium duration-500 ease-in-out"
							>
								Sign Out
							</Link>
						</>
					) : (
						<Link
							to={"/login"}
							className=" px-3 py-2 border border-indigo-500 hover:border-transparent hover:bg-indigo-500 hover:text-white rounded-sm
									 font-medium duration-500 ease-in-out"
						>
							Login
						</Link>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
