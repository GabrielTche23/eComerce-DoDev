var id = []
var nome = []
var preco = []
var avaliacao = []
var contador = 0;
var comparador = 0;
var continuar = true;
var escolha = 0;
var valorNovo = 0;


while (continuar) {
    escolha = prompt("Digite : 1 - Cadastrar Produto / 2 - Buscar Produto pelo ID / 3 - Buscar Produto pelo Nome / 4 - Atualizar um Preço de um Produto / 5 - Excluir Produto")
    if (escolha == 1) {
        ProdutosCadastrados();
    }
    else if (escolha == 2) {
        BuscarProduto(buscarId);
    }
    else if(escolha == 3){
        BuscarProdutoPeloNome(buscarNome);
    }
    else if(escolha == 4){
        buscarId = prompt("Digite o id que deseja procurar:")
        valorNovo = parseFloat(prompt("Digite o valor que deseja atualizar:"))
        NovoPreço(buscarId,valorNovo);
        OrdenarPreços();
    }
    else if(escolha == 5){
        var buscarId = prompt("Digite o id que deseja procurar:")
        ExcluirProduto(buscarId);
    }
    var opcao = prompt("Deseja Encerrar?  0 - Continuar / 1 - Encerrar")
    if (opcao == 1) {
        continuar = false
    }
    console.log(preco)
}



function ProdutosCadastrados() {
    id[contador] = prompt("Digite o id dos produtos: ")
    nome[contador] = prompt("Digite o nome dos produtos: ")
    preco[contador] = prompt("Digite o preço dos produtos: ")
    avaliacao[contador] = prompt("Digite a avaliação dos produtos: ")
    contador++
    //return console.log("ID:", id,",", "Nome do Produto: ", nome, ",", "Preço do Produto: ", preco, "Avaliação do Produto: ", avaliacao)
}

function BuscarProduto(idParametro) {
    var buscarId = prompt("Digite o ID do produto que deseja procurar: ")
    idParametro = buscarId
    for (index = 0; index < id.length; index++) {
        if (idParametro == id[comparador]) {
            return console.log(id[comparador], nome[comparador], preco[comparador], avaliacao[comparador])
        }
        else {
            comparador++
        }
    }
}


function BuscarProdutoPeloNome(nomeParametro) {
    var buscarNome = prompt("Digite o Nome do produto para buscar o ID dele: ")
    nomeParametro = buscarNome
    for (var index = 0; index < nome.length; index++) {
        if (nomeParametro == nome[comparador]) {
            console.log(id[comparador])
        }
        else {
            comparador++
        }
    }
}

function OrdenarId() {
    var idAux = 0;
    var nomeAux = 0;
    var precoAux = 0;
    var avaliacaoAux = 0;
    for (var atual = 0; atual < contador - 1; atual++) {
        for (var seguinte = atual + 1; seguinte < contador; seguinte++) {
            idAux = id[atual]
            nomeAux = nome[atual]
            precoAux = preco[atual]
            avaliacaoAux = avaliacao[atual]
            if (id[atual] > id[seguinte]) {
                id[atual] = id[seguinte]
                id[seguinte] = idAux
                nome[atual] = nome[seguinte]
                nome[seguinte] = nomeAux
                preco[atual] = preco[seguinte]
                preco[seguinte] = precoAux
                avaliacao[atual] = avaliacao[seguinte]
                avaliacao[seguinte] = avaliacaoAux
            }
        }
    }
    console.log(id, nome, preco, avaliacao)
}

function OrdenarPreços() {
    var idAux = 0;
    var nomeAux = 0;
    var precoAux = 0;
    var avaliacaoAux = 0;
    for (var atual = 0; atual < contador - 1; atual++) {
        for (var seguinte = atual + 1; seguinte < contador; seguinte++) {
            idAux = id[atual]
            nomeAux = nome[atual]
            precoAux = preco[atual]
            avaliacaoAux = avaliacao[atual]
            if (preco[atual] < preco[seguinte]) {
                id[atual] = id[seguinte]
                id[seguinte] = idAux
                nome[atual] = nome[seguinte]
                nome[seguinte] = nomeAux
                preco[atual] = preco[seguinte]
                preco[seguinte] = precoAux
                avaliacao[atual] = avaliacao[seguinte]
                avaliacao[seguinte] = avaliacaoAux
            }
        }
    }
    console.log(id, nome, preco, avaliacao)
}

function OrdenarAvaliacao() {
    var idAux = 0;
    var nomeAux = 0;
    var precoAux = 0;
    var avaliacaoAux = 0;
    for (var atual = 0; atual < contador - 1; atual++) {
        for (var seguinte = atual + 1; seguinte < contador; seguinte++) {
            idAux = id[atual]
            nomeAux = nome[atual]
            precoAux = preco[atual]
            avaliacaoAux = avaliacao[atual]
            if (avaliacao[atual] <= avaliacao[seguinte]) {
                id[atual] = id[seguinte]
                id[seguinte] = idAux
                nome[atual] = nome[seguinte]
                nome[seguinte] = nomeAux
                preco[atual] = preco[seguinte]
                preco[seguinte] = precoAux
                avaliacao[atual] = avaliacao[seguinte]
                avaliacao[seguinte] = avaliacaoAux
            }
        }
    }
    console.log(id, nome, preco, avaliacao)
}

function NovoPreço(idParametro, valorParametro) {
    for (index = 0; index < contador; index++) {
        if (idParametro == id[index]) {
            preco[index] = valorParametro
        }
    }
}

function ExcluirProduto(idParametro) {
    for (var index = 0; index < contador; index++) {
        if (idParametro == id[index]) {
            id[index] = 0
            nome[index] = 0
            preco[index] = 0
            avaliacao[index] = 0
        }
    }
    for (var atual = 0; atual < contador - 1; atual++) {
        for (var seguinte = atual + 1; seguinte < contador; seguinte++) {
            if (atual == 0) {
                id[atual] = id[seguinte]
                id[seguinte] = 0
                nome[atual] = nome[seguinte]
                nome[seguinte] = 0
                preco[atual] = preco[seguinte]
                preco[seguinte] = 0
                avaliacao[atual] = avaliacao[seguinte]
                avaliacao[seguinte] = 0
            }
        }
    }
    var idAuxArray = []
    var nomeAuxArray = []
    var precoAuxArray = []
    var avaliacaoAuxArray = []

    for (var index = 0; index < contador; index++) {
        if (id[index] != 0) {
            idAuxArray[index] = id[index]
            nomeAuxArray[index] = nome[index]
            precoAuxArray[index] = preco[index]
            avaliacaoAuxArray[index] = avaliacao[index]
        }
    }
    id = idAuxArray
    nome = nomeAuxArray
    preco = precoAuxArray
    avaliacao = avaliacaoAuxArray
}