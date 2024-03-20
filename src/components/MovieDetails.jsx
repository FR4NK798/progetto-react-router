import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const MovieDeatails =()=>{

    const[movieObj,setMovieObj]=useState(null)

    const params = useParams()
    console.log('PARAMS', params.movieId)
    const navigate = useNavigate()
    // console.log("navigate", navigate)



  const fetchMovies = () => {
    const endPoint = "http://www.omdbapi.com/?apikey=6af926ba&i=";
    const film = params.movieId;
    const ulrFetch = endPoint + film;
    console.log("film: ", film);
    console.log("url completaaahhh: ", ulrFetch);
    fetch(ulrFetch)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nella chiamata API");
        }
      })
      .then((object) => {
        console.log("object", object);
        // const arrayMoviesSelected = object.Search.slice(0, 6);
        // this.setState({
        //   movies: arrayMoviesSelected,
        // });

        setMovieObj(object)
        // console.log("object dopo state titolo", object.Search[0].Title);
        // console.log("this state movies: ", this.state.movies);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  useEffect(()=>{
    fetchMovies()
    console.log("useEffect")
  },[])

    return(
        <Row>
            <Col>
     
      <Card.Img variant="top" src={movieObj.Poster} style={{ width: '18rem' }}/>
      </Col>
      <Col>
   
        <Card.Title className="text-light">{movieObj.Title}</Card.Title>

        <Card.Text className="text-light">
        {movieObj.Actors}
        </Card.Text>

        <Card.Text className="text-light">
        {movieObj.Awards}
        </Card.Text>

        <Card.Text className="text-light">
        {movieObj.BoxOffice}
        </Card.Text>

        <Card.Text className="text-light">
        {movieObj.Country}
        </Card.Text>

        <Card.Text className="text-light">
        {movieObj.Director}
        </Card.Text>

        <Card.Text className="text-light">
        {movieObj.Genre}
        </Card.Text>

   
        </Col>
    </Row>
    )
}
export default MovieDeatails