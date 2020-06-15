// REVERSE INTEGER

const reverseInt = (int) => {
    const reversed = int.toString().split('').reverse().join(''); //turns into a string and reverses it
    return Math.sign(int) * parseInt(reversed); // turns string back to a number and changes it to negative if it was to begin with 
}

console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-51));
console.log(reverseInt(-9));


// MAX CHARACTER

const maxChar = (str) => {
    let charCounter = {};
    let max = 0;
    let maxChar = '';

    for (char of str) {
        if (charCounter[char]) {
            charCounter[char]++;
        } else {
            charCounter[char] = 1;
        }
    }
    for (char in charCounter) {
        if (charCounter[char] > max) {
            max = charCounter[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(maxChar("abcccccccd"));
console.log(maxChar("apple 1231111"));
console.log(maxChar("Arthur"));