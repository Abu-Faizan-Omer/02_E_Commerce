import { createContext, useState } from "react"

const AllContextapi=createContext()

function ContextProvider({children}){
    const[isModelOpen,setIsModelOpen]=useState(false)
 return(
    <>
    <AllContextapi.Provider value={{isModelOpen,setIsModelOpen}}>
        {children}
    </AllContextapi.Provider>

    </>
 )
}
export default ContextProvider
export{AllContextapi}