import './style.css'
import Categories from './components/categories/Categories'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './components/products/ProductList'
import CategoriesProductList from './components/categories/CategoriesProductList'
import Navbar from './components/NavBar/Navbar'
import { Link } from 'react-router-dom';
// import ProductMore from './components/products/ProductMore'

function App() {
  // const [itemvalue] = useState('');
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path='/'  />
          <Route exact path='/categorias' element={<Categories />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/category/:categoryId" element={<CategoriesProductList />} />
          {/* <Route exact path="/product/:productId" element={<ProductMore />} /> */}
        </Routes>

      </Router>
    </>
  )
}

export default App
