import { useState } from "react";
import { formatMoney } from "../../utils/money";
import axios from "axios";
import { useEffect } from "react";
export const Product = ({product,loadCart}) => {
const[quantity,setQuantity]=useState(1);
const [addcart,setAddcart]=useState(false);


const addTocart=async()=>{
                await axios.post('/api/cart-items',{
                  productId:product.id,
                  quantity:quantity
                });
                await  loadCart();
                setAddcart(true);
                setTimeout(()=>{
                setAddcart(false);
                },1500);
                
                };
const selectedQuantity=((event)=>{
                     const quantitySelected=Number(event.target.value);
                     setQuantity(quantitySelected);
                     console.log(quantitySelected)
                  })


  return (
    <div>
             <div className="product-container"
             data-testid="product-container">
                <div className="product-image-container">
                  <img className="product-image"
                  data-testid="product-image"
                    src={product.image} />
                </div>
      
                <div className="product-name limit-text-to-2-lines">
                {product.name}
                </div>
      
                <div className="product-rating-container">
                  <img className="product-rating-stars"
                    data-testid="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars*10}.png`} />
                  <div className="product-rating-count link-primary">
                    {product.rating.count}
                  </div>
                </div>
      
                <div className="product-price">
                 {formatMoney(product.priceCents)}
                </div>
      
                <div className="product-quantity-container">
                  <select value={quantity} onChange={selectedQuantity}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
      
                <div className="product-spacer"></div>
      
                <div className="added-to-cart">
                  <img src="images/icons/checkmark.png" />
                  Added
                </div>
                 <div
  style={{
    height: "20px", 
    marginTop: "8px"
  }}
>
  <div
    style={{
      opacity: addcart ? 1 : 0,
      transition: "opacity 0.5s",
      color: "green",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      fontSize: "14px"
    }}
  >
    <img
      src="images/icons/checkmark.png"
      style={{ width: "16px" }}
    />
    Added
  </div>
</div>
                <button className="add-to-cart-button button-primary"
                data-testid="add-to-cart-button"
                onClick={addTocart}>
                  Add to Cart
                </button>
              </div>
    </div>
  )
}


