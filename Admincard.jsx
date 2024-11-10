import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import AdminEdit from "./AdminEdit";

const Admincard = ({ el, handleDelete, handleEdit }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Carousel controls={false}>
          {el.imageUrl.map((url, index) => (
            <Carousel.Item>
              <img
                width={"100%"}
                src={url}
                alt={index}
                key={index}
                height={"250px"}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>{el.description}</Card.Text>
          <Card.Text>price :{el.price}</Card.Text>
          <Card.Text>remise :{el.remise}</Card.Text>
          <Card.Text>
            Finaal price :{el.price - (el.price * el.remise) / 100}
          </Card.Text>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <AdminEdit handleEdit={handleEdit} el={el} />
            <Button variant="danger" onClick={() => handleDelete(el.id)}>
              Delete{" "}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Admincard;
