function showMore(id) {
    const moreInfo = document.getElementById(id + '-more');
    const button = document.querySelector(`#${id} button`);

    
    const isVisible = moreInfo.style.display !== 'none';

    
    moreInfo.style.display = isVisible ? 'none' : 'block';

    
    button.textContent = isVisible ? 'Mostrar mais' : 'Mostrar menos';
}

window.addEventListener('DOMContentLoaded', () => {
    const profiles = document.querySelectorAll('.profile img');
    profiles.forEach(profile => {
        profile.addEventListener('mouseover', () => {
            profile.style.transform = 'scale(1.1)';
        });
        profile.addEventListener('mouseout', () => {
            profile.style.transform = 'scale(1)';
        });
    });

    const buttons = document.querySelectorAll('.profile button');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const id = button.getAttribute('data-id'); // Obter o ID do botão
            showMore(id);
        });
    });
});

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
});

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