import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../store/productSlice";
const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [aProduct, setAproduct] = useState({});
  console.log(aProduct);
  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct(aProduct));
    setAproduct({ name: "", price: "" });
  };
  return (
    <div>
      <h1>Add a Product</h1>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) =>
            setAproduct((prev) => ({ ...prev, name: e.target.value }))
          }
          required
          value={aProduct.name}
        />
        <input
          type="number"
          placeholder="price"
          onChange={(e) =>
            setAproduct((prev) => ({ ...prev, price: e.target.value }))
          }
          required
          value={aProduct.price}
        />
        <button>Add</button>
      </form>
      <h3> List of Products</h3>
      {products.map((product) => (
        <ul
          key={product.id}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <li>
            {product.name} price: {product.price} $
          </li>
          <button onClick={() => dispatch(removeProduct(product.id))}>
            remove
          </button>
        </ul>
      ))}
    </div>
  );
};
export default Products;
