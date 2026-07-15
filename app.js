const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    let translateX = 0;

    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 350);

        clickCounter++;

        if (itemNumber - (ratio + clickCounter) >= 0) {
            translateX -= 350;
            movieLists[i].style.transform = `translateX(${translateX}px)`;
        } else {
            translateX = 0;
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});


const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll(
    '.container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle'
);
ball.addEventListener('click', () => {
    items.forEach((item) => item.classList.toggle('active'));
    ball.classList.toggle('active');
});


