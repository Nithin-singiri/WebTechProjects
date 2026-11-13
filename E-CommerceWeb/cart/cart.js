document.addEventListener("DOMContentLoaded",()=>{
    displayCart();
})

function displayCart() {
    let cartContent = document.getElementById("cartContent");
    let totalPrice = document.getElementById("totalPrice");
    let cartItems = JSON.parse(localStorage.getItem("Cart")) || [];
    console.log(cartContent,totalPrice,cartItems);

    let totalBill = 0;
    if(cartItems.length==0){
        cartContent.innerHTML=`Your cart is empty......Start Shopping`;
        totalPrice.innerHTML="";
    }else{
        cartItems.map((v,i)=>{
            console.log(v,i);
            totalBill+= Math.floor(v.price*95);
            // console.log(v);

            let newElement = document.createElement("div");
            newElement.setAttribute("id","item");
            newElement.innerHTML = `
                <div class="image">
                    <img src="${v.thumbnail}" alt="">
                </div>
                <div class="details">
                    <h2>${v.title}</h2>
                    <p>Availability : ${v.availabilityStatus}</p>
                    <p>Category : ${v.category}</p>
                    <p>Return Policy : ${v.returnPolicy}</p>
                    <p>Shipping Information : ${v.shippingInformation}</p>
                    <p>Stock : ${v.stock}</p>
                    <p>Warranty Information : ${v.warrantyInformation}</p>
                    <p>Price : ₹ ${Math.floor(v.price*95)}</p>
                </div>
                <div id="btn">
                    <button id="remove" onclick="removeFromCart(${i})">Remove</button>
                </div>
            `
            cartContent.append(newElement);
            totalPrice.innerHTML = `
                <h1>Total price : ${totalBill}</h1>
            `
        });
    }
}

function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem("Cart"));
    cartItems.splice(index,1);
    localStorage.setItem("Cart",JSON.stringify(cartItems));
    window.location.reload();
}
