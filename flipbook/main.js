// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const Book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");



// Event listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);


// Button logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
    Book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-270px)";
    nextBtn.style.transform = "translateX(270px)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        Book.style.transform = "translateX(0%)";
    } else {
        Book.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                closeBook();
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
}



var userInput = 2;
function getUserInput() {
    // Get the value entered by the user
    userInput = document.getElementById("userInput").value.replace(/\D/g, '');

    Calculation();
}




function Calculation() {
    //let stringBirth = user inputa 
    let stringBirth = userInput;
    console.log(stringBirth);

    //converts to chars
    let charsBirth = stringBirth.split('');
    console.log(charsBirth);

    //sums the chars
    let sumBirth = charsBirth.reduce((acc, curr) => acc + parseInt(curr), 0);
    console.log(sumBirth);

    //lichno chislo 
    let sumBirthString = sumBirth.toString();
    let stringChars = sumBirthString.split('');
    let personalNum = stringChars.reduce((acc, curr) => acc + parseInt(curr), 0);

    //denq meseca i godinata trqbva da opravq
    let yearBirth = charsBirth.slice(-4);
    let yearBirthString = yearBirth.join('');
    let monthBirth = charsBirth.slice(2, 4);
    let monthBirthString = monthBirth.join('');
    let dayBirth = charsBirth.slice(0, 2);
    let dayBirthString = dayBirth.join('');
    console.log("day: ", dayBirthString, "month: ", monthBirthString);

    let yearBirthInt = parseInt(yearBirthString);
    // correction
    let correction;
    if (yearBirthInt <= 1999) {
        correction = -2;
    } else {
        correction = 19;
    }


    let correctedSum = sumBirth + correction;
    console.log(correctedSum);

    //final number
    let stringCorrectedSum = correctedSum.toString();
    let charCorrectedSum = stringCorrectedSum.split('');
    let finalNum = charCorrectedSum.reduce((acc, cur) => acc + parseInt(cur), 0);


    let correctionNum = Math.abs(correction);
    let correctionChar = correctionNum.toString().split('');
    let personalNumChar = personalNum.toString().split('');
    let finalNumChar = finalNum.toString().split('');
    let correctedSumChar = correctedSum.toString().split('');

    //slagam vsichki cifri v 1 masiv
    let numberArray = charsBirth;
    numberArray.push(...stringChars);
    numberArray.push(...correctionChar);
    numberArray.push(...personalNumChar);
    numberArray.push(...finalNumChar);
    numberArray.push(...correctedSumChar);
    console.log("vsichki cifri - ", numberArray);





    function countNumbersAndGenerateStrings() {
        const counts = {};
        const resultStrings = [];

        // Iterate over the numberArray
        numberArray.forEach(number => {
            // If the number is not in the counts object, initialize it to 1
            if (!counts[number]) {
                counts[number] = 1;
            } else {
                // If the number is already in the counts object, increment its count
                counts[number]++;
            }
        });

        // Generate result strings for each number
        for (let i = 1; i <= 9; i++) {
            const count = counts[i] || 0;
            const resultString = (i + ' ').repeat(count).trim(); // Generate string for the current number
            resultStrings.push(resultString);
        }

        return resultStrings;
    }

    // Example usage
    const resultStrings = countNumbersAndGenerateStrings();
    resultStrings.forEach((string, index) => {
        console.log(`String for number ${index + 1}: ${string}`);
    });


    const stringForOnes = resultStrings[0]; // Accessing the string for number 1
    console.log(stringForOnes);




    //izpisvaniq
    document.getElementById("calculation1").innerHTML = dayBirthString + " + " + monthBirthString + " + " + yearBirthString + " = " + sumBirth + " = " + personalNum;
    document.getElementById("calculation2").innerHTML = correction >= 0 ? " + " + correction : " - " + Math.abs(correction);
    document.getElementById("calculation4").innerHTML = stringCorrectedSum + " = " + finalNum;
    document.getElementById("tile1").innerHTML = resultStrings[0];
    document.getElementById("tile4").innerHTML = resultStrings[1];
    document.getElementById("tile7").innerHTML = resultStrings[2];
    document.getElementById("tile2").innerHTML = resultStrings[3];
    document.getElementById("tile5").innerHTML = resultStrings[4];
    document.getElementById("tile8").innerHTML = resultStrings[5];
    document.getElementById("tile3").innerHTML = resultStrings[6];
    document.getElementById("tile6").innerHTML = resultStrings[7];
    document.getElementById("tile9").innerHTML = resultStrings[8];
}



//to be able to press the submit button with enter
var submitButton = document.getElementById("submit-button");
document.getElementById("userInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        submitButton.click();
    }
});


