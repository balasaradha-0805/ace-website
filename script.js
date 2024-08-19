const texts = [
    "Code - Build - Progress",
    "60+ members associated",
    "Code is the tool, creativity is the fuel; together, they build the future."
];
const typingText = document.getElementById('typing-text');
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < texts[textIndex].length) {
        typingText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust speed by changing the timeout value
    } else {
        setTimeout(erase, 1000); // Wait before erasing the text
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Adjust speed by changing the timeout value
    } else {
        textIndex = (textIndex + 1) % texts.length; // Move to the next text
        setTimeout(type, 500); // Wait before starting the next text
    }
}

type(); // Start the typing effect
