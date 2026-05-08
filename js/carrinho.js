const listaCarrinho = document.getElementById("lista-carrinho");

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let total = 0;

carrinho.forEach((produto, index) => {
  total += Number(produto.preco);

  listaCarrinho.innerHTML += `

  

    <div class="item-carrinho">

      <img src="${produto.imagem}">

      <div class="info-produto">
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco}</p>
      </div>

      <button 
        class="btn-remover"
        onclick="removerProduto(${index})"
      >
        Remover
      </button>

    </div>
  `;
});

listaCarrinho.innerHTML += `
 <div style="color: white;" class="total-carrinho">
    <h2>Total: R$ ${total.toFixed(2)}</h2>
  </div>
`;

function removerProduto(index) {
  carrinho.splice(index, 1);

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  location.reload();
}
