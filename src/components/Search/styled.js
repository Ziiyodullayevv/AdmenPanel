import { styled } from "styled-components";
import { ReactComponent as search } from "../../assets/icons/search.svg";

const Wrapper = styled.div`
  padding: 15px 10px;
  width: 100%;
  display: flex;
  border: 1px solid rgb(239, 239, 239);
  border-bottom: none;
  background-color: var(--c1);
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  z-index: 300;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  border-radius: 10px 10px 0 0;
`;

const InputCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--c2);
  padding: 12px 20px;
  border-radius: 10px;
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
