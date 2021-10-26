import React from "react";
import Navbar from "../navbar/Navbar";
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from "./styles";

export default function Hero() {
  return (
    <>
      <HeroContainer>
        <Navbar />
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
