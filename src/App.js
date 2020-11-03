import Home from './Containers/Home'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Header from './Components/Header';

function App() {
    return (

        <BrowserRouter>

            <Header />

            <Home></Home>

        </BrowserRouter>
    );
}

export default App;
