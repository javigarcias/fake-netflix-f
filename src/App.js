import Home from './Containers/Home/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';
import Header from './Components/Header/Header';
import Homepage from './Containers/Homepage/Homepage';
import Admin from './Containers/Admin/Admin';

function App() {
    return (

        <BrowserRouter>

            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/login" exact>
                <Login />
            </Route>

            <Route path="/register" exact>
                <Register />
            </Route>

            <Route path="/homepage" exact>
                <Header />
                <Homepage />
            </Route>

            <Route path="/admin" exact>
                <Header />
                <Admin />
            </Route>

        </BrowserRouter>
    );
}

export default App;
