import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Routes } from "react-router-dom"
import HomeScreen from './screens/HomeScreen';
import ProductScreen from "./screens/ProductScreen";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';



function App() {
  
  return (
    <div>
    <BrowserRouter>
        
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Taylor's Tees</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>  

        <main>
        <Container>
        <Routes>
          <Route path="/product/:slug" element={ <ProductScreen />} />
          <Route path="/" element={ <HomeScreen />} />
        </Routes>
        </Container>
        </main>

        <footer>
          <p>All rights reserved</p>
        </footer>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
