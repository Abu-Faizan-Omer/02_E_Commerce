import { useContext, useState } from "react"
import styles from "./Cart.module.css"
import { AllContextapi } from "../context/ContextProvider"
import ReactDOM from "react-dom";
function Cart(){
    const {isModelOpen,setIsModelOpen}=useContext(AllContextapi)

     return ReactDOM.createPortal(
       <>
       <div className={styles.close}>
       <div onClick={()=>setIsModelOpen(false)} >Close</div>
       <h1>Cart</h1>
       <div className="heading">
        <h4>Item</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
       </div>
       <p>content</p>
       <button>Purchase</button>
       </div>
       </>,
       document.getElementById("model-root")
    )
    
}
export default Cart