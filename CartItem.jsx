import React from "react";
import { Button, Carousel } from "react-bootstrap";

const CartItem = ({ el, handleInc, handleDec }) => {
  return (
    <div>
      <tr>
        <td>
          <Carousel
            style={{ width: "100px" }}
            controls={false}
            indicators={false}
            interval={2000}
          >
            {el.imageUrl.map((url, index) => (
              <Carousel.Item>
                <img width={"100%"} src={url} alt={index} key={index} />
              </Carousel.Item>
            ))}
          </Carousel>
        </td>
        <td style={{ width: "150px" }}>{el.name}</td>
        <td>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="outline-dark"
              style={{ height: "40px", width: "40px" }}
              onClick={() => handleInc(el.id)}
            >
              +
            </Button>

            <p
              style={{
                lineHeight: "100%",
                alignSelf: "center",
                margin: "15px",
              }}
            >
              {el.quantity}
            </p>
            <Button
              variant="outline-dark"
              style={{
                height: "40px",
                width: "40px",
                textAlign: "center",
                textJustify: "center",
              }}
              onClick={() => {
                if (el.quantity > 1) {
                  handleDec(el.id);
                }
              }}
            >
              -
            </Button>
          </div>
        </td>
      </tr>
    </div>
  );
};

export default CartItem;
