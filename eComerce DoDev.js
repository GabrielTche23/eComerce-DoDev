var id = []
var nome = []
var preco = []
var avaliacao = []
var contador
ProdutosCadastrados();
function ProdutosCadastrados(idParametro,nomeParametro,precoParametro,avaliacaoParametro){
    id = prompt ("Digite o id dos produtos: ")
    nome = prompt ("Digite o nome dos produtos: ")
    preco = prompt("Digite o preço dos produtos: ")
    avaliacao = prompt("Digite a avaliação dos produtos: ")
    contador++
    return console.log("ID:",id,"Nome do Produto: ",nome,"Preço do Produto: ",preco,"Avaliação do Produto: ",avaliacao)
}
