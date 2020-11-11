import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {

    // const usuario = JSON.parse(localStorage.getItem('usuario'));

    const user = useSelector(state => state.user)
    const esAdmin = user?.role === 'admin';
 
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

            <div className='menuDer'>
                <div className='niños'>
                    <Link to='/niños'>Niños</Link>
                </div>
                <div className='profile'>
                    <Link to='/profile'>Profile</Link>
                </div>
                { esAdmin && <div className="admin">
                    <Link to='/admin'>Admin</Link>
                </div>}
            </div>
        </div>
    )

}

export default Header;