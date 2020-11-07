import Home from './Containers/Home/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Login from './Containers/Login/Login';
import Header from './Components/Header';


function App() {
    return (

        <BrowserRouter>
        <Header/>
            <Route path="/">
                <Home />
            </Route>

            <Route path="/login">
                <Login />
            </Route>


        </BrowserRouter>
    );
}

export default App;
