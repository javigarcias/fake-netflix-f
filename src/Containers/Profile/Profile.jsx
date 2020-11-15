import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { USER_ORDERS } from '../../Redux/types';
import dayjs from 'dayjs';


import './Profile.scss';

const Profile = ({ dispatch, user, orders }) => {

    useEffect(() => {
        const options = {
            headers: { Authorization: `Bearer ${user.token}` },
        };
        axios.get(`${process.env.REACT_APP_APIURL}/order/show`, options)
            .then(orders => dispatch({ type: USER_ORDERS, payload: orders.data }))
            .catch(error => console.log())

    }, [])

    return (
        <div className='profileView'>
            <div className="userOrder">
                <div className="userName">Nombre y Apellidos: {user.name} {user.surname}</div>
                <div className="userEmail">email: {user.email}</div>
                <div className="userAdress">Dirección: {user.address}</div>
            </div>
            <div className="order">
                {orders?.map(order =>
                    <div className="cardOrder" key={order._id}>
                        <div className="titleCard">{order.movieId.title}</div>
                        <div className="image">
                            <img className="imageCard" src={'https://image.tmdb.org/t/p/w500' + order.movieId.poster_path} />
                        </div>
                        <div className="infoCard">
                            <div className="alq">FECHA ALQUILER</div>
                            <div className="alqdata">
                                {dayjs(order.rentalDate).format('DD-MM-YYYY')}
                                </div>
                            <div className="dev">FECHA DEVOLUCIÓN</div>
                            <div className="devdata">
                            {dayjs(order.rentalEndDate).format('DD-MM-YYYY')}
                            </div>
                            <div className="precio">{order.movieId.vote_average} €</div>
                        </div>


                    </div>)}

            </div>
        </div>
    )
}
const mapStateToProps = state => {
    
    return {
        user: state.user,
        orders: state.orders
    }
}

export default connect(mapStateToProps)(Profile);

