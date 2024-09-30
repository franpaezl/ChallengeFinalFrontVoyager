import './App.css';

import MainLayout from './layout/MainLayout.jsx';
import Admin from './pages/Admin.jsx';
import Home from './pages/Home.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';

import ReservationComponent from './components/ReservationComponent.jsx';
import Reservation from './pages/Reservation.jsx';

import Register from './pages/Register.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Cart from './pages/Cart.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout wrapping the routes */}
        <Route path="/" element={<MainLayout />}>
          {/* Home Route */}
          <Route index element={<Home />} className="main" />
          <Route path="/admin" element={<Admin />} className="admin" />
        </Route>
        <Route path='/login' element={<Login/>} />

        <Route path='/reservation' element={<Reservation/>} />

        <Route path='/register' element={<Register/>} />
        <Route path='/productDetails' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
