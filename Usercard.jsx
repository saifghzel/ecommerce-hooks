import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";

const Usercard = ({ el, handleAddCart, cart }) => {
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
          <Card.Title style={{ color: "red" }}>{el.name}</Card.Title>
          <Card.Text>{el.description}</Card.Text>
          <Card.Text>price :{el.price}</Card.Text>
          <Card.Text>remise :{el.remise}</Card.Text>
          <Card.Text>
            Finaal price :{el.price - (el.price * el.remise) / 100}
          </Card.Text>
          <Button variant="outline-success" onClick={() => handleAddCart(el)}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Usercard;
