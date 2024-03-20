import { Container } from "react-bootstrap";
import HeaderNetflix from "./HeaderNetflix";
import CarouselNetflix from "./CarouselNetflix";

const ContainerCarousel = () => {
  return (
    <>
      <Container fluid className="px-4">
        <HeaderNetflix></HeaderNetflix>

        <CarouselNetflix movie="star%20wars" titleSection="Trending Now"></CarouselNetflix>

        <CarouselNetflix movie="resident%20evil" titleSection="Watch it Again"></CarouselNetflix>

        <CarouselNetflix movie="transformers" titleSection="New Releases"></CarouselNetflix>
      </Container>
    </>
  );
};

export default ContainerCarousel;
