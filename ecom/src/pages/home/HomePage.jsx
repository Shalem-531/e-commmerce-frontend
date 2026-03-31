
import { Header } from '../../components/header'
import './HomePage.css'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { ProductsGrid } from './ProductsGrid';
export const HomePage = ({cart,loadCart}) => {
  const[products,setProducts]=useState([])
   useEffect(()=>{
    const fetchHome=async()=>{
    const response=await axios.get("/api/products")
       setProducts(response.data);
    }
  fetchHome();
   },[])
  return (
    <div>
      < Header cart={cart}/>
    <div className="home-page">
     <ProductsGrid products={products} loadCart={loadCart}/>
    </div>
    </div>
  )
}


