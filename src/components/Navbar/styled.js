import { styled } from "styled-components";

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 25%;
  position: fixed;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
`;

const Navigation = styled.div`
  background-color: var(--c1);
  width: 100%;
  padding: 10px;
  height: 100%;
  border-radius: 10px;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Link = styled.div`
  cursor: pointer;
  border-radius: 10px;
  padding: 15px 10px;
  background-color: var(--c2);
`;

const Logo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.7rem;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--c3);
`;

const Img = styled.img`
  width: 60px;
  border-radius: 50%;
`;

const LogoDescription = styled.h4`
  font-size: 1.5rem;
  font-weight: 20px;
  letter-spacing: -2px;
`;

const Nav = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export { Wrapper, Link, Navigation, Logo, LogoDescription, Img, Nav };
