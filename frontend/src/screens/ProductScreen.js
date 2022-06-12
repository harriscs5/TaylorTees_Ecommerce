import { useParams } from "react-router-dom";
import { useEffect, useReducer, useState} from 'react';
import axios from "axios";

const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return {...state, loading: true}; //shows loading box
      case 'FETCH_SUCCESS':
        return {...state, products: action.payload, loading: false};
      case 'FETCH_FAIL':
        return {...state, loading: false, error: action.payload};
      default:
        return state; //if none of the 3 cases returns current state
    }
  };

function ProductScreen(){
    const params = useParams();
    const {slug} = params;

    const [{loading, error, product}, dispatch] = useReducer((reducer), {
        products: [],
        loading: true,
        error: '',
      });
      //const [products, setProducts] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
          dispatch({type:'FETCH_REQUEST'});
          try {
            const result = await axios.get(`/api/products/slug/${slug}`);
            dispatch({type:'FETCH_SUCCESS', payload: result.data});
          } catch (err) {
            dispatch({type:'FETCH_FAIL', payload: err.message});
          }
         
          //setProducts(result.data);
        };
        fetchData();
    }, [slug]);

    return (
        <h1>{slug}</h1>
    );
}

export default ProductScreen;