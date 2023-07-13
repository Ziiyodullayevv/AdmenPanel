import React from "react";
import { ImgBox, Input, InputCard, Wrapper, Img } from "./styled";

const Search = () => {
  return (
    <div>
      <Wrapper>
        <InputCard>
          <ImgBox>
            <Img />
          </ImgBox>
          <Input placeholder="Search..." />
        </InputCard>
      </Wrapper>
    </div>
  );
};

export default Search;
