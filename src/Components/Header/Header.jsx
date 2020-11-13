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
        <>

            <div className='header'>
                <div className='menuIzq'>

                    <div>
                        <img className="imgLogoHeader" src="Images/logoNetflix.png" alt="logo"></img>
                    </div>
                    <div>
                        <img className="imgLogoProfile" src="Images/yuy.png" alt="logoProfile"></img>
                    </div>
                    <Link to='/'>Inicio</Link>
                    <Link to='/'>Peliculas</Link>
                    <Link to='/'>Recientes</Link>
                    
                </div>

                <div className='menuDer'>

                    <Link to='/niños'>Niños</Link>
                    <Link to='/profile'>Profile</Link>

                    {esAdmin && <Link to='/admin'>Admin</Link>}

                    {<Link to='/' onClick={logout}>Cerrar sesión</Link>}

                </div>
            </div>

        </>
    )

}

export default Header;