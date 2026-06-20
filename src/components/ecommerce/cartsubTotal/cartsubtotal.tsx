import { productshared } from "@schemas/product";
import styles from "./cartsubtotal.module.css";

type CartSubtotalPriceProps = { products: (productshared & { quantity?: number })[] };

const CartSubtotalPrice = ({ products }: CartSubtotalPriceProps) => {
  const subtotal = products.reduce((accumulator, el) => {
    const price = el.price;
    const quantity = el.quantity;
    if (quantity && typeof quantity === "number") {
      return accumulator + price * quantity;
    } else {
      return accumulator;
    }
  }, 0);

  return (
    <div className={styles.cartsubtotal}>
      <span className={styles.label}>Subtotal:</span>
      <span className={styles.price}>{subtotal.toFixed(2)} EGP</span>
    </div>
  );
};

export default CartSubtotalPrice;