import axios from 'axios';
import './App.css';
import { CheckoutPage } from './pages/CheckoutPage';
import { HomePage } from './pages/HomePage';
import { Route,Routes } from 'react-router-dom';
import { OrdersPage } from './pages/OrdersPage';
import { useEffect,useState } from 'react';
function App() {
  const [cart,setCart]=useState([])
  useEffect(()=>{
    axios.get('/api/cart-items?expand=product').
   then((response)=>{ 
    setCart(response.data) 
   })
  },[])
  return (
    <>
    <Routes>
      <Route path="/" element={  <HomePage cart={cart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart}/>}/>
      <Route path="orders" element={<OrdersPage/>}/>
    </Routes>

    </>
  )
}

export default App
