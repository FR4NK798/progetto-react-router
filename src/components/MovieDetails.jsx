import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

const MovieDeatails = () => {
  const [movieObj, setMovieObj] = useState(null);

  const params = useParams();
  console.log("PARAMS", params.movieId);
  const navigate = useNavigate();
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

        setMovieObj(object);
        // console.log("object dopo state titolo", object.Search[0].Title);
        // console.log("this state movies: ", this.state.movies);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  useEffect(() => {
    fetchMovies();
    console.log("useEffect");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {movieObj && (
        <Container>
          <Row>
            <Col>
          <img src={movieObj.Poster} />
          </Col>
          <Col>
          <h1 className="text-light">{movieObj.Title}</h1>
          <h2>{movieObj.Actors}</h2>

          <h2>{movieObj.Awards}</h2>

          <h2>{movieObj.BoxOffice}</h2>

          <h2>{movieObj.Country}</h2>

          <h2>{movieObj.Director}</h2>

          <h2>{movieObj.Genre}</h2>
          </Col>
          </Row>
          </Container>
        
      )}
    </>
  );
};
export default MovieDeatails;
