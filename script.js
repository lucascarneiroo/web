var iconMenu = document.querySelectorAll('.icon-menu');

iconMenu[0].addEventListener('click',()=>{
    let menu = document.getElementById('menu');
    if(menu.classList.contains('hide')){
        menu.classList.add('show');
        menu.classList.remove('hide');
    }else{
        menu.classList.add('hide');
        menu.classList.remove('show');
    }
});

var tamanho_padrao = 14

document.getElementById("botao-aumentar").addEventListener("click", function(){

    tamanho_padrao++;
    document.getElementById("tamanho_fonte").innerHTML = "" + tamanho_padrao;
    document.getElementById("texto").style.fontSize = tamanho_padrao + "px";

});

document.getElementById("botao-diminuir").addEventListener("click", function(){

    tamanho_padrao--;
    document.getElementById("tamanho_fonte").innerHTML = "" + tamanho_padrao;
    document.getElementById("texto").style.fontSize = tamanho_padrao + "px";

});

const chk = document.getElementById('chk')

chk.addEventListener('change', () =>{
    document.body.classList.toggle('dark')
})