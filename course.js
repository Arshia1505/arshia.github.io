function playSound(letter) {
    let audio = new Audio(`sounds/${letter}.mp3`);
    audio.play();
}