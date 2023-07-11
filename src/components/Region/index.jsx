import React from "react";
import { Title, Wrapper } from "./styled";
import RegionTable from "../RegionTable";

const Region = () => {
  return (
    <Wrapper>
      <Title>Feliallarimiz</Title>
      <RegionTable />
    </Wrapper>
  );
};

export default Region;
