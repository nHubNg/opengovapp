import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link, useNavigate } from "react-router-dom";
import glogo from "../assets/open-global.png";

import logo from "../assets/logo.png";
import jwt_decode from "jwt-decode";

const token = localStorage.token;
console.log(token)
const decoded = token === "undefined" || token === undefined ? '' : jwt_decode(token);

console.log(decoded);

export default () => {
	const navigate = useNavigate();

	const logout = async () => {
		await localStorage.removeItem("token");
		navigate("/auth");
	};

	return (
		<nav className=' '>
			<div className='first-nav flex justify-between w-3/4 mx-auto py-4 bg-white'>
				<div className='logo items-center flex '>
					<img class='block h-8 w-auto mr-2' src={glogo} alt='Workflow' />
					<img class='block w-8 h-8 ' src={logo} alt='Workflow' />

					<h1 className='font-bold text-secondary text-xl'>
						pen
						<span className='text-primary text-center mt-auto'>
							Government Partnership
						</span>
					</h1>
				</div>
				<div class=' sm:block sm:ml-6 pt-1 pl-3'>
					<div class='flex space-x-4 item-center'>
						<Link to='/dashboard'>
							<a
								href='#'
								class=' hover:underline hover:underline-offset-8    text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md '
							>
								Home
							</a>
						</Link>

						<Link to='/dashboard'>
							<a
								href='#'
								class=' hover:underline hover:underline-offset-8    text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md '
							>
								Feeds
							</a>
						</Link>

						<Link to='/'>
							<a
								href='#'
								class=' hover:underline hover:underline-offset-8    text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md '
							>
								About
							</a>
						</Link>

						{token != undefined || token != 'undefined'  ? (
							decoded.isLoggedIn ? (
								<Link
									to='/auth'
									onClick={logout}
									class='bg-secondary text-white capitalize  text-sm font-extrabold  hover:text-primary  px-4 py-3 rounded-one '
								>
									Logout
								</Link>
							) : (
								<Link
									to='/auth'
									class='bg-secondary text-white capitalize  text-sm font-extrabold  hover:text-primary  px-4 py-3 rounded-one '
								>
									Login / Register
								</Link>
							)
						) : (
							<Link
								to='/auth'
								class='bg-secondary text-white capitalize  text-sm font-extrabold  hover:text-primary  px-4 py-3 rounded-one '
							>
								Login / Register
							</Link>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
