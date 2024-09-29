import { products } from "../data/products.js";
import { cart } from "../data/cart.js";
import { removeFromCart } from "../data/cart.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions } from "../data/delivery-options.js";

localStorage.clear();


let cartHTML = '';
cart.forEach((cartItem)=>{
    const productId = cartItem.productId;

    let matchingProduct;
    

    products.forEach((product)=>{
        if (product.id === productId) {
            matchingProduct = product;
        }

    })
        //adds date header to each item in cart
        const deliveryOptionId = cartItem.deliveryOptionsId;

        let deliveryOption;

        deliveryOptions.forEach((option)=>{
            if (option.id === deliveryOptionId){
                deliveryOption = option;
            }

        });
        const today = dayjs();
        const deliveryDateAdd = today.add(deliveryOption.deliveryDays, 'day');
        const deliveryDateDay = deliveryDateAdd.format('dddd, DD, MMMM');
        
        cartHTML += `          
        <div class="cart-item-container cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">Delivery date: ${deliveryDateDay}</div>

        <div class="cart-item-details-grid">
        <img
            class="product-image"
            src="${matchingProduct.image}"
        />

        <div class="cart-item-details">
            <div class="product-name">
            ${matchingProduct.name}
            </div>
            <div class="product-price">$${((matchingProduct.priceCents)/100).toFixed(2)}</div>
            <div class="product-quantity">
            <span> Quantity: <span class="quantity-label">${cartItem.quantity}</span> </span>
            <span class="update-quantity-link link-primary">
                Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-button" data-matching-product-id = "${matchingProduct.id}">
                Delete
            </span>
            </div>
        </div>

        <div class="delivery-options">
            <div class="delivery-options-title">
            Choose a delivery option:
            </div>
            ${deliveryOptionsHTML(matchingProduct, cartItem)}
        </div>
        </div>
    </div>`

   function deliveryOptionsHTML(matchingProduct, cartItem){
    let html = ''


    deliveryOptions.forEach((deliveryOption)=>{

        //automatically adds day to delivery and formats it
        const today = dayjs();
        const deliveryDateAdd = today.add(deliveryOption.deliveryDays, 'day');
        const deliveryDateDay = deliveryDateAdd.format('dddd, DD, MMMM');

        //adds text showing price of shipping
        const deliveryFee = deliveryOption.price == 0
        ? 'Free'
        : `$${((deliveryOption.price)/100).toFixed(2)} - `
        ;
        
        //determines which option is checked
        const isChecked = cartItem.deliveryOptionsId === deliveryOption.id;
    
        //adds html containing each delivery option on each iteration
        html += ` 
        <div class="delivery-option">
            <input
                type="radio"
                ${isChecked ? 'checked' :''}
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}"
            />
        <div>
        <div class="delivery-option-date">${deliveryDateDay}</div>
        <div class="delivery-option-price">${deliveryFee}Shipping</div>
        </div>
        </div> 
        `
    }


);
return html;
   }


  document.querySelector('.js-order-summary').innerHTML = cartHTML;
  document.querySelectorAll('.js-delete-button').forEach((span)=>{
    span.addEventListener("click",()=>{
        const matchingProductId = span.dataset.matchingProductId;
        removeFromCart(item, matchingProductId);
        const container = document.querySelector(`.cart-item-container-${matchingProductId}`)
        container.remove();
    })
  })


})

