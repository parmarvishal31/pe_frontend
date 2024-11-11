import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Category from "./Components/Category/Category";
import Product from "./Components/Product/Product";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="category" replace />} />
          <Route path="category" element={<Category />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
