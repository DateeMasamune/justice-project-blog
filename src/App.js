import React, {useEffect, useState} from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./components/MainPage/MainPage";
import {userTest} from "./constants";

function App() {
	const user = JSON.parse(localStorage.getItem('login'))
	const [token,setToken] = useState('')
  return (
    <div className="App">
        <MainPage
					user={user}
				/>
    </div>
  );
}

export default App;
