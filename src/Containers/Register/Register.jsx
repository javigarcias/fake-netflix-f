import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Register.scss';

export default function Register() {

    const history = useHistory();

    const clickRegister = async (event) => {

        try {
            event.preventDefault();

            const body = {
                name: event.target.name.value,
                surname: event.target.surname.value,
                age: event.target.age.value,
                email: event.target.email.value,
                password: event.target.password.value,
                address: event.target.address.value,
                credit_card: event.target.credit_card.value
            };

            await axios.post(`${process.env.REACT_APP_APIURL}/user/register`, body);

            history.push('/login')


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

                <div className="cajaRegisterBlack">
                    <form className="cajaRegister" onSubmit={clickRegister}>
                        <div className="textRegister">Regístrate</div>


                        <input className="register" type="name" name="name" placeholder="Nombre"></input>
                        <input className="register" type="surname" name="surname" placeholder="Apellidos"></input>
                        <input className="register" type="age" name="age" placeholder="Edad"></input>
                        <input className="register" type="email" name="email" placeholder="Correo electrónico"></input>
                        <input className="register" type="password" name="password" placeholder="Contraseña"></input>
                        <input className="register" type="address" name="address" placeholder="Dirección"></input>
                        <input className="register" type="credit_card" name="credit_card" placeholder="Tarjeta de crédito"></input>

                        <div className="cajaBotonRegister">
                            <button type="submit" className="botonRegister">Registrarse</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}