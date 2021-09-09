import React from "react";
import './MainPage.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "../../routes/routes";

const MainPage = (prop) => {
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
        </BrowserRouter>
    )
}

export default MainPage;