import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";

function App() {
    const user = false
  return (
    <div className="App">
        <MainPage user={user}/>
    </div>
  );
}

export default App;
