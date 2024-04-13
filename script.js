window.addEventListener('scroll', function() {
    var navbar = document.getElementById('nav-bar-inferior');
    if (window.scrollY > navbar.offsetTop) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});