const menu = document.getElementById('menu');

menu.addEventListener('click', (event) => {
    menu.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});