import styles from "./Navbar.module.css";
import Cart from "../cart/Cart"
import { useContext } from "react"
import { AllContextapi } from "../context/ContextProvider"
function Navbar() {
  const { isModalOpen, setIsModalOpen, getTotalItems } = useContext(AllContextapi);
  const totalItems = getTotalItems();

  return (
    <>
      <div className={styles.nav}>
        <nav>Home</nav>
        <nav>Store</nav>
        <nav>About</nav>
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