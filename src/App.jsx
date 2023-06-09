import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/productdetail/:id' element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
