// Este es el vídeo de referencia que usé para el banner: https://www.youtube.com/watch?v=TLF6r1R6EDw

let bannerStatus = 1;
let bannerTimer = 5000;

window.onload = function () {
    bannerLoop();
}

let starBannerLoop = setInterval(function() {
    bannerLoop();
}, bannerTimer);

document.getElementById("main-banner").onmouseenter = function () {
    clearInterval(starBannerLoop);
}

document.getElementById("main-banner").onmouseleave = function () {
    starBannerLoop = setInterval(function() {
        bannerLoop();
    }, bannerTimer);
}

function bannerLoop() {
    switch (bannerStatus) {
        case 1:
            document.getElementById("imgban2").style.opacity = "0";
            setTimeout(function() {
                document.getElementById("imgban1").style.right = "0px";
                document.getElementById("imgban1").style.zIndex = "1000";
                document.getElementById("imgban2").style.right = document.getElementById("main-banner").getAttribute("width") * -1;
                document.getElementById("imgban2").style.zIndex = "1500";
                document.getElementById("imgban3").style.right = document.getElementById("main-banner").getAttribute("width");
                document.getElementById("imgban3").style.zIndex = "500";
            }, 500);
            setTimeout (function() {
                document.getElementById("imgban2").style.opacity = "1";
            }, 1000);
            bannerStatus = 2;
            break;
        
        case 2:
            document.getElementById("imgban3").style.opacity = "0";
            setTimeout(function() {
                document.getElementById("imgban2").style.right = "0px";
                document.getElementById("imgban2").style.zIndex = "1000";
                document.getElementById("imgban3").style.right = document.getElementById("main-banner").getAttribute("width") * -1;
                document.getElementById("imgban3").style.zIndex = "1500";
                document.getElementById("imgban1").style.right = document.getElementById("main-banner").getAttribute("width");
                document.getElementById("imgban1").style.zIndex = "500";
            }, 500);
            setTimeout (function() {
                document.getElementById("imgban3").style.opacity = "1";
            }, 1000);
            bannerStatus = 3;
            break;

        case 3:
            document.getElementById("imgban1").style.opacity = "0";
            setTimeout(function() {
                document.getElementById("imgban3").style.right = "0px";
                document.getElementById("imgban3").style.zIndex = "1000";
                document.getElementById("imgban1").style.right = document.getElementById("main-banner").getAttribute("width") * -1;
                document.getElementById("imgban1").style.zIndex = "1500";
                document.getElementById("imgban2").style.right = document.getElementById("main-banner").getAttribute("width");
                document.getElementById("imgban2").style.zIndex = "500";
            }, 500);
            setTimeout (function() {
                document.getElementById("imgban1").style.opacity = "1";
            }, 1000);
            bannerStatus = 1;
            break;
    }
}