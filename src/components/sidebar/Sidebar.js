import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRouter,
  SideBtnWrap,
} from "./styles";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink>Pizzas</SidebarLink>
        <SidebarLink>Desserts</SidebarLink>
        <SidebarLink>Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRouter>Order Now</SidebarRouter>
      </SideBtnWrap>
    </SidebarContainer>
  );
}
