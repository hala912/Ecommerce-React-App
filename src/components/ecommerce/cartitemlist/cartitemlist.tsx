import CartItem from "../shoppingcartItem/CartItem";
import { productshared } from "@schemas/product";

interface CartItemListProps {
  products: (productshared & { quantity: number })[];
  changeQuantityHandler?: (id: number, quantity: number) => void;
  removeItemHandler?: (id: number) => void;
}

const  CartItemList = ({
  products,
  changeQuantityHandler,
  removeItemHandler,
}: CartItemListProps) => {
  const renderList = products.map((el) => (
    <CartItem
      key={el.id}
      {...el}
      changeQuantityHandler={changeQuantityHandler}
      removeItemHandler={removeItemHandler}
    />
  ));

  return <div>{renderList}</div>;
};

export default CartItemList;