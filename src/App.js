import React, { Component } from 'react'
import Home from './Containers/Home/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';
import Header from './Components/Header/Header';
import AdminOrders from './Containers/Admin/AdminOrders';
import Profile from './Containers/Profile/Profile';
import AllMoviesCarousel from './Components/Carrousels/AllMovies/AllMoviesCarousel'
import ClassicMoviesCarousel from './Components/Carrousels/ClassicMovies/ClassicMoviesCarousel'
import DocumentariesCarousel from './Components/Carrousels/Documentaries/DocumentariesCarousel'
import DramaMoviesCarousel from './Components/Carrousels/DramaMovies/DramaMoviesCarousel'
import HorrorMoviesCarousel from './Components/Carrousels/HorrorMovies/HorrorMoviesCarousel'
import PopularMoviesCarousel from './Components/Carrousels/PopularMovies/PopularMoviesCarousel'
import KidsMoviesCarousel from './Components/Carrousels/KidsMovies/KidsMoviesCarousel'
import Terror from './Containers/Terror/Terror';
import Clasicos from './Containers/Clasicos/Clasicos';
import Drama from './Containers/Drama/Drama';
import Documental from './Containers/Documental/Documental';
import Niños from './Containers/Niños/Niños';
import Comedia from './Containers/Comedia/Comedia';
import Accion from './Containers/Accion/Accion';
import Misterio from './Containers/Misterio/Misterio';
import Recientes from './Containers/Recientes/Recientes';
import Peliculas from './Containers/Peliculas/Peliculas';
import Populares from './Containers/Populares/Populares';
import Estrenos from './Containers/Estrenos/Estrenos';




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
                <AdminOrders />
            </Route>
            <Route path="/profile" exact>
                <Header />
                <Profile />
            </Route>

            <Route path='/peliculas' exact>
                <Header />
                <Peliculas />
            </Route>

            <Route path='/populares' exact>
                <Header />
                <Populares />
            </Route>

            <Route path='/estrenos' exact>
                <Header />
                <Estrenos />
            </Route>

            <Route path='/recientes' exact>
                <Header />
                <Recientes />
            </Route>

            <Route path='/terror' exact>
                <Header />
                <Terror />
            </Route>

            <Route path='/clasicos' exact>
                <Header />
                <Clasicos />
            </Route>

            <Route path='/drama' exact>
                <Header />
                <Drama />
            </Route>

            <Route path='/documental' exact>
                <Header />
                <Documental />
            </Route>

            <Route path='/niños' exact>
                <Header />
                <Niños />
            </Route>

            <Route path='/comedia' exact>
                <Header />
                <Comedia />
            </Route>

            <Route path='/accion' exact>
                <Header />
                <Accion />
            </Route>

            <Route path='/misterio' exact>
                <Header />
                <Misterio />
            </Route>
        </BrowserRouter>
    );
}

export default App;
