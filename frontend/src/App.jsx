import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home";
import Monde from "./pages/Monde";
import SGlobal from "./style";
import Category from "./components/Category";
import Cadeaux from "./components/Cadeaux";
import ProductsBio from "./components/ProductsBio";
import { StateContext } from "./services/Contexts/context";

function App() {
  return (
    <SGlobal>
      <StateContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Monde" element={<Monde />} />
          <Route path="/Homme" element={<Category />} />
          <Route path="/Cadeaux" element={<Cadeaux />} />
          <Route path="/Cadeaux/:products" element={<ProductsBio />} />
        </Routes>
        <Footer />
      </StateContext>
    </SGlobal>
  );
}

export default App;
