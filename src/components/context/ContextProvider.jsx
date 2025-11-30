import { createContext, useState } from "react";

const AllContextapi = createContext();

function ContextProvider({ children }) {
  // Cart state - array of objects with quantity
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add item to cart or increase quantity
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 }: item );
    }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Get total items count
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cartItems,
    isModalOpen,
    setIsModalOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems
  };

  return (
    <AllContextapi.Provider value={value}>
      {children}
    </AllContextapi.Provider>
  );
}

export default ContextProvider;
export { AllContextapi };
