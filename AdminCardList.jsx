import React from "react";
import Admincard from "./Admincard";

const AdminCardList = ({ products, handleDelete, handleEdit }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      {products.map((el) => (
        <Admincard
          handleDelete={handleDelete}
          el={el}
          key={el.id}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default AdminCardList;
