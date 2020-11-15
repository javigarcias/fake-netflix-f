import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminOrders.scss';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';


export default function AdminOrders() {

    const [orders, setOrders] = useState([]);
    const user = useSelector(state => state.user)

    useEffect(() => {

        const fnc = async () => {

            try {
                const header = {
                    headers: { Authorization: user?.token }
                };
          
                let respuesta = await axios.get(`${process.env.REACT_APP_APIURL}/order/showAll`, header);
                console.log(respuesta)
                setOrders(respuesta.data);

            } catch (error) {
                console.log(error);
            }
        }

        fnc();

    }, []);

    return (

        <>
            <div className="padreContainer">

                <div className="containerCards">

                    {orders.map(order => {

                        return (

                            <div className="card">

                                <img className="moviePoster" src={!order.movieId.poster_path ? 'Images/notfound.png' : `https://image.tmdb.org/t/p/w200/${order.movieId.poster_path}`} alt="poster"></img>
                                <div className="textoAdmin">
                                    <p>
                                        {order.movieId.title}
                                    </p>

                                    <p>
                                        {`${order.rentalState ? 'Alquilada' : 'Otro'}`}
                                    </p>

                                    <p>
                                        Inicio alquiler: <br/>{dayjs(order.rentalDate).format('DD-MM-YYYY')}
                                    </p>

                                    <p>
                                        Fin alquiler: <br/>{dayjs(order.rentalEndDate).format('DD-MM-YYYY')}
                                    </p>

                                    <p>
                                        Alquilada por: <br/>{order.userId?.name} {order.userId?.surname}
                                    </p>

                                    <p>
                                        Precio: <br/>{order.movieId.vote_average} €
                                    </p>

                                </div>

                            </div>

                        )

                    }

                    )}

                </div>

            </div>

        </>

    )
    
}