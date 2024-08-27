let imagem = document.getElementById("imagem");
let qrImagem = document.getElementById("qrImagem");
let qrTexto = document.getElementById("qrTexto");

function gerarQR()
{
    if(qrTexto.value.length>0)
    {
        qrImagem.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTexto.value;
        imagem.classList.add("mostrar-img");
    }
    else {
        qrTexto.classList.add('erro');
        setTimeout(()=> {
            qrTexto.classList.remove('erro');
        } , 1000)
    }
    

}