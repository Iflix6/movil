const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const navCollection = document.querySelector('.nav-collection');
const themeToggle = document.querySelector('.theme');
const body = document.body;

openMenu.addEventListener('click', () => {
    navCollection.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    navCollection.classList.remove('active');
});

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    // Update the display of sun and moon icons based on the current theme
    const isDarkTheme = body.classList.contains('dark-theme');
    document.querySelector('.sun').style.display = isDarkTheme ? 'block' : 'none';
    document.querySelector('.moon').style.display = isDarkTheme ? 'none' : 'block';
});

// Initial theme setup based on user preference or system setting
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDarkScheme) {
    body.classList.add('dark-theme');
    document.querySelector('.sun').style.display = 'block';
    document.querySelector('.moon').style.display = 'none';
} else {
    document.querySelector('.sun').style.display = 'none';
    document.querySelector('.moon').style.display = 'block';
}