import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px;
`

export const ImageSection = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 90px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;


  img{
    object-fit: cover;
    width: 95%;
    height: 95%;
    border-radius: 90px;
  }
`