import React, { useState, useEffect, useRef } from "react";
import {
  Title,
  Wrapper,
  Btn,
  Action,
  Edit,
  Trush,
  Modal,
  AddModal,
  Input,
  Close,
  Button,
} from "./styled";
import Tables from "../Table";
import Search from "../Search";

const Clinics = () => {
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [image, setImage] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const selectedNameRef = useRef();
  const selectedAddressRef = useRef();
  const selectedPhoneNumberRef = useRef();

  const [dataSource, setDataSource] = useState([]);
  const [display, setDisplay] = useState(false);
  const [selected, setSelected] = useState(null);
  const dataType = "data";

  const fetchData = () => {
    fetch("https://shohjahon-sohibov.jprq.live/hospital")
      .then((res) => res.json())
      .then((result) => {
        const list = result[dataType].hospital || [];
        setDataSource(list);
      });
  };
  useEffect(() => fetchData(), []);
  const handleDelete = async (id) => {
    try {
      await fetch(`https://shohjahon-sohibov.jprq.live/hospital/${id}`, {
        method: "DELETE",
      });
      fetchData();
      setDataSource(dataSource.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  const saveChanges = (id) => {
    fetch("https://shohjahon-sohibov.jprq.live/hospital", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        name: selectedNameRef.current?.value,
        address: selectedAddressRef.current?.value,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9h663Unq1oI-5D3gALoy4XwCbO4iNc1yHfsIesqvYmA&s",
        call_center: selectedPhoneNumberRef.current?.value,
      }),
    });
    fetchData();
    setSelected(null);
  };
  const handleAdd = () => {
    fetch("https://shohjahon-sohibov.jprq.live/hospital", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        address,
        img_url: image,
        call_center: phoneNumber,
      }),
    }).then(() => {
      fetchData();
      setName(null);
      setAddress(null);
      setImage(null);
      setPhoneNumber(null);
      setDisplay(false);
    });
  };

  const columns = [
    {
      title: "Nomi",
      render: (item) => {
        return selected?.id === item.id ? (
          <Input defaultValue={selected?.name} ref={selectedNameRef} />
        ) : (
          <span>{item.name}</span>
        );
      },
    },
    {
      title: "Adress",
      render: (item) => {
        return selected?.id === item.id ? (
          <Input defaultValue={selected?.address} ref={selectedAddressRef} />
        ) : (
          <span>{item.address}</span>
        );
      },
    },
    {
      title: "Telefon raqami",
      render: (item) => {
        return selected?.id === item.id ? (
          <Input
            defaultValue={selected?.call_center}
            ref={selectedPhoneNumberRef}
          />
        ) : (
          <span>{item.call_center}</span>
        );
      },
    },
    {
      title: "Action",
      render: (item) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {item.id === selected?.id ? (
              <>
                <>
                  <button onClick={() => saveChanges(item.id)}>Save</button>
                  <button onClick={() => setSelected(null)}>Cancel</button>
                </>
                <Action>
                  <Trush onClick={() => handleDelete(item.id)} />
                </Action>
              </>
            ) : (
              <>
                <Action>
                  <Edit onClick={() => setSelected(item)} />
                </Action>
                <Action>
                  <Trush onClick={() => handleDelete(item.id)} />
                </Action>
              </>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Wrapper>
        <Title>Shifoxonalar</Title>
        <Search />
        <Tables dataSource={dataSource} columns={columns} />
      </Wrapper>
      <div className="btn-card">
        <Btn onClick={() => setDisplay(!display)}>Qo'shing</Btn>
      </div>
      <Modal display={display}>
        <AddModal>
          <Input
            value={name}
            placeholder="Nomi"
            onChange={({ target: { value } }) => setName(value)}
          />
          <Input
            value={address}
            placeholder="Adress"
            onChange={({ target: { value } }) => setAddress(value)}
          />
          <Input
            value={image}
            placeholder="Rasm manzili"
            onChange={({ target: { value } }) => setImage(value)}
          />
          <Input
            value={phoneNumber}
            placeholder="Telefon raqami"
            onChange={({ target: { value } }) => setPhoneNumber(value)}
          />
          <Close onClick={() => setDisplay(false)} />
          <Button onClick={handleAdd}>Add</Button>
        </AddModal>
      </Modal>
    </>
  );
};
export default Clinics;
