
//import './App.css'
import { useContext } from "react"
import Navbar from "./components/Navbar/Navbar"
import ContextProvider from "./components/context/ContextProvider"
import Content from "./components/content/Content"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Store from  "./pages/Store"
const MainContent=()=>{
  
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/store" element={<Store/>}/>
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
