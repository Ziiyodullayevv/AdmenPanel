import React from "react";
import { Wrapper, Title, AdminCard, AdminCards, Edit, Trush } from "./styled";
const user = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 355656 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 4256565 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 455645 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 1656565 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 454556 },
  { id: 6, lastName: "Melisandre", firstName: "Umar", age: 1554550 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 445454 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 345456 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 6545445 },
];

const Admin = () => {
  return (
    <Wrapper>
      <Title>Ruhsat Etilgan Adminlar</Title>
      <AdminCards>
        {user.map((value) => {
          return (
            <AdminCard key={value.id}>
              <div className="id width">
                <span>id: </span>
                {value.id}
              </div>
              <div className="name width">
                <span>First Name: </span>
                {value.firstName}
              </div>
              <div className="name width">
                <span>Last Name: </span> {value.lastName}
              </div>
              <div className="name width">
                <span>Password: </span>
                {value.age}
              </div>
              <Edit />
              <Trush />
            </AdminCard>
          );
        })}
      </AdminCards>
    </Wrapper>
  );
};

export default Admin;
