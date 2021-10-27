import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import {
  HeroBtn,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
} from "./styles";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
          <HeroItems>
            <HeroH1>Greatest Pizze Ever</HeroH1>
            <HeroP>Redy in 60 seconds</HeroP>
            <HeroBtn>Place Order</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </>
  );
}
