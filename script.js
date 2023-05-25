const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');

const llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function encriptar(stringAEncriptar){
    stringAEncriptar = stringAEncriptar.toLowerCase();
    let stringEncriptada = stringAEncriptar;

    for(let i = 0; i < llavesEncriptacion.length; i++){
        if (stringAEncriptar.includes(llavesEncriptacion[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1]);
        }
    }
    return stringEncriptada;
}

function btnEncriptar(){
    const stringEncriptada = encriptar(textArea.value);
    mensaje.value = stringEncriptada;
    textArea.value ="";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringADesencriptar){
    stringADesencriptar = stringADesencriptar.toLowerCase();
    let stringDesencriptada = stringADesencriptar;

    for(let i = 0; i < llavesEncriptacion.length; i++){
        if (stringADesencriptar.includes(llavesEncriptacion[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnDesencriptar(){
    const stringDesencriptada = desencriptar(textArea.value);
    mensaje.value = stringDesencriptada;
    textArea.value ="";
}

function copy(){
    let textoACopiar = mensaje;
    textoACopiar.select();
    document.execCommand("copy");
}


function btnCopiar(){
    copy();
    alert("Elemento copiado.");
}