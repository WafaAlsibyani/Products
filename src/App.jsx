import './App.css'
import ProductsPage from "./pages/ProductsPage"
import HomePage from "./pages/HomePage"
import Header from "./Layout/Header/Header";
import WithLayout from './Layout/withLayout';
function App() {
  return (
    <WithLayout>
      <ProductsPage />
    </WithLayout>

  )
}

export default App
