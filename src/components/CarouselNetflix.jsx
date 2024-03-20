import { Component } from "react";
import Image from "react-bootstrap/Image";
import {Link} from 'react-router-dom';

class CarouselNetflix extends Component {
  state = {
    movies: [],
  };

  fetchMovies = () => {
    const endPoint = "http://www.omdbapi.com/?apikey=6af926ba&s=";
    const film = this.props.movie;
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
        console.log("object", object.Search);
        const arrayMoviesSelected = object.Search.slice(0, 6);
        this.setState({
          movies: arrayMoviesSelected,
        });
        // console.log("object dopo state titolo", object.Search[0].Title);
        // console.log("this state movies: ", this.state.movies);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  componentDidMount() {
    console.log("ComponentDidMount");

    this.fetchMovies();
  }

  render() {
    return (
      <>
        <h4>{this.props.titleSection}</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {this.state.movies.map((movie) => {
            return (
              <div className="col mb-2 text-center px-1" key={movie.imdbID} style={{ height: "9.5em" }}>
                <Link to={'/details/' + movie.imdbID}>
                <Image
                  src={movie.Poster}
                  className="object-fit-cover"
                  alt="movie picture"
                  width="100%"
                  height="100%"
                  style={{ objectPosition: "top" }}
                />
                </Link>
              </div>
            );
            // width="301px" height="164px"
          })}
        </div>
      </>
    );
  }
}

export default CarouselNetflix;
