import { useContext } from "react";
import { AllContextapi } from "../context/ContextProvider";
import Cart from "../cart/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const { isModalOpen, setIsModalOpen, getTotalItems } = useContext(AllContextapi);
  const totalItems = getTotalItems();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 shadow-sm">
        <div className="container">
          <div className="navbar-nav me-auto">
            <a className="nav-link active" href="#">Home</a>
            <a className="nav-link" href="#">Store</a>
            <a className="nav-link" href="#">About</a>
          </div>
          <button 
            className="btn btn-primary position-relative"
            onClick={() => setIsModalOpen(true)}
          >
            Cart
            {totalItems > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>
      {isModalOpen && <Cart />}
    </>
  );
}

export default Navbar;
