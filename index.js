console.log('foi')

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText;
}

function registraAquivo(){
   try {

    const formdata = new FormData();

    const nome  = document.getElementById('nome')

    formdata.append("name", nome.value);
    formdata.append("file", fileInput.files[0],);
    
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
    
    fetch("http://localhost:4000/pictures/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
    
   } catch (error) {
    console.log(error)
   }
    
}

function capturalinha(){
    const text = document.getElementById('nome')
    const diretorio = document.getElementById('dir')
    console.log(text.value)
    console.log(diretorio.value)
}

function main(){
    //arquivos = fazGet("http://localhost:4000/pictures/")
    console.log(fazGet("http://localhost:4000/pictures/"))
}
//main()