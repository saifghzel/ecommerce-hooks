import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AdminEdit = ({ el, handleEdit }) => {
  const [name, setName] = useState(el.name);
  const [description, setDescription] = useState(el.description);
  const [price, setPrice] = useState(el.price);
  const [remise, setRemise] = useState(el.remise);
  const [img1, setImg1] = useState(el.imageUrl[0]);
  const [img2, setImg2] = useState(el.imageUrl[1] ? el.imageUrl[1] : "");
  const [img3, setImg3] = useState(el.imageUrl[2] ? el.imageUrl[2] : "");
  const [img4, setImg4] = useState(el.imageUrl[3] ? el.imageUrl[3] : "");
  const [img5, setImg5] = useState(el.imageUrl[4] ? el.imageUrl[4] : "");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedProduct = {
      id: el.id,
      name: name,
      price: price,
      remise: remise,
      likes: 0,
      finPrice: price - (price * remise) / 100,
      imageUrl: [img1, img2, img3, img4, img5].filter((el) => el !== ""),
      description: description,
    };
    handleEdit(editedProduct);
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
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

export default AdminEdit;
