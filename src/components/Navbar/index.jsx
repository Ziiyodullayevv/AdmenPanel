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

const Navbar = () => {
  return (
    <div className="container">
      <Wrapper>
        <Navigation>
          <Logo>
            <Img src={yuksalish} alt="logo" />
            <LogoDescription>Admin Panel</LogoDescription>
          </Logo>
          <Nav>
            <Link>Biz haqimizda</Link>
            <Link>Biz haqimizda</Link>
            <Link>Biz haqimizda</Link>
            <Link>Biz haqimizda</Link>
          </Nav>
        </Navigation>
      </Wrapper>
    </div>
  );
};

export default Navbar;