// Function to initialize the animation
function initializeAnimation(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const text = element.textContent;
        element.textContent = '';
        const words = text.split(/\s+/);
        for (let i = 0; i < words.length; i++) {
            const wordSpan = document.createElement('span');
            wordSpan.style.setProperty('--index', i);
            element.appendChild(wordSpan);
            for (let j = 0; j < words[i].length; j++) {
                const letterSpan = document.createElement('span');
                letterSpan.textContent = words[i][j];
                wordSpan.appendChild(letterSpan);
            }
            if (i < words.length - 1) {
                element.appendChild(document.createTextNode(' '));
            }
        }
    }
}

function startAnimation(elementId) {
    const spans = document.querySelectorAll('#' + elementId + ' span');
    spans.forEach((span, index) => {
        span.classList.add('fadeInLetter');
        span.style.animationDelay = `${index * 0.1}s`;
    });
}

let animationPlayed = false;

document.getElementById('next-btn').addEventListener('click', function () {
    if (!animationPlayed) {
        initializeAnimation('text-one');
        startAnimation('text-one');
        animationPlayed = true;
    }
});

document.getElementById('submit-button').addEventListener('click', function () {
    document.getElementById('calculation1').style.display = 'block';
    initializeAnimation('calculation1');
    startAnimation('calculation1');
});

document.getElementById('calculation1').addEventListener('animationstart', function () {
    setTimeout(function () {
        document.getElementById('calculation2').style.display = 'block';
        initializeAnimation('calculation2');
        startAnimation('calculation2');
    }, 79);
});

document.getElementById('calculation2').addEventListener('animationstart', function () {
    setTimeout(function () {
        document.getElementById('calculation3').style.display = 'block';
        initializeAnimation('calculation3');
        startAnimation('calculation3');
    }, 79);
});

document.getElementById('calculation3').addEventListener('animationstart', function () {
    setTimeout(function () {
        document.getElementById('calculation4').style.display = 'block';
        initializeAnimation('calculation4');
        startAnimation('calculation4');
    }, 79);
});

const tiles = document.querySelectorAll('.tile');

document.getElementById('calculation4').addEventListener('animationstart', function () {
    setTimeout(function () {
        tiles.forEach(tile => {
            tile.style.borderColor = 'black';
        });
    }, 79);
});


function fadeIn(element) {
    var opacity = 0;
    var timer = setInterval(function () {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        opacity += 0.1;
    }, 100); // adjust the duration as needed
}

document.getElementById('calculation4').addEventListener('animationstart', function () {
    setTimeout(function () {
        var resultElement = document.getElementById('tile1');
        if (resultElement) {
            resultElement.style.display = 'block';
            fadeIn(resultElement);
        } 
    }, 79);
});

document.getElementById('calculation4').addEventListener('animationstart', function () {
    setTimeout(function () {
        var resultElement = document.getElementById('tile2');
        if (resultElement) {
            resultElement.style.display = 'block';
            fadeIn(resultElement);
        } 
    }, 79);
});

document.getElementById('calculation4').addEventListener('animationstart', function () {
    setTimeout(function () {
        var resultElement = document.getElementById('tile3');
        if (resultElement) {
            resultElement.style.display = 'block';
            fadeIn(resultElement);
        } 
    }, 79);
});

document.getElementById('calculation4').addEventListener('animationstart', function () {
    setTimeout(function () {
        var resultElement = document.getElementById('tile4');
        if (resultElement) {
            resultElement.style.display = 'block';
            fadeIn(resultElement);
        } 
    }, 79);
});

document.getElementById('calculation4').addEventListener('animationstart', function () {
    setTimeout(function () {
        var resultElement = document.getElementById('tile5');
        if (resultElement) {
            resultElement.style.display = 'block';
            fadeIn(resultElement);
        } 
    }, 79);
});

document.getElementById('calculation4').addEventListener('animationstart', function () {
    setTimeout(function () {
        var resultElement = document.getElementById('tile6');
        if (resultElement) {
            resultElement.style.display = 'block';
            fadeIn(resultElement);
        } 
    }, 79);
});

document.getElementById('calculation4').addEventListener('animationstart', function () {
    setTimeout(function () {
        var resultElement = document.getElementById('tile7');
        if (resultElement) {
            resultElement.style.display = 'block';
            fadeIn(resultElement);
        } 
    }, 79);
});

document.getElementById('calculation4').addEventListener('animationstart', function () {
    setTimeout(function () {
        var resultElement = document.getElementById('tile8');
        if (resultElement) {
            resultElement.style.display = 'block';
            fadeIn(resultElement);
        } 
    }, 79);
});

document.getElementById('calculation4').addEventListener('animationstart', function () {
    setTimeout(function () {
        var resultElement = document.getElementById('tile9');
        if (resultElement) {
            resultElement.style.display = 'block';
            fadeIn(resultElement);
        } 
    }, 79);
});

