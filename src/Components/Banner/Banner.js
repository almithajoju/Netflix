import React, { useEffect,useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios';
import './Banner.css'



function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[0])
        setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
     })
    
    }, [])
    
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})`}}className='banner'>
      <div className="fade_content">
       <div className='content'>
         <h1 className="title">{movie ? movie.title ? movie.title : movie.name : ''}</h1>
         <div className='banner_button'>
            <button className='button'><i className="fa fa-play"></i>Play</button>
            <button className='button'><i className="fa fa-bars"></i>My List</button>
         </div>
         <h1 className='description'>{movie ? movie.overview:""}</h1>
        </div>
      </div>
       
        
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner