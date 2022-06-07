import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="grid-container">
        <header class="header">
            <div class="brand">
                <button onclick="openMenu()">
                    &#9776;
                </button>
                <a href="index.html">Taylor's Tees</a>
            </div>

            <div class="header-links">
                <a href="cart.html">Cart</a>
                <a href="login.html">Login</a>
            </div>
        </header>

        <aside class="sidebar">
            <h3>Categories</h3>
            <button class="sidebar-close-button" onclick="closeMenu()">x</button>
            <ul>
                <li><a href="index.html">T-shirts</a></li>
                <li><a href="index.html">Hoodies</a></li>
            </ul>
        </aside>

        <main class="main">
            <div class="content">
                <ul class="products">
                    <li>
                        <div class="product">
                            <img class="product-image" src="https://i.postimg.cc/7LJ9LCbQ/mockup-of-a-big-bearded-man-wearing-a-bella-canvas-t-shirt-m13931.png"/>
                            <div class="product-name">
                                <a href="product.html">Boondocks Tee</a>
                            </div>
                            <div class="product-brand">Nike</div>
                            <div class="product-price">$600</div>
                            <div class="product-rating">5 stars (10 reviews)</div>
                        </div>
                    </li>

                    <li>
                        <div class="product">
                            <img class="product-image" src="https://i.postimg.cc/7LJ9LCbQ/mockup-of-a-big-bearded-man-wearing-a-bella-canvas-t-shirt-m13931.png"/>
                            <div class="product-name">
                                <a href="product.html">Boondocks Tee</a>
                            </div>
                            <div class="product-brand">Nike</div>
                            <div class="product-price">$600</div>
                            <div class="product-rating">5 stars (10 reviews)</div>
                        </div>
                    </li>

                    <li>
                        <div class="product">
                            <img class="product-image" src="https://i.postimg.cc/7LJ9LCbQ/mockup-of-a-big-bearded-man-wearing-a-bella-canvas-t-shirt-m13931.png"/>
                            <div class="product-name">
                                <a href="product.html">Boondocks Tee</a>
                            </div>
                            <div class="product-brand">Nike</div>
                            <div class="product-price">$600</div>
                            <div class="product-rating">5 stars (10 reviews)</div>
                        </div>
                    </li>

                    <li>
                        <div class="product">
                            <img class="product-image" src="https://i.postimg.cc/7LJ9LCbQ/mockup-of-a-big-bearded-man-wearing-a-bella-canvas-t-shirt-m13931.png"/>
                            <div class="product-name">
                                <a href="product.html">Boondocks Tee</a>
                            </div>
                            <div class="product-brand">Nike</div>
                            <div class="product-price">$600</div>
                            <div class="product-rating">5 stars (10 reviews)</div>
                        </div>
                    </li>

                    <li>
                        <div class="product">
                            <img class="product-image" src="https://i.postimg.cc/7LJ9LCbQ/mockup-of-a-big-bearded-man-wearing-a-bella-canvas-t-shirt-m13931.png"/>
                            <div class="product-name">
                                <a href="product.html">Boondocks Tee</a>
                            </div>
                            <div class="product-brand">Nike</div>
                            <div class="product-price">$600</div>
                            <div class="product-rating">5 stars (10 reviews)</div>
                        </div>
                    </li>

                    <li>
                        <div class="product">
                            <img class="product-image" src="https://i.postimg.cc/7LJ9LCbQ/mockup-of-a-big-bearded-man-wearing-a-bella-canvas-t-shirt-m13931.png"/>
                            <div class="product-name">
                                <a href="product.html">Boondocks Tee</a>
                            </div>
                            <div class="product-brand">Nike</div>
                            <div class="product-price">$600</div>
                            <div class="product-rating">5 stars (10 reviews)</div>
                        </div>
                    </li>
                </ul>
            </div>
        </main>

        

        <footer class="footer">All rights reserved</footer>

    </div>
    </div>
  );
}

export default App;
