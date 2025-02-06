document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "Kissing, I hope they caught us 💋",
        "Whether they like or not ❤️",
        "I wanna show you off 💑",
        "I wanna show you off ✨",
        "I wanna brag about it 😘",
        "I wanna tie the knot 💍",
        "I wanna show you off 💖"
    ];

    const delay = 80; // Typing speed
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            lyricsElement.innerHTML = ""; // Clear before new line

            for (const char of line) {
                lyricsElement.textContent += char;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }

            await new Promise((resolve) => setTimeout(resolve, delay * 30)); // Pause before clearing
        }

        setTimeout(displayLyrics, 2000); // Restart animation after 2 sec
    }

    displayLyrics();

    // Ensure music plays when the user interacts with the page
    const bgMusic = document.getElementById("bg-music");
    document.body.addEventListener("click", () => {
        bgMusic.play();
    });
});
