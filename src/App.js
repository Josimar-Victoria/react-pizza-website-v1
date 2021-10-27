import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import { productData, productDataTwo } from "./components/products/data";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
