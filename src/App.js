import Home from './Containers/Home/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Login from './Containers/Login/Login';
import Header from './Components/Header';


function App() {
    return (

        <BrowserRouter>

            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/login" exact>
                <Login />
            </Route>

            {/* <Route path="/register" exact>
                <Register />
            </Route> */}

        </BrowserRouter>
    );
}

export default App;
