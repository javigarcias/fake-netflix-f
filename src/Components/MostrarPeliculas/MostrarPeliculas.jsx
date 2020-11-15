import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MostrarPeliculas.scss';
import dayjs from 'dayjs';
import { Button, Modal } from 'antd'


export default function MostrarPeliculas({ endpoint }) {

    const [movies, setMovies] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showMovieActual, setShowMovieActual] = useState({});
    const userLog = JSON.parse(localStorage.getItem('usuario'));


    useEffect(() => {

        const fnc = async () => {
            try {

                let respuesta = await axios.get(endpoint);

                setMovies(respuesta.data);

            } catch (error) {
                console.log(error);
            }
        }
        fnc();
    }, []);

    const rent = async (movie) => {
        
        console.log(userLog)
        let orderBody = {
            userId: userLog.userId,
            movieId: movie.id
        };
        await axios.post('http://localhost:3000/order/rent', orderBody)
    };


    return (
        <>
            <div className="padreMovies">

                <div className="containerMovies">

                    {movies.map(movie => {

                        return (
                            <div className="cardMovies">

                                <div className="cardMoviesColumn">
                                    <img className="moviesPoster" src={!movie.poster_path ? 'Images/notfound.png' : `https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="poster"></img>

                                    <div className="textoMovies">
                                        <p>
                                            {movie.title}
                                        </p>
                                        <p>
                                            Precio: {movie.vote_average} €
                                        </p>
                                    </div>
                                </div>

                                <Button style={{
                                    border: "none",
                                    backgroundColor: "red",
                                    color: "white",
                                    marginTop: "1em",
                                    borderRadius: "5px"
                                }} onClick={() => { setShowModal(true); setShowMovieActual(movie) }}>+info</Button>

                            </div>
                        )
                    }
                    )}
                </div>

                    
                <Modal
                    visible={showModal}
                    onOk={() => setShowModal(false)}
                    onCancel={() => setShowModal(false)}
                    className="modalMovies"
                    footer={null}
                    bodyStyle={{
                        background: "#282727",
                        color: "white",
                        justifyContent: "center",
                        textAlign: "center",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        padding: "1em",
                        fontSize: "1.3em"
                    }
                    }
                >
                    <img src={!showMovieActual.poster_path ? 'Images/notfound.png' : `https://image.tmdb.org/t/p/w200/${showMovieActual.poster_path}`} alt="poster"></img>
                    <p>{showMovieActual.title}</p>
                    <p>{showMovieActual.overview}</p>
                    <p>Día de salida: <br/> {dayjs(showMovieActual.release_date).format('DD-MM-YYYY')}</p>
                    <p>Precio: <br/> {showMovieActual.vote_average} €</p>
                    

                    <div className="footerMovie">
                        <Button
                            style={{
                                border: "none",
                                backgroundColor: "red",
                                color: "white",
                                marginRight: "1em",
                                borderRadius: "5px"
                            }}onClick={() => { rent(showMovieActual) }}>Alquilar
                        </Button>

                        <Button
                            onClick={() => setShowModal(false)}
                            style={{
                                border: "none",
                                backgroundColor: "red",
                                color: "white",
                                borderRadius: "5px"
                            }}>Cerrar
                        </Button>
                    </div>

                </Modal>

            </div>
        </>
    )
}