import React, { useEffect ,useState} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from "../../axios.js"
import { imageURL,API_KEY} from '../../constents/constans.js'



function RowPost(props) {
  const [movies, setmovies] = useState([])
  // const [id,SetID] = useState('')
  useEffect(() => {
    axios.get(props.url).then(Response =>{
      console.log(Response.data)
      setmovies(Response.data.results) 
    })
  }, [])
  const id=1
  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
  
    const HandleMovieID = (id)=> {
      console.log(id)
      axios.get(`Movie/${id}/Videos?api_key=${API_KEY}&language=en-US`).then(Response=>{console.log(Response.data)})
      if(Response.data.results.length!==0){
        id(Response.data.results[0])
      }

    }
  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className='posters'>
        {movies.map((obj)=>
                        <img onClick={()=> HandleMovieID(obj.id)} className= {props.isSmall ? 'smallpost' : 'post'} alt='post' src={`${imageURL+obj.backdrop_path}`} />

        )} 
            
      </div>
      { id  &&     <Youtube opts = {opts} videoId={id.key}/>}
    </div>
  )
}

export default RowPost
