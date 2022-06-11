import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom"
import HomeScreen from './screens/HomeScreen';
import ProductScreen from "./screens/ProductScreen";



function App() {
  
  return (
    <div>
    <BrowserRouter>
        <header>  
            <a href="index.html">Taylor's Tees</a>
        </header>

        <main>
        <Routes>
          <Route path="/product/:slug" element={ <ProductScreen />} />
          <Route path="/" element={ <HomeScreen />} />
        </Routes>
        </main>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
