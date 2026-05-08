const maiorIdade = confirm("Você possui 18 anos ou mais?")

if (!maiorIdade) {
  window.location.href = "https://google.com";
}


document.addEventListener("DOMContentLoaded", function() {
    const nome = localStorage.getItem("nome");

    if (!nome) {
        window.location.href = "login.html";
        return;
    }

    document.getElementById("nav-nome").textContent = nome;
});

const botoesCarrinho = document.querySelectorAll(".btn-carrinho");

botoesCarrinho.forEach((botao) => {
    botao.addEventListener("click", () => {
        
        const produto = {
            nome: botao.dataset.nome,
            preco: botao.dataset.preco,
            imagem: botao.dataset.imagem
        };

        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        carrinho.push(produto);

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        alert("Item adicionado ao carrinho!");
    });
});