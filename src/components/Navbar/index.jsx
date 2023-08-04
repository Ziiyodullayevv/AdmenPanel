import React, { useState } from "react";
import {
  Navigation,
  Wrapper,
  Link,
  Logo,
  LogoDescription,
  Nav,
} from "./styled";
import { navbar } from "../../utils/navbar";
import { Outlet } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <Navigation
        style={{
          width: isOpen ? "250px" : "70px",
          padding: isOpen ? "0 10px" : "0 10px",
          alignItems: isOpen ? "stretch" : "center",
        }}
      >
        <Logo style={{ padding: isOpen ? "15px" : "15px 0" }}>
          <LogoDescription style={{ display: isOpen ? "block" : "none" }}>
            Meddical
          </LogoDescription>
          <div className="menu-card">
            <AiOutlineLeft
              style={{ transform: isOpen ? "rotate(0deg)" : "rotate(180deg)" }}
              onClick={toggle}
              className="icon menu"
            />
          </div>
        </Logo>
        <Nav>
          {navbar.map(({ path, title, hidden, icon }, index) => {
            return (
              !hidden && (
                <Link
                  style={{ padding: isOpen ? "15px" : "15px" }}
                  key={index + 1}
                  to={path}
                >
                  {icon}
                  <p
                    style={{
                      display: isOpen ? "block" : "none",
                    }}
                  >
                    {title}
                  </p>
                </Link>
              )
            );
          })}
        </Nav>
      </Navigation>
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
};

export default Navbar;
