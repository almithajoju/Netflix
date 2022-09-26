import React,{useState,useEffect} from 'react'
import './RowPost.css';
import Youtube from 'react-youtube'
import axios from '../../axios';
import {imageUrl,API_KEY} from '../../constants/constants';

function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [urlId, seturlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }
  const HandleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if(response.data.results.length!==0){
        seturlId(response.data.results[0])
      }else{
        alert('Currently Unavilable')
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img  onClick={() => HandleMovie(obj.id)} key={obj.id} className='poster' src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )} 
        </div>
        {urlId &&  <Youtube  opts={opts} videoId={urlId.key}></Youtube>}
    </div>
  )
}

export default RowPost