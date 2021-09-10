import React from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./components/MainPage/MainPage";

function App() {
    const user = true
  return (
    <div className="App">
        <MainPage user={user}/>
    </div>
  );
}

export default App;
