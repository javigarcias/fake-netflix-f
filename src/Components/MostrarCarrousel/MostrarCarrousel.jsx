
import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import './MostrarCarrousel.scss';



export default function MostrarCarrousel({endpoint}) {

    const config = {

        dots: false,
        arrows:false,
        infinite:true,
        adaptativeHeight: false,
        autoplay: true,
      speed: 4000,
      autoplaySpeed: 1000,
      cssEase: "linear",
        slidesToShow: 6,
        slidesToScroll: 1
        
      };

    const [movies, setMovies] = useState([]);

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
    });

   
    
    return(
         
        <Slider {...config}>
       {movies?.map(movie => {
        return   <div className="wrapper"><div key={movie._id} className="img-card">
                           
            <div className="imghover"> <img className="img" id="img" src={'http://image.tmdb.org/t/p/w500/'+ movie.poster_path} alt='poster_path'/>
             
            <div className='movie-card' id="movie-card">
             <div className='title'><p><strong>{movie.title}</strong></p></div>
             <div className='popularity'><strong>Popularidad:</strong> {movie.popularity}</div><br></br>
             <div className='vote'><strong>Precio:</strong> {movie.vote_average} €</div>
             <div className="rentButtonBox" id="rentButtonBox">
                           <button type="button" className="rentButton"><b>Alquilar</b></button>
                           
                           <button type="button" className="infoButton"><b>+Info</b></button>
                       </div>
             </div></div>

             
             
             </div></div>
       })}
   
   </Slider>
   
   )
   
   }