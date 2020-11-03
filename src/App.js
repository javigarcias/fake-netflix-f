import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Containers/Home/Home';
import './App.css';

function App() {
  return (

    <BrowserRouter>

      <Header />

      <Route path='/' exact>
        <Home>

        </Home>
      </Route>

    </BrowserRouter>
  );
}

export default App;
