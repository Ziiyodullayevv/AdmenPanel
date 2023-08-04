import { styled } from "styled-components";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as trush } from "../../assets/icons/delete.svg";

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

const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--c2);
  border: 1px solid var(--c3);
  border-radius: 5px;
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &:active {
    transform: scale(0.9);
  }
`;
const Edit = styled(edit)`
  width: 16px;
  height: auto;
  & path {
    fill: blue;
    width: 200px;
  }
  :hover {
    cursor: pointer;
  }
`;
const Trush = styled(trush)`
  width: 16px;
  height: auto;
  & path {
    fill: red;
  }
  :hover {
    cursor: pointer;
  }
`;

export { Wrapper, Action, Edit, Trush, Title, Btn };
