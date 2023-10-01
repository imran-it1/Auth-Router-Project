import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyD4WZtZyx_GDd1iv-Me_LAeWmdceT43i4k",
	authDomain: "auth-router-d517f.firebaseapp.com",
	projectId: "auth-router-d517f",
	storageBucket: "auth-router-d517f.appspot.com",
	messagingSenderId: "1056931824383",
	appId: "1:1056931824383:web:46753aaccc3e24a7b942ca",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
