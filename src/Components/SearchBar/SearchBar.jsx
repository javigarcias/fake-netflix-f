import React, { useState, useEffect } from "react";
import './SearchBar.scss'
import axios from 'axios';
import { connect } from 'react-redux';
import { CALL_MOVIES } from '../../Redux/types';
import { Button, Modal } from 'antd';
import dayjs from 'dayjs'

const Search = (props) => {


    useEffect(() => {

        axios.get(`${process.env.REACT_APP_APIURL}/showMovies`)
            .then(res => {
                props.dispatch({ type: CALL_MOVIES, payload: res.data });
            }).catch((err) => {
                console.log(err)
            });
        // eslint-disable-next-line
    }, [])



    const [search, setSearch] = useState("")


    const searchMovies = event => {
        setSearch(event.target.value)
        //console.log(event.target, search);
    }

    const [showMovieActual, setShowMovieActual] = useState({})



    const searchEngine = (props) => {
        const result = props.movies?.filter(movie => {
            return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
        if (search !== "")
            return result.map(movie => <div className="movies1" onClick={() => { setShowMovieActual(movie); setShowModal(true) }}>
                <div>{movie.title}</div></div>)
    }


    const [showModal, setShowModal] = useState(false)


    return (
        <>
            <div className="body">
                <div className="background">
                    <div className="search">
                        <input type="text" placeholder="Buscar película" onKeyUp={searchMovies}></input>
                    </div>

                    <div className="containerMovies">

                        <div className="moviesByTitle">
                            {searchEngine(props)}
                        </div>



                    </div>
                </div>


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

        </>
    )

}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Search);