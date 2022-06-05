/*
    CIT 281 Project 2
    Name: Sujala Chittor
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let result = "";

let lengthOfOutputString = getRandomInteger(5, 26);

for (let i = 0; i < lengthOfOutputString; i++) {
    result += alphabet[getRandomInteger(0,alphabet.length)];
}

console.log(result);


//Returns a single, random lowercase letter 
function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    let lengthOfOutputString = getRandomInteger(1, 1);
    for (let i = 0; i < lengthOfOutputString; i++) {
        result += alphabet[getRandomInteger(0,alphabet.length)];
    }
    console.log(result);
}

 //Returns a string of a random length between minLength and max Length
function getRandomString(minLength, maxLength) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    let lengthOfOutputString = getRandomInteger(minLength, maxLength);
    for (let i = 0; i < lengthOfOutputString; i++) {
        result += alphabet[getRandomInteger(0,alphabet.length)];
    }
     console.log(result);
}


//Sorts the string alphabetically.
function getSortedString(string) { 
console.log(((string.split("")).sort()).join(""));
}





