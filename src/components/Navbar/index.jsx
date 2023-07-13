import React from "react";
import {
  Navigation,
  Wrapper,
  Img,
  Link,
  Logo,
  LogoDescription,
  Nav,
  LinkWrapper,
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
            {navbar.map(({ path, title, hidden, icon }, index) => {
              return (
                !hidden && (
                  <LinkWrapper>
                    <Link variant="text" key={index} to={path}>
                      {title}
                    </Link>
                    <span>{icon}</span>
                  </LinkWrapper>
                )
              );
            })}
          </Nav>
        </Navigation>
      </Wrapper>
      <Search />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
