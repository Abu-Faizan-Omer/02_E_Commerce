import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import { useContext } from "react"
import styles from "./Content.module.css"
import { AllContextapi } from "../context/ContextProvider"
function Content(){
  const { isModalOpen, setIsModalOpen, addToCart } = useContext(AllContextapi);
  const productsArr = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://media.istockphoto.com/id/1401770465/photo/cost-reduction-concept.jpg?s=612x612&w=0&k=20&c=48S3i-Jcz2kbeiFnqhohYfgdSSGhwb2ej69cdzC33WM=',
  },
  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://media.istockphoto.com/id/1397998210/vector/stock-market.jpg?s=612x612&w=0&k=20&c=USOZhCCA9PuJa7ffVr5w6r2NLyuCIYet0rm4v3SIT1I=',
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://media.istockphoto.com/id/1459251107/photo/percentage-icons-and-up-and-down-arrow-icons-with-graph-indicators-on-interface-icons-concept.jpg?s=612x612&w=0&k=20&c=zWsqm9tgKTYzYPW8OJXGAxRovxcTMag8eGMwHD2kros=',
  },
  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://media.istockphoto.com/id/1482650271/photo/working-hard-to-hit-a-deadline.jpg?s=612x612&w=0&k=20&c=xwrHxUoVvx7XtQz18aA2qkpnTMSiqIiKlMZkL7AuyFM=',
  }
];
 return (
    <>
      <h1>Products</h1>
      {productsArr.map((item) => (
        <div key={item.id} className={styles.productCard}>
          <h3><Link to={`/productdetails/${item.id}`}>{item.title}</Link></h3>
          <p>Price: ${item.price}</p>
          <img
            className={styles.productImg}
            src={item.imageUrl}
            alt={item.title}
            style={{ width: "200px", height: "auto" }}
          />
          <button 
            className={styles.addBtn}
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      ))}
      <button 
        className={styles.viewCartBtn}
        onClick={() => setIsModalOpen(true)}
      >
        See the Cart
      </button>
    </>
  );
}
export default Content