import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container">
      <h1 className="mb-4">Products</h1>
      <div className="row">
        {productsArr.map((item) => (
          <div key={item.id} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src={item.imageUrl} 
                className="card-img-top" 
                alt={item.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text fw-bold text-success fs-5">${item.price}</p>
                <button 
                  className="btn btn-success w-100"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button 
          className="btn btn-primary btn-lg"
          onClick={() => setIsModalOpen(true)}
        >
          View Cart
        </button>
      </div>
    </div>
  );
}

export default Content;