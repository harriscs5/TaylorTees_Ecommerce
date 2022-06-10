import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import data from "./data";


function App() {
  
  return (
    <div>
    <BrowserRouter>
        <header>  
            <a href="index.html">Taylor's Tees</a>
        </header>

        <main>
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
