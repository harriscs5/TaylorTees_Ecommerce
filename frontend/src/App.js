import './App.css';
import data from './data';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="App">
      <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <a href="index.html">Taylor's Tees</a>
            </div>

            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="login.html">Login</a>
            </div>
        </header>

        <aside className="sidebar">
            <h3>Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li><a href="index.html">T-shirts</a></li>
                <li><a href="index.html">Hoodies</a></li>
            </ul>
        </aside>

        <main className="main">
            <div className="content">
                <ul className="products">
                  {
                    data.products.map(product => 
                      <li>
                        <div className="product">
                            <img className="product-image" src="https://i.postimg.cc/7LJ9LCbQ/mockup-of-a-big-bearded-man-wearing-a-bella-canvas-t-shirt-m13931.png"/>
                            <div className="product-name">
                                <a href="product.html">{product.name}</a>
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
                        </div>
                    </li>
                    )
                  }
                     
                </ul>
            </div>
        </main>

        

        <footer className="footer">All rights reserved</footer>

    </div>
    </div>
  );
}

export default App;
