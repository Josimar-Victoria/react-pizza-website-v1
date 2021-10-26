import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import Hero from "./components/hero/Hero";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Hero />
    </BrowserRouter>
  );
}

export default App;
