import React, { useState, useEffect } from "react";
import { Title, Wrapper, Btn, Action, Edit, Trush } from "./styled";
import Tables from "../Table";
import Search from "../Search";
import { useNavigate } from "react-router-dom";

const Region = () => {
  // const navigate = useNavigate();
  const [dataSource, setDataSource] = useState([]);
  // const dataType = "users";

  // // filials data:
  // useEffect(() => {
  //   fetch(`https://dummyjson.com/${dataType}`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       const list = result[dataType] || [];
  //       setDataSource(list);
  //     });
  // }, []);

  const data = [
    { id: 1, name: "Akobir", lastName: "Ziyodullayev" },
    { id: 2, name: "Jahongir", lastName: "Ziyodullayev" },
    { id: 3, name: "Abdulaziz", lastName: "Ziyodullayev" },
  ];

  useEffect(() => {
    setDataSource(data);
  }, []);

  // columns data:
  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Filiallar",
      dataIndex: "name",
      // render: (text) => (
      //   <div onClick={() => navigate("/region/branch")} className="click">
      //     {text}
      //   </div>
      // ),
    },
    { title: "Address", dataIndex: "lastName" },
    {
      title: "Action",
      render: (record) => (
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
          <Action onClick={() => onDeleteUsers(record)} >
            <Trush />
          </Action>
        </div>
      ),
    },
  ];

  // add users:
  const onAddUsers = () => {
    const newStudents = {
      name: "John",
      lastName: "Doe",
    };
    setDataSource((pre) => {
      return [...pre, { ...newStudents, id: dataSource.length + 1 }];
    });
  };

  // delete users:
  const onDeleteUsers = (record) => {
    setDataSource((data) => {
      return data.filter((data) => data.id !== record.id);
    });
  };

  return (
    <>
      <Wrapper>
        <Title>Filiallarimiz</Title>
        <Search />
        <Tables dataSource={dataSource} columns={columns} />
      </Wrapper>
      <div className="btn-card">
        <Btn onClick={() => onAddUsers()}>Qo'shing</Btn>
      </div>
    </>
  );
};

export default Region;
