import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
`;

const Navigation = styled.div`
  top: 0;
  transition: all 100ms linear;
  position: sticky;
  background-color: var(--c1);
  border-right: 1px solid var(--c5);
  display: flex;
  gap: 0.5rem;
  height: 100vh;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .active {
    background-color: var(--c2);
    color: var(--c4);
  }
  :hover {
    background-color: var(--c2);
  }
`;

const Link = styled(NavLink)`
  margin: 0 5px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  color: var(--c3);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.7rem;
  border-bottom: 1px solid var(--c2);
`;

const Img = styled.img`
  width: 60px;
  border-radius: 50%;
`;

const LogoDescription = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  opacity: 0.7;
  color: var(--c4);
`;

export { Wrapper, Link, Navigation, Logo, LogoDescription, Img, Nav };
