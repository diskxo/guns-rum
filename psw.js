var password;

var pass = "abc";
password = prompt("Inserisci la password per accedere al pannello di controllo");
if (password == pass) {
    alert("Benveuto in Guns&Rum!");

} else {
    alert("Password Errata.");
    window.location = "./settings.html";
}