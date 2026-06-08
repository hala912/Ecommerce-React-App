import styles from "./cart.module.css";
import Logo from "../../../assets/cart.svg";
import { useSelector } from "react-redux";
import { getCartTotalQuantity } from "../../../redux/cartslice/cartslice";
const Cart = () => {

const totalQuantity = useSelector(getCartTotalQuantity);
  return (
    <div className={styles.cartcontainer}>
       <span className={styles.cartitem}>{totalQuantity}</span>
      <img src={Logo} alt="Cart" className={styles.carticon} />

    </div>
  );
};

export default Cart;