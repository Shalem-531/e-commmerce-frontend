import axios from 'axios';
import './App.css';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { HomePage } from './pages/home/HomePage';
import { Route,Routes } from 'react-router-dom';
import { OrdersPage } from './pages/orders/OrdersPage';
import { useEffect,useState } from 'react';
import { Register } from './pages/register';
import { Login } from './pages/login';
import { ProtectedRoute } from './pages/protectedroute';
import { authApi,ecomApi } from './api/axios';
function App() {
  const [cart,setCart]=useState([]);
  const[user,setUser]=useState(null);
     const loadCart=async ()=>{
    const response=await ecomApi.get('/api/cart-items?expand=product');
        setCart(response.data);
       
    }
 useEffect(() => {
  const token = localStorage.getItem("token");

  if (token) {
    authApi.defaults.headers.common["Authorization"] =
      `Bearer ${token}`;

    ecomApi.defaults.headers.common["Authorization"] =
      `Bearer ${token}`;

    loadCart();
  }
}, []);


  return (
    <>
   <Routes>

  <Route path="/" element={<Register />} />

  <Route path="/login" element={<Login setUser={setUser} />} />

  {/* 🔒 Protected Home */}
  <Route
    path="/home"
    element={
      <ProtectedRoute>
        <HomePage cart={cart} loadCart={loadCart} />
      </ProtectedRoute>
    }
  />

  {/* 🔒 Protected Checkout */}
  <Route
    path="/checkout"
    element={
      <ProtectedRoute>
        <CheckoutPage cart={cart} loadCart={loadCart} />
      </ProtectedRoute>
    }
  />

  {/* 🔒 Protected Orders */}
  <Route
    path="/orders"
    element={
      <ProtectedRoute>
        <OrdersPage cart={cart} />
      </ProtectedRoute>
    }
  />

</Routes>

    </>
  )
}

export default App
