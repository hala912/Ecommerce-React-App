import { Button } from "react-bootstrap";
import styles from "./product.module.css";
import type { productshared } from "@schemas/product.ts";
const { product, productImg } = styles;

const Product = ({ name, price, img }: productshared) => {
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
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;