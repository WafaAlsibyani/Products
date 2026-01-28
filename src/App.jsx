import './App.css'
import ProductsPage from "./features/products/pages/ProductsPage"
import WithLayout from './Layout/withLayout';
import {Routes, Route} from "react-router-dom";
import CartPage from './features/cart/pages/CartPage';

function App() {

  return (
    <WithLayout>
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

    </WithLayout>
  )
}

export default App
