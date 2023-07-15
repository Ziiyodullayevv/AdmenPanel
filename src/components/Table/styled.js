import { styled } from "styled-components";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as trush } from "../../assets/icons/delete.svg";

const Wrapper = styled.div`
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

export { Wrapper, Trush, Edit };
