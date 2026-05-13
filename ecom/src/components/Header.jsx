import './header.css';
import { Link } from 'react-router';
export  const Header = ({cart}) => {
  let totalQuantity=0;
   cart.forEach((cartItem)=>{
    totalQuantity+=cartItem.quantity;
   });
   return (
     <div>
     <div className="header">
      <div className="left-section">
        <Link to="/home" className="header-link">
           <h1 style={{ color: "white", marginLeft: "10px", fontSize: "15px", }}>
             HOME
            </h1>
          <img className="mobile-logo"
            src="images/mobile-logo-white.png" />
        </Link>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <Link className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
     </div>
   )
 }
 
 