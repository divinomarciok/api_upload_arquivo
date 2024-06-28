console.log('foi')

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText;
}

function criaLinha(usuario){

}

function main(){
    //arquivos = fazGet("http://localhost:4000/pictures/")
    console.log(fazGet("http://localhost:4000/pictures/"))
}
main()