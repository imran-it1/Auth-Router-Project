import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

// I create this hook that will help me to call the conetext

const useAuth = () => {
	const AllAuth = useContext(AuthContext);
	return AllAuth;
};

export default useAuth;
