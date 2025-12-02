
//import './App.css'
import { useContext } from "react"
import Navbar from "./components/Navbar/Navbar"
import ContextProvider from "./components/context/ContextProvider"
import Content from "./components/content/Content"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Store from  "./pages/Store"
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
const MainContent=()=>{
  
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/productdetails/:productId" element={<ProductDetails/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
     
    </>
  )

}
function App() {
  return (
    <>
    <ContextProvider>
      <MainContent/>
    </ContextProvider>
    </>
  )
}

export default App
