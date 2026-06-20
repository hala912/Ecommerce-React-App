import styles from "./cart.module.css";
import Logo from "../../../assets/cart.svg";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"; 
import { useState , useEffect } from "react";
import { getCartTotalQuantity } from "../../../redux/cartslice/cartslice";
const Cart = () => {

const [pumpAnimation, setPumpAnimation] = useState(false);
const totalQuantity = useSelector(getCartTotalQuantity);
const navigate = useNavigate();
const quantityStyle = `${styles.cartitem} ${
    pumpAnimation ? styles.pumpCartQuantity : ""
  }`;

useEffect(
  () => {
    if (!totalQuantity) return;
    setPumpAnimation(true);
    
    const timer = setTimeout(() => {
      setPumpAnimation(false);
    }, 300);
    return () => clearTimeout(timer);
  },
  [totalQuantity]
);

return (

    <div className={styles.cartcontainer} onClick={() => navigate("/Cart")}>
       <div className={quantityStyle}>
         {totalQuantity}
       </div>
      <img src={Logo} alt="Cart" className={styles.carticon} />
    </div>
  );
};

export default Cart;