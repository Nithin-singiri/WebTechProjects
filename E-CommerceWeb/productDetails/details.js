document.addEventListener("DOMContentLoaded",()=>{
    let productDetails = document.getElementById("productDetails");
    let allProducts = JSON.parse(localStorage.getItem("allProducts"));
    let productid = localStorage.getItem("productid");
    console.log(productDetails,allProducts,productid);

    if(allProducts && productid){
        let selectedProduct = allProducts.find((v)=>{
            return v.id == productid;
        });
        console.log(selectedProduct);
        if(selectedProduct){
            document.getElementById("section1").innerHTML= `
                <div id="pic">
                    <img src="${selectedProduct.thumbnail}" alt="">
                </div>    
                <div id="description">
                    <br>
                    <h1>${selectedProduct.title}</h1><br>
                    <p><b>Brand :</b>&nbsp ${selectedProduct.brand}</p><br>
                    <p><b>Category :</b>&nbsp ${selectedProduct.category}</p><br>
                    <p><b>Description :</b>&nbsp ${selectedProduct.description}</p><br>
                    <b>Price :</b>&nbsp ₹<p>${Math.floor(selectedProduct.price*95)}</p><br><br>
                    <button id="addTOcart">Add to Cart</button>
                    <button id="home">Back to Home</button>
                </div>
            `;
            let output=''
            selectedProduct.reviews.map((v)=>{
                output+=`
                    <div id="remark">
                        <h3>${'❤️'.repeat(v.rating)+'🖤'.repeat(5-v.rating)}</h3>
                        <p>${v.comment}</p>
                        <p><B>By ${v.reviewerName}</B></p>
                        <p>on ${new Date(v.date).toString()} </p><br><br>
                    </div>`;
            })
            document.getElementById("reviews").innerHTML=`
                <h2>Customer reviews</h2><br>
            `+output;

            document.getElementById("home").addEventListener("click",()=>{
                window.location.href="../home/home.html"
            });

            document.getElementById("addTOcart").addEventListener("click",()=>{
                addingToCart(selectedProduct);
            })

        }else{
            productDetails.innerHTML = `<h3>Product Not available .........</h3>`
        }
    }else{
        productDetails.innerHTML = `<h3>Product Not Found .........</h3>`
    }
})


function addingToCart(product) {
    console.log(product);
    let cartItems = JSON.parse(localStorage.getItem("Cart")) || [];
    cartItems.push(product);
    localStorage.setItem("Cart",JSON.stringify(cartItems));
    alert("Product added successfully !!!!");
}