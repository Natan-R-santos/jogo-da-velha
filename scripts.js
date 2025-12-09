function quemfez() {
    alert("Feito por Natan RCS!");
}
quemfez();

// pega as 9 posições do tabuleiro do jogo 
const divs = document.querySelectorAll(".div2"); // <<< CORRIGIDO

// jogador inicial que começa 
let vezdojogador = "X";

// combinações de vitórias
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

// adiciona evento de clique para cada div colocando o elemento da vez
divs.forEach((div, index) => {   // <<< Tirado a vírgula extra
    div.addEventListener("click", () => {
// o trim retira os espaços em brancos e quebras de linhas se tiver ele limpa e coloca o x ou o dentro da div
        if (div.textContent.trim() === "") {

            div.textContent = vezdojogador;
            div.style.color = "purple";

            // verifica se ganhou ou não é uma condiçao
            if (veriqueVitoria(vezdojogador)) {
                alert(`Jogador ${vezdojogador} venceu!`);
                return;
            }

            // troca jogador qnd a div estiver ocupada 
            vezdojogador = (vezdojogador === "X") ? "O" : "X";
        }
    });
});

// função que verifica vitórias de quem conseguir bater a combinaçao de acertos.
function veriqueVitoria(jogador) {
    return listaVitorias.some(comb => {
        return comb.every(pos => divs[pos].textContent === jogador);
    });
};

