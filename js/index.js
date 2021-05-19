const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link'); //All the nav links


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open'); //When clicked, the navigation will open
});

navLinks.forEach(link => {              //when a link is clicked
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open'); //Remove menu when clicking on that specfic area
    })
})