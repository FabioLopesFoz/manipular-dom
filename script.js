let titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "Loja de Calçados";
let body = document.querySelector("body");
body.appendChild(titulo);
let produto = document.createElement("div");
produto.innerHTML = `
  <div>
    <h2>Tênis</h2>
    <img src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/26/NQQ-4635-026/NQQ-4635-026_zoom1.jpg?ts=1697639299&ims=544x" alt="tenis">
    <p>Tênis Adidas Coreracer - Preto e Branco.</p>
    <p id="preco">R$ 159.99</p>
  </div>
`;
body.appendChild(produto)