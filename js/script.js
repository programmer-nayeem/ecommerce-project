let total = 0;
function product(target){
    // Selecting Item
    const cartItem = document.getElementById('cart-item');
    const productName = target.childNodes[3].childNodes[3].childNodes[1].innerText;
    const productList = document.createElement('li');
    productList.innerText = productName;
    cartItem.append(productList);



    // Total price without discount
    const price = target.childNodes[3].childNodes[3].childNodes[3].innerText.split(" ")[0];
    // console.log(price[3].innerText.split(" ")[0]);
    total = parseFloat(total) + parseFloat(price);
    document.getElementById('total').innerText = total;



    // Unable makpurhase button if total > 0
    const orderId = document.getElementById('orderId');
    if(total == 0){
        orderId.setAttribute('disabled')
    }else{
        orderId.removeAttribute('disabled')
    }


    // Unable apply button if total > 200
    const applyCoupon = document.getElementById('applyCoupon');
    if(total >= 200){
        applyCoupon.removeAttribute('disabled');
    }


}


// Apply button for coupon
function apply(){
    const couponField = document.getElementById('couponField');
    if(couponField.value == 'SELL200'.toString()){
        const discount = document.getElementById('discount');
        const totalDiscout = (total * 20 / 100);
        discount.innerText = totalDiscout;
    
        const totalPrice = document.getElementById('totalPrice');
        const totalCalculate = total - totalDiscout;
        totalPrice.innerText = totalCalculate;
    }else{
        alert('Enter the correct coupon code !');
    }
}


// Page reload when click go home button
function goHome(){
    window.location.reload(true);
}

