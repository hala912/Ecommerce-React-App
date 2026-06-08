import { Button } from "react-bootstrap";
import styles from "./product.module.css";
import type { productshared } from "@schemas/product.ts";
import { addToCart } from "@redux/cartslice/cartslice";
const { product, productImg } = styles;
import { useDispatch } from "react-redux";
const Product = ({ id,name, price, img }: productshared) => {
  const dispatch = useDispatch();

  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src={img}
          alt={name}
          className="img-fluid"
        />
      </div>
      <h2>{name}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" style={{ color: "white" }}
      onClick={() => {
        dispatch(addToCart(id));
      }}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default Product;