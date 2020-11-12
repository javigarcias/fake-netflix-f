import React, {useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {USER_ORDERS} from '../../Redux/types';


import './Profile.scss';

const Profile = ({dispatch, user, orders}) => {
    
    useEffect(() => {
        const options = {
            headers: { Authorization: `Bearer ${user.token}` },
          };
        axios.get (`${process.env.REACT_APP_APIURL}/order/show`, options)
        .then (orders => dispatch({ type: USER_ORDERS, payload: orders.data}))
        .catch (error => console.log())
       
    }, [])
    
    return (
        <div className='profile'>
           
          {orders?.map(order =>
            <div className="order" key={order._id}>
                <h3>{order.movieId.title}</h3>
                <img src={'https://image.tmdb.org/t/p/w500' + order.movieId.poster_path} />
                <h4>Rental date: {order.rentalDate}</h4>
                <h4>Rental end date: {order.rentalEndDate}</h4>


            </div>)}         
        
        
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state.user)
    return {
        user: state.user,
        orders:state.orders
    }
}

export default connect(mapStateToProps)(Profile);

