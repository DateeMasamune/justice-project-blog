import React, {useEffect, useState} from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import './MainPage.scss';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {routes} from "../../routes/routes";

const MainPage = (prop) => {

	const {user} = prop

	useEffect(() => {
		if (JSON.parse(localStorage.getItem('login')) === null) {
			localStorage.setItem('login', JSON.stringify(false))
		}
		if (JSON.parse(localStorage.getItem('login')) === true) {
			return false
		}
	}, [])

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