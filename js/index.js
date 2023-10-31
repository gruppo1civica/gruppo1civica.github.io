window.addEventListener('load', function () {
    let element = document.getElementById("parallax")

    setInterval(() => {
        element.style.backgroundPositionY = (-window.scrollY/4) + "px"
    });
})