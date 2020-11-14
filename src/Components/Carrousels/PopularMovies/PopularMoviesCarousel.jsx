import './PopularMoviesCarousel.scss';
import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';



function PopularMoviesCarousel() {
   
    const config = {

        dots: false,
        infinite:true,
        adaptativeHeight: false,
        slidesToShow: 6,
        slidesToScroll: 5
        
      };
    
    const [movies,setMovies] = useState([]);
        
    
    useEffect(() => {
          axios.get('http://localhost:3000/showMoviesNewest')
            .then((res) => {
                console.log(res.data)
                setMovies(res.data);
                console.log(setMovies);
    
            }).catch(error => console.log())
     }, []);
     
    
    
     
    
     return(
         
         <Slider {...config}>
        {movies?.map(movie => {
         return   <div className="wrapper"><div key={movie._id} className="img-card">
                            
             <div className="imghover"> <img className="img" id="img" src={'http://image.tmdb.org/t/p/w500/'+ movie.poster_path} alt='poster_path'/>
              
             <div className='movie-card' id="movie-card">
              <div className='title'><p><strong>{movie.title}</strong></p></div>
              <div className='popularity'><strong>Popularidad:</strong> {movie.popularity}</div><br></br>
              <div className='vote'><strong>Valoración/precio:</strong> {movie.vote_average}</div>
              <div className="rentButtonBox">
                            <button type="button" className="rentButton">ALQUILAR</button>
                        </div>
              </div></div>

              
              
              </div></div>
        })}
    
    </Slider>
    
    )
    
    }
    
   

export default PopularMoviesCarousel