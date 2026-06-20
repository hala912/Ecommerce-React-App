import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import CartItemList from "@components/ecommerce/cartitemlist/cartitemlist";
import CartSubtotal from "@components/ecommerce/cartsubTotal/cartsubtotal";
import { cartItemChangeQuantity, cartItemRemove } from "@redux/cartslice/cartslice";
import actGetProductsByItems from "@redux/cartslice/actions/getproductbyitem";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, productsinfo, loading, error } = useAppSelector(
    (state: any) => state.cart
  );

  useEffect(() => {
    if (Object.keys(items).length > 0) {
      dispatch(actGetProductsByItems());
    }
  }, [dispatch, items]);

  const products = Array.isArray(productsinfo) 
    ? productsinfo.map((el: any) => ({
        ...el,
        quantity: items[el.id || 0] || 0,
      }))
    : [];
 console.log(products);
console.log(productsinfo);
  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch]
  );

  return (
    <>
      <h2>Your Cart</h2>
      {loading === "pending" ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : products.length ? (
        <>
          <CartItemList
            products={products}
            changeQuantityHandler={changeQuantityHandler}
            removeItemHandler={removeItemHandler}
          />
          <CartSubtotal products={products} />
        </>
      ) : (
        <p>Your Cart is empty</p>
      )}
    </>
  );
};

export default Cart;