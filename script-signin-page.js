let signin_btn = document.getElementById("button");
let user_box = document.getElementById("username").value;

signin_btn.addEventListener("click", function () {
    localStorage.setItem(document.getElementById("username").value, document.getElementById("password").value);
    sessionStorage.setItem("name", document.getElementById("username").value);

    if (localStorage.getItem(document.getElementById("username").value).length < 8) {
        alert("Your password should be atleast 8 characters");
        localStorage.removeItem(document.getElementById("username").value);
        document.getElementById("form-container").setAttribute("action", "");
        window.location.reload();
    }
    if (localStorage.getItem(document.getElementById("username").value).length > 20) {
        alert("Your password should not exceed 20 characters!");
        localStorage.removeItem(document.getElementById("username").value);
        document.getElementById("form-container").setAttribute("action", "");
        window.location.reload();
    }
});

function validation() {
    let pwd_box = document.getElementById("password").value;
    let re_pwd = document.getElementById("re-enter-pwd").value;

    if (document.getElementById("password").value == document.getElementById("re-enter-pwd").value) {
        return true;
    }
    else {
        alert("Password not same");
        return false;
    }
}

