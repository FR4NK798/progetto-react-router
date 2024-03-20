import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const MovieDeatails =()=>{

    const[movieObj,setMovieObj]=useState(null)

    const params = useParams()
    console.log('PARAMS', params)
    const navigate = useNavigate()




    return(
        <h1>Ciaoo</h1>
    )
}
export default MovieDeatails