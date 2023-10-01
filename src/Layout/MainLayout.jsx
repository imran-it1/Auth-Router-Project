import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Toaster position="top-center" reverseOrder={false} />
		</div>
	);
};

export default MainLayout;
