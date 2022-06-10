import logo from "./logo.svg";
import "./App.css";
import Homescreen from "./Screens/homescreen";
import ProductScreen from "./Screens/productscreen";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/"> mkt</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<Homescreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
