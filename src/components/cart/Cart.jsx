import { useContext } from "react";
import styles from "./Cart.module.css";
import { AllContextapi } from "../context/ContextProvider";
import ReactDOM from "react-dom";

function Cart() {
  const { cartItems, isModalOpen, setIsModalOpen, removeFromCart, updateQuantity } = useContext(AllContextapi);

  return ReactDOM.createPortal(
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Shopping Cart</h5>
            <button 
              className="btn-close" 
              onClick={() => setIsModalOpen(false)}
            />
          </div>
          
          <div className="modal-body">
            {cartItems.length === 0 ? (
              <div className="text-center py-5">
                <i className="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <p className="text-muted">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="row text-center fw-bold border-bottom pb-2 mb-3">
                  <div className="col-4">Item</div>
                  <div className="col-2">Price</div>
                  <div className="col-2">Qty</div>
                  <div className="col-2">Total</div>
                  <div className="col-2"></div>
                </div>
                
                {cartItems.map((item) => (
                  <div key={item.id} className="row align-items-center py-3 border-bottom">
                    <div className="col-4">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="img-thumbnail"
                        style={{ width: '60px', height: '60px' }}
                      />
                      <span className="ms-2">{item.title}</span>
                    </div>
                    <div className="col-2">${item.price}</div>
                    <div className="col-2">
                      <div className="input-group input-group-sm" style={{ width: '120px' }}>
                        <button 
                          className="btn btn-outline-secondary" 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="form-control text-center fw-bold">{item.quantity}</span>
                        <button 
                          className="btn btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-2 fw-bold text-success">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="col-2">
                      <button 
                        className="btn btn-warning btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          
          <div className="modal-footer">
            <h4 className="flex-grow-1">
              Total: ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
            </h4>
            <button className="btn btn-success btn-lg">Purchase</button>
            <button className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Cart;