
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import './MostrarCarrousel.scss';
import { Button, Modal } from 'antd';
import dayjs from 'dayjs'




export default function MostrarCarrousel({ endpoint }) {

    const config = {

        dots: false,
        arrows: false,
        infinite: true,
        adaptativeHeight: false,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        slidesToShow: 6,
        slidesToScroll: 1

    };

    const [movies, setMovies] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [showMovieActual, setShowMovieActual] = useState({})

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
        const userLog = JSON.parse(localStorage.getItem('usuario'));
        console.log(userLog)
        let orderBody = {
            userId: userLog.userId,
            movieId: movie.id
        };
        await axios.post('http://localhost:3000/order/rent', orderBody)
    };

    return (
        <>
            <Slider {...config}>
                {movies?.map(movie => {
    
                    return <div className="wrapper"><div key={movie._id} className="img-card">
    
                        <div className="imghover"> <img className="img" id="img" src={!movie.poster_path ? 'Images/notfound.png' : `https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt='poster_path' />
    
                            <div className='movie-card' id="movie-card">
                                <div className='title'><p><strong>{movie.title}</strong></p></div>
                                <div className='vote'><strong>Precio:</strong> {movie.vote_average} €</div>
                                <div className="rentButtonBox" id="rentButtonBox">
    
                                    <Button
                                        style={{
                                            border: "none",
                                            backgroundColor: "red",
                                            color: "white",
                                            marginRight: "1em",
                                            borderRadius: "5px"
                                        }} onClick={() => { rent(movie) }}>
                                        Alquilar
                                    </Button>
                                    <Button
                                        style={{
                                            border: "none",
                                            backgroundColor: "red",
                                            color: "white",
                                            marginTop: "1em",
                                            borderRadius: "5px"
                                        }} onClick={() => { setShowModal(true); setShowMovieActual(movie) }}>
                                        +info
                                        </Button>
    
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                })}
    
            </Slider>
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
                <p>Día de salida: <br /> {dayjs(showMovieActual.release_date).format('DD-MM-YYYY')}</p>
                <p>Precio: <br /> {showMovieActual.vote_average} €</p>
    
    
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
        </>
    )
    
    }
    




