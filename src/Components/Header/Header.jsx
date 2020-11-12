import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Header.scss';
import { LOGOUT } from '../../Redux/types';

const Header = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const esAdmin = user?.role === 'admin';

    const logout = async (event) => {

        try {
            console.log('asfds')
            const header = {
                headers: { Authorization: user?.token }
            };

            console.log(dispatch)
            dispatch({ type: LOGOUT })


            await axios.get(`${process.env.REACT_APP_APIURL}/user/logout`, header);

        } catch (error) {
            console.log(error);
        }
    };

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
n
                {esAdmin && <div className="admin">
                    <Link to='/admin'>Admin</Link>
                </div>}

                {<div className="logout" type="link" onClick={logout}>
                    <Link to='/'>Cerrar sesión</Link>
                </div>}

            </div>
        </div>
    )

}

export default Header;