import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myCreatedRoutes from "./Router/router";
import AuthProvider from "./Context/AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={myCreatedRoutes}></RouterProvider>
		</AuthProvider>
	</React.StrictMode>,
);
