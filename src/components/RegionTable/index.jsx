import React, { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import { Edit, Trush, Wrapper } from "./styled";

// const dataSource = [
//   {
//     id: "1",
//     key: 1,
//     felial: "Toshkent",
//     fullName: "Mike Smith",
//     age: 32,
//     address: "10 Downing Street",
//     edit: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "start",
//           alignItems: "center",
//           gap: "1rem",
//         }}
//       >
//         <Wrapper>
//           <Edit />
//         </Wrapper>
//         <Wrapper>
//           <Trush />
//         </Wrapper>
//       </div>
//     ),
//   },
//   {
//     id: "2",
//     key: 2,
//     felial: "Toshkent",
//     fullName: "Mike Smith",
//     age: 32,
//     address: "10 Downing Street",
//     edit: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "start",
//           alignItems: "center",
//           gap: "1rem",
//         }}
//       >
//         <Wrapper>
//           <Edit />
//         </Wrapper>
//         <Wrapper>
//           <Trush />
//         </Wrapper>
//       </div>
//     ),
//   },
//   {
//     id: "3",
//     key: 3,
//     felial: "Toshkent",
//     fullName: "Mike Smith",
//     age: 32,
//     address: "10 Downing Street",
//     edit: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "start",
//           alignItems: "center",
//           gap: "1rem",
//         }}
//       >
//         <Wrapper>
//           <Edit />
//         </Wrapper>
//         <Wrapper>
//           <Trush />
//         </Wrapper>
//       </div>
//     ),
//   },
//   {
//     id: "4",
//     key: 4,
//     felial: "Toshkent",
//     fullName: "Mike Smith",
//     age: 32,
//     address: "10 Downing Street",
//     edit: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "start",
//           alignItems: "center",
//           gap: "1rem",
//         }}
//       >
//         <Wrapper>
//           <Edit />
//         </Wrapper>
//         <Wrapper>
//           <Trush />
//         </Wrapper>
//       </div>
//     ),
//   },
//   {
//     id: "5",
//     key: 5,
//     felial: "Toshkent",
//     fullName: "Mike Smith",
//     age: 32,
//     address: "10 Downing Street",
//     edit: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "start",
//           alignItems: "center",
//           gap: "1rem",
//         }}
//       >
//         <Wrapper>
//           <Edit />
//         </Wrapper>
//         <Wrapper>
//           <Trush />
//         </Wrapper>
//       </div>
//     ),
//   },
//   {
//     id: "6",
//     key: 6,
//     felial: "Toshkent",
//     fullName: "Mike Smith",
//     age: 32,
//     address: "10 Downing Street",
//     edit: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "start",
//           alignItems: "center",
//           gap: "1rem",
//         }}
//       >
//         <Wrapper>
//           <Edit />
//         </Wrapper>
//         <Wrapper>
//           <Trush />
//         </Wrapper>
//       </div>
//     ),
//   },
//   {
//     id: "7",
//     key: 7,
//     felial: "Toshkent",
//     fullName: "Mike Smith",
//     age: 32,
//     address: "10 Downing Street",
//     edit: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "start",
//           alignItems: "center",
//           gap: "1rem",
//         }}
//       >
//         <Wrapper>
//           <Edit />
//         </Wrapper>
//         <Wrapper>
//           <Trush />
//         </Wrapper>
//       </div>
//     ),
//   },
//   {
//     id: "8",
//     key: 8,
//     felial: "Toshkent",
//     fullName: "Mike Smith",
//     age: 32,
//     address: "10 Downing Street",
//     edit: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "start",
//           alignItems: "center",
//           gap: "1rem",
//         }}
//       >
//         <Wrapper>
//           <Edit />
//         </Wrapper>
//         <Wrapper>
//           <Trush />
//         </Wrapper>
//       </div>
//     ),
//   },
//   {
//     id: "9",
//     key: 9,
//     felial: "Toshkent",
//     fullName: "Mike Smith",
//     age: 32,
//     address: "10 Downing Street",
//     edit: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "start",
//           alignItems: "center",
//           gap: "1rem",
//         }}
//       >
//         <Wrapper>
//           <Edit />
//         </Wrapper>
//         <Wrapper>
//           <Trush />
//         </Wrapper>
//       </div>
//     ),
//   },
//   {
//     id: "10",
//     key: 10,
//     felial: "Toshkent",
//     fullName: "Mike Smith",
//     age: 32,
//     address: "10 Downing Street",
//     edit: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "start",
//           alignItems: "center",
//           gap: "1rem",
//         }}
//       >
//         <Wrapper>
//           <Edit />
//         </Wrapper>
//         <Wrapper>
//           <Trush />
//         </Wrapper>
//       </div>
//     ),
//   },
//   {
//     id: "11",
//     key: 10,
//     felial: "Toshkent",
//     fullName: "Mike Smith",
//     age: 32,
//     address: "10 Downing Street",
//     edit: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "start",
//           alignItems: "center",
//           gap: "1rem",
//         }}
//       >
//         <Wrapper>
//           <Edit />
//         </Wrapper>
//         <Wrapper>
//           <Trush />
//         </Wrapper>
//       </div>
//     ),
//   },
// ];

// const columns = [
//   {
//     title: "id",
//     dataIndex: "id",
//     key: "name",
//   },
//   {
//     title: "Feliallar",
//     dataIndex: "felial",
//     key: "name",
//   },

//   {
//     title: "Full Name",
//     dataIndex: "fullName",
//     key: "last",
//   },

//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//   },
//   {
//     title: "Action",
//     dataIndex: "edit",
//     key: "address",
//   },
// ];

const RegionTable = () => {
  const [columns, setColumns] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  const dataType = "posts";

  useEffect(() => {
    fetch(`https://dummyjson.com/${dataType}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const list = result[dataType] || [];
        const firstObject = list[0] || {};
        const cols = [];

        for (let key in firstObject) {
          let render = (value) => {
            return <span>{`${value}`}</span>;
          };

          if (typeof firstObject[key] === "object") {
            if (Array.isArray(firstObject[key])) {
              render = (value) => {
                return (
                  <span>
                    {value.map((tags) => {
                      return <Tag>{tags}</Tag>;
                    })}
                  </span>
                );
              };
            } else {
              render = (value) => {
                return (
                  <span>
                    {Object.keys(value).map((key) => {
                      return (
                        <span>
                          {key}:{value[key]}
                        </span>
                      );
                    })}
                  </span>
                );
              };
            }
          }

          const col = {
            title: key,
            dataIndex: key,
            render: render,
          };
          cols.push(col);
        }
        setColumns(cols);
        setDataSource(list);
      });
  }, []);

  return (
    <>
      <div className="table-card">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </>
  );
};

export default RegionTable;
