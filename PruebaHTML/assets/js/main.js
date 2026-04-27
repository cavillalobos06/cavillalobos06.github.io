const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

// Write your Js code here

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});