import './App.css'
import ProductsPage from "./pages/ProductsPage"
import WithLayout from './Layout/withLayout';

function App() {

  return (
    <WithLayout>
      <ProductsPage />
    </WithLayout>
  )
}

export default App
