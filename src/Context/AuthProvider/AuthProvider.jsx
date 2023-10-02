import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	GoogleAuthProvider,
	GithubAuthProvider,
	signInWithPopup,
	FacebookAuthProvider,
	TwitterAuthProvider,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

// Context
export const AuthContext = createContext();
// Provider
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Create user
	const createNewUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Login User
	const userLogin = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// Sign out
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	// Google Sign in
	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// Github sign in
	const githubSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, gitHubProvider);
	};

	// Facebook sign in

	const facebookSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, facebookProvider);
	};
	// Twitter sign in

	const twitterSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, twitterProvider);
	};

	// Get Current User

	useEffect(() => {
		setLoading(true);
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
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
		googleSignIn,
		githubSignIn,
		facebookSignIn,
		twitterSignIn,
		loading,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
