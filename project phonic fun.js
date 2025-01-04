// JavaScript function to play sound when a letter is clicked
function playSound(letter) {
    // Create a new audio element
    var audio = new Audio('audio/' + letter + '.mp3');
    // Play the sound
    audio.play();
}