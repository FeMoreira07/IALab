import { Container, ImageSection } from "./styles";
import image from "../../assets/Brain.jpg";

export function Slider() {
  return (
   <Container>
    <ImageSection> <img src={image} alt="A robotic brain" /></ImageSection>
   </Container>
  );
}