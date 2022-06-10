import logo from "./logo.svg";
import "./App.css";
import data from "./data";
function App() {
  return (
    <div className="App">
      <header>
        <a link="/"> mkt</a>
      </header>
      <main>
        <h1>Fetuared datas</h1>
        <div className="products">
          {data.product.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong> $ {product.price} </strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
