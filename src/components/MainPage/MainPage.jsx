import React, {useEffect, useState} from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import './MainPage.scss';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {routes} from "../../routes/routes";
import {articlesData} from "../../services/mock";

const MainPage = (prop) => {
	const [articles, setArticles] = useState(JSON.parse(localStorage.getItem('articles')) || [])
	const [userData, SetUser] = useState(JSON.parse(localStorage.getItem('user')) || [])
	useEffect(() => {
		if (articles.length === 0) {
			localStorage.setItem('articles', JSON.stringify(articlesData));
			setArticles(articlesData)
		}
	}, [])

	// const userTest = false; из локал стороджа

	const user = prop.user
	return (
		<BrowserRouter>
			<Header user={user}/>
			<Switch>
				{routes.map((route) => (
					<Route
						path={route.path}
						component={route.component}
						exact={route.exact}
					/>
				))}
			</Switch>
			<Footer user={user}/>
			{/*{!userTest && <Redirect to={'/login'} />}*/}
		</BrowserRouter>
	)
}

export default MainPage;