$(window).ready(() => {
    const isAccepted = window.localStorage.getItem("cookies");
    if (!isAccepted) {
        $(".cookie").fadeIn();
    }
})

function hideCookiesBar(){
    window.localStorage.setItem("cookies", "true");
    $(".cookie").fadeOut();
}