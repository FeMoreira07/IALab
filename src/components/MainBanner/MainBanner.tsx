import { Banner, ImageSection, TitleSection } from "./styles";
import image from "../../assets/Artifcial.jpg";

export function MainBanner() {
  return (
    <Banner>
      <TitleSection>
        <h1>Visual</h1>
        <h1>Intelligence</h1>
        <h1>Unleashed.</h1>
      </TitleSection>
      <ImageSection>
        <img src={image} alt="BackGroundImage" />
      </ImageSection>
    </Banner>
  );
}
