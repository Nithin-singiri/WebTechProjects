let product = []
function fetchingData(){
    fetch("https://dummyjson.com/products").then((res)=>{
        return res.json();
    }).then((val)=>{
        console.log(val.products);
        product = val.products;
        localStorage.setItem("allProducts",JSON.stringify(product));
        displayProducts(product);
    })
}

fetchingData();

function displayProducts(prod){
    console.log(prod);   
    let output = ''
    prod.map((v)=>{
        output+=`
        <main>
            <div id="image"><img src="${v.thumbnail}"/></div>
            <div id="description">
                <h2>${v.title}</h2>
                <div id="row1">
                    <h4>Rating : ${v.rating}</h4>
                    <h4>₹ ${Math.floor(v.price*95)}</h4>
                </div>
                <div id="row2">
                    <h4>In stock  : ${v.stock}</h4>
                    <button id="detail" onclick="viewDetails(${v.id})">Details</button>
                </div>
            </div>
        </main>
        `;
    });
    document.getElementById("productContainer").innerHTML=output
}

document.getElementById("searchProduct").addEventListener("input",(e)=>{
    let searchTerm = e.target.value.toLowerCase();
    let filteredProduct = product.filter((val)=>{
        return val.title.toLowerCase().includes(searchTerm) || val.category.toLowerCase().includes(searchTerm);
    });
    displayProducts(filteredProduct);
})

function viewDetails(id) {
    console.log(id);
    localStorage.setItem("productid",id);
    window.location.href="../productDetails/details.html"
}