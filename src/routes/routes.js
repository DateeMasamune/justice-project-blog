import {Home} from "../components/Home/Home";
import {Login} from "../components/Login/Login";
import {SignIn} from "../components/SignIn/SignIn";
import {MyArticles} from "../components/MyArticles/MyArticles";

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
	{
		component: SignIn,
		path: '/signin',
		exact: true,
	},
	{
		component: MyArticles,
		path: '/my_articles',
		exact: true,
	},
]