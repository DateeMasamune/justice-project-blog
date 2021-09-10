import {Home} from "../components/Home/Home";
import {Login} from "../components/Login/Login";

export const routes = [
	{
		component: Home,
		path: '/',
		exact: true,
	},
	{
		component: Login,
		path: '/login',
		exact: true,
	},
]