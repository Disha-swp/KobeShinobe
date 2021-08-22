document.onkeydown = function (e) {
    console.log("Key Code is ", e.keyCode);
    if (e.keyCode == 38 || e.keyCode == 39) {
        hero = document.querySelector('.hero')
        hero.classList.add('goForwardHero')
        setTimeout(() => {
            hero.classList.remove('goForwardHero')
        }, 700);

    }
}