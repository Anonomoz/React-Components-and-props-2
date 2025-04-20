import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import Product from "./Product.jsx";

function App() {
	return (<div className="products-grid">
	  <Product name="Pineapple" price={200} image="https://res.cloudinary.com/dbfn5lnvx/image/upload/v1726640668/react-tutorial/superm-v2/pineapple.jpg" />
	  <Product name="Banana" price={75} image="https://res.cloudinary.com/dbfn5lnvx/image/upload/v1726640668/react-tutorial/superm-v2/banana.jpg" />
	</div>);
}

// Sample usage - do not modify
createRoot(document.querySelector("#root")).render(<StrictMode><App /></StrictMode>);
