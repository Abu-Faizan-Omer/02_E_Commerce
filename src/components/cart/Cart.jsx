import { useContext } from "react";
import styles from "./Cart.module.css";
import { AllContextapi } from "../context/ContextProvider";
import ReactDOM from "react-dom";

function Cart() {
  const { cartItems, isModalOpen, setIsModalOpen, removeFromCart, updateQuantity } = useContext(AllContextapi);

  return ReactDOM.createPortal(
    <div className={styles.cartOverlay} onClick={() => setIsModalOpen(false)}>
      <div className={styles.cartContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>
          Close
        </button>
        
        <h1>Shopping Cart</h1>
        
        <div className={styles.heading}>
          <h4>Item</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Total</h4>
        </div>
        
        <div className={styles.cartItemsList}>
          {cartItems.length === 0 ? 
          (<p className={styles.emptyCart}>Your cart is empty</p>) : 
          (cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.imageUrl} alt={item.title} className={styles.itemImg} />
                <h4>{item.title}</h4>
                <p>${item.price}</p>
                <div className={styles.quantityControls}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span><h3>{item.quantity}</h3></span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <button 
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        
        <div className={styles.cartFooter}>
          <h3>Total: ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</h3>
          <button className={styles.purchaseBtn}>Purchase</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Cart;
