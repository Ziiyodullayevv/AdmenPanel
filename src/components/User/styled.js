import { styled } from "styled-components";

const Wrapper = styled.div`
  background-color: var(--c2);
  padding: 0 50px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  padding: 20px 0;
  color: var(--t1);
`;

const Btn = styled.button`
  background-color: var(--c4);
  color: var(--c1);
  padding: 15px 30px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export { Wrapper, Title, Btn };
