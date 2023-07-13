import React from "react";
import { Title, Wrapper, Btn } from "./styled";
import RegionTable from "../RegionTable";
import Search from "../Search";
const Region = () => {
  return (
    <>
      <Wrapper>
        <Title>Barcha O'quvchilarimiz</Title>
        <Search />
        <RegionTable />
      </Wrapper>
      <div className="btn-card">
        <Btn>Qo'shing</Btn>
      </div>
    </>
  );
};

export default Region;
