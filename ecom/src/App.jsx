import axios from 'axios';
import './App.css';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { HomePage } from './pages/home/HomePage';
import { Route,Routes } from 'react-router-dom';
import { OrdersPage } from './pages/orders/OrdersPage';
import { useEffect,useState } from 'react';
function App() {
  const [cart,setCart]=useState([]);
     const loadCart=async ()=>{
    const response=await axios.get('/api/cart-items?expand=product');
        setCart(response.data);
    }
  useEffect(()=>{
    loadCart();
  },[])
  return (
    <>
    <Routes>
      <Route path="/" element={  <HomePage cart={cart} loadCart={loadCart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>}/>
      <Route path="orders" element={<OrdersPage cart={cart}/>}/>
    </Routes>

    </>
  )
}

export default App
