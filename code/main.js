document.addEventListener("DOMContentLoaded", function () {
    const buttonNext = document.getElementById("button-next");
    const buttonPrev = document.getElementById("button-previous");
    const carousel = document.getElementById("donation-carousel");

    let currentIndex = 0;
    const totalItems = carousel.children.length;

    buttonNext.addEventListener("click", function () {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Revenir au début si nous sommes à la fin
        }
        moveToIndex(currentIndex);
    });

    buttonPrev.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1; // Aller à la fin si nous sommes au début
        }
        moveToIndex(currentIndex);
    });

    function moveToIndex(index) {
        const itemWidth = carousel.children[index].offsetWidth;
        const newPosition = -index * itemWidth;
        carousel.style.transform = `translateX(${newPosition}px)`;
    }
});
