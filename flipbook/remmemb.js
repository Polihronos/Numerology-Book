// Get the text content
const text = document.getElementById('animatedText').textContent;

// Clear the text content of the h1 element
document.getElementById('animatedText').textContent = '';

// Split the text into words
const words = text.split(/\s+/);

// Iterate over each word
for (let i = 0; i < words.length; i++) {
    // Create a span element for each word
    const wordSpan = document.createElement('span');
    // Set the index custom property to control animation delay
    wordSpan.style.setProperty('--index', i);
    // Append the word span to the h1 element
    document.getElementById('animatedText').appendChild(wordSpan);

    // Iterate over each character of the word
    for (let j = 0; j < words[i].length; j++) {
        // Create a span element for each character
        const letterSpan = document.createElement('span');
        // Set the text content of the span to the current character
        letterSpan.textContent = words[i][j];
        // Append the letter span to the word span
        wordSpan.appendChild(letterSpan);
    }

    // Add a space after each word (except for the last word)
    if (i < words.length - 1) {
        document.getElementById('animatedText').appendChild(document.createTextNode(' '));
    }
}





// Function to start the animation
function startAnimation() {
    const spans = document.querySelectorAll('#animatedText span');
    spans.forEach((span, index) => {
        // Apply animation to each span with a delay
        span.classList.add('fadeInLetter');
        span.style.animationDelay = `${index * 0.1}s`;
    });
}

// Event listener for the button click
document.getElementById('next-btn').addEventListener('click', function() {
    // Clear any existing animation classes
    const spans = document.querySelectorAll('#animatedText span');
    spans.forEach(span => span.classList.remove('fadeInLetter'));
    
    // Start the animation
    setTimeout(startAnimation, 10);
});
