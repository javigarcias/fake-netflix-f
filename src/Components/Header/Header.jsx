import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {


    return (
        <div className='header'>
            <div className='logoHeader'>
                <img className="imgLogoHeader" src="Images/logoNetflix.png" alt="logo"></img>
            </div>
            <div className='menuIzq'>
                <Link to='/'>Inicio</Link>
                <Link to='/'>Series</Link>
                <Link to='/'>Peliculas</Link>
                <Link to='/'>Recientes</Link>
                <Link to='/'>Mi lista</Link>
            </div>
            <div className='espacio'></div>
            
            <div className='lupa' >
            
            </div>
            <div className='niños'>
                <Link to='/niños'>Niños</Link>
            </div>
            <div className='profile'>
                <Link to='/profile'>Profile</Link>

            </div>
        </div>
    )

}

export default Header;