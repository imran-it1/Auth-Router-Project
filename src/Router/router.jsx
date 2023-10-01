import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Shop from "../Pages/Shop/Shop";
import About from "../Pages/About/About";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "../Components/Private/PrivateRoute";
import Profile from "../Pages/Profile/Profile";
import Dashboard from "../Pages/Dashboard/Dashboard";

const myCreatedRoutes = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/products",
				element: <Products />,
			},
			{
				path: "/shop",
				element: <Shop />,
			},

			{
				path: "/about",
				element: (
					<PrivateRoute>
						<About />
					</PrivateRoute>
				),
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/profile",
				element: (
					<PrivateRoute>
						<Profile />
					</PrivateRoute>
				),
			},
			{
				path: "/dashboard",
				element: (
					<PrivateRoute>
						<Dashboard />
					</PrivateRoute>
				),
			},
		],
	},
]);

export default myCreatedRoutes;
