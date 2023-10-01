import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);

	if (loading) {
		return (
			<div className=" h-[90vh] w-full flex justify-center items-center">
				<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-indigo-500"></div>
			</div>
		);
	}

	if (user?.emailVerified) {
		return children;
	}
	return <Navigate to={"/login"}></Navigate>;
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;
