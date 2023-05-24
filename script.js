const textDigitar = document.querySelector(".textDigitar");
const mensagem = document.querySelector(".mensagem");
const tituloMensagens = document.querySelector(".titulo");


function buttonEncrip() {
    const textoEncrip = encript(textDigitar.value);
    mensagem.value = textoEncrip;
    textDigitar.value = "";
    var texto = document.getElementById("titulo");
    texto.textContent = "Seu Texto Foi Criptografado";
}



function encript(stringDesencrip){

    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringDesencrip = stringDesencrip.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringDesencrip.includes(matrizCodigo [i][0])) {
            stringDesencrip = stringDesencrip.replaceAll(matrizCodigo[i][0], matrizCodigo [i][1]);
        }
    }
    return stringDesencrip;
}


function buttonDesencrip() {
    const textoDesencrip = desencript(textDigitar.value);
    mensagem.value = textoDesencrip;
    textDigitar.value = "";
    var texto = document.getElementById("titulo");
    texto.textContent = "Seu Texto Foi Descriptografado";
}


function desencript(stringDesencrip){

    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringDesencrip = stringDesencrip.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringDesencrip.includes(matrizCodigo [i][1])) {
            stringDesencrip = stringDesencrip.replaceAll(matrizCodigo[i][1], matrizCodigo [i][0]);
        }
    }
    return stringDesencrip;
}


function buttonCopy() {
    var mensagem = document.getElementById("copyText");
    mensagem.select();
    document.execCommand("copy");
    var texto = document.getElementById("titulo");
    texto.textContent = "Texto Copiado Para Area De Transferencia";
  }                    
