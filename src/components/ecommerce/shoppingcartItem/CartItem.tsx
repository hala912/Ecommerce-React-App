import './CartItem.css';
import { productshared } from '@schemas/product';

interface CartItemProps extends productshared {
  changeQuantityHandler?: (id: number, quantity: number) => void;
  removeItemHandler?: (id: number) => void;
}

const Cartitem = ({
  name,
  price,
  img,
  id,
  quantity = 1,
  changeQuantityHandler,
  removeItemHandler,
}: CartItemProps) => {
    return (
        <div className="cart-item-container">
            <div className="cart-item-card">
                <div className="cart-item-image">
                    <img src={img} alt={name} />
                </div>
                <div className="cart-item-info">
                    <h2 className="cart-item-title">{name}</h2>
                    <p className="cart-item-price">${price}</p>
                    <div className="cart-item-actions">
                        <button className="quantity-btn" onClick={() => changeQuantityHandler?.(id || 0, Math.max(1, quantity - 1))}>-</button>
                        <span className="quantity">{quantity}</span>
                        <button className="quantity-btn" onClick={() => changeQuantityHandler?.(id || 0, quantity + 1)}>+</button>
                        <button className="remove-btn" onClick={() => removeItemHandler?.(id || 0)}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartitem;