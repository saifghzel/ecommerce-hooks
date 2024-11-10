import "./App.css";
import Entete from "./composant/Entete";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./data.js";
import { staticproducts } from "./data.js";
import UsercardList from "./utilisateur/UsercardList.jsx";
import AdminCardList from "./admin/AdminCardList.jsx";

import AdminAddProduct from "./admin/AdminAddProduct.jsx";

function App() {
  const [user, setUser] = useState({
    name: "Saif Eddine Ghzel",
    role: "admin",
    image: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
  });
  const [products, setProducts] = useState(staticproducts);
  const handleRole = (srole) => setUser({ ...user, role: srole });
  const handleDelete = (idcarte) => {
    setProducts(products.filter((el) => el.id !== idcarte));
  };
  const handleEdit = (editedProduct) => {
    setProducts(
      products.map((el) => (el.id === editedProduct.id ? editedProduct : el))
    );
  };
  const handleAdd = (newproduct) => {
    setProducts([...products, newproduct]);
  };
  const [cart, setCart] = useState([]);

  const handleAddCart = (product) => {
    let verification = cart.find((el) => el.id === product.id);
    verification
      ? setCart(
          cart.map((el) =>
            el.id === product.id ? { ...el, quantity: el.quantity + 1 } : el
          )
        )
      : setCart([...cart, { ...product, quantity: 1 }]);
  };
  const handleInc = (clickedid) => {
    setCart(
      cart.map((el) =>
        el.id === clickedid ? { ...el, quantity: el.quantity + 1 } : el
      )
    );
  };
  const handleDec = (clickedid) => {
    setCart(
      cart.map((el) =>
        el.id === clickedid ? { ...el, quantity: el.quantity - 1 } : el
      )
    );
  };
  return (
    <div className="App">
      <Entete
        user={user}
        handleRole={handleRole}
        handleInc={handleInc}
        handleDec={handleDec}
        cart={cart}
      />
      {user.role === "admin" ? (
        <div>
          <AdminCardList
            handleDelete={handleDelete}
            products={products}
            handleEdit={handleEdit}
          />
          <AdminAddProduct handleAdd={handleAdd} products={products} />
        </div>
      ) : user.role === "user" ? (
        <div>
          <UsercardList
            cart={cart}
            handleAddCart={handleAddCart}
            products={products}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
