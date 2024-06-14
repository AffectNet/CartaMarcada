var audio = document.querySelector(".music-sound");
var volumeSlider = document.getElementById("volume-slider");

volumeSlider.addEventListener("input", function () {
    audio.volume = volumeSlider.value;
});

function muteUnmute() {
    console.log('Mutado')
    if (audio.muted) {
        audio.muted = false;
        document.querySelector("button").textContent = "Tirar Som";
        document.querySelector("button").classList.add("Mudo");
        document.querySelector("button").classList.remove("Desmudo");
    } else {
        audio.muted = true;
        document.querySelector("button").textContent = "Colocar Som";
        document.querySelector("button").classList.add("Desmudo");
        document.querySelector("button").classList.remove("Mudo");
    }
}

var btn_som = document.querySelector(".Som");
btn_som.addEventListener('click', muteUnmute);