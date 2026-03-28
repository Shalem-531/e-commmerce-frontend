
import { Header } from '../../components/header'
import './HomePage.css'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { ProductsGrid } from './ProductsGrid';
export const HomePage = ({cart}) => {
  const[products,setProducts]=useState([])
   useEffect(()=>{
   axios.get("/api/products").
   then((response)=>{
    setProducts(response.data)
   });
   },[])
  return (
    <div>
      < Header cart={cart}/>
    <div className="home-page">
     <ProductsGrid products={products}/>
    </div>
    </div>
  )
}


