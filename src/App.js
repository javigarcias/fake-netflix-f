import React, { Component } from 'react'
import Home from './Containers/Home/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';
import Header from './Components/Header/Header';
import AdminOrders from './Containers/Admin/AdminOrders';
import Profile from './Containers/Profile/Profile';
import Search from './Components/SearchBar/SearchBar'
import MostrarPeliculas from './Components/MostrarPeliculas/MostrarPeliculas';
import MostrarCarrousel from './Components/MostrarCarrousel/MostrarCarrousel'




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
                
                <MostrarCarrousel endpoint={`${process.env.REACT_APP_APIURL}/showMovies`}/>
                <MostrarCarrousel endpoint={`${process.env.REACT_APP_APIURL}/showMoviesNewest`}/>
                <MostrarCarrousel endpoint={`${process.env.REACT_APP_APIURL}/showMoviesOldest`}/>
                <MostrarCarrousel endpoint={`${process.env.REACT_APP_APIURL}/searchByGenre?genre=99`}/>
                <MostrarCarrousel endpoint={`${process.env.REACT_APP_APIURL}/searchByGenre?genre=27`}/>
                <MostrarCarrousel endpoint={`${process.env.REACT_APP_APIURL}/searchByGenre?genre=18`}/>
                <MostrarCarrousel endpoint={`${process.env.REACT_APP_APIURL}/searchByGenre?genre=16`}/>
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
                <MostrarPeliculas endpoint={`${process.env.REACT_APP_APIURL}/showMovies`}/>
            </Route>

            <Route path='/populares' exact>
                <Header />
                <MostrarPeliculas endpoint={`${process.env.REACT_APP_APIURL}/showMoviesPopularity`}/>
            </Route>

            <Route path='/estrenos' exact>
                <Header />
                <MostrarPeliculas endpoint={`${process.env.REACT_APP_APIURL}/showUpcoming`}/>
            </Route>

            <Route path='/recientes' exact>
                <Header />
                <MostrarPeliculas endpoint={`${process.env.REACT_APP_APIURL}/showMoviesNewest`}/>
            </Route>

            <Route path='/terror' exact>
                <Header />
                <MostrarPeliculas endpoint={`${process.env.REACT_APP_APIURL}/searchByGenre?genre=27`}/>
            </Route>

            <Route path='/clasicos' exact>
                <Header />
                <MostrarPeliculas endpoint={`${process.env.REACT_APP_APIURL}/showMoviesOldest`}/>
            </Route>

            <Route path='/drama' exact>
                <Header />
                <MostrarPeliculas endpoint={`${process.env.REACT_APP_APIURL}/searchByGenre?genre=18`}/>
            </Route>

            <Route path='/documental' exact>
                <Header />
                <MostrarPeliculas endpoint={`${process.env.REACT_APP_APIURL}/searchByGenre?genre=99`}/>
            </Route>

            <Route path='/niños' exact>
                <Header />
                <MostrarPeliculas endpoint={`${process.env.REACT_APP_APIURL}/searchByGenre?genre=16`}/>
            </Route>

            <Route path='/comedia' exact>
                <Header />
                <MostrarPeliculas endpoint={`${process.env.REACT_APP_APIURL}/searchByGenre?genre=35`}/>
            </Route>

            <Route path='/accion' exact>
                <Header />
                <MostrarPeliculas endpoint={`${process.env.REACT_APP_APIURL}/searchByGenre?genre=28`}/>
            </Route>

            <Route path='/misterio' exact>
                <Header />
                <MostrarPeliculas endpoint={`${process.env.REACT_APP_APIURL}/searchByGenre?genre=9648`}/>
            </Route>
        </BrowserRouter>
    );
}

export default App;
