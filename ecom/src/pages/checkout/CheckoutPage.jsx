import axios from 'axios';
import { useEffect,useState } from 'react';
import './checkout-header.css';
import './CheckoutPage.css';
import { PaymentSummary } from './PaymentSummary';
import { OrderSummary } from './OrderSummary';
export const CheckoutPage = ({cart,loadCart}) => {
  const [deliveryOptions,setDeliveryOptions]=useState([]);
  const [paymentsummary,setPaymentsummary]=useState({});
  useEffect(()=>{
    const fetchCheckoutpage=async()=>{
    let response=await  axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
       setDeliveryOptions(response.data);
      response=await  axios.get('/api/payment-summary')
      setPaymentsummary(response.data);
    } 
    fetchCheckoutpage();


  },[cart])
  return (
    <div>
      <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <a href="/home" className='home-link'>
           <h1 style={{ color: "black",fontSize:"22px"}}>
             HOME
            </h1>
          </a>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (<a className="return-to-home-link"
            href="/home">3 items</a>)
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>

    <div className="checkout-page">
      <div className="page-title">Review your order</div>

      <div className="checkout-grid">
      <OrderSummary cart={cart}  deliveryOptions={deliveryOptions} loadCart={loadCart}/>
       <PaymentSummary paymentsummary={paymentsummary} loadCart={loadCart}/>
      </div>
    </div>
    </div>
  )
}

