import {Home} from "../components/Home/Home";
import {Home2} from "../components/Home/Home2";

export const routes = [
	{
		component: Home,
		path: '/',
		exact: true,
	},
	{
		component: Home2,
		path: '/1',
		exact: true,
	},
]