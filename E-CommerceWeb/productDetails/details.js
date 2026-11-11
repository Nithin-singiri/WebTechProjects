document.addEventListener("DOMContentLoaded",()=>{
    let productDetails = document.getElementById("productDetails");
    let allProducts = JSON.parse(localStorage.getItem("allProducts"));
    let productid = localStorage.getItem("productid");
    console.log(productDetails,allProducts,productid);
})