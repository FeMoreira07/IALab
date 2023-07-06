import { styled } from "styled-components";

// Banner component
export const Banner = styled.div`
  display: flex;
  align-items: center;
  padding: 90px;
  overflow: hidden;

  @media (max-width: 570px) {
    padding: 50px;
  }
`;

// TitleSection component
export const TitleSection = styled.div`
  @keyframes ShowFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

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

  .FirstText {
    animation: ShowFromLeft 1.2s forwards;
  }
  .SecondText{
    animation: ShowFromLeft 1.7s forwards;
  }
  .ThirdText{
    animation: ShowFromLeft 2s forwards;
  }
`;

// ImageSection component
export const ImageSection = styled.div`
  @keyframes ShowFromRight {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  animation: ShowFromRight 2s forwards;

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
