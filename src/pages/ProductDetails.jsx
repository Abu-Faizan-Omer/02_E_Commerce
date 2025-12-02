import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();
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

  const product = productsArr.find(p => p.id === Number(productId));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Details</h1>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <img src={product.imageUrl} alt={product.title} style={{ width: "300px" }} />
    </div>
  );
}

export default ProductDetails;
