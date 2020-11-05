import Home from './Containers/Home/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Login from './Containers/Login/Login';

function App() {
    return (

        <BrowserRouter>
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
