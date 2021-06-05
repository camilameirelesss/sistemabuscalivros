const livros = require("./database").livros
const readline  = require("readline-sync")


function BuscarPorCategoria(){
    const categoria = readline.question("Qual a categoria de livros voce procura? ")

    const busca = livros.filter(function(livro){
        return livro.categoria.match (new RegExp(categoria,"i"))
    })
    
    console.log("Esses são os livros dessa categoria")
    console.table(busca)
}


function RecomendarLivros(){
    const busca = livros.filter(function(livro){
        return livro.leu && livro.recomenda
    })
    console.log("Esses são os livros que eu li e recomendo")
    console.table(busca)
}


function ListarDesejos(){
    const busca = livros.filter(function(livro){
        return livro.leu === false
    })
    console.log("Essa é a minha lista de desejos")
    console.table(busca)
}


function ListarPorQuantidadeDePaginas(){
    const busca = livros.sort(function(livroA, livroB){
        if (livroA.paginas<livroB.paginas) {
            return -1;
          }
          if (livroA.paginas>livroB.paginas) {
            return 1;
          }
          // a deve ser igual a b
          return 0;
        
    })
    console.log("Essa é a minha lista de livros ordenados por pagina")
    console.table(busca)
}

let resposta = 1
do{
    const pergunta = `
            MENU

    1 - Para buscar por categoria
    2 - Para receber recomendacoes de livros
    3 - Para exibir minha lista de desejos
    4 - Sair da busca 

    Opcao: 
    `
    resposta = readline.question(pergunta)
    switch(resposta){
        case "1": 
            BuscarPorCategoria()
            break
        
        case "2": 
            RecomendarLivros()
            break   
            
        case "3": 
            ListarDesejos()
            break     
            
        case "4": 
            break 

        default:
            ListarPorQuantidadeDePaginas()
            break 
    }
} while (resposta !== "4")
