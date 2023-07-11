import { styled } from "styled-components";
import { ReactComponent as search } from "../../assets/icons/search.svg";

const Wrapper = styled.div`
  top: 0;
  right: 0;
  position: fixed;
  padding: 10px;
  width: 80%;
  display: flex;
  background-color: var(--c1);
  justify-content: end;
  align-items: center;
  gap: 2rem;
  z-index: 300;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
`;

const InputCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--c5);
  padding: 12px 20px;
  border-radius: 100px;
  gap: 1rem;
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  font-size: 1rem;
  width: 500px;
`;

const ImgBox = styled.div``;

const Img = styled(search)`
  & path {
    fill: var(--c4);
  }
`;

export { Wrapper, InputCard, Input, ImgBox, Img };
