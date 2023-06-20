import { styled } from "styled-components";

// Banner component
export const Banner = styled.div`
  display: flex;
  align-items: center;
  padding: 90px;

  @media (max-width: 570px) {
    padding: 50px;
  }
`;

// TitleSection component
export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  justify-content: center;

  h1 {
    font-size: 100px;
    margin: 0;

    @media (max-width: 1500px) {
      font-size: 80px;
    }
    @media (max-width: 1085px) {
      font-size: 70px;
    }
    @media (max-width: 466px) {
      font-size: 55px;
    }
  }
`;

// ImageSection component
export const ImageSection = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
    width: 100%;
    border-radius: 90px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
