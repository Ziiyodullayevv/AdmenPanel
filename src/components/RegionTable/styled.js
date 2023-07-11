import { styled } from "styled-components";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as trush } from "../../assets/icons/delete.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--c5);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &:active {
    transform: scale(0.9);
  }
`;
const Edit = styled(edit)`
  & path {
    fill: blue;
  }
  :hover {
    cursor: pointer;
  }
`;
const Trush = styled(trush)`
  & path {
    fill: red;
  }
  :hover {
    cursor: pointer;
  }
`;

export { Wrapper, Trush, Edit };
