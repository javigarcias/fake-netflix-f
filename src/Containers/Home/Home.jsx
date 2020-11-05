import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';


export default function Home() {

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
                        <div className="textHome">Todas las películas y series que desees, y mucho más.</div>
                        <div className="textHome1">Disfruta donde quieras. Cancela cuando quieras.</div>
                        <div className="textHome2">¿Quieres ver algo ya? Escribe tu correo para crear una suscripción a Netflix o reactivarla.</div>
                    </div>

                    <div className="susHome">
                        <input className="emailHome" type="email"></input>

                        <Link to="/login">
                            <button className="botonEmpezar">Empezar</button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )


};


