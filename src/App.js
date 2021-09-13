import React from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./components/MainPage/MainPage";
import {userTest} from "./constants";

function App() {

  return (
    <div className="App">
        <MainPage user={userTest}/>
    </div>
  );
}

export default App;
