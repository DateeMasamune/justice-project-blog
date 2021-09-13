import {Home} from "../components/Home/Home";
import {Login} from "../components/Login/Login";
import {SignIn} from "../components/SignIn/SignIn";
import {MyArticles} from "../components/MyArticles/MyArticles";
import {ArticlePage} from "../components/ArticlePage/ArticlePage";
import {Profile} from "../components/Profile/Profile";
import {AddArticle} from "../components/AddArticle/AddArticle";

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
	{
		component: ArticlePage,
		path: '/article_page:id',
		exact: true,
	},
	{
		component: Profile,
		path: '/profile',
		exact: true,
	},
	{
		component: AddArticle,
		path: '/add_articles',
		exact: true,
	},
]