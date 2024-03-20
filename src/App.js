import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavNetflix from "./components/NavNetflix";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import "./assets/styleNetflix.css";

// import ContainerCarousel from "./components/ContainerCarousel";
import FooterNetflix from "./components/FooterNetflix";
import HeaderNetflix from "./components/HeaderNetflix";
import CarouselNetflix from "./components/CarouselNetflix";

import MovieDetails from "./components/MovieDetails"

import Container from "react-bootstrap/Container";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavNetflix></NavNetflix>
        {/* <ContainerCarousel></ContainerCarousel> */}

        <Routes>
          <Route
            path="/tv-shows"
            element={
              <Container fluid className="px-4">
                <HeaderNetflix></HeaderNetflix>

                <CarouselNetflix
                  movie="star%20wars"
                  titleSection="Trending Now"
                ></CarouselNetflix>
                <CarouselNetflix
                  movie="resident%20evil"
                  titleSection="Watch it Again"
                ></CarouselNetflix>
                <CarouselNetflix
                  movie="transformers"
                  titleSection="New Releases"
                ></CarouselNetflix>
              </Container>
            }
          />
          <Route path="/details/:movieId" element={
            <MovieDetails></MovieDetails>

          }>

          

          </Route>
        </Routes>

        <FooterNetflix></FooterNetflix>
      </BrowserRouter>

      {/* <DefaultNav></DefaultNav> */}
    </>
  );
}

export default App;
