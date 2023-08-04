import React, { useState, useEffect } from "react";
import { Title, Wrapper, Btn, Action, Edit, Trush } from "./styled";
import Tables from "../Table";
import Search from "../Search";

const Users = () => {
  const [dataSource, setDataSource] = useState([]);

  const dataType = "users";

  useEffect(() => {
    fetch(`https://dummyjson.com/${dataType}`)
      .then((res) => res.json())
      .then((result) => {
        const list = result[dataType] || [];
        setDataSource(list);
      });
  }, []);

  const columns = [
    { title: "#", dataIndex: "id" },
    { title: "Ismi", dataIndex: "firstName" },
    { title: "Familiyasi", dataIndex: "lastName" },
    { title: "Yoshi", dataIndex: "age" },
    { title: "Boshlagan kuni", dataIndex: "birthDate" },
    { title: "Guruh rahbari", dataIndex: "maidenName" },
    {
      title: "Action",
      render: () => (
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Action>
            <Edit />
          </Action>
          <Action>
            <Trush />
          </Action>
        </div>
      ),
    },
  ];
  return (
    <>
      <Wrapper>
        <Title>Barcha O'quvchilar ro'yhati</Title>
        <Search />
        <Tables dataSource={dataSource} columns={columns} />
      </Wrapper>
      <div className="btn-card">
        <Btn>Qo'shing</Btn>
      </div>
    </>
  );
};

export default Users;
