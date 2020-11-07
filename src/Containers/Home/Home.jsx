import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Home.scss';


export default function Home() {

    const history = useHistory();

    const pulsaEmpezar = async (event) => {

        try {
            event.preventDefault();

            let email = await axios.get(`${process.env.REACT_APP_APIURL}/user/compruebaEmail?email=${event.target.email.value}`);

            let existe = email.data.existe;

            if (existe) {
                history.push('/login')
            } else {
                history.push('/register')
            }


        } catch (error) {
            console.log(error)
        }


    }

    return (
        <>
            <div className="backgroundHome">
                <div className="gradientHome">

                    <header className="main-header">
                        <div className="cajaTodo">

                            <img className="imgLogo" src="Images/logoNetflix.png" alt="logo"></img>

                            <Link to="/login">
                                <button className="botonNetflix">Iniciar sesión</button>
                            </Link>
                        </div>
                    </header>


                    <div className="textosHome">
                        <div className="textHome">Todas las películas y <br /> series que desees, y <br />mucho más.</div>
                        <div className="textHome1">Disfruta donde quieras. Cancela cuando quieras.</div>
                        <div className="textHome2">¿Quieres ver algo ya? Escribe tu correo para crear una suscripción a Netflix o reactivarla.</div>


                        <form onSubmit={pulsaEmpezar} className="susHome">
                            <input className="emailHome" type="email" name="email"></input>

                            <button type="submit" className="botonEmpezar">EMPEZAR</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )


};


