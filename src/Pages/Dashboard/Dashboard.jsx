import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
	const { user } = useAuth();
	console.log(user);

	return (
		<div className=" min-h-screen flex flex-col justify-center items-center">
			<h1 className=" text-3xl font-semibold">Dashboard Page</h1>
			<h1 className=" text-3xl font-semibold">{user.displayName}</h1>
		</div>
	);
};

export default Dashboard;
