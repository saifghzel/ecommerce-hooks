import React from "react";
import Usercard from "./Usercard";

const UsercardList = ({ handleAddCart, products }) => {
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
        <Usercard handleAddCart={handleAddCart} el={el} key={el.id} />
      ))}
    </div>
  );
};

export default UsercardList;
