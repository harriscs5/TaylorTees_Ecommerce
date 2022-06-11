import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Routes } from "react-router-dom"
import HomeScreen from './screens/HomeScreen';
import ProductScreen from "./screens/ProductScreen";



function App() {
  
  return (
    <div>
    <BrowserRouter>
        <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Taylor's Tees</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>  
          
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
