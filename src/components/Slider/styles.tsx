import { styled } from "styled-components";
import { theme } from "../../ThemeStyle";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px;
`

export const OptionsList = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  .notActive{
    border: 0;
    border-radius: 20px;
    padding: 10px;
    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.white};
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;
  }

  .active{
    border: 0;
    border-radius: 20px;
    padding: 10px;
    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.white};
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;
    background-color:${theme.colors.white};
    color: ${theme.colors.darkerBlue};
    scale: 1.2;
    transition: 0.6s; 
  }

  .notActive:hover{
      scale: 1.2;
      transition: 0.5s;
    } 
`