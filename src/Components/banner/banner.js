import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from "../../axios.js"
import {API_KEY,imageURL} from '../../constents/constans.js'


function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
   
  axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
    console.log(Response.data.results[0])
    setMovie(Response.data.results[0])
  })
   
  }, [] )
  
  return (
    
    <div className='banner'
      style={{backgroundImage : `url(${movie ? imageURL+movie.backdrop_path : 'nooooo'})`}}>
        <div className='content'>
            <h1 className='tittel'>{movie ? movie.title : "nooooo"}</h1> 
            <div className='banner_button'>
                <button className='button'>play</button>
                <button className='button'>more info</button>
            </div>
            <h1 className='des'>{movie ? movie.overview : "nooooo"}</h1>
        </div>
      <div className="fade"></div>
        
    </div>
  )
}

export default Banner
