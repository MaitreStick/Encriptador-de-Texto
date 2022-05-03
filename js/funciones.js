var btnEncriptar = document.querySelector("#encriptar");
var btnDesencriptar = document.querySelector("#desencriptar");
var btnCopiar = document.querySelector("#copiar");

btnEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    var textArea = document.getElementById("textoATraducir").value;
    let valores = Object.values(textArea);
    var arrayEncriptar = [];
    for(let v=0; v<valores.length; v++){
        switch(valores[v]){
            case 'a':
                var a = "ai";
                arrayEncriptar.push(a);
                break;
            case 'e':
                var e = "enter";
                arrayEncriptar.push(e);
                break;
            case 'i':
                var i = "imes";
                arrayEncriptar.push(i);
                break;
            case 'o':
                var o = "ober";
                arrayEncriptar.push(o);
                break;
            case 'u':
                var u = "ufat";
                arrayEncriptar.push(u);
                break;
            default:
                arrayEncriptar.push(valores[v]);
        }
    }
    arrayEncriptar =arrayEncriptar.join('');
    var nuevoString = arrayEncriptar.toString();
    document.getElementById("textoTraducido").innerHTML = nuevoString;
    document.getElementById("textoATraducir").value = "";
    document.getElementById("copiar").style.visibility="visible";
    document.getElementById("looking").style.display="none";
});


btnDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    var textArea = document.getElementById("textoATraducir").value;
    var ai = /ai/gi;
    var enter = /enter/gi;
    var imes = /imes/gi;
    var ober = /ober/gi;
    var ufat = /ufat/gi;
    var textArea = textArea.replace(ai, 'a');
    var textArea = textArea.replace(enter, 'e');
    var textArea = textArea.replace(imes, 'i');
    var textArea = textArea.replace(ober, 'o');
    var textArea = textArea.replace(ufat, 'u');
    document.getElementById("textoTraducido").innerHTML = textArea;
    document.getElementById("textoATraducir").value = "";
    document.getElementById("copiar").style.visibility="visible";
    document.getElementById("looking").style.display="none";
});

btnCopiar.addEventListener("click", function(event){
    event.preventDefault();
    var textoACopiar = document.getElementById("textoTraducido");
    var seleccion = document.createRange();
    seleccion.selectNodeContents(textoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var copiar = document.execCommand('copy');
    window.getSelection().removeAllRanges();
});