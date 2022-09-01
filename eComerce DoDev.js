var id = []
var nome = []
var preco = []
var avaliacao = []
var contador, comparador, index
ProdutosCadastrados();
BuscarProduto();
function ProdutosCadastrados() {
    id = prompt("Digite o id dos produtos: ")
    nome = prompt("Digite o nome dos produtos: ")
    preco = prompt("Digite o preço dos produtos: ")
    avaliacao = prompt("Digite a avaliação dos produtos: ")
    contador++
    return console.log("ID:", id, ",", "Nome do Produto: ", nome, ",", "Preço do Produto: ", preco, "Avaliação do Produto: ", avaliacao)
}
var buscarId = prompt("Digite o ID do produto que deseja procurar: ")

function BuscarProduto(idParametro) {
    idParametro = buscarId
    for (index = 0; index < id.length; index++) {
        if (idParametro == id[comparador]){
            console.log(id,nome,preco,avaliacao)
        }
        else{
            comparador++
        }
    }
}