import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { USER_ORDERS } from '../../Redux/types';

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
            <div className="order">
                {orders?.map(order =>
                    <div className="cardOrder" key={order._id}>
                        <div className="titleCard">{order.movieId.title}</div>
                        <div >
                            <img className="imageCard" src={'https://image.tmdb.org/t/p/w500' + order.movieId.poster_path} />
                        </div>
                        <div className="infoCard">
                            FECHA ALQUILER: {order.rentalDate}
                            FECHA DEVOLUCIÓN: {order.rentalEndDate}
                        </div>


                    </div>)}

            </div>
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state.user)
    return {
        user: state.user,
        orders: state.orders
    }
}

export default connect(mapStateToProps)(Profile);

