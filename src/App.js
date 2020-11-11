
import Home from './Containers/Home/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';
import Header from './Components/Header/Header';
import Homepage from './Containers/Homepage/Homepage';
import Admin from './Containers/Admin/Admin';
import AllMoviesCarousel from './Components/Carrousels/AllMovies/AllMoviesCarousel'
import ClassicMoviesCarousel from './Components/Carrousels/ClassicMovies/ClassicMoviesCarousel'
import DocumentariesCarousel from './Components/Carrousels/Documentaries/DocumentariesCarousel'
import DramaMoviesCarousel from './Components/Carrousels/DramaMovies/DramaMoviesCarousel'
import HorrorMoviesCarousel from './Components/Carrousels/HorrorMovies/HorrorMoviesCarousel'
import PopularMoviesCarousel from './Components/Carrousels/PopularMovies/PopularMoviesCarousel'
import KidsMoviesCarousel from './Components/Carrousels/KidsMovies/KidsMoviesCarousel'



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
                <AllMoviesCarousel />
                <ClassicMoviesCarousel />
                <DocumentariesCarousel />
                <DramaMoviesCarousel />
                <HorrorMoviesCarousel />
                <PopularMoviesCarousel />
                <KidsMoviesCarousel />
            
            </Route>

            <Route path="/admin" exact>
                <Header />
                <Admin />
            </Route>

        </BrowserRouter>
    );
}

export default App;
