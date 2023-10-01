import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	// Create user
	const createNewUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Login User
	const userLogin = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// Sign out
	const logOut = () => {
		return signOut(auth);
	};

	// Get Current User

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log("Observe", currentUser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		createNewUser,
		userLogin,
		logOut,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
