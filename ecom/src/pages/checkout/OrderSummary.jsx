import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import { DeliveryOption } from "./deliveryOption";
import axios from "axios";
import { useState } from "react";

export const OrderSummary = ({cart,deliveryOptions,loadCart}) => {
  const [isedit,setIsedit]=useState(null);
  const [quantity,setquantity]=useState(1);
  const handleupdate=(productid,qty)=>{
    setIsedit(productid);
    setquantity(qty);
  }
  const handleSave= async(productId)=>{
      if(!quantity || quantity<1 ) return;
      await axios.put(`/api/cart-items/${productId}`,{
        productId:productId,
        quantity
      })
      await loadCart();
     setIsedit(null);
  }
  const handleCancel=()=>{
     setIsedit(null);
  }
  return (
    <div>
        <div className="order-summary">
                {
                 deliveryOptions.length>0 &&cart.map((cartItem)=>{
                    const selectDeliveryOption=deliveryOptions.find((deliveryOption)=>{
                       return deliveryOption.id===cartItem.deliveryOptionId;
                    });
                      const deleteCartItem=async()=>{
                     await axios.delete(`/api/cart-items/${cartItem.productId}`);
                     await loadCart();
                    };
                  
                  return(
                     <div key={cartItem.productId}className="cart-item-container">
                  <div className="delivery-date">
                    Delivery date:{dayjs(selectDeliveryOption.estimatedDeliveryTimeMs).format('dddd,MMMM D')} 
                  </div>
      
                  <div className="cart-item-details-grid">
                    <img className="product-image"
                      src={cartItem.product.image} />
      
                    <div className="cart-item-details">
                      <div className="product-name">
                        {cartItem.product.name}
                      </div>
                      <div className="product-price">
                       {formatMoney(cartItem.product.priceCents)}
                      </div>
                      {isedit !== cartItem.productId ? (
                                 <div className="product-quantity">
                        <span>
                          Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                        </span>
                        <span className="update-quantity-link link-primary"
                        onClick={()=>{
                          handleupdate(cartItem.productId,cartItem.quantity);
                        }}>
                          Update
                        </span>
                        <span className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}>
                          Delete
                        </span>
                      </div>
                      ):(
                         <div style={{ marginTop: "5px" }}>
                          <input
                            type="number"
                            value={quantity}
                            min="1"
                            onChange={(e) =>
                              setquantity(Number(e.target.value))
                            }
                            style={{
                              width: "60px",
                              marginRight: "10px",
                              padding: "3px"
                            }}
                          />

                          <button
                            onClick={() => handleSave(cartItem.productId)}
                            style={{ marginRight: "5px" }}
                          >
                            Save
                          </button>
                          <button onClick={handleCancel}>
                            Cancel
                          </button>
                        </div>
                      )
                      }
            
                    </div>
                  <DeliveryOption cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart}/>
                  </div>
                </div>
                  )
                  })
                }
               
              </div>
    </div>
  )
}


