import { styled } from "styled-components";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as trush } from "../../assets/icons/delete.svg";

const Wrapper = styled.div`
  margin-top: 20px;
  width: 80%;
  margin-left: 20%;
  background-color: var(--c2);
  padding: 50px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  padding: 20px 0;
`;

const AdminCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AdminCard = styled.div`
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 2rem;
  align-items: center;
  padding: 18px 20px;
  background-color: var(--c1);
`;

const WrapperIcon = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--c5);
  border-radius: 200px;
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
  width: 100px;
  height: auto;
  & path {
    fill: blue;
  }
  :hover {
    cursor: pointer;
  }
`;
const Trush = styled(trush)`
  width: 100px;
  height: auto;
  & path {
    fill: red;
  }
  :hover {
    cursor: pointer;
  }
`;

export { WrapperIcon, Edit, Trush, Wrapper, Title, AdminCards, AdminCard };
