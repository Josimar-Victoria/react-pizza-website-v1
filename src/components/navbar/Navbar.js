import React from "react";
import { Bar, Nav, NavIcon, NavLink } from "./styles";

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bar />
        </NavIcon>
      </Nav>
    </>
  );
}
