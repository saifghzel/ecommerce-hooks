import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AdminAddProduct = ({ el, products, handleAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [remise, setRemise] = useState();
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  //---------------------------------------------
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);
  //---------------------------------------------
  //---------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    const newproduct = {
      id: Math.random(),
      name: name,
      price: price,
      remise: remise,
      likes: 0,
      finPrice: price - (price * remise) / 100,
      imageUrl: [img1, img2, img3, img4, img5].filter((el) => el !== ""),
      description: description,
    };

    handleClose();
    handleAdd(newproduct);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add a New Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD PRODUCT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" onSubmit={handleSubmit}>
            <h2> Product Descriptions</h2>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="remise"
              value={remise}
              onChange={(e) => setRemise(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <hr />
            <h2>Image Description</h2>
            <input
              type="url"
              placeholder="img1"
              value={img1}
              onChange={(e) => setImg1(e.target.value)}
              required
            />
            <input
              type="url"
              placeholder="img2"
              value={img2}
              onChange={(e) => setImg2(e.target.value)}
            />
            <input
              type="url"
              placeholder="img3"
              value={img3}
              onChange={(e) => setImg3(e.target.value)}
            />
            <input
              type="url"
              placeholder="img4"
              value={img4}
              onChange={(e) => setImg4(e.target.value)}
            />
            <input
              type="url"
              placeholder="img5"
              value={img5}
              onChange={(e) => setImg5(e.target.value)}
            />
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminAddProduct;
