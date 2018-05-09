function throttle(action) {
    var isRunning = false;
    return function () {
        if (isRunning)
            return;
        isRunning = true;
        window.requestAnimationFrame(function () {
            action();
            isRunning = false;
        });
    };
}
window.addEventListener('scroll', throttle(function () {
    var scrollTop = window.scrollY;
    var windowHeight = window.innerHeight;
    var navHeight = 138;
    var position = windowHeight - scrollTop;
    var nav = document.getElementById("topnav");
    var isVisible = nav.classList.contains('sticky');
    if (position <= navHeight) {
        if (!isVisible) {
            nav.classList.add('sticky');
        }
        return;
    }
    if (isVisible) {
        nav.classList.remove('sticky');
    }
}));
