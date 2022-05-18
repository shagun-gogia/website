if(sessionStorage.name == undefined){
    document.getElementById("demo").innerText = ""
    document.getElementById("change-txt").innerText = "Log in"
}else{
    document.getElementById("demo").innerText = sessionStorage.name;
    document.getElementById("change-txt").innerText = "Log out"
}


