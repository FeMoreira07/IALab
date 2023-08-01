import { Container, OptionsList } from "./styles";
import { useState } from "react";

interface ButtonData {
  button: number;
  status: string;
}



export function Slider() {
  const [activeOrNot, setActiveOrNot] =  useState<ButtonData[]>([{
    button: 1,
    status: "active"
  },{
    button: 2,
    status: "notActive"
  },{
    button: 3 ,
    status: "notActive"
  }])


  function activeButton(index: number) {
    setActiveOrNot((prevData) =>
      prevData.map((info) => ({
        ...info,
        status: info.button === index + 1 ? "active" : "notActive"
      }))
    );
  }

  return (
   <Container>
    <OptionsList>
      <button className={activeOrNot[0].status} onClick={()=> activeButton(0)}>
        About
      </button>
      <button className={activeOrNot[1].status} onClick={()=> activeButton(1)}>
        How it Works
      </button>
      <button className={activeOrNot[2].status} onClick={()=> activeButton(2)}>
        Get start
      </button>
    </OptionsList>
   </Container>
  );
}