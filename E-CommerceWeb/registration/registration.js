document.getElementById("formContainer").addEventListener("submit",(e)=>{
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    console.log(name,email,phone,password);

    let userData = {
        userName:name,
        userEmail:email,
        userPhone:phone,
        userPassword:password
    }
    localStorage.setItem("userData",JSON.stringify(userData));
    window.location.href="./login.html"
})