import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './Login.scss';
import {connect} from 'react-redux';
import {LOGIN} from '../../Redux/types';

const Login = ({dispach}) => {

    const history = useHistory();

    const clickLogin = async (event) => {

        try {
            event.preventDefault();

            const body = {

                email: event.target.email.value,
                password: event.target.password.value

            };

            let respuesta = await axios.post(`${process.env.REACT_APP_APIURL}/user/login`, body);

            //let usuario = respuesta.data

            //localStorage.setItem("usuario", JSON.stringify(usuario));
            dispach({ type: LOGIN, payload: respuesta.data})

            history.push('/homepage')


        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="backgroundHome">
            <div className="gradientHome">

                <header className="main-header">
                    <div className="cajaTodo">

                        <img className="imgLogo" src="Images/logoNetflix.png" alt="logo"></img>

                    </div>
                </header>

                <div className="cajaLoginBlack">
                    <form className="cajaLogin" onSubmit={clickLogin}>
                        <div className="textLogin">Iniciar sesión</div>
                        <input className="emailLogin" type="email" name="email" placeholder="Correo electrónico"></input>
                        <input className="passwordLogin" type="password" name="password" placeholder="Contraseña"></input>

                        <div className="cajaBoton">
                            <button type="submit" className="botonEmpezarLogin">Iniciar sesión</button>
                        </div>

                        <div className="rememberCheck">
                            <input className="checkLogin" type="checkbox"></input>
                            <div className="checkText">Recuérdame</div>
                        </div>

                        <div className="registerBox">
                            <div>¿Todavía sin Netflix? </div>
                            <Link className="susBox" to="/register">Suscríbete ya.</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}


export default connect()(Login);