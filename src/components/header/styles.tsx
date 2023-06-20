import { styled } from "styled-components";

// Container component
export const Container = styled.div`
  @keyframes slide-down {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: 100px;
      opacity: 1;
    }
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  animation: slide-down 1.3s ease-out;
`;

// Title component
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 80px;

  svg {
    width: 50px;
    height: 30px;
  }

  h1 {
    font-size: 25px;
  }

  @media (max-width: 570px) {
    margin-left: 45px;
  }
`;

// ButtonsList component
export const ButtonsList = styled.ul`
  display: flex;
  list-style: none;
  gap: 100px;
  margin-right: 80px;

  @media (max-width: 650px) {
    display: none;
  }
`;
