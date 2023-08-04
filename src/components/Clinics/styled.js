import { styled } from "styled-components";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as trush } from "../../assets/icons/delete.svg";
import { ReactComponent as close } from "../../assets/icons/close.svg";

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

const Modal = styled.div`
  display: ${(prop) => (prop.display ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const AddModal = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-items: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 400px;
  background-color: #fff;
  padding: 35px;
`;

const Close = styled(close)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

const Input = styled.input`
  min-width: 200px;
  height: 35px;
  padding: 0 10px;
`;

const Button = styled.button`
  width: 140px;
  height: 40px;
`;

export {
  Wrapper,
  Action,
  Edit,
  Trush,
  Title,
  Btn,
  Modal,
  AddModal,
  Input,
  Close,
  Button,
};
