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

        </BrowserRouter>
    );
}

export default App;
