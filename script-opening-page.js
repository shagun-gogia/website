let user_box = document.getElementById("text-username").value;
let login_btn = document.getElementById("button1");

login_btn.addEventListener("click", function () {
    sessionStorage.setItem("name", document.getElementById("text-username").value);
});


function validation() {
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) != document.getElementById("text-username").value && localStorage.getItem(document.getElementById("text-username").value) != document.getElementById("text-password").value) {
            alert("Either User Id or Password is wrong");
            return false;
        } else {
            return true;
        }
    }
}