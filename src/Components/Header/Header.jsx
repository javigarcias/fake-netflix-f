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
                    <Link to='/homepage'>Inicio</Link>
                    <Link to='/peliculas'>Peliculas</Link>
                    <Link to='/recientes'>Recientes</Link>
                    <Link to='/populares'>Populares</Link>
                    <Link to='/estrenos'>Próximamente</Link>
                </div>

                <div className="categoriesHeader">
                    <Link to='/misterio'>Misterio</Link>
                    <Link to='/terror'>Terror</Link>
                    <Link to='/comedia'>Comedia</Link>
                    <Link to='/drama'>Drama</Link>
                    <Link to='/accion'>Acción</Link>
                    <Link to='/documental'>Documental</Link>
                    <Link to='/clasicos'>Clásicos</Link>
                    <Link to='/niños'>Niños</Link>
                </div>

                <div className='menuDer'>
                    <Link to='/profile'><img className="imgLogoProfile" src="Images/yuy.png" alt="logoProfile"></img></Link>
                    {esAdmin && <Link to='/admin'>Admin</Link>}
                    {<Link to='/' onClick={logout}>Cerrar sesión</Link>}
                </div>
            </div>

        </>
    )

}

export default Header;