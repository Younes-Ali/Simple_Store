import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <div className="w-full h-dvh bg-creamy flex justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage/>} />
            <Route
              path="/about"
              element={
                <About />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact />
              }
            />
            <Route
              path="/products"
              element={
                <Products />
              }
            />
            <Route
              path="/products/:id"
              element={
                <ProductDetails />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
