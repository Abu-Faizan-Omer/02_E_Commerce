import styles from "./Navbar.module.css";
import Cart from "../cart/Cart"
import { useContext } from "react"
import { AllContextapi } from "../context/ContextProvider"
function Navbar(){
    const {isModelOpen,setIsModelOpen}=useContext(AllContextapi)
   
    return(
        <>
        <div className={styles.nav}>
            <nav>Home</nav>
            <nav>Store</nav>
            <nav>About</nav>
            <button onClick={() => setIsModelOpen(true)} className={styles.button}>Cart</button>
        </div>
        {isModelOpen && <Cart/>}
        </>
    )

}
export default Navbar