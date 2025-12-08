function quemfez() {
    alert("Feito por Natan RCS!");
}
quemfez();

// pega as 9 posições do tabuleiro 
const divs = document.querySelectorAll(".divs1");

// jogador inicial
let vezdojogador = "X";

// combinações de vitorias vencedoras
const listaVitorias = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// adiciona evento de clique para cada posição/div
divs.forEach((div, index) => {
    div.addEventListener("click", () => {

        if (div.textContent === "") {

            div.textContent = vezdojogador;

            // verifica se ganhou ou nao
            if (veriqueVitoria(vezdojogador)) {
                alert(`Jogador ${vezdojogador} venceu!`);
                return;
            }

            // troca jogador
            vezdojogador = (vezdojogador === "X") ? "O" : "X";
        }
    });
});

// função para verificar vitórias 
function veriqueVitoria(jogador) {
    return listaVitorias.some(comb => {
        return comb.every(pos => divs[pos].textContent === jogador);
    });
};
