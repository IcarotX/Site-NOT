function pop() {
    window.open("https://m.youtube.com/watch?v=nzzHOdrdSIo&pp=ygUUQW5pbWHDp8OjbyBiZW0gdmluZG8%3D", "janela", "height=300 width=400 scrollbars=yes");
}

function obrigado(id) {
    var elem = document.getElementById(id);
    var em1 = document.getElementsByTagName("input");
        
    if(em1[em1.length-3].value == em1[em1.length-2].value)
    elem.innerHTML = "<h1 class='text-white text-center'>Email enviado com sucesso!</h1>";
    else
    elem.innerHTML = "<h1 class='text-white text-center'>Os emails não conferem, atualize a página e tente novamente.</h1>";
}