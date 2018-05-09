function throttle(action) {
    let isRunning = false;
    return function() {
        if (isRunning) return;
        isRunning = true;
        window.requestAnimationFrame(() => {
            action();
            isRunning = false;
        });
    }
}

window.addEventListener('scroll', throttle(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    var navHeight = 140;
    var position = windowHeight - scrollTop;
    var nav = document.getElementById("topnav");

    var isVisible = nav.classList.contains('sticky');

    if (position <= navHeight) {
        if(!isVisible) {
            nav.classList.add('sticky');
        }
        return;
    } 

    if (isVisible) {
        nav.classList.remove('sticky');
    }
}));