import styles from "./cart.module.css";
import Logo from "../../../assets/cart.svg";
const Cart = () => {
  return (
    <div className={styles.cartcontainer}>
       <span className={styles.cartitem}>0</span>
      <img src={Logo} alt="Cart" className={styles.carticon} />

    </div>
  );
};

export default Cart;