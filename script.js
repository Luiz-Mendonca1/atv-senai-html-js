function enviarFormulario() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email === "admin@admin.com" && senha === "admin123") {
        window.location.href = "admin.html";
    } else {
        alert("Credenciais inválidas!");
    }
}