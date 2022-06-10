import data from "./data";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom"
import HomeScreen from './screens/HomeScreen';



function App() {
  
  return (
    <div>
    <BrowserRouter>
        <header>  
            <a href="index.html">Taylor's Tees</a>
        </header>

        <main>
        <Routes>
          <Route path="/" element={ <HomeScreen />} />
        </Routes>
            <h1>Featured Products</h1>
            <div className="products">{
              data.products.map(product => (
                <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name}/>
                </a>
                  <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                    <p> <strong>${product.price}</strong></p>
                    <button>Add to Cart</button>
                  </div>

              </div>
            ))}
            </div>
        </main>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
