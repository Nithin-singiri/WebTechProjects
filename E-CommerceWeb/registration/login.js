document.getElementById("formContainer").addEventListener("submit",(e)=>{
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user = JSON.parse(localStorage.getItem("userData"));
    if(user.userEmail == email){
        if(user.userPassword == password){
            window.location.href="../home/home.html"
        }else{
            alert("Invalid password")
            window.location.href="./login.html"
        }
    }else{
        alert("Invalid email address");
        window.location.href="./login.html"
    }
    // if(user.userEmail == email && user.userPassword == password){
    //     window.location.href="../home/home.html"
    // }else{
    //     alert("Invalid credentials");
    //     window.location.href="./login.html"
    // }
})