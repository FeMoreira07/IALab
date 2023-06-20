import { styled } from "styled-components";

export const Container = styled.div`
  @keyframes slide-down {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: 100px;
    }
  }

  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  
  align-items: center;
  justify-content: space-around;
  animation: slide-down 1s ease-out;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    width: 50px;
    height: 30px;
  }

  h1 {
    font-size: 25px;
  }
`;

export const ButtonsList = styled.ul`
  display: flex;
  list-style: none;
  gap: 100px;
`;
