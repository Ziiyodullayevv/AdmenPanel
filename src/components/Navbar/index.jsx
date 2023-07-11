import React from "react";
import {
  Navigation,
  Wrapper,
  Img,
  Link,
  Logo,
  LogoDescription,
  Nav,
} from "./styled";
import yuksalish from "../../assets/icons/yuksalish.png";
import { navbar } from "../../utils/navbar";
import Search from "../Search";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Navigation>
          <Logo>
            <Img src={yuksalish} alt="logo" />
            <LogoDescription>Admin Panel</LogoDescription>
          </Logo>
          <Nav>
            {navbar.map(({ path, title, hidden }, index) => {
              return (
                !hidden && (
                  <Link variant="text" key={index} to={path}>
                    {title}
                  </Link>
                )
              );
            })}
          </Nav>
        </Navigation>
      </Wrapper>
      <Search />
      <Outlet />
    </>
  );
};

export default Navbar;
