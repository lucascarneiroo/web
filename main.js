let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll('.container .container-image .image');

searchBox.oninput = () => {
    images.forEach(hide => hide.style.display = 'none');
    let value = searchBox.value;

    images.forEach(filter => {
        let title = filter.getAttribute('data-title');

        if(value == title){
            filter.style.display = "block";
        }

        if(searchBox.value == ''){
            filter.style.display = "block"
        }
    })
}

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

const chk = document.getElementById('chk')

chk.addEventListener('change', () =>{
    document.body.classList.toggle('dark')
})