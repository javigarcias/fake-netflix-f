import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MostrarPeliculas.scss';
import dayjs from 'dayjs';
import { Button, Modal } from 'antd'


export default function MostrarPeliculas({ endpoint }) {

    const [movies, setMovies] = useState([]);
    const [showModal, setShowModal] = useState(false);

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
                                            {dayjs(movie.release_date).format('DD-MM-YYYY')}
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
                                }} onClick={() => { setShowModal(true) }}>+info</Button>

                            </div>
                        )
                    }
                    )}
                </div>

                    
                <Modal
                    // title="Basic Modal"
                    visible={showModal}
                    onOk={() => setShowModal(false)}
                    onCancel={() => setShowModal(false)}
                    className="modalMovies"
                    footer={null}
                    bodyStyle={{
                        background: "#282727",
                        color: "white"

                    }
                    }
                >
                    {/* <p>{movie.overview}</p> */}
                    <p>Some contents...</p>
                    <p>Some contents...</p>

                    <div className="footerMovie">
                        <Button
                            style={{
                                border: "none",
                                backgroundColor: "red",
                                color: "white",
                                marginRight: "1em",
                                borderRadius: "5px"
                            }}>Alquilar
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