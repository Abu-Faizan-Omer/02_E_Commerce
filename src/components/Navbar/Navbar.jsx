import styles from "./Navbar.module.css";
import Cart from "../cart/Cart"
import { useContext } from "react"
import { AllContextapi } from "../context/ContextProvider"
import { Link } from "react-router-dom"
import About from "../../pages/About";
import Home from "../../pages/Home";
import Store from "../../pages/Store";
function Navbar() {
  const { isModalOpen, setIsModalOpen, getTotalItems } = useContext(AllContextapi);
  const totalItems = getTotalItems();

  return (
    <>
      <div className={styles.nav}>
        
            {/* <nav>Home</nav>
            <nav>Store</nav>
            <nav>About</nav> */}
        <Link to="/home">Home</Link>     
        <Link to="/store" >Store</Link>
        <Link to="/product" >Product</Link>  
        {/*<Link to="/productdetails/:productid" >ProductDetails</Link> if add this line then it will appear on navbar as productdetails heading*/}   
         <Link to="/contact" >Contact</Link> 
        <Link to="/about" >About</Link> 
        
   
        <button 
          className={styles.button}
          onClick={() => setIsModalOpen(true)}
        >
          Cart 
          {totalItems > 0 && (
            <span className={styles.cartBadge}>{totalItems}</span>
          )}
        </button>
      </div>
      {isModalOpen && <Cart />}
    </>
  );
}
export default Navbar