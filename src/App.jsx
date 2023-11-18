import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./component/ProductList.jsx";
import AddToCart from "./component/AddToCart";
import Detail from "./component/Detail";
import Nav from "./component/Nav.jsx";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<AddToCart />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
