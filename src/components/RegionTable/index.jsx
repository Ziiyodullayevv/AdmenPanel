import React from "react";
import { Table } from "antd";
import { Edit, Trush, Wrapper } from "./styled";
const dataSource = [
  {
    id: "1",
    key: 1,
    felial: "Toshkent",
    fullName: "Mike Smith",
    age: 32,
    address: "10 Downing Street",
    edit: (
      <Wrapper>
        <Edit />
      </Wrapper>
    ),
    delete: (
      <Wrapper>
        <Trush />
      </Wrapper>
    ),
  },
  {
    id: "2",
    key: 2,
    felial: "Toshkent",
    fullName: "Mike Smith",
    age: 32,
    address: "10 Downing Street",
    edit: (
      <Wrapper>
        <Edit />
      </Wrapper>
    ),
    delete: (
      <Wrapper>
        <Trush />
      </Wrapper>
    ),
  },
  {
    id: "3",
    key: 3,
    felial: "Toshkent",
    fullName: "Mike Smith",
    age: 32,
    address: "10 Downing Street",
    edit: (
      <Wrapper>
        <Edit />
      </Wrapper>
    ),
    delete: (
      <Wrapper>
        <Trush />
      </Wrapper>
    ),
  },
  {
    id: "4",
    key: 4,
    felial: "Toshkent",
    fullName: "Mike Smith",
    age: 32,
    address: "10 Downing Street",
    edit: (
      <Wrapper>
        <Edit />
      </Wrapper>
    ),
    delete: (
      <Wrapper>
        <Trush />
      </Wrapper>
    ),
  },
  {
    id: "5",
    key: 5,
    felial: "Toshkent",
    fullName: "Mike Smith",
    age: 32,
    address: "10 Downing Street",
    edit: (
      <Wrapper>
        <Edit />
      </Wrapper>
    ),
    delete: (
      <Wrapper>
        <Trush />
      </Wrapper>
    ),
  },
  {
    id: "6",
    key: 6,
    felial: "Toshkent",
    fullName: "Mike Smith",
    age: 32,
    address: "10 Downing Street",
    edit: (
      <Wrapper>
        <Edit />
      </Wrapper>
    ),
    delete: (
      <Wrapper>
        <Trush />
      </Wrapper>
    ),
  },
  {
    id: "7",
    key: 7,
    felial: "Toshkent",
    fullName: "Mike Smith",
    age: 32,
    address: "10 Downing Street",
    edit: (
      <Wrapper>
        <Edit />
      </Wrapper>
    ),
    delete: (
      <Wrapper>
        <Trush />
      </Wrapper>
    ),
  },
];

const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "name",
  },
  {
    title: "Feliallar",
    dataIndex: "felial",
    key: "name",
  },

  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "last",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Edit",
    dataIndex: "edit",
    key: "address",
  },
  {
    title: "Delete",
    dataIndex: "delete",
    key: "address",
  },
];

const RegionTable = () => {
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default RegionTable;
