const location_text = document.getElementById('location_text');

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 650) {
        location_text.style.transition = 'opacity 1s';
        location_text.style.opacity = '0';
    } 
    else if (scrollPosition < this.innerHeight - 600) {
        location_text.style.transition = 'opacity 1s';
        location_text.style.opacity = '0';
    }
    else {
        location_text.style.transition = 'opacity 1s';
        location_text.style.opacity = '1';
    }

});
