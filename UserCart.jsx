import { Offcanvas, Table } from "react-bootstrap";
import CartItem from "./CartItem";

const UserCart = ({
  cart,
  show,
  handleClose,
  handleShow,
  handleInc,
  handleDec,
}) => {
  return (
    <div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <h4>Cart is empty</h4>
          ) : (
            <Table bordered={true} stripped={true}>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Final Price</th>
              </tr>
              {cart.map((el) => (
                <CartItem
                  key={el.id}
                  el={el}
                  handleInc={handleInc}
                  handleDec={handleDec}
                />
              ))}
            </Table>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default UserCart;
