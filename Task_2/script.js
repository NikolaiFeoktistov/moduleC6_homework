document.getElementById("getScreenSize").addEventListener("click", function() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    alert("Ширина экрана: " + screenWidth + " пикселей\nВысота экрана: " + screenHeight + " пикселей");
});
