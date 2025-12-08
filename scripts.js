function quemfez(){
    alert("feito por natan");
}
quemfez();

// pega os elementos com query selector todas as classes com o nome divs1
const divs = document.querySelectorAll(".divs1");
// variavel que contem o jogador da vez 
let vezdojogador = "X";
// usamos o foreach para percorrer as 9 divs e colocamos o evento de click,caso esteja vazio coloca qual é o jogador pela variavel
// ai caso for a vez do X alteramos a vez do jogador vezdojogador = (vezdojogador === "X") ? "O" : "X"; caso for o bolinha troca para o X e vice versa
divs.forEach(divs => {
    divs.addEventListener("click", () => {
        if(divs.textContent ===""){
            divs.textContent = vezdojogador;
            vezdojogador = (vezdojogador === "X") ? "O" : "X";
        }
    });
});


