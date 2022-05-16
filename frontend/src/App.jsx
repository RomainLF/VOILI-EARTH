import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home";
import Monde from "./pages/Monde";
import SGlobal from "./style";
import Category from "./components/Category";

function App() {
  return (
    <SGlobal>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Monde" element={<Monde />} />
        <Route path="/Homme" element={<Category />} />
      </Routes>
      <Footer />
    </SGlobal>
  );
}

export default App;
