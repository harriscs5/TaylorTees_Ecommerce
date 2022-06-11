import { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
//import data from "../data";
import axios from 'axios';

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true}; //shows loading box
    case 'FETCH_SUCCESS':
      return {...state, products: action.payload, loading: false};
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload};
    default:
      return state; //if none of the 3 cases returns current state
  }
}

function HomeScreen() {
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    fetchData();
}, []);
    return <div>
         <h1>Featured Products</h1>
            <div className="products">
            {products.map(product => (
                <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name}/>
                </Link>
                  <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </Link>
                    <p> <strong>${product.price}</strong></p>
                    <button>Add to Cart</button>
                  </div>

              </div>
            ))}
            </div>
    </div>
}

export default HomeScreen;