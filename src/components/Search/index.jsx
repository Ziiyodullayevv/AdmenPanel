import React from "react";
import { ImgBox, Input, InputCard, Wrapper, Img } from "./styled";
import Button from "@material-ui/core/Button";

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
        <Button
          style={{
            textTransform: "capitalize",
            padding: "10px 20px",
            color: "var(--c1)",
            background: "var(--c4)",
            borderRadius: "100px",
          }}
        >
          Add User
        </Button>
      </Wrapper>
    </div>
  );
};

export default Search;
