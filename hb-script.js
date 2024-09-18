// Function to play the song when the GIF is clicked
function playSong() {
    const song = document.getElementById("birthdaySong");
    song.play(); // Play the song
}

// Function to handle the OK button click
document.getElementById("okButton").addEventListener("click", function() {
    // Hide the notification
    const notification = document.getElementById("notification");
    notification.style.display = "none";
    
    // Start the bouncy animation
    const gif = document.getElementById("birthdayGif");
    gif.style.animation = "bounce-scale 2s infinite"; // Trigger the animation
});

// Function to speak the notification message
function speakNotification() {
    const notificationText = document.getElementById("notificationText").innerText;
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(notificationText);
        utterance.lang = 'en-US'; // You can change this to your preferred language
        speechSynthesis.speak(utterance);
    } else {
        console.error('Speech synthesis not supported in this browser.');
    }
}

// Speak the notification message when the page loads
window.onload = function() {
    speakNotification();
};
