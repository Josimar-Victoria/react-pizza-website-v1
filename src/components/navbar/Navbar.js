import React from "react";
import { Bar, Nav, NavIcon, NavLink } from "./styles";

export default function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bar />
        </NavIcon>
      </Nav>
    </>
  );
}
