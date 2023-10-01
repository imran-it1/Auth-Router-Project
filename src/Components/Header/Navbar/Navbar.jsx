import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const links = (
		<>
			<li className=" mx-8 text-black font-semibold px-2 py-2 rounded-md bg-transparent duration-300 ease-in-out transition-all hover:bg-gray-100">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? "text-indigo-600" : ""
					}
				>
					Home
				</NavLink>
			</li>
			<li className=" mx-8 text-black font-semibold px-2 py-2 rounded-md bg-transparent duration-300 ease-in-out transition-all hover:bg-gray-100">
				<NavLink
					to="/products"
					className={({ isActive }) =>
						isActive ? "text-indigo-600" : ""
					}
				>
					Products
				</NavLink>
			</li>
			<li className=" mx-8 text-black font-semibold px-2 py-2 rounded-md bg-transparent duration-300 ease-in-out transition-all hover:bg-gray-100">
				<NavLink
					to="/shop"
					className={({ isActive }) =>
						isActive ? "text-indigo-600" : ""
					}
				>
					Shop
				</NavLink>
			</li>
			<li className=" mx-8 text-black font-semibold px-2 py-2 rounded-md bg-transparent duration-300 ease-in-out transition-all hover:bg-gray-100">
				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive ? "text-indigo-600" : ""
					}
				>
					About
				</NavLink>
			</li>
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
				<Link
					to={"/register"}
					className=" px-3 py-2 border border-indigo-500 hover:border-transparent hover:bg-indigo-500 hover:text-white rounded-sm
                 font-medium duration-500 ease-in-out"
				>
					Register
				</Link>
			</nav>
		</div>
	);
};

export default Navbar;
