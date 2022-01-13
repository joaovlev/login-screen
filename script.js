
var login = document.getElementById("login");
var register = document.getElementById("register");
var button = document.getElementById("button");

function registrar() {
    login.style.left = "-400px";
    register.style.left = "50px";
    button.style.left = "110px";
}

function entrar() {
    login.style.left = "50px";
    register.style.left = "450px";
    button.style.left = "0";
}
