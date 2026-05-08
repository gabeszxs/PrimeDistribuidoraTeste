const form = document.getElementById("login-form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        alert("Sucesso!");
        

        const input = document.getElementById("login-nome");

        if (!input) return;

        const nome = input.value;

        if (nome.trim() !== "") {
            localStorage.setItem("nome", nome);
            window.location.href = "principal.html";
        }
    });
}