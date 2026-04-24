window.addEventListener('load', function(){
    alert('¡Bienvenido a mi portafolio! 👋');
});

const cambioBtn = document.getElementById('cambio');
const aboutMe = document.getElementById('aboutMe');
const textToChange = document.getElementById('newText');

cambioBtn.addEventListener('click', function(){
    if(textToChange.style.display === 'none'){
        aboutMe.style.display = 'none';
        textToChange.style.display = 'block';
    } else {
        aboutMe.style.display = 'block';
        textToChange.style.display = 'none';
    }
});

const verMasBtn = document.getElementById('verMas');
const moreText = document.getElementById('more');

verMasBtn.addEventListener('click', function(){
    if(moreText.style.display === 'none'){
        moreText.style.display = 'block';
        verMasBtn.textContent = 'Show less';
    } else {
        moreText.style.display = 'none';
        verMasBtn.textContent = 'Show more';
    }
});