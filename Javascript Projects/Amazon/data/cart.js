export let cart = JSON.parse(localStorage.getItem('cart'));

 
if (!cart){
    cart = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1,
        deliveryOptionsId: 1
    }, 
    {productId: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    quantity: 3,
    deliveryOptionsId: 2
}
    ];
} 

function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(quantity, productId){
    let matchingItem;
    let cartQuantity = 0;
    // console.log(productId)
    cart.forEach((item)=>{
    if (productId === item.productId) {
        matchingItem = item;
    }
    });
    if (matchingItem){
        matchingItem.quantity+=quantity;
    }
    else{
        cart.push({
            productId: productId,
            quantity: quantity,
            deliveryOptionsId: '1'
            });
    }
    saveToStorage();
    cart.forEach((item)=>{
        console.log(cartQuantity);
        cartQuantity += item.quantity;

        Number(cartQuantity);

    })
    document.querySelector('.cart-quantity').innerHTML = cartQuantity;

    console.log(cart);

}
export function addedSign(productId){
    const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
    addedMessage.classList.add('visible-added-message')
    // for (i=0, i>=0,i++) {
    //     if(i=1){
    //         clearTimeout(timeOutId);
    //         console.log('actually reset')
    //     }
    // }

    const timeOutId = setTimeout((button) => {
        addedMessage.classList.remove('visible-added-message')
    }, 2000);
    // if (timeOutId = 0){

    // }
}
export function removeFromCart(item, matchingProductId){
    let newCart = [];
    console.log(matchingProductId)
    if (item.prductId != matchingProductId){
        newCart.push(item);
    }
    cart = newCart;
    console.log(cart);
    saveToStorage();
}