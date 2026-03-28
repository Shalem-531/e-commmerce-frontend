import axios from 'axios';
import { useEffect,useState } from 'react';
import './checkout-header.css';
import './CheckoutPage.css';
import { PaymentSummary } from './PaymentSummary';
import { OrderSummary } from './OrderSummary';
export const CheckoutPage = ({cart}) => {
  const [deliveryOptions,setDeliveryOptions]=useState([]);
  const [paymentsummary,setPaymentsummary]=useState({});
  useEffect(()=>{
    axios.get('/api/delivery-options?expand=estimateDeliveryTime').
    then((response)=>{
      setDeliveryOptions(response.data);
    })  
    axios.get('/api/payment-summary').
    then((response)=>{
    setPaymentsummary(response.data);
    })
  },[])
  return (
    <div>
      <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <a href="/">
            <img className="logo" src="images/logo.png" />
            <img className="mobile-logo" src="images/mobile-logo.png" />
          </a>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (<a className="return-to-home-link"
            href="/">3 items</a>)
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>

    <div className="checkout-page">
      <div className="page-title">Review your order</div>

      <div className="checkout-grid">
      <OrderSummary cart={cart} deliveryOptions={deliveryOptions}/>
       <PaymentSummary paymentsummary={paymentsummary}/>
      </div>
    </div>
    </div>
  )
}

