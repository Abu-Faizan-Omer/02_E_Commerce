import { useContext, useState } from "react"
import styles from "./Cart.module.css"
import { AllContextapi } from "../context/ContextProvider"
import ReactDOM from "react-dom";
function Cart(){
    const {isModelOpen,setIsModelOpen}=useContext(AllContextapi)

     const cartitem = [
{
title: 'Colors',
price: 100,
imageUrl: 'https://media.istockphoto.com/id/1401770465/photo/cost-reduction-concept.jpg?s=612x612&w=0&k=20&c=48S3i-Jcz2kbeiFnqhohYfgdSSGhwb2ej69cdzC33WM=',
},
{
title: 'Black and white Colors',
price: 50,
imageUrl: 'https://media.istockphoto.com/id/1397998210/vector/stock-market.jpg?s=612x612&w=0&k=20&c=USOZhCCA9PuJa7ffVr5w6r2NLyuCIYet0rm4v3SIT1I=',
},
{
title: 'Yellow and Black Colors',
price: 70,
imageUrl: 'https://media.istockphoto.com/id/1459251107/photo/percentage-icons-and-up-and-down-arrow-icons-with-graph-indicators-on-interface-icons-concept.jpg?s=612x612&w=0&k=20&c=zWsqm9tgKTYzYPW8OJXGAxRovxcTMag8eGMwHD2kros=',
},
{
title: 'Blue Color',
price: 100,
imageUrl: 'https://media.istockphoto.com/id/1482650271/photo/working-hard-to-hit-a-deadline.jpg?s=612x612&w=0&k=20&c=xwrHxUoVvx7XtQz18aA2qkpnTMSiqIiKlMZkL7AuyFM=',
}]

     return ReactDOM.createPortal(
       <>
       <div className={styles.close}>
       <div onClick={()=>setIsModelOpen(false)} >Close</div>
       <h1>Cart</h1>
       <div className="heading">
        {cartitem.map((item,i)=>(
          <div key={i}>
            <h1>Title:{item.title}</h1>
            <h3>Price:{item.price}</h3>
            <img src={item.imageUrl} alt={item.title} />
            <button className={styles.button}>Remove</button>
          </div>

        ))}
       </div>
       <p>content</p>
       <button>Purchase</button>
       </div>
       </>,
       document.getElementById("model-root")
    )
    
}
export default Cart