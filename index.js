

let username;

document.getElementById("sub").onclick = function(){
       
    username = document.getElementById("username").value;
    if (username == "mumtahina?"){
        window.location.href = "home.html";
    }
    else if (username == "mishuuuuu"){
        window.location.href = "home.html";
    }


    else{
        document.getElementById("myh1").textContent = "Please try again";
    }
}
