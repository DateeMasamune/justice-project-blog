/**
 * для развертывания проекта нужно подключится к https://cloud.mongodb.com/v2/614988e040e17f5425dc083d#metrics/replicaSet/61498a137d1d555f1f438548/explorer/Cluster0/users/find
 * account.mongodb.com :
 * dm.ovsienko@justiceteam-it.com
 * 331890nigga
 * 
 * изменить айпи во вкладке Network Access
 * 
 * если картинки не работают нужно проверить локалхост должен быть 5000
 */
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
