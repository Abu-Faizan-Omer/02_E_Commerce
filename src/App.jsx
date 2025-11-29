
//import './App.css'
import { useContext } from "react"
import Navbar from "./components/Navbar/Navbar"
import ContextProvider, { AllContextapi } from "./components/context/ContextProvider"
import Content from "./components/content/Content"

const MainContent=()=>{
  const {isModelOpen,setIsModelOpen}=useContext(AllContextapi)
  return(
    <>
    <Navbar />
     <h1>This is app js file maine file</h1>
     <Content/>
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
